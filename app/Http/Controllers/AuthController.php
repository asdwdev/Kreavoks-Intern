<?php

namespace App\Http\Controllers;

use App\Models\User;
use Illuminate\Http\Request;
use Illuminate\Support\Facades\Auth;
use Inertia\Inertia;
use Illuminate\Http\RedirectResponse;

class AuthController extends Controller
{
    public function loginPage(Request $request)
    {
        return Inertia::render('auth/login');
    }

    public function registerPage(Request $request)
    {
        return Inertia::render('auth/register');
    }

    public function login(Request $request)
    {
        $request->validate([
            'email' => 'required|email|max:50',
            'password' => 'required|min:8|max:50',
        ]);

        if (Auth::attempt($request->only('email', 'password'), $request->remember)) {
            return redirect('/');
        }

        // Kirim error ke Inertia
        return back()->withErrors(['password' => 'Email atau password salah']);
    }

    public function register(Request $request)
    {
        $request->validate([
            'name' => 'required|string|max:50',
            'email' => 'required|email|max:50',
            'password' => 'required|min:8|max:50',
            'password_confirmation' => 'required|min:8|max:50|same:password',
        ]);

        $request['status'] = "verify";
        dd($request->all()); // TODO: Delete later

        // TODO: Uncomment code below after register logic complete
        // $user = User::create($request->all());
        // Auth::login($user);
        // return redirect('/');
    }

    public function logout(Request $request): RedirectResponse
    {
        Auth::logout();
        $request->session()->invalidate();
        $request->session()->regenerateToken();

        return redirect('/');
    }
}

<?php

use App\Http\Controllers\AuthController;
use Illuminate\Support\Facades\Route;
use Inertia\Inertia;

Route::get('/', function () {

    // ***
    // Untuk login ketika sudah diterapkan
    // ***
    // if (auth()->check()) {
    //     // User sudah login, cek rolenya
    //     if (auth()->user()->role === 'admin' || auth()->user()->role === 'mentor') {
    //         return Inertia::render('home'); // Arahkan ke dashboard khusus (ganti nanti)
    //     }
    // }

    $dummyEvents = json_decode(File::get(resource_path('js/data/dummyEvents.json')), true);
    $dummyCourses = json_decode(File::get(resource_path('js/data/dummyCourses.json')), true);
    $dummyServicePackages = json_decode(File::get(resource_path('js/data/dummyPackages.json')), true);
    $dummyTestimonials = json_decode(File::get(resource_path('js/data/dummyTestimonials.json')), true);
    return Inertia::render('home', [
        'events' => $dummyEvents,
        'courses' => $dummyCourses,
        'servicePackages' => $dummyServicePackages,
        'testimonials' => $dummyTestimonials,
    ]);
})->name('home');

Route::get('/login', [AuthController::class, 'loginPage'])->name('login');
Route::post('/login', [AuthController::class, 'login']);

Route::get('/register', [AuthController::class, 'registerPage'])->name('register');
Route::post('/register', [AuthController::class, 'register']);

Route::post('/logout', [AuthController::class, 'logout']);
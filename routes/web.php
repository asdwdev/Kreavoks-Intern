<?php

use App\Http\Controllers\AuthController;
use Illuminate\Support\Facades\Route;
use Inertia\Inertia;
use Illuminate\Support\Facades\File;

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
    $dummyMentors = json_decode(File::get(resource_path('js/data/dummyMentors.json')), true);
    return Inertia::render('home', [
        'events' => $dummyEvents,
        'courses' => $dummyCourses,
        'servicePackages' => $dummyServicePackages,
        'testimonials' => $dummyTestimonials,
        'mentors' => $dummyMentors,
    ]);
})->name('home');

Route::get('/program', function () {
    $dummyEvents = json_decode(File::get(resource_path('js/data/dummyEvents.json')), true);
    $dummyCourses = json_decode(File::get(resource_path('js/data/dummyCourses.json')), true);
    return Inertia::render('program', [
        'events' => $dummyEvents,
        'courses' => $dummyCourses,
    ]);
})->name('program');

Route::get('/portfolio', function () {
    $dummyPortfolios = json_decode(File::get(resource_path('js/data/dummyPortfolios.json')), true);
    return Inertia::render('portfolio', [
        'portfolios' => $dummyPortfolios,
    ]);
})->name('portfolio');


Route::get('/about', function () {
    return Inertia::render('about');
})->name('about');

Route::get('/login', [AuthController::class, 'loginPage'])->name('login');
Route::post('/login', [AuthController::class, 'login']);

Route::get('/register', [AuthController::class, 'registerPage'])->name('register');
Route::post('/register', [AuthController::class, 'register']);

Route::post('/logout', [AuthController::class, 'logout']);




// ---------------------------------------------
// Tutorial: Membuat Halaman Statis Detail Course/Event
// Tujuan: Menampilkan detail dari 1 course/event secara statis via route dan Inertia
// ---------------------------------------------

// 1. Pilih salah satu data dari dummyCourse atau dummyEvent
//    Misalnya:
//    Course: "Belajar Flutter untuk Pemula"
//    Slug: "belajar-flutter-untuk-pemula"

// 2. Buat route manual (halaman statis, tidak perlu dinamis dari DB) menggunakan nama kamu + slug
//    Misalnya:
//    Route: /adli/belajar-flutter-untuk-pemula
//
// 3. Kemudian bikin route get berdasarkan data yang kamu pilih. bisa dilihat pada contoh di bawah ini

Route::get('/adli/belajar-flutter-untuk-pemula', function () {
    $courses = json_decode(File::get(resource_path('js/data/dummyCourses.json')), true);
    $course = collect($courses)->firstWhere('slug', 'belajar-flutter-untuk-pemula'); // Ganti sama slug yang kamu pilih

    return Inertia::render('adli', ['course' => $course]);
});
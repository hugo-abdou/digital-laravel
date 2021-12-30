<?php

use Illuminate\Http\Request;
use Illuminate\Support\Facades\Route;
//////////////////////////////////// website routes ///////////////////////////////

Route::view('/', 'home');
Route::view('/about-us', 'about');
Route::view('/contact-us', 'contact');
Route::middleware('guest')->group(function () {

    Route::view('/login', 'auth.login');

    Route::get('/register', function (Request $request) {
        if (!$request->has('user_type')) return view('auth.sing-up');

        return view('auth.sing-up-form', [
            'request' => $request
        ]);
    });
});
Route::view('/payment', 'payment');
//////////////////////////////////// dashboard routes ///////////////////////////////

Route::get('/dashboard', function () {
    return view('dashboard');
});

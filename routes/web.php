<?php

use App\Http\Controllers\AuthController;
use App\Mail\ContactMail;
use Illuminate\Http\Request;
use Illuminate\Support\Facades\Mail;
use Illuminate\Support\Facades\Route;
//////////////////////////////////// website routes ///////////////////////////////

Route::view('/', 'home');

Route::view('/about-us', 'about');

Route::view('/contact-us', 'contact');

Route::post('/contact-us', function (Request $request) {
    $data = $request->validate([
        "name" => ['required', "string", "max:255"],
        "email" => ['required', "email"],
        "subject" => ['required', 'string', 'max:255'],
        'message' => ['required', 'string'],
    ]);
    Mail::to('email.test@gmail.com')->send(new ContactMail($data));
    return redirect('/');
});

Route::middleware('guest')->group(function () {

    Route::view('/login', 'auth.login')->name('login');

    Route::get('/register', function (Request $request) {
        if (!$request->has('user_type')) return view('auth.sing-up');

        return view('auth.sing-up-form', [
            'request' => $request
        ]);
    });

    Route::get('/forget-password', [AuthController::class, 'forgetPassword']);
    Route::post('/forget-password', [AuthController::class, 'post_forgetPassword']);
    Route::get('/password/reset/{token}', [AuthController::class, 'restPassword']);
    Route::post('/password/reset', [AuthController::class, 'submitResetPasswordForm']);
});

Route::view('/payment', 'payment');

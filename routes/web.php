<?php

use Illuminate\Http\Request;
use Illuminate\Support\Facades\Route;

/*
|--------------------------------------------------------------------------
| Web Routes
|--------------------------------------------------------------------------
|
| Here is where you can register web routes for your application. These
| routes are loaded by the RouteServiceProvider within a group which
| contains the "web" middleware group. Now create something great!
|
 */



Route::view('/', 'home');

Route::view('/about-us', 'about');

Route::view('/contact-us', 'contact');

Route::view('/login', 'login');

Route::get('/sign-up', function (Request $request) {
    if (!$request->has('user_type')) return view('sing-up');

    return view('sing-up-form', [
        'request' => $request
    ]);
});

Route::view('/payment', 'payment');

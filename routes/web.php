<?php

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

Route::view('/login', 'sing-up');

<?php

use App\Http\Controllers\UserController;
use Illuminate\Http\Request;
use Illuminate\Support\Facades\Route;

//////////////////////////////////// dashboard routes ///////////////////////////////

Route::middleware('auth')->group(function () {
    Route::get('/dashboard', function () {
        return inertia('Home', [
            'user' => auth()->user()
        ]);
    });

    Route::put('/users/{user}/update', [UserController::class, 'update']);
});

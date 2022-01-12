<?php

use App\Http\Controllers\DashboardController;
use App\Http\Controllers\UserController;
use Illuminate\Http\Request;
use Illuminate\Support\Facades\Route;

//////////////////////////////////// dashboard routes ///////////////////////////////

Route::middleware('auth')->group(function () {
    Route::get('/dashboard', [DashboardController::class, 'index']);

    Route::put('/users/{user}/update', [UserController::class, 'update']);
    Route::put('/overal_progress/{overal_progress}/update', [UserController::class, 'update_overal_progress']);
    Route::put('/personality_result/{user}/update', [UserController::class, 'update_personality_result']);
});

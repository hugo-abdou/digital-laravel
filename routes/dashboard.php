<?php

use App\Http\Controllers\DashboardController;
use App\Http\Controllers\DevelopmentProgressController;
use App\Http\Controllers\ProfileController;
use App\Http\Controllers\UserController;
use Illuminate\Http\Request;
use Illuminate\Support\Facades\Route;

//////////////////////////////////// dashboard routes ///////////////////////////////

Route::middleware('auth')->group(function () {
    // pages
    Route::get('/persona-dashboard', [DashboardController::class, 'personaDashboard']);
    Route::get('/personality-profile', [DashboardController::class, 'personalityProfile']);
    Route::get('/development-progress', [DashboardController::class, 'developmentProgress']);
    Route::get('/career-demographics', [DashboardController::class, 'careerDemographics']);

    // action
    Route::put('/users/{user}/update', [UserController::class, 'update']);
    Route::put('/overal_progress/{overal_progress}/update', [UserController::class, 'update_overal_progress']);
    Route::put('/personality_result/{user}/update', [UserController::class, 'update_personality_result']);
    Route::put('/change_personality/{user}', [UserController::class, 'change_personality']);
    Route::put('/discs/update', [UserController::class, 'update_discs']);
    Route::post('/goal/create', [UserController::class, 'create_goal']);
});

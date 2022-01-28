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
    Route::get('/wellness-profile', [DashboardController::class, 'wellnessProfile']);

    // action
    Route::put('/users/{user}/update', [UserController::class, 'update']);

    Route::put('/wellness/update', [UserController::class, 'update_wellness']);

    Route::put('/personality_result/{user}/update', [UserController::class, 'update_personality_result']);
    Route::put('/change_personality/{user}', [UserController::class, 'change_personality']);

    Route::put('/discs/update', [UserController::class, 'update_discs']);

    Route::post('/goal/create', [UserController::class, 'create_goal']);

    Route::post("/influencer/create", [UserController::class, 'create_influencer']);
    Route::put("/influencers/update", [UserController::class, 'update_influencer']);
    Route::delete("/influencer/{influencer}", [UserController::class, 'delete_influencer']);

    Route::put("/activities/update", [UserController::class, 'update_activities']);
    Route::post("activities/create", [UserController::class, 'create_activities']);
    Route::delete("activities/{activity}/delete", [UserController::class, 'delete_activities']);

    Route::put("/people/update", [UserController::class, 'update_people']);
    Route::post("people/create", [UserController::class, 'create_people']);
    Route::delete("people/{people}/delete", [UserController::class, 'delete_people']);

    Route::put("/profile/edit", [UserController::class, 'update_profile']);
});

<?php

namespace App\Http\Controllers;

use Facades\App\Services\DashboardService;

class DashboardController extends Controller
{
    public  function personaDashboard()
    {
        return inertia('PersonaDashboard', [
            "overal_progress" => DashboardService::get_overal_progress(),
            "personality_result" => fn () => DashboardService::get_personality_result(),
            "personality" => fn () =>  DashboardService::get_personality_definition(),
        ]);
    }
    public function developmentProgress()
    {
        return inertia('DevelopmentProgress', [
            'goals' => fn () => DashboardService::get_goals(),
            'goal' => fn () => DashboardService::get_goal()
        ]);
    }
    public function personalityProfile()
    {
        return inertia('PersonalityProfile', [
            "personality_result" => fn () => DashboardService::get_personality_result(),
            "personality" => fn () => DashboardService::get_personality(),
            "indicators" => fn () => DashboardService::get_indicators(),
            'discs' => fn () => DashboardService::get_discs()
        ]);
    }
    public function careerDemographics()
    {
        return inertia('CareerDemographics');
    }
}

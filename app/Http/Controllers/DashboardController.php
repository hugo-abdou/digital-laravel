<?php

namespace App\Http\Controllers;

use App\Http\Resources\PersonalityResource;
use App\Models\OveralProgress;
use App\Models\Personality;
use Illuminate\Http\Request;

class DashboardController extends Controller
{
    public  function index()
    {
        return inertia('Home', [
            "overal_progress" => function () {
                $overal_progress = OveralProgress::firstOrCreate(
                    ['user_id' =>  auth()->id()],
                    ['user_id' =>  auth()->id()]
                );
                return  $overal_progress;
            },
            "personality_result" => function () {
                if (!auth()->user()->indicators()->count()) {
                    auth()->user()->indicators()
                        ->attach([2, 3, 4, 6]);
                }

                $personality = auth()->user()->indicators->all();

                return PersonalityResource::collection($personality);
            },
        ]);
    }
}

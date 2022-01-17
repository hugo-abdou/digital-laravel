<?php

namespace App\Http\Controllers;

use App\Http\Resources\IndicatorResource;
use App\Models\Disc;
use App\Models\Goal;
use App\Models\Indicator;
use App\Models\OveralProgress;
use App\Models\Personality;
use Illuminate\Http\Request;

class DashboardController extends Controller
{
    public  function personaDashboard()
    {
        return inertia('PersonaDashboard', [
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

                $newPersonalityName = user()->indicators->implode('name', '');

                $newPersonalityId = Personality::where('name', $newPersonalityName)->first()->id;

                user()->update([
                    'personality_id' => $newPersonalityId
                ]);

                return IndicatorResource::collection($personality);
            },
            "personality_definition" => fn () => user()->personality ? user()->personality->only('name', 'definition') : null,
        ]);
    }
    public function developmentProgress()
    {
        return inertia('DevelopmentProgress', [
            'goals' => fn () => Goal::where('user_id', user()->id)->orderBy('updated_at', 'DESC')->get()
        ]);
    }
    public function personalityProfile()
    {
        return inertia('PersonalityProfile', [
            "personality_result" => function () {
                if (!auth()->user()->indicators()->count()) {
                    auth()->user()->indicators()
                        ->attach([2, 3, 4, 6]);
                }

                $personality = auth()->user()->indicators->all();

                return IndicatorResource::collection($personality);
            },
            "personality_definition" => fn () => user()->personality,
            "indicators" => function () {
                return Indicator::select('id', 'name', 'description')->get();
            },
            'discs' => function () {
                if (!user()->discs()->count()) {
                    Disc::createDefaultDiscs();
                }
                return user()->discs;
            }
        ]);
    }
    public function careerDemographics()
    {
        return inertia('CareerDemographics');
    }
}

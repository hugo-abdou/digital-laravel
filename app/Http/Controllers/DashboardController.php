<?php

namespace App\Http\Controllers;

use App\Http\Resources\IndicatorResource;
use App\Models\OveralProgress;
use App\Models\Personality;
use Illuminate\Http\Request;

class DashboardController extends Controller
{
    public  function __invoke()
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
}

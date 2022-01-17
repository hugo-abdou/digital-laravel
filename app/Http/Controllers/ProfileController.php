<?php

namespace App\Http\Controllers;

use App\Http\Resources\IndicatorResource;
use App\Models\Disc;
use App\Models\Indicator;
use App\Models\OveralProgress;
use Exception;
use Illuminate\Http\Request;

class ProfileController extends Controller
{
    public  function __invoke(Request $request)
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
}

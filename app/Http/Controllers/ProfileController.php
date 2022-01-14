<?php

namespace App\Http\Controllers;

use App\Http\Resources\IndicatorResource;
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
            "indicator" => function () use ($request) {
                try {
                    $indicator = null;
                    if ($request->has('indicator')) {
                        $indicator = Indicator::where('name', $request->indicator)->first();
                    } else {
                        $indicator = Indicator::where('name', 'i')->first();
                    }

                    return $indicator->only('name', 'description');
                } catch (\Throwable $th) {
                    throw new Exception("Indicator Not Found", 1);
                }
            }
        ]);
    }
}

<?php

namespace App\Http\Controllers;

use App\Models\Indicator;
use App\Models\IndicatorUser;
use App\Models\OveralProgress;
use App\Models\User;
use Illuminate\Http\Request;

class UserController extends Controller
{
    public function update(Request $request, User $user)
    {
        $data = $request->validate([
            "name" => 'required|string|min:5|max:255',
            "age" => 'required|integer|min:15|max:110',
            "gender" => "sometimes|string|max:255",
            "occupation" => "sometimes|string|max:255",
            "ethnicity" => "sometimes|string|max:255",
            "marital_status" => "sometimes|string|max:255",
            "income_level" => "sometimes|string|max:255",
            "education_level" => "sometimes|string|max:255",
        ]);
        $user->update($data);
        return back(303);
    }

    public function update_overal_progress(Request $request, OveralProgress $overal_progress)
    {
        $data = $request->validate([
            "goals" => "required|numeric|between:0,100",
            "wellness" => "required|numeric|between:0,100",
        ]);
        $overal_progress->update($data);
        return back(303);
    }


    public function update_personality_result(User $user, Request $request)
    {
        $data = $request->validate([
            "i" => "sometimes|numeric|between:0,100",
            "n" => "sometimes|numeric|between:0,100",
            "f" => "sometimes|numeric|between:0,100",
            "s" => "sometimes|numeric|between:0,100",
            "t" => "sometimes|numeric|between:0,100",
            "p" => "sometimes|numeric|between:0,100",
            "e" => "sometimes|numeric|between:0,100",
            "j" => "sometimes|numeric|between:0,100",
        ]);
        user()->indicators->each(function ($indicator) use ($data) {
            if (isset($data[$indicator->name])) {
                user()->indicators()->syncWithoutDetaching([
                    $indicator->id => [
                        'pourcentage' => $data[$indicator->name]
                    ]
                ]);
            }
        });

        return back(303);
    }

    public function change_personality(User $user, Request $request)
    {
        $data = $request->validate([
            "curent" => "required|string",
            "new" => "required|string",
        ]);

        $curentId = Indicator::where('name',  $data['curent'])->first()->id;
        $newId = Indicator::where('name',  $data['new'])->first()->id;

        $indicator_user = user()->indicator_user()->where('indicator_id', $curentId)->first();

        $indicator_user->update(['indicator_id' => $newId]);

        return back(303);
    }
}

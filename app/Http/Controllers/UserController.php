<?php

namespace App\Http\Controllers;

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
            "i" => "required|numeric|between:0,100",
            "n" => "required|numeric|between:0,100",
            "f" => "required|numeric|between:0,100",
            "s" => "required|numeric|between:0,100",
            "t" => "required|numeric|between:0,100",
            "p" => "required|numeric|between:0,100",
            "e" => "required|numeric|between:0,100",
            "j" => "required|numeric|between:0,100",
        ]);
        $user->personality->update($data);
        return back(303);
    }
}

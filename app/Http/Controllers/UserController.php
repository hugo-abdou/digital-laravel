<?php

namespace App\Http\Controllers;

use App\Models\OveralProgress;
use App\Models\User;
use Facades\App\Services\UserService;
use Illuminate\Http\Request;

class UserController extends Controller
{
    public function update(Request $request, User $user)
    {
        $data = $request->validate([
            "name" => 'sometimes|string|min:5|max:255',
            "age" => 'sometimes|integer|min:15|max:110',
            "gender" => "sometimes|string|max:255",
            "occupation" => "sometimes|string|max:255",
            "ethnicity" => "sometimes|string|max:255",
            "marital_status" => "sometimes|string|max:255",
            "income_level" => "sometimes|string|max:255",
            "education_level" => "sometimes|string|max:255",
            "background" => "sometimes|string",
        ]);
        $user->update($data);
        return back(303);
    }

    public function update_overal_progress(Request $request, OveralProgress $overal_progress)
    {
        $data = $request->validate([
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
        UserService::update_personality_result($data);

        return back(303);
    }

    public function change_personality(Request $request)
    {
        $data = $request->validate([
            "curent" => "required|string",
            "new" => "required|string",
        ]);

        UserService::change_personality($data);

        return back(303);
    }

    public function update_discs(Request $request)
    {
        $data = $request->validate([
            'discs' => 'required|array'
        ]);
        UserService::update_discs($data);
        return back(303);
    }

    public function create_goal(Request $request)
    {
        $data =  $request->validate([
            'goal' => 'required|string'
        ]);

        UserService::create_goal($data);

        return back(303);
    }
    public function create_influencer(Request $request)
    {
        $data =  $request->validate([
            'name' => 'required|string'
        ]);

        UserService::create_influencer($data);

        return back(303);
    }

    public function update_influencer(Request $request)
    {
        $data = $request->validate([
            'influencers' => 'required|array'
        ]);
        UserService::update_influencer($data['influencers']);
        return back(303);
    }
}

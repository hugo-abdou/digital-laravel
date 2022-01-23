<?php

namespace App\Services;

use App\Http\Resources\IndicatorResource;
use App\Models\Indicator;
use App\Models\OveralProgress;
use App\Models\Personality;
use App\Models\Wellness;
use Illuminate\Support\Facades\Facade;

class DashboardService extends Facade
{
    public function get_personality_result()
    {
        if (!auth()->user()->indicators()->count()) {
            auth()->user()->indicators()
                ->attach([2, 3, 4, 6]);
        }

        $personality = auth()->user()->indicators->all();

        $newPersonalityName = user()->indicators->implode('name', '');

        $newPersonality = Personality::where('name', $newPersonalityName)->first();

        user()->update([
            'personality_id' => $newPersonality->id
        ]);

        return IndicatorResource::collection($personality)->additional(['breakdown' => $newPersonality->breakdown]);
    }

    public function get_personality_definition()
    {
        // get only user definition from personality table
        return user()->personality ? user()->personality->only('name', 'definition') : null;
    }
    public function get_personality()
    {
        // get all user personality 
        return user()->personality;
    }

    public function get_indicators()
    {
        return Indicator::select('id', 'name', 'description')->get();
    }

    public function get_discs()
    {
        if (!user()->discs()->count()) {
            collect(['d', "i", 's', 'c'])->each(fn ($discName) => user()->discs()->create([
                'name' => $discName
            ]));
        }
        return user()->discs;
    }
    public function get_personalities()
    {
        user()->personality->only('name', 'definition');
    }

    public function get_goals()
    {
        return user()->goals;
    }
    public function get_goal()
    {
        return $this->get_goals()->pluck('pourcentage')->avg();
    }

    public function get_overal_progress()
    {
        if (!user()->wellness()->count()) {
            user()->wellness()->create([]);
        }

        return  [
            'id' => user()->wellness->id,
            'wellness' => user()->wellness->wellness,
            'goals' => $this->get_goal()
        ];
    }
    public function get_wellness()
    {
        return  user()->wellness;
    }
    public function get_influencers($active = null)
    {
        return  user()->influencers;
    }
    public function get_activities()
    {
        if (user()->activities()->count()) {
            return user()->activities;
        } else {
            user()->activities()->create([]);
            return user()->activities;
        }
    }
    public function get_people()
    {
        if (user()->people()->count()) {
            return  user()->people;
        } else {
            user()->people()->create([]);
            return  user()->people;
        }
    }
}

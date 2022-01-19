<?php

namespace App\Services;

use App\Models\Disc;
use App\Models\Goal;
use App\Models\Indicator;
use App\Models\Influencer;
use App\Models\Personality;
use Illuminate\Support\Facades\Facade;

class UserService extends Facade
{
    public function change_personality($data)
    {
        $curentId = Indicator::where('name',  $data['curent'])->first()->id;
        $newId = Indicator::where('name',  $data['new'])->first()->id;

        $indicator_user = user()->indicator_user()->where('indicator_id', $curentId)->first();

        $indicator_user->update(['indicator_id' => $newId]);

        $newPersonalityName = user()->indicators->implode('name', '');

        $newPersonalityId = Personality::where('name', $newPersonalityName)->first()->id;

        user()->update([
            'personality_id' => $newPersonalityId
        ]);
    }

    public function update_discs($data)
    {
        collect($data['discs'])->each(function ($disc) {
            $model = Disc::where('id', $disc['id'])->first();

            $model->update([
                'pourcentage' => $disc['pourcentage'],
                'd' => $disc['d'],
                'di' => $disc['di'],
                'dc' => $disc['dc'],
            ]);
        });
    }

    public function create_goal($data)
    {
        if ($latstRecord = Goal::where('user_id', user()->id)->orderBy('updated_at', 'DESC')->first()) {
            $isGreaterThanLastRecord = $data['goal'] >= $latstRecord->pourcentage;
        } else {
            $isGreaterThanLastRecord = true;
        }
        user()->goals()->create([
            'pourcentage' => $data['goal'],
            'up' =>  $isGreaterThanLastRecord
        ]);
    }
    public function create_influencer($data)
    {
        if (user()->influencers()->count() == 5) {
            return;
        }
        user()->influencers()->create($data);
    }
    public function update_influencer($influencers)
    {
        collect($influencers)->each(function ($influencer) {
            Influencer::where('id', $influencer['id'])->first()->update([
                'active' => $influencer['active'],
                "name" => $influencer['name'],
            ]);
        });
    }

    public function update_personality_result($data)
    {
        user()->indicators->each(function ($indicator) use ($data) {
            if (isset($data[$indicator->name])) {
                user()->indicators()->syncWithoutDetaching([
                    $indicator->id => [
                        'pourcentage' => $data[$indicator->name]
                    ]
                ]);
            }
        });
    }
}
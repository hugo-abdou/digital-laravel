<?php

namespace Database\Seeders;

use App\Models\Indicator;
use App\Models\Personality;
use Illuminate\Database\Seeder;

class DatabaseSeeder extends Seeder
{
    /**
     * Seed the application's database.
     *
     * @return void
     */
    public function run()
    {
        \App\Models\User::factory(1)->create();



        collect([
            [
                'name' => 'i',
                "description" => 'Often like working alone or in small groups, prefer a more deliberate pace, and like to focus at at task at a time',
            ],
            [
                'name' => 'e',
                "description" => 'Extraverts are interested in engaging with their environment, and they feed off the responses of the people and events around them. ',
            ],
            [
                'name' => 's',
                "description" => 'Tend to process things in a step-by-step linear sequence and observe and remember specific information',
            ],
            [
                'name' => 't',
                "description" => 'Tend to make decisions using logical analysis, objectively weigh pros and cons, and value honesty, consistency, and fairness',
            ],
            [
                'name' => 'f',
                "description" => 'Tend to be sensitive and cooperative, and decide based on their own personal values and will be affected by their actions.',
            ],
            [
                'name' => 'j',
                "description" => 'Tend to be organized and prepared, like to make and stick to plans, and are comfortable following most rules.',
            ],
            [
                'name' => 'n',
                "description" => 'Prefer to focus on posibilities and the big pictures, easily see patterns, value innovation, and seeks creative solutions to problems',
            ],
            [
                'name' => 'p',
                "description" => 'Tend to make decisions using logical analysis, objectively weigh pros and cons, and value honesty, consistency, and fairness'
            ],
        ])->each(fn ($model) => Indicator::create([
            'name' => $model['name'],
            "description" => $model['description']
        ]));

        Personality::create([
            'name' => 'ESTJ',
            "definition" => 'Lorem ipsum, dolor sit amet consectetur adipisicing elit. Rerum aliquam aperiam non impedit pariatur necessitatibus fuga repudiandae ea? Enim ea expedita optio molestiae inventore repellat obcaecati quia culpa! Autem, sit!',
            "weaknesses" => 'Lorem ipsum, dolor sit amet consectetur adipisicing elit. Rerum aliquam aperiam non impedit pariatur necessitatibus fuga repudiandae ea? Enim ea expedita optio molestiae inventore repellat obcaecati quia culpa! Autem, sit!',
            "strength" => 'Lorem ipsum, dolor sit amet consectetur adipisicing elit. Rerum aliquam aperiam non impedit pariatur necessitatibus fuga repudiandae ea? Enim ea expedita optio molestiae inventore repellat obcaecati quia culpa! Autem, sit!',
            "interpersonal_attributes" => 'Lorem ipsum, dolor sit amet consectetur adipisicing elit. Rerum aliquam aperiam non impedit pariatur necessitatibus fuga repudiandae ea? Enim ea expedita optio molestiae inventore repellat obcaecati quia culpa! Autem, sit!',
            "workplace_attributes" => 'Lorem ipsum, dolor sit amet consectetur adipisicing elit. Rerum aliquam aperiam non impedit pariatur necessitatibus fuga repudiandae ea? Enim ea expedita optio molestiae inventore repellat obcaecati quia culpa! Autem, sit!'
        ]);
    }
}

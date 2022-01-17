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
        // create the first user to get access to dashboard
        \App\Models\User::factory(1)->create();

        // get the domy data from data.php file
        $data = require('database/seeders/data.php');

        collect($data['indicators'])->each(fn ($item) => Indicator::create($item));

        collect($data['personalities'])->each(fn ($item) => Personality::create($item));
    }
}

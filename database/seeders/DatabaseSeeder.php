<?php

namespace Database\Seeders;

use App\Models\Indicator;
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

        collect(['i', 'e', 's', 't', 'f', 'j', 'n', 'p'])->each(fn ($model) => Indicator::create([
            'name' => $model,
            "description" => 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nunc, et sagittis, sit viverra elementum. Cursus gravida id gravida in risus quis. Sem et risus sed magnis nec.'
        ]));
    }
}

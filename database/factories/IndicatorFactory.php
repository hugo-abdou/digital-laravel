<?php

namespace Database\Factories;

use Illuminate\Database\Eloquent\Factories\Factory;

class IndicatorFactory extends Factory
{
    /**
     * Define the model's default state.
     *
     * @return array
     */
    public function definition()
    {
        return [
            'name' => $this->faker->text(1),
            'description' => $this->faker->text(),
        ];
    }
}

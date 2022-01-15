<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;

class Disc extends Model
{
    use HasFactory;

    /**
     * The attributes that are mass assignable.
     *
     * @var array<int, string>
     */
    protected $guarded = [];

    public function createDefaultDiscs()
    {
        collect(['d', "i", 's', 'c'])->each(fn ($discName) => user()->discs()->create([
            'name' => $discName
        ]));
    }
}

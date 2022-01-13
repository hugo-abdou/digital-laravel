<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Relations\Pivot;

class IndicatorUser extends Pivot
{
    /**
     * The attributes that are mass assignable.
     *
     * @var array<int, string>
     */
    protected $guarded = [];
    /**
     * Indicates if the model should be timestamped.
     *
     * @var bool
     */
    public $timestamps = false;
}

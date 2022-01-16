<?php

namespace App\Http\Controllers;

use App\Models\Goal;
use Illuminate\Http\Request;

class DevelopmentProgressController extends Controller
{
    public  function __invoke(Request $request)
    {
        return inertia('DevelopmentProgress', [
            'goals' => fn () => Goal::where('user_id', user()->id)->orderBy('updated_at', 'DESC')->get()
        ]);
    }
}

<?php

namespace App\Http\Controllers;

use Illuminate\Http\Request;

class DevelopmentProgressController extends Controller
{
    public  function __invoke(Request $request)
    {
        return inertia('DevelopmentProgress');
    }
}

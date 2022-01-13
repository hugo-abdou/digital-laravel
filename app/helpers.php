<?php

use App\Models\User;

if (!function_exists('user')) {
    function user($id = null)
    {
        if (!$id) return auth()->user();
        return User::where('id', $id)->first();
    }
}

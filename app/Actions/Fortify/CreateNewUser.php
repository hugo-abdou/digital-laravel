<?php

namespace App\Actions\Fortify;

use App\Models\User;
use Illuminate\Support\Facades\Hash;
use Illuminate\Support\Facades\Validator;
use Illuminate\Validation\Rule;
use Laravel\Fortify\Contracts\CreatesNewUsers;

class CreateNewUser implements CreatesNewUsers
{
    use PasswordValidationRules;

    /**
     * Validate and create a newly registered user.
     *
     * @param  array  $input
     * @return \App\Models\User
     */
    public function create(array $input)
    {

        $isIndivudualUser = $input['user_type'] == 'Indivudual User';
        $input['password_confirmation'] = $input['password'];

        Validator::make($input, [
            'name' => ['required', 'string', 'max:255'],
            'email' => [
                'required',
                'string',
                'email',
                'max:255',
                Rule::unique(User::class),
            ],
            'password' => $this->passwordRules(),
            'acount_type' => Rule::when($isIndivudualUser, ['required', 'string', 'max:255']),
            'group_name' => Rule::when(!$isIndivudualUser, ['required', 'string', 'max:255']),
            'country' => ['required', 'string', 'max:255'],
            'region' => ['required', 'string', 'max:255'],
            'zip_code' => ['required', 'string', 'max:255'],
            'city' => ['required', 'string', 'max:255'],
            'state' => ['required', 'string', 'max:255'],
            'age' => ['required', 'int'],
        ])->validate();

        return User::create([
            'name' => $input['name'],
            'email' => $input['email'],
            'password' => Hash::make($input['password']),
            'acount_type' => isset($input['acount_type']) ? $input['acount_type'] : null,
            'group_name' => isset($input['group_name']) ? $input['group_name'] : null,
            'country' => $input['country'],
            'region' => $input['region'],
            'zip_code' => $input['zip_code'],
            'city' => $input['city'],
            'state' => $input['state'],
            'age' => $input['age'],
        ]);
    }
}

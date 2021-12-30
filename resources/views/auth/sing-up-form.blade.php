<x-auth-layout title="Create An Account - {{request()->user_type}}">

    <x-slot name="actions">
        <div class="text-p-sm text-black-gray">
            Already sign up,
            <a href="/login" class="underline">login</a>
        </div>
    </x-slot>
    <form class="grid grid-cols-6 gap-x-10 gap-y-7" method="post" action="/register?user_type={{request()->user_type}}">
        @csrf

        <label for="full-name" class="block col-span-3">
            <span class="text-p-sm">Full Name</span>
            <input type="text" name="name" id="full-name"
                class="w-full border border-gray-300 @error('name') !border-red-500 @enderror text-black-gray p-3 mt-2">
        </label>
        <label for="Password" class="block col-span-3">
            <span class="text-p-sm">Password</span>
            <input type="password" name="password" id="Password"
                class="w-full border border-gray-300 @error('password') !border-red-500 @enderror text-black-gray p-3 mt-2">
        </label>
        <label for="E-mail" class="block col-span-3">
            <span class="text-p-sm">E-mail Adress</span>
            <input type="email" name="email" id="E-mail"
                class="w-full border border-gray-300 @error('email') !border-red-500 @enderror text-black-gray p-3 mt-2">
        </label>
        @if (request()->user_type == 'Indivudual User')
        <div class="col-span-3 relative">
            <span class="bg-gray-300 w-10 h-[49px] block absolute bottom-0 right-0"></span>
            <span class="bg-white w-[calc(100%-40px)] h-[49px] block absolute bottom-0 left-0"></span>
            <span class="text-p-sm mb-2 block">Select Account Type</span>
            <select
                class="relative px-2 py-3 w-full text-black-gray bg-transparent border-gray-300 @error('acount_type') !border-red-500 @enderror"
                name="acount_type" id="acount-type">
                <option value="Small Business Owners">Small Business Owners</option>
            </select>
        </div>
        @elseif (request()->user_type == 'Group Manager' || request()->user_type == 'Challenge Manager')
        <label for="group-name" class="block col-span-3">
            <span class="text-p-sm">Group name</span>
            <input type="text" name="group_name" id="group-name"
                class="w-full border border-gray-300 @error('group_name') !border-red-500 @enderror text-black-gray p-3 mt-2">
        </label>
        @endif
        <label for="country" class="block col-span-2">
            <span class="text-p-sm">country</span>
            <input type="text" name="country" id="country"
                class="w-full border border-gray-300 @error('country') !border-red-500 @enderror text-black-gray p-3 mt-2">
        </label>
        <label for="region" class="block col-span-2">
            <span class="text-p-sm">Region</span>
            <input type="text" name="region" id="region"
                class="w-full border border-gray-300 @error('region') !border-red-500 @enderror text-black-gray p-3 mt-2">
        </label>
        <label for="zip-code" class="block col-span-2">
            <span class="text-p-sm">Zip code</span>
            <input type="text" name="zip_code" id="zip-code"
                class="w-full border border-gray-300 @error('zip_code') !border-red-500 @enderror text-black-gray p-3 mt-2">
        </label>
        <label for="city" class="block col-span-2">
            <span class="text-p-sm">City</span>
            <input type="text" name="city" id="city"
                class="w-full border border-gray-300 @error('city') !border-red-500 @enderror text-black-gray p-3 mt-2">
        </label>
        <label for="state" class="block col-span-2">
            <span class="text-p-sm">State</span>
            <input type="text" name="state" id="state"
                class="w-full border border-gray-300 @error('state') !border-red-500 @enderror text-black-gray p-3 mt-2">
        </label>
        <label for="age" class="block col-span-2">
            <span class="text-p-sm">Age</span>
            <input type="text" name="age" id="age"
                class="w-full border border-gray-300 @error('age') !border-red-500 @enderror text-black-gray p-3 mt-2">
        </label>
        <div class="col-span-6">
            <button type="submit"
                class="font-semibold bg-d-yellow text-white text-p-xs md:text-p-sm rounded-full mt-8 px-16 py-3">sign
                up</button>
        </div>
    </form>
</x-auth-layout>
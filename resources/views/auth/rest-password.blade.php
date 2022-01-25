<x-auth-layout title="Forget Password">
    <x-slot name="actions">
        <div class="text-p-sm text-dark-gray">
            rest your password
        </div>
    </x-slot>
    @if (session('message'))
    <div class="alert alert-success">
        {{ session('message') }}
    </div>
    @else
    <form method="post" action="/password/reset" class="grid grid-cols-6 gap-x-10 gap-y-7">
        @csrf
        <input type="hidden" name="token" value="{{ $token }}">
        <label for="E-mail" class="block col-span-4">
            <span class="text-p-sm">E-mail Address</span>
            <input type="email" name="email" id="E-mail"
                class="w-full border border-gray-300 @error('email') !border-red-500 @enderror p-3 mt-2">
            @error('email') <span class="text-red-500">{{$message}}</span> @enderror
        </label>
        <label for="password" class="block col-span-4">
            <span class="text-p-sm">password</span>
            <input type="password" name="password" id="password"
                class="w-full border border-gray-300 @error('password') !border-red-500 @enderror p-3 mt-2">
            @error('password') <span class="text-red-500">{{$message}}</span> @enderror
        </label>
        <label for="password_confirmation" class="block col-span-4">
            <span class="text-p-sm">password_confirmation</span>
            <input type="password" name="password_confirmation" id="password_confirmation"
                class="w-full border border-gray-300 @error('password_confirmation') !border-red-500 @enderror p-3 mt-2">
            @error('password_confirmation') <span class="text-red-500">{{$message}}</span> @enderror
        </label>
        <div class="col-span-6">
            <button type="submit"
                class="font-semibold bg-d-yellow text-white text-p-xs md:text-p-sm rounded-full mt-8 px-16 py-3">rest
                password</button>
        </div>
    </form>
    @endif


</x-auth-layout>
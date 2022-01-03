<x-auth-layout title="Forget Password">
    <x-slot name="actions">
        <div class="text-p-sm text-black-gray">
            email verification,
        </div>
    </x-slot>
    <form method="post" action="/login" class="grid grid-cols-6 gap-x-10 gap-y-7">
        @csrf
        <label for="E-mail" class="block col-span-4">
            <span class="text-p-sm">E-mail Address</span>
            <input type="email" name="email" id="E-mail"
                class="w-full border border-gray-300 @error('email') !border-red-500 @enderror p-3 mt-2">
            @error('email') <span class="text-red-500">{{$message}}</span> @enderror
        </label>
        <div class="col-span-6">
            <button type="submit"
                class="font-semibold bg-d-yellow text-white text-p-xs md:text-p-sm rounded-full mt-8 px-16 py-3">submit</button>
        </div>
    </form>
</x-auth-layout>
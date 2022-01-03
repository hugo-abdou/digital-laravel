<x-auth-layout title="Your payment Information">
    <form class="grid grid-cols-6 gap-x-10 gap-y-7">
        <label for="E-mail" class="block col-span-4">
            <span class="text-p-sm">E-mail Address</span>
            <input type="email" name="email" id="E-mail" class="w-full border border-gray-300 p-3 mt-2">
        </label>
        <label for="Password" class="block col-span-4">
            <span class="text-p-sm">Password</span>
            <input type="password" name="password" id="Password" class="w-full border border-gray-300 p-3 mt-2">
        </label>
        <div class="col-span-6">
            <button type="submit"
                class="font-semibold bg-d-yellow text-white text-p-xs md:text-p-sm rounded-full mt-8 px-16 py-3">login</button>
        </div>
    </form>
</x-auth-layout>
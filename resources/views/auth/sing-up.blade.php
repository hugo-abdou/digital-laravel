<x-auth-layout title="Create An Account">
    <x-slot name="actions">
        <div class="text-p-sm text-black-gray">
            Already sign up,
            <a href="/login" class="underline">login</a>
        </div>
    </x-slot>
    <h2 class="font-bold text-p">Select a Profile to sign up with:</h2>
    <div class="grid grid-cols-3 justify-center gap-6 2xl:gap-10 my-20">
        <div class="bg-white relative shadow-lg border overflow-hidden text-center rounded-lg px-4 py-8 group">
            <img src="/assets/manage teams remotly.png" class="mx-auto" alt="manage teams remotly" />
            <h4 class="text-p-sm font-semibold mt-2 mx-4">
                Group Manager
            </h4>
            <p class="mt-2 text-p-xs text-black-gray">Lorem ipsum dolor sit amet, consectetur adipiscing elit. Et massa
                sit porttitor neque.</p>
            <a href="/register?user_type=Group Manager"
                class="font-semibold bg-black-gray text-white text-p-xs md:text-p-sm rounded-full mt-8 px-7 py-2 inline-block">sign
                up</a>

            <span class="absolute bottom-0 inset-x-0 bg-[#A65511] h-2 hidden group-hover:block"></span>
        </div>
        <div class="bg-white relative shadow-lg border overflow-hidden text-center rounded-lg px-4 py-8 group">
            <img src="/assets/control your career.png" class="mx-auto" alt="control your career" />
            <h4 class="text-p-sm font-semibold mx-4 mt-2">
                Indivudual User
            </h4>
            <p class="mt-2 text-p-xs text-black-gray">Lorem ipsum dolor sit amet, consectetur adipiscing elit. Et massa
                sit porttitor neque.</p>
            <a href="/register?user_type=Indivudual User"
                class="font-semibold bg-black-gray text-white text-p-xs md:text-p-sm rounded-full mt-8 px-7 py-2 inline-block">sign
                up</a>

            <span class="absolute bottom-0 inset-x-0 bg-[#A65511] h-2 hidden group-hover:block"></span>
        </div>
        <div class="bg-white relative shadow-lg border overflow-hidden text-center rounded-lg px-4 py-8 group">
            <img src="/assets/lead powerfull chalenges.png" class="mx-auto" alt="Lead Powerful Challenges" />
            <h4 class="text-p-sm font-semibold  mt-2">
                Challenge Manager
            </h4>
            <p class="mt-2 text-p-xs text-black-gray">Lorem ipsum dolor sit amet, consectetur adipiscing elit. Et massa
                sit porttitor neque.</p>
            <a href="/register?user_type=Challenge Manager"
                class="font-semibold bg-black-gray text-white text-p-xs md:text-p-sm rounded-full mt-8 px-7 py-2 inline-block">sign
                up</a>

            <span class="absolute bottom-0 inset-x-0 bg-[#A65511] h-2 hidden group-hover:block"></span>
        </div>
    </div>
</x-auth-layout>
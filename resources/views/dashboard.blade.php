<x-dashboard-layout>
    <div class="flex w-full justify-center items-center">
        <h1 class="text-7xl">
            Name: <span class="text-d-yellow">{{auth()->user()->name}}</span>
        </h1>
    </div>
</x-dashboard-layout>
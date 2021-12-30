<x-dashboard-layout>
    <div class="flex flex-col w-full justify-center items-center">
        <h1 class="text-7xl block">
            Name: <span class="text-d-yellow">{{auth()->user()->name}}</span>
        </h1>
        <form method="post" action="/logout" class="mt-10">
            @csrf
            <button class="text-blue-500" type="submit">logout</button>
        </form>
    </div>
</x-dashboard-layout>
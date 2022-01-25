<!DOCTYPE html>
<html lang="{{ str_replace('_', '-', app()->getLocale()) }}">

<x-head title="{{$title}}" />

<body class="font-nunito">
    <x-nav-bar />

    {{-- push the footer to the bottom --}}
    <div class="min-h-[calc(100vh-339px)]">
        {{ $slot }}
    </div>
    <x-footer />
</body>

</html>
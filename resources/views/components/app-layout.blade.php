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
    <script src="{{ mix('js/website.js')}}"></script>
    @if (config('app.env') == 'local')
    <!-- just for devlopment -->
    <script async="" src="http://localhost:3000/browser-sync/browser-sync-client.js?v=2.27.7"></script>
    @endif
</body>

</html>
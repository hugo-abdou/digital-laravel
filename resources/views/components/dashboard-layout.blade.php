<!DOCTYPE html>
<html lang="{{ str_replace('_', '-', app()->getLocale()) }}">

<x-head title="{{$title}}" />

<body class="font-nunito">
    <div class="flex min-h-screen">
        {{ $slot }}
    </div>
    <!-- just for devlopment -->
    <script async="" src="http://localhost:3000/browser-sync/browser-sync-client.js?v=2.27.7"></script>
</body>

</html>
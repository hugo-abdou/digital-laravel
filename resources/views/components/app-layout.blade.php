<!DOCTYPE html>
<html lang="{{ str_replace('_', '-', app()->getLocale()) }}">

<head>
    <meta charset="utf-8">
    <meta name="viewport" content="width=device-width, initial-scale=1">

    <title>Laravel</title>
    <link href="css/app.css" rel="stylesheet">
</head>

<body class="font-nunito">
    <x-nav-bar />

    {{-- push the footer to the bottom --}}
    <div class="min-h-[calc(100vh-339px)]">
        {{ $slot }}
    </div>
    <x-footer />
    <script src="js/app.js"></script>
    @if (config('app.env') == 'local')
    <!-- just for devlopment -->
    <script async="" src="http://localhost:3000/browser-sync/browser-sync-client.js?v=2.27.7"></script>
    @endif
</body>

</html>
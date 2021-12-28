<!DOCTYPE html>
<html lang="{{ str_replace('_', '-', app()->getLocale()) }}">

<head>
    <meta charset="utf-8">
    <meta name="viewport" content="width=device-width, initial-scale=1">

    <title>Laravel</title>
    <link href="{{ asset('css/app.css') }}" rel="stylesheet">
</head>

<body class="font-nunito">
    {{ $slot }}
    <x-footer />

    <!-- just for devlopment -->
    <script async="" src="http: //localhost:3000/browser-sync/browser-sync-client.js?v=2.27.7"></script>
    <script id="__bs_script__">
        //<![CDATA[
        document.write("<script async src='http://localhost:3000/browser-sync/browser-sync-client.js?v=2.27.7'><\/script>".replace("HOST", location.hostname)); //]]>
    </script>
</body>

</html>
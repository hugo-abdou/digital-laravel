<!DOCTYPE html>
<html lang="{{ str_replace('_', '-', app()->getLocale()) }}">

<x-head title="{{$title}}" />

<body class="font-nunito">
    <div class="flex min-h-screen">
        {{ $slot }}
    </div>
</body>

</html>
<!DOCTYPE html>
<html lang="{{ str_replace('_', '-', app()->getLocale()) }}">

<head>
    <meta charset="utf-8">
    <meta name="viewport" content="width=device-width, initial-scale=1">

    <title>Laravel</title>
    <link href="{{ asset('css/app.css') }}" rel="stylesheet">
</head>

<body class="font-nunito">
    <div class="flex min-h-screen">
        <div class="w-1/2 relative overflow-hidden">
            <img src="{{ asset('assets/sign up.png') }}" class="absolute w-full h-full" alt="sign up image">
            <div class="absolute inset-0 bg-d-yellow/40"></div>
        </div>
        <div class="w-1/2 pt-8 px-16 bg-gray-lv-1">
            <div class="w-12 md:w-full overflow-hidden">
                <a href="/" class="!w-48 block">
                    <span class="sr-only">Digital Self</span>
                    <img src="/assets/Digital Self.png" class="" alt="dijital self logo" />
                </a>
            </div>
            <div class="my-14">
                <h1 class="font-bold text-p text-black">Create An Account</h1>
                <div class="text-p-sm text-black-gray">
                    <a>Already sign up,</a>
                    <a>login</a>
                </div>
                <span class="bg-d-yellow h-0.5 w-full mt-2 block"></span>
            </div>
            <div>
                {{ $slot }}
            </div>
        </div>
    </div>



    <script src="{{ asset('js/app.js') }}"></script>
    <!-- just for devlopment -->
    <script async="" src="http://localhost:3000/browser-sync/browser-sync-client.js?v=2.27.7"></script>
</body>

</html>
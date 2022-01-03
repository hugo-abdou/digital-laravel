<!DOCTYPE html>
<html lang="{{ str_replace('_', '-', app()->getLocale()) }}">

<x-head title="dashbord" />

<body class="font-nunito">

    @inertia

    @if (config('app.env') == 'local')
    <!-- just for devlopment -->
    <script async="" src="http://localhost:3000/browser-sync/browser-sync-client.js?v=2.27.7"></script>
    @endif
</body>

</html>
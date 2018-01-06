<!doctype html>
<html lang="{{ app()->getLocale() }}">
    <head>
        <meta charset="utf-8">
        <meta http-equiv="X-UA-Compatible" content="IE=edge">
        <meta name="viewport" content="width=device-width, initial-scale=1">
        <title>Laravel</title>
        <!-- Fonts -->
        <script>
            window.Laravel = {!! json_encode([
            'csrfToken' => csrf_token(),
            'appName' => config('app.name', 'Laravel')
        ]) !!};
        </script>
        <link href='/css/fonts.css' rel="stylesheet">
    </head>
    <body>
        <app id="app">
            <app></app>
        </app>
    </body>
    <script src="{{ asset(mix('js/app.js')) }}"></script>

</html>

<!doctype html>
<html lang="{{ app()->getLocale() }}">
<head>
    <meta charset="utf-8">
    <meta http-equiv="X-UA-Compatible" content="IE=edge">
    <meta name="viewport" content="width=device-width, initial-scale=1">

    <title>Lista de tareas</title>
	<link rel="stylesheet" type="text/css" href="{{ asset('css/app.css') }}">

</head>
<body>
    <div class="container">
        @yield('content')
    </div>  
    <script src=" {{ asset('js/app.js') }}" ></script>
</body>
</html>

let mix = require('laravel-mix');
let tailwindcss = require('tailwindcss');

mix.less('thirty_day_challenge/resources/less/app.less', 'static/css')
    .options({
        postCss: [
            tailwindcss('./tailwind.js'),
        ]
    });

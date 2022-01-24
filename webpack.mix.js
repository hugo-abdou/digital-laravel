const mix = require("laravel-mix");

// react
mix.js(["resources/js/app.js", "resources/js/website.js"], "public/js")
    .react()
    .extract(["react", "axios", "react-dom", "@inertiajs/inertia-react"])
    .version()
    .sourceMaps();
// tailwindcss
mix.postCss("resources/css/app.css", "public/css", [require("tailwindcss")]);

// hot reload
// mix.browserSync({
//     proxy: "http://digital-laravel.test/",
//     open: false,
// });

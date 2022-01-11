const mix = require("laravel-mix");

mix.webpackConfig({
    output: {
        chunkFilename: "js/[name].js",
    },
});
// react
mix.js(["resources/js/app.js", "resources/js/website.js"], "public/js")
    .react()
    .sourceMaps()
    .extract(["react", "axios", "react-dom", "@inertiajs/inertia-react"])
    .version();
// tailwindcss
mix.postCss("resources/css/app.css", "public/css", [require("tailwindcss")]);

// hot reload
mix.browserSync({
    proxy: "http://digital-laravel.test/",
    open: false,
});

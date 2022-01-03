const mix = require("laravel-mix");

mix.js("resources/js/website.js", "public/js")

    .js("resources/js/app.js", "public/js")
    .react()
    .extract(["react", "axios", "react-dom", "@inertiajs/inertia-react"])
    .postCss("resources/css/app.css", "public/css", [require("tailwindcss")])
    .browserSync({
        proxy: "http://digital-laravel.test/",
        open: false,
    })
    .webpackConfig({
        output: {
            chunkFilename: "js/[name].js",
        },
    })
    .version();

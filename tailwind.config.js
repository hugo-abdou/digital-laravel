module.exports = {
    content: ["./resources/**/*.blade.php", "./resources/**/{*.js,*.jsx}"],
    theme: {
        extend: {
            colors: {
                "d-yellow": "#F0A500",
                "dark-yellow": "#A65511",
                "gray-lv-1": "#F0F0F0",
                "gray-lv-2": "#E8E8E8",
                black: "#222222",
                "dark-gray": "#555555",
                "dark-blue": "#151C28",
            },
            fontFamily: {
                nunito: ["nunito", "sans-serif"],
                prompt: ["prompt", "sans-serif"],
            },
            fontSize: {
                h1: "48px",
                h2: "36px",
                p: "24px",
                "p-sm": "18px",
                "p-xs": "14px",
            },
        },
    },
    plugins: [require("@tailwindcss/forms")],
};

module.exports = {
  content: ["./src/**/*.{html,js}"],
  daisyui: {
    themes: [
      {
        mytheme: {
          primary: "#008000",
          secondary: "#aad160",
          accent: "#C0C0C0",
          neutral: "#3d4451",
          "base-100": "#ffffff",
        },
       
      },
      "light",
      "cupcake",
    ],
  },

  plugins: [require("daisyui")],
}

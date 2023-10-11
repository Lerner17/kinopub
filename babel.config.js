module.exports = {
  presets: [
    [
      "@babel/preset-env",
      {
        targets: {
          samsung: "11"
        }
      }
    ]
  ],
  plugins: ["@babel/plugin-transform-optional-chaining"]
};
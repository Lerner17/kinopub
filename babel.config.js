module.exports = {
  presets: [
    [
      "@babel/preset-env",
      {
        targets: {
          samsung: "11",
          firefox: "60",
          chrome: "67",
          safari: "11.1",
          ie: "11"
        }
      }
    ]
  ],
  plugins: [
    "@babel/plugin-transform-optional-chaining",
    "transform-es2017-object-entries"
  ]
};
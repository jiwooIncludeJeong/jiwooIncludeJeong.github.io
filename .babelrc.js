const env = require('./env-config')

module.exports = {
  presets: ["next/babel"],
  plugins: [
    ["babel-plugin-styled-components", { "fileName": true, "displayName": true, "pure": true, "ssr": true}],
    ["transform-define", env],
    [
      "module-resolver",
      {
        "root": ["."],
        "alias": {
          "~": ["./*"],
          "@pages/*": ["./pages/*"],
          "@components/*": ["./components/*"],
          "@api/*": ["./api/*"],
          "@assets/*": ["./assets/*"],
          "@utils/*": ["./utils/*"],
          "@hooks/*": ["./hooks/*"],
          "@enums/*": ["./enums/*"],
          "@interfaces/*": ["./interfaces/*"],
          "@constants/*": ["./constants/*"],
          "@recoils/*": ["./recoils/*"],
          "@styles/*": ["./styles/*"]
        },
        "extensions": [".js", ".jsx", ".ts", ".tsx"]
      }
    ]]
}


module.exports = {
  presets: ['module:metro-react-native-babel-preset',"@babel/preset-env",
  "@babel/preset-react",
  '@babel/preset-flow',
  '@babel/preset-typescript'],
  plugins: ["@babel/plugin-proposal-class-properties"],
  env: {
    "development": {
      "plugins": ["transform-es2015-modules-commonjs"]
    }
}
};

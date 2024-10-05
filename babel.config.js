module.exports = {
  presets: ['module:@react-native/babel-preset'],
  plugins: [
    ['module:react-native-dotenv'], // configuracion de las variables de entorno
    'react-native-reanimated/plugin', // configuracion de reanimated
  ],
};

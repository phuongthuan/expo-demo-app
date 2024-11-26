// Learn more https://docs.expo.io/guides/customizing-metro
const { getDefaultConfig } = require("expo/metro-config");

/** @type {import('expo/metro-config').MetroConfig} */
const config = getDefaultConfig(__dirname);

// const ALIASES = {
//   "react-native-maps": "@teovilla/react-native-web-maps",
// };
//
// config.resolver.resolveRequest = (context, moduleName, platform) => {
//   if (platform === "web") {
//     return context.resolveRequest(
//       context,
//       // use alias, if alias exists
//       ALIASES[moduleName] ?? moduleName,
//       platform,
//     );
//   }
//
//   return context.resolveRequest(context, moduleName, platform);
// };

module.exports = config;

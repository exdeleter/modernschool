const { defineConfig } = require('@vue/cli-service')
const path = require("path");
const vueSrc = "./src";
 
module.exports = defineConfig({
  transpileDependencies: true,
  configureWebpack: {
    resolve: {
      alias: {
        "@": path.join(__dirname, vueSrc),
        "@pages": path.join(__dirname, vueSrc, "./pages"),
        "@components": path.join(__dirname, vueSrc, "./components/UI"),
      }
    }
  }
})

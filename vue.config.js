module.exports = {
    css: {
      loaderOptions: {
        scss: {
          prependData: `
            @import "@/scss/_mixins.scss";
          `
        }
      }
    },
    publicPath: './',
  }
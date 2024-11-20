import { defineNuxtConfig } from '@nuxt/bridge'
import webpack from 'webpack'
import PnpWebpackPlugin from "pnp-webpack-plugin";

export default defineNuxtConfig({
  bridge: false,
  router: {
    base: '/'
  },
  head: {
    title: process.env.TARGET_APP_NAME || "MADOCS",
    htmlAttrs: {
      lang: "en",
    },
    script: [
      {
        src: "/js/scripts.js",
        type: "text/javascript"
      },
      {
        src: "https://code.jquery.com/jquery-3.6.3.min.js",
        type: "text/javascript"
      },
      {
        src:
          "https://cdnjs.cloudflare.com/ajax/libs/popper.js/1.14.3/umd/popper.min.js",
        type: "text/javascript"
      },
      {
        src:
          "https://cdn.jsdelivr.net/npm/bootstrap@4.6.2/dist/js/bootstrap.min.js",
        type: "text/javascript"
      },
      {
        src:
          "https://cdn.jsdelivr.net/npm/fullcalendar@5.7.2/main.js",
        type: "text/javascript"
      },
      {
        src: "https://cdn.jsdelivr.net/npm/select2@4.1.0-rc.0/dist/js/select2.min.js",
        type: "text/javascript"
      }
    ],
    meta: [
      { charset: 'utf-8' },
      { name: 'viewport', content: 'width=device-width, initial-scale=1' },
    ],
    link: [
      { rel: 'icon', type: 'image/x-icon', href: '/favicon.ico' },
      { rel: 'stylesheet', href: 'https://pro.fontawesome.com/releases/v5.10.0/css/all.css' }
    ],
    // ToDo : Commenting for a while to see how the performance on FE and some libraries need to readjust where to be put
    // meta: [
    //   { charset: "utf-8" },
    //   { name: "viewport", content: "width=device-width, initial-scale=1" },
    //   { hid: "description", name: "description", content: "" },
    //   { name: "format-detection", content: "telephone=no" },
    // ],
    // link: [
    //   { rel: "icon", type: "image/x-icon", href: "/favicon.ico" },
    //   { rel: 'stylesheet', href: 'https://pro.fontawesome.com/releases/v5.10.0/css/all.css' },
    //   { rel: 'stylesheet', href: 'https://cdn.jsdelivr.net/npm/select2@4.1.0-rc.0/dist/css/select2.min.css' },
    //   {
    //     rel: "stylesheet",
    //     href:
    //       "https://cdn.jsdelivr.net/npm/bootstrap@4.6.2/dist/css/bootstrap.min.css"
    //   }
    // ],
  },
  css: [
    "@/assets/css/dataTables.bootstrap5.min.css",
    "@/assets/css/styles.css",
    "@/assets/css/style.css",
    "@/assets/css/richtext.min.css",
  ],

  plugins: [
    { src: '@/plugins/vue-the-mask.js', mode: process.env.TARGET_MODERN || 'client' },
    { src: '@/plugins/vue-json-excel.js', mode: process.env.TARGET_MODERN || 'client' },
  ],

  components: true,

  buildModules: [],

  modules: [
    "bootstrap-vue/nuxt",
    "@nuxtjs/axios",
    "@nuxtjs/auth",
    "vue-sweetalert2/nuxt",
  ],

  sweetalert: {
    confirmButtonColor: '#008B8B',
    cancelButtonColor: '#ff7674'
  },

  axios: {
    baseURL: process.env.TARGET_API_BASE_URL || "http://127.0.0.1:8000/api/"
  },

  build: {
    publicPath: '/_nuxt/',
    babel: {
      compact: true,
    },
    transpile: ['@fullcalendar'], // Set transpile as an array and include the necessary regex or strings
    optimization: {
      minimize: true,
    },

    extend(config) {
      config.resolve.plugins.push(PnpWebpackPlugin);
      config.resolveLoader.plugins.push(PnpWebpackPlugin.moduleLoader(module));
    }
  },

  server: {
    host: process.env.TARGET_HOST || "0.0.0.0",
    timing: {
      total: true
    },
  },

  ssr: process.env.TARGET_SSR_DEPLOY || false,

  target: process.env.TARGET_DEPLOY || 'server',
  modern: process.env.TARGET_MODERN || 'client',  // Use modern build for modern browsers
})

import webpack from 'webpack'
import PnpWebpackPlugin from "pnp-webpack-plugin";

export default {
  router: {
    base: '/app/'
  },
  // Global page headers: https://go.nuxtjs.dev/config-head
  head: {
    title: "MITS 2.0",
    htmlAttrs: {
      lang: "en",
    },
    script:[
      // {src:'https://cdnjs.cloudflare.com/ajax/libs/jquery/3.1.1/jquery.min.js'},
      // {src:'https://maxcdn.bootstrapcdn.com/bootstrap/3.3.7/js/bootstrap.min.js'}

      // Add For Sidebar Menu
      {
        src: "/app/js/scripts.js",
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
      { charset: "utf-8" },
      { name: "viewport", content: "width=device-width, initial-scale=1" },
      { hid: "description", name: "description", content: "" },
      { name: "format-detection", content: "telephone=no" },
    ],
    link: [{ rel: "icon", type: "image/x-icon", href: "/favicon.ico" },
    { rel: 'stylesheet', href: 'https://pro.fontawesome.com/releases/v5.10.0/css/all.css' },
    { rel: 'stylesheet', href: 'https://cdn.jsdelivr.net/npm/select2@4.1.0-rc.0/dist/css/select2.min.css' },
    {
      rel: "stylesheet",
      href:
        "https://cdn.jsdelivr.net/npm/bootstrap@4.6.2/dist/css/bootstrap.min.css"
    }

  ],
  },

  // Global CSS: https://go.nuxtjs.dev/config-css
  css: [
    "@/assets/css/dataTables.bootstrap5.min.css",
    "@/assets/css/styles.css",
    "@/assets/css/style.css",
    "@/assets/css/richtext.min.css",
  ],

  // Plugins to run before rendering page: https://go.nuxtjs.dev/config-plugins
    plugins: [
      // { src: '~/plugins/vue-html2pdf', mode: 'client' }
      { src: "@/plugins/vue-the-mask.js"},
      { src: "@/plugins/vue-json-excel.js"},
  ],

  // Auto import components: https://go.nuxtjs.dev/config-components
  components: true,


  // Modules for dev and build (recommended): https://go.nuxtjs.dev/config-modules
  buildModules: [],

  // Modules: https://go.nuxtjs.dev/config-modules
  modules: [
    // https://go.nuxtjs.dev/bootstrap
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
    baseURL: "https://mits2be-aipl-704639301453.asia-southeast1.run.app/api/"
    //baseURL:"http://192.168.1.15:8080/api/"
    //  baseURL:"http://127.0.0.1:8000/api/"
    // baseURL: "http://araken.asuscomm.com:8000/api/"
    // baseURL: "https://mentari.moh.gov.my/point/api/"

  },


  // Build Configuration: https://go.nuxtjs.dev/config-build
  build: {
    babel: {
      compact: true,
    },
    transpile: /@fullcalendar.*/, //this is needed

    extend(config) {
      config.resolve.plugins.push(PnpWebpackPlugin);
      config.resolveLoader.plugins.push(PnpWebpackPlugin.moduleLoader(module));
    }
  },
  server: {
    host:"0.0.0.0",
    timing: {
      total:true
    },
  },
  ssr: false,
  // target: 'development',
  target: 'server',
};

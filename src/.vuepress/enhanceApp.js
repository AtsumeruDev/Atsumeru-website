/**
 * Client app enhancement file.
 *
 * https://v1.vuepress.vuejs.org/guide/basic-config.html#app-level-enhancements
 */
import "vue-material-design-icons/styles.css";

export default ({
  Vue, // the version of Vue being used in the VuePress app
  options, // the options for the root Vue instance
  router, // the router instance for the app
  siteData // site metadata
}) => {
  // ...apply enhancements for the site.

  if (!isNodeEnv()) {
    router.afterEach((to, from, next) => {
      if (from.path == '/' && to.path == '/') {
        if (navigator.language.toLowerCase().includes("ua")) {
          window.location.replace("/ua/")
        } else if (navigator.language.toLowerCase().includes("ru")) {
          window.location.replace("/ru/")
        }
      }
    })
  }
}

function isNodeEnv() {
    return !(typeof window != 'undefined' && window.document);
}
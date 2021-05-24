window.onload = function () {
    new Vue({el: 'main'})
}

var Vue = require('vue');
var VueScrollTo = require('vue-scrollto');

Vue.use(VueScrollTo, {
    container: ".buttons_step",
    duration: 1000,
    easing: "ease",
    offset: 0,
    force: true,
    cancelable: true,
    onStart: false,
    onDone: false,
    onCancel: false,
    x: false,
    y: true
})
window.onload = function () { 
  new Vue({
    el: 'main',
    data: {
      month: '',
      year: '',
      child: '',
      fam: '',
      all: 2,
    },

    methods: {
      сalculate_all: function() {
        this.all = this.month * this.year
      }
    }
  })
}



window.onload = function () { 
  new Vue({
    el: 'main',
    data: {
      month: '',
      year: '',
      child: '',
      fam: '',
      inc: 0,
      netInc: 0,
    },

    methods: {
      сalculate_all: function() {
        this.inc = this.month * this.year
        this.netInc = this.month * this.year + 150

      }
    }
  })
}



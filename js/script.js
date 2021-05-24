window.onload = function () { 
  new Vue({
    el: 'main',
    data: {
      month: '',
      year: '',
<<<<<<< HEAD
      child: 0,
      fam: 't',
      deduct: '',
      inc: '0.00',
      netInc: '0.00',
      error: '',
    },

    methods: {
      сalculate_nal: function() {
        this.month = Number(this.month)
        this.year = Number(this.year)
        this.child = Number(this.child)
        if (this.month >= 0 && this.year >= 0 && this.child >= 0 && !isNaN(this.month) && !isNaN(this.year) && !isNaN(this.child)) {
          if (this.year <= 40000) {
            if(this.fam == "t") {
              this.deduct = 600 + 600 * this.child
            }
            else if (this.fam == "f") {
              this.deduct = 600 + 1200 * this.child
            }
            this.inc = 0.13 * (this.month - this.deduct)
            if (this.inc < 0) {
              this.inc = 0
            }
          } else if (this.year > 40000) {
            this.inc = 0.13 * this.month
            if (this.inc < 0) {
              this.inc = 0
            }
          }
          this.prescription()
        } 
        else {
          this.error = "Введите положительные значения"
        }
        
      },
      prescription: function() {
        this.netInc = this.month - this.inc
        this.inc = this.inc.toFixed(2)
        this.netInc = this.netInc.toFixed(2)
        this.rublesInc()
        
      },
      reload_calc() {
          this.month = ''
          this.year = ''
          this.child = 0
          this.fam = 't'
          this.deduct = ''
          this.inc = '0.00'
          this.netInc = '0.00'
          this.error = ''
=======
      child: '',
      fam: '',
      inc: 0,
      netInc: 0,
    },

    methods: {
      сalculate_all: function() {
        this.inc = this.month * this.year
        this.netInc = this.month * this.year + 150

>>>>>>> b837efe329572bef09baa98fa6a973552fb7fe3f
      }
    }
  })
}



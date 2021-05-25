window.onload = function () { 
  new Vue({
    el: 'main',
    data: {
      month: '',
      year: '',
      child: 0,
      fam: 't',
      deduct: '',
      inc: '0.00',
      netInc: '0.00',
      incRubles: 'ноль рублей ноль копеек',
      netIncRubles: 'ноль рублей ноль копеек',
      error: '',
      scroll: '.calculated'
    },

    methods: {
      сalculate_nal: function() {
        this.month = Number(this.month)
        this.year = Number(this.year)
        this.child = Number(this.child)
        if (this.month >= 0 && this.year >= 0 && this.child >= 0 && !isNaN(this.month) && !isNaN(this.year) && !isNaN(this.child)) {
          this.scroll = ".calculated"
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
        } 
        else {
          this.error = "Введите положительные значения"
          this.scroll = ".data_for_calculation"
          this.month = ''
          this.year = ''
          this.child = 0
          this.fam = 't'
          this.deduct = ''
          this.inc = '0.00'
          this.netInc = '0.00'
          this.incRubles = 'ноль рублей ноль копеек'
          this.netIncRubles = 'ноль рублей ноль копеек'
        }
        this.prescription()
      },
      prescription: function() {
        this.netInc = this.month - this.inc
        this.inc = this.inc.toFixed(2)
        this.netInc = this.netInc.toFixed(2)
        this.rublesInc()
        
      },
      pennyI: function() {
        if (this.inc.indexOf('.') !== -1) {
          let splt = this.inc.split('.')
          let number = splt[0]
          let decimals = splt[1]
          return decimals
        } else {
          return 0
        }
      },
      pennyN: function() {
        if (this.netInc.indexOf('.') !== -1) {
          let splt = this.netInc.split('.')
          let number = splt[0]
          let decimals = splt[1]
          return decimals
        } else {
          return 0
        }
      },
      rublesInc: function() {
        console.log(this.inc)
        if (this.inc <= 0) {
          this.incRubles = "ноль рублей ноль копеек"
        } 
        else if (this.pennyI() == 0) {
          this.incRubles = rubles(this.inc)
          this.incRubles = this.incRubles.replace(/[0-9].*/, '') + "ноль копеек"
        }
        else {
          this.incRubles = rubles(this.inc)
          copRubles = this.incRubles.split(' ').pop()
          let incRub = this.incRubles.replace(/[0-9].*/, '')

          let incCop = rubles(this.pennyI()).replace(/руб.*/, '')

          if (this.pennyI() == 1) {
            incCop = "одна " + copRubles 
          } 
          else if (this.pennyI() == 2) {
            incCop = "две " + copRubles 
          } 
          else if (this.pennyI() > 20 && this.pennyI().slice(-1) == 1) {
            incCop = incCop.split(" ")[0]
            incCop = incCop + " одна " + copRubles 
          }
          else if (this.pennyI() > 20 && this.pennyI().slice(-1) == 2) {
            incCop = incCop.split(" ")[0]
            incCop = incCop + " две " + copRubles 
          } 
          else {
            incCop = incCop + copRubles 
          }
          this.incRubles = incRub + incCop
        }


        if (this.netInc <= 0) {
          this.netIncRubles = "ноль рублей ноль копеек"
        } else if (this.pennyN() == 0) {
          this.netIncRubles = rubles(this.netInc)
          this.netIncRubles = this.netIncRubles.replace(/[0-9].*/, '') + "ноль копеек"
        } else {
          this.netIncRubles = rubles(this.netInc)
          netCopRubles = this.netIncRubles.split(' ').pop()
          let netIncRub = this.netIncRubles.replace(/[0-9].*/, '')

          let netIncCop = rubles(this.pennyN()).replace(/руб.*/, '')

          if (this.pennyN() == 1) {
            netIncCop = "одна " + netCopRubles 
          } 
          else if (this.pennyN() == 2) {
            netIncCop = "две " + netCopRubles 
          } 
          else if (this.pennyN() > 20 && this.pennyN().slice(-1) == 1) {
            netIncCop = netIncCop.split(" ")[0]
            netIncCop = netIncCop + " одна " + netCopRubles 
          }
          else if (this.pennyN() > 20 && this.pennyN().slice(-1) == 2) {
            netIncCop = netIncCop.split(" ")[0]
            netIncCop = netIncCop + " две " + netCopRubles 
          } 
          else {
            netIncCop = netIncCop + netCopRubles 
          }
          this.netIncRubles = netIncRub + netIncCop
        }
      },
      reload_calc() {
          this.month = ''
          this.year = ''
          this.child = 0
          this.fam = 't'
          this.deduct = ''
          this.inc = '0.00'
          this.netInc = '0.00'
          this.incRubles = 'ноль рублей ноль копеек'
          this.netIncRubles = 'ноль рублей ноль копеек'
          this.error = ''
      }
    }
  })
}

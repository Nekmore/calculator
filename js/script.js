window.onload = function () { 
  new Vue({
    el: '#calc',
    
    data () {
      return {
        // Всего слайдов
        sliderAllCount: 0,
        // Номер активного слайда
        sliderActive: 1,
        // Отступ тела со слайдами в контейнере
        sliderOffsetLeft: 0,
        // Шаг одного слайда = его длина
        sliderOffsetStep: 0,
        // Список изображений
        sliderList: [
          'data_for_calculation_template',
          'calculated_template',  
        ],
        butNal: "display: block;",
      }
    },
    components: {
      data_for_calculation_template: {
          template: '#data_for_calculation_template'
      },
      calculated_template: {
          template: '#calculated_template'
      },
    },
    
    methods: {
      // Иницилизация слайдера
      initSlider: function () {
        // Получаем элементы сладера и его слайдов
        let sliderBody = this.$el.querySelector('.js-slider')
        let sliderSlidies = sliderBody.querySelectorAll('.js-slide')
        // Записываем длину одного слайда для перелистывания
        this.sliderOffsetStep = sliderBody.clientWidth 
        // Общее количество слайдов для стопов
        this.sliderAllCount = sliderSlidies.length
      },

      // Открыть слайд по номеру
      openSlide: function (id) {
        if (id > 0 && id <= this.sliderAllCount) {
          this.sliderActive = id
          // Сдвигаем элемент со слайдами
          this.sliderOffsetLeft = -(this.sliderActive * this.sliderOffsetStep - this.sliderOffsetStep)
        }
      },

      // Следующий слайд
      nextSlide: function () {
        if (this.sliderActive < this.sliderAllCount) {
          this.sliderActive += 1
          this.openSlide(this.sliderActive)
          this.butNal = "display: none;";
        }
      },

      // Предыдущий слайд
      prevSlide: function () {
        if (this.sliderActive > 1) {
          this.sliderActive -= 1
          this.openSlide(this.sliderActive)
        }
      },
    },

    mounted () {
      this.initSlider()

      // Перенастройка слайдера при ресайзе окна
      window.addEventListener('resize', () => {
        this.initSlider()
        this.openSlide(this.sliderActive)
      })
    }
  })
}


var PROGRAM = (function () {
  var slideIUI = function () {
    const sl_IUI = document.querySelector(".sl-IUI");
    if (sl_IUI.length === 0) return;
    var swiperIUI = new Swiper(sl_IUI, {
      slidesPerView: 1,
      navigation: {
        nextEl: ".btn-iui-next",
        prevEl: ".btn-iui-prev",
      },
    });
  };
  var slideIVF = function () {
    const sl_IVF = document.querySelector(".sl-IVF");
    if (sl_IVF.length === 0) return;
    var swiperIVF = new Swiper(sl_IVF, {
      slidesPerView: 1,
      navigation: {
        nextEl: ".btn-ivf-next",
        prevEl: ".btn-ivf-prev",
      },
    });
  };
  var slideStat = function () {
    const sl_stat = document.querySelector(".sl-statistics");
    if (sl_stat.length === 0) return;
    var swiperStat = new Swiper(sl_stat, {
      spaceBetween: 40,
      navigation: {
        nextEl: ".btn-stat-next",
        prevEl: ".btn-stat-prev",
      },
      breakpoints: {
        480: {
          slidesPerView: 2,
        },
        640: {
          slidesPerView: 3,
        },
        768: {
          slidesPerView: 4,
        },
        1280: {
          slidesPerView: 5,
        }
      },
    });
  };
  var slideAdvanTech = function () {
    const sl_advan_tech = document.querySelector(".sl-advan_tech");
    if(sl_advan_tech.length === 0) return;
    var swiperAdvanTech = new Swiper (sl_advan_tech, {
      spaceBetween: 24,
      breakpoints: {
        1536: {
          slidesPerView: 4.5
        }
      }
    })
  }
  return {
    _: function () {
      slideIUI();
      slideIVF();
      slideStat();
      slideAdvanTech();
    },
  };
})();
PROGRAM._();

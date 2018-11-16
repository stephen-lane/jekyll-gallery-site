import $ from "jquery";
import slick from "slick";
import vex from 'vex';
import vexDialog from 'vex.dialog';

class GalleryModule {
  constructor() {
    this.init();
    this.addEvents();
  }
  init() {
    let $module = $('.photo-gallery-module');
    vex.registerPlugin(vexDialog);
    let defaultOptions = {
      content: '',
      unsafeContent: '',
      showCloseButton: true,
      escapeButtonCloses: true,
      overlayClosesOnClick: true,
      appendLocation: 'body',
      className: 'vex-theme-gallery',
      overlayClassName: '',
      contentClassName: '',
      closeClassName: '',
      closeAllOnPopState: true
    }
    vex.defaultOptions = defaultOptions;

    $module.slick({
      slidesToShow: 1,
      slidesToScroll: 1,
      arrows: true
    });

  }
  addEvents() {
    $('.photo-gallery-module').find('img').click((e) => {
      let url = $(e.target).attr('src');
      let content = '</span><img src="' + url + '">';
      vex.open({
          unsafeContent: content
      })
    })
  }
}

export default GalleryModule;

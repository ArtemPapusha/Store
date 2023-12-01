// class ModalWindow {

//   title;
//   body;
//   footer;

//   constructor({ title = '', body = '', footer = '' }) {
//     this.addModalWrapper();

//     this.updateTitle = title;
//     this.updateBody = body;
//     this.updateFooter = footer;
//   }

//   set updateTitle(title) {
//     this.title = title;
//   }

//   get title() {
//     return this.$title;
//   }

//   set updateBody(body) {
//     this.body = body;
//   }

//   get body() {
//     return this.$body;
//   }

//   set updateFooter(footer) {
//     this.footer = footer;
//   }

//   get footer() {
//     return this.$footer;
//   }

//   renderOverlay() {
//     return `
//       <div class="overlay"></div>`
//   }

//   renderTitle() {
//     return `<div class="modal-title">
//       ${this.title}
//     </div>`
//   }

//   renderBody() {
//     return `<div class="modal-body">${this.body}</div>`
//   }

//   renderFooter() {
//     return `<div class="modal-footer">${this.footer}</div>`
//   }

//   renderModal() {
//     return `<div class="modal">
//       ${this.renderTitle()}
//       ${this.renderBody()}
//       ${this.renderFooter()}
//     </div>`
//   }

//   render() {
//     const $modalCell = document.querySelector('#modal_cell');

//     $modalCell.innerHTML = this.renderOverlay();

//     const $overlay = document.querySelector('.overlay');

//     $overlay.innerHTML = this.renderModal();
//   }

//   addModalWrapper() {
//     const $modalCell = document.querySelector('#modal_cell');

//     if(!$modalCell) {
//       const $body = document.querySelector('body');
//       const $wrapper = document.querySelector('.wrapper');
//       const $element = document.createElement('div');

//       $element.setAttribute('id', 'modal_cell');
//       $body.insertBefore($element, $wrapper);
//     }
//   }

//   toggleBodyHide(isHidden = false) {
//     const $body = document.querySelector('body');

//     if (isHidden) {
//       $body.style.overflow = '';
//     } else {
//       $body.style.overflow = 'hidden';
//     }
//   }

//   open() {
//     this.toggleBodyHide();

//     this.render();

//     const $modalCell = document.getElementById('modal_cell');
//     $modalCell.style.display = 'block';
//   }

//   destroy() {
//     const $modalCell = document.getElementById('modal_cell');
//     $modalCell.style.display = 'none';
//   }

//   close() {
//     this.toggleBodyHide(true);

//     this.destroy();
//   }
// }

// const modalWindow = new ModalWindow({
//   title: `<h1>Notifications</h1>`,
//   body: `<p>This is important notifications, and i need to add more text</p>`,
//   footer: `<button id=btnClose>Close</button>`
// });

// const $openModalNotificationsButton = document.getElementById('btnOpenModalNotifications');

// const handleClickOpenModalNotificationsButton = () => {

//   modalWindow.open();

//   const $btnClose = document.getElementById('btnClose');
//   $btnClose.addEventListener('click', () => {
//     modalWindow.close();
//     });

//   const $overlay = document.querySelector('.overlay')
//   window.addEventListener('click', function(e) {
//     if(e.target === $overlay){
//       modalWindow.close();
//     }
//     });
// };

// const modalWindowSecond = new ModalWindow({
//   title: `<h1>Analytics</h1>`,
//   body: `<div id="piechart"></div>`,
//   footer: `<button id=btnClose>Close</button>`
// });

// const $openModalAnalyticsButton = document.getElementById('btnOpenModalAnalytics');

// const handleClickOpenModalAnalyticsButton = () => {

//   modalWindowSecond.open();

//   google.charts.load('current', {'packages':['corechart']});
//   google.charts.setOnLoadCallback(drawChart);

//   function drawChart() {

//     let data = google.visualization.arrayToDataTable([
//       ['Task', 'Hours per Day'],
//       ['Work',     11],
//       ['Eat',      2],
//       ['Commute',  2],
//       ['Watch TV', 2],
//       ['Sleep',    7]
//     ]);

//     let options = {
//       title: 'My Daily Activities'
//     };

//     let chart = new google.visualization.PieChart(document.getElementById('piechart'));

//     chart.draw(data, options);
//   }

//   const $btnClose = document.getElementById('btnClose');
//   $btnClose.addEventListener('click', () => {
//     modalWindowSecond.close();
//     });

//   const $overlay = document.querySelector('.overlay')
//   window.addEventListener('click', function(e) {
//     if(e.target === $overlay){
//       modalWindowSecond.close();
//     }
//     });
// };

class ModalWindow {
  title;
  body;
  footer;

  /**
   * @param { String } title
   * @param { String } body
   * @param { String } footer
   */
  constructor(title = '', body = '', footer = '') {
    this.title = title;
    this.body = body;
    this.footer = footer;

    return this;
  }

  buildTitle() {
    const $title = document.createElement('div');
    $title.className = 'modal-title';

    $title.innerHTML = `${this.title}`;

    return $title;
  }

  buildBody() {
    const $body = document.createElement('div');
    $body.className = 'modal-body';

    $body.innerHTML = `${this.body}`;

    return $body;
  }

  buildFooter() {
    const $footer = document.createElement('div');
    $footer.className = 'modal-footer';

    $footer.innerHTML = `${this.footer}`;

    return $footer;
  }

  buildOverlay() {
    const $overlay = document.createElement('div');
    $overlay.className = 'overlay';

    $overlay.appendChild(this.buildModal());
    return $overlay;
  }

  buildModal() {
    const $modal = document.createElement('div');
    $modal.className = 'modal';

    $modal.appendChild(this.buildTitle());
    $modal.appendChild(this.buildBody());
    $modal.appendChild(this.buildFooter());

    return $modal;
  }

  buildModalCell() {
    const $modalCell = document.createElement('div');
    $modalCell.className = 'modal_cell';

    $modalCell.appendChild(this.buildOverlay());

    return $modalCell;
  }

  toggleBodyHide(isHidden = false) {
    const $body = document.querySelector('body');

    if (isHidden) {
      $body.style.overflow = '';
    } else {
      $body.style.overflow = 'hidden';
    }
  }

  render() {
    const $body = document.querySelector('body');
    const $container = document.querySelector('.container');

    $body.insertBefore(this.buildModalCell(), $container);
  }

  open() {
    this.toggleBodyHide();

    this.render();
  }

  destroy() {
    const $modalCell = document.querySelector('.modal_cell');

    $modalCell.remove();
  }

  close() {
    this.toggleBodyHide(true);

    this.destroy();
  }
}

const modalWindow = new ModalWindow(
  `<h1>Notifications</h1>`,
  `<p>This is important notifications, and i need to add more text</p>`,
  `<button id=btnClose>Close</button>`
);

const $openModalNotificationsButton = document.getElementById(
  'btnOpenModalNotifications'
);

const handleClickOpenModalNotificationsButton = () => {
  modalWindow.open();

  const $btnClose = document.getElementById('btnClose');
  $btnClose.addEventListener('click', () => {
    modalWindow.close();
  });

  const $overlay = document.querySelector('.overlay');
  window.addEventListener('click', function (e) {
    if (e.target === $overlay) {
      modalWindow.close();
    }
  });
};

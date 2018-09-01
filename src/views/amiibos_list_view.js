const PubSub = require('../helpers/pub_sub.js');

const AmiibosListView = function (container) {
  this.container = container;
};

AmiibosListView.prototype.bindEvents = function () {
  PubSub.subscribe('Amiibos:amiibos-data-ready', (event) => {
    this.amiibos = event.detail;
    // this.render();
  });
};

// AmiibosListView.prototype.render = function () {
//   this.amiibos.forEach((amiibo) => {
//     const amiiboView = new AmiiboView(this.container, amiibo)
//     amiiboView.render();
//   })
// };

module.exports = AmiibosListView;

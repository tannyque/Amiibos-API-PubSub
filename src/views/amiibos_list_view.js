const PubSub = require('../helpers/pub_sub.js');
const AmiiboView = require('./amiibo_view.js');

const AmiibosListView = function (container) {
  this.container = container;
};

AmiibosListView.prototype.bindEvents = function () {
  PubSub.subscribe('Amiibos:amiibos-data-ready', (event) => {
    this.clearList();
    this.amiibos = event.detail;
    this.render();
  });
};

AmiibosListView.prototype.clearList = function () {
  this.container.innerHTML = '';
};

AmiibosListView.prototype.render = function (amiibos) {
  this.amiibos.forEach((amiibo) => {
    const amiiboView = new AmiiboView(this.container, amiibo)
    amiiboView.render();
  })
};

module.exports = AmiibosListView;

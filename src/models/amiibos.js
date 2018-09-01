const Request = require('../helpers/request.js');
const PubSub = require('../helpers/pub_sub.js');

const Amiibos = function (url) {
  this.url = url;
  this.amiibos = [];
  this.amiiboSeries = [];
};

Amiibos.prototype.bindEvents = function () {
  PubSub.subscribe('SelectView:change', (event) => {
    const seriesIndex = event.detail;
    this.publishAmiibosBySeries(seriesIndex);
  })
};

Amiibos.prototype.getData = function () {
  const request = new Request(this.url);
  // data is an object of array of objects(?)
  request.get()
  .then(data => this.handleData(data))
  .catch((err) => {
    console.error(err);
  });
};

Amiibos.prototype.handleData = function (data) {
  this.amiibos = data.amiibo;
  PubSub.publish("Amiibos:amiibos-data-ready", this.amiibos);
  this.publishAmiiboSeries(data.amiibo)
};

Amiibos.prototype.publishAmiiboSeries = function (data) {
  this.amiiboSeries = this.uniqueAmiiboSeries();
  PubSub.publish('Amiibos:amiibos-series-ready', this.amiiboSeries);
};

Amiibos.prototype.amiiboSeriesList = function () {
  const fullList = this.amiibos.map(amiibos => amiibos.amiiboSeries);
  return fullList;
};

Amiibos.prototype.uniqueAmiiboSeries = function () {
  return this.amiiboSeriesList().filter((amiibo, index, array) => {
    return array.indexOf(amiibo) === index;
  });
};

Amiibos.prototype.amiibosBySeries = function (seriesIndex) {
  const selectedSeries = this.amiiboSeries[seriesIndex];
  return this.amiibos.filter((amiibo) => {
    return amiibo.amiiboSeries === selectedSeries;
  });
};

Amiibos.prototype.publishAmiibosBySeries = function (seriesIndex) {
  const foundSeries = this.amiibosBySeries(seriesIndex);
  PubSub.publish('Amiibos:amiibos-data-ready', foundSeries);
};

module.exports = Amiibos;

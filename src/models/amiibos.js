const Request = require('../helpers/request.js');
const PubSub = require('../helpers/pub_sub.js');

const Amiibos = function (url) {
  this.url = url;
  this.amiibos = [];
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
  PubSub.publish("Amiibos:amiibos-data-ready", data);
};

module.exports = Amiibos;

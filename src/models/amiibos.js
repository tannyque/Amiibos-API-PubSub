const PubSub = require('../helpers/pub_sub.js');
const Request = require('../helpers/request.js');

const Amiibos = function () {
  this.amiibos = [];
};

Amiibos.prototype.getData = function () {
  const request = new Request('http://www.amiiboapi.com/api/amiibo/');
  request.get((data) => {
    console.log(data);
  })
};

module.exports = Amiibos;

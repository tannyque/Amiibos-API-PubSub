const Amiibos = require('./models/amiibos.js');

document.addEventListener('DOMContentLoaded', () => {
  const amiibos = new Amiibos("http://www.amiiboapi.com/api/amiibo/");
  amiibos.getData();
})

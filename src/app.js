const Amiibos = require('./models/amiibos.js');
const AmiibosListView = require('./views/amiibos_list_view');

document.addEventListener('DOMContentLoaded', () => {
  const amiibosListContainer = document.querySelector('#amiibos')
  const amiibosListView = new AmiibosListView(amiibosListContainer);
  amiibosListView.bindEvents();

  const amiibos = new Amiibos("http://www.amiiboapi.com/api/amiibo/");
  amiibos.getData();
})

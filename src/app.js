const Amiibos = require('./models/amiibos.js');
const AmiibosListView = require('./views/amiibos_list_view');
const SelectView = require('./views/select_view.js');
// const AmiiboView = require('./views/amiibo_view.js')

document.addEventListener('DOMContentLoaded', () => {
  const selectElement = document.querySelector('select#amiibo-select')
  const selectView = new SelectView(selectElement);
  selectView.bindEvents();

  const amiibosListContainer = document.querySelector('#amiibo')
  const amiibosListView = new AmiibosListView(amiibosListContainer);
  amiibosListView.bindEvents();

  const amiibos = new Amiibos("http://www.amiiboapi.com/api/amiibo/");
  amiibos.bindEvents();
  amiibos.getData();
})

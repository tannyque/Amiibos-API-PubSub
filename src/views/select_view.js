const PubSub = require('../helpers/pub_sub.js');

const SelectView = function (selectElement) {
  this.selectElement = selectElement;
};

SelectView.prototype.bindEvents = function () {
  PubSub.subscribe('Amiibos:amiibos-series-ready', (event) => {
    this.populateSelect(event.detail)
    this.selectElement.addEventListener('change', (event) => {
      const selectedIndex = event.target.value;
      PubSub.publish('SelectView:change', selectedIndex);
    });
  });
};

SelectView.prototype.populateSelect = function (series) {
  series.forEach((series, index) => {
    const option = this.createSeriesOption(series, index);
    this.selectElement.appendChild(option);
  });
  this.populated = true;
};

SelectView.prototype.createSeriesOption = function (series, index) {
  const option = document.createElement('option');
  option.textContent = series;
  option.value = index;
  return option;
};

module.exports = SelectView;

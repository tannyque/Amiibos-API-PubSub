const PubSub = require('../helpers/pub_sub.js');

const AmiiboView = function (container, amiibo) {
  this.amiibosContainer = container;
  this.amiibo = amiibo;
}

AmiiboView.prototype.render = function () {
  const amiiboContainer = document.createElement('div');
  amiiboContainer.classList.add('amiibo');

  const name = this.createAmiiboHeading()
  amiiboContainer.appendChild(name);

  const amiiboInfo = this.createAmiiboInfoList();
  amiiboContainer.appendChild(amiiboInfo);

  const image = this.createImage();
  amiiboContainer.appendChild(image);

  this.amiibosContainer.appendChild(amiiboContainer);
};

AmiiboView.prototype.createAmiiboHeading = function () {
  const name = document.createElement('h2');
  name.classList.add('amiibo-name');
  name.textContent = this.amiibo.name;
  return name;
};

AmiiboView.prototype.createAmiiboInfoList = function (amiibo) {
  const amiiboInfoList = document.createElement('ul');

  const liAmiiboSeries = this.createLi("Amiibo Series: " + this.amiibo.amiiboSeries, amiiboInfoList);
  const liAmiiboCharacter = this.createLi(`Character: ${this.amiibo.character}`, amiiboInfoList);
  const liAmiiboGameSeries = this.createLi(`Game Series: ${this.amiibo.gameSeries}`, amiiboInfoList);
  const liAmiiboType = this.createLi(`Type: ${this.amiibo.type}` + this.amiibo.amiiboSeries, amiiboInfoList);
  return amiiboInfoList;
};

AmiiboView.prototype.createImage = function () {
  const img = document.createElement('img');
  img.src = this.amiibo.image;
  // classList is the name of the class in html
  img.classList.add("image")
  return img;
};

AmiiboView.prototype.createLi = function(textContent, ul) {
  const li = document.createElement('li');
  li.textContent = textContent;
  ul.appendChild(li);
};

module.exports = AmiiboView;

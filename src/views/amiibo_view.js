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

  const amiiboInfo = this.createAmiiboInfo();
  amiiboContainer.appendChild(amiiboInfo);

  const image = this.createImage();
  amiiboContainer.appendChild(image);

  this.amiibosContainer.appendChild(amiiboContainer);
};

AmiiboView.prototype.createAmiiboHeading = function () {
  const name = document.createElement('h3');
  name.classList.add('amiibo-name');
  name.textContent = this.amiibo.name;
  return name;
};

AmiiboView.prototype.createAmiiboInfo = function () {
  const amiiboInfo = document.createElement('ul');
  amiiboInfo.classList.add('amiibo-info');
  this.populateList(amiiboInfo);
  return amiiboInfo;
};

// TODO: Refactor li
AmiiboView.prototype.populateList = function (list) {
  const amiiboSeries = document.createElement('li');
  amiiboSeries.textContent = "Amiibo Series: " + this.amiibo.amiiboSeries;
  list.appendChild(amiiboSeries);
  const amiiboCharacter = document.createElement('li');
  amiiboCharacter.textContent = `Character: ${this.amiibo.character}`;
  list.appendChild(amiiboCharacter);
  const amiiboGameSeries = document.createElement('li');
  amiiboGameSeries.textContent = `Game Series: ${this.amiibo.gameSeries}`;
  list.appendChild(amiiboGameSeries);
  const amiiboType = document.createElement('li');
  amiiboType.textContent = `Type: ${this.amiibo.type}`;
  list.appendChild(amiiboType);

  // NORTH AMERICA RELEASE DATE
  // const amiiboReleaseDate = document.createElement('li');
  // amiiboReleaseDate.textContent = `Release: ${this.amiibo.release.na}`;
  // list.appendChild(amiiboReleaseDate)
};

AmiiboView.prototype.createImage = function () {
  const img = document.createElement('img');
  img.src = this.amiibo.image;
  // classList is the name of the class in html
  img.classList.add("image")
  return img;
};

module.exports = AmiiboView;

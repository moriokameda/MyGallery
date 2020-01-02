'use strict'

{
  var album = [
    { src: 'img/ushiroegao.jpg', msg: '後ろ向き笑顔'},
    { src: 'img/14F73877-D2B2-474F-8DCC-420020368CDC.jpg', msg: '背景２'},
    { src: 'img/Catalina Clouds.jpg', msg: '背景３'},
    { src: 'img/Catalina Coast.jpg', msg: '背景４'},
    { src: 'img/Catalina Day.jpg', msg: '背景５'},
    { src: 'img/Catalina Evening.jpg', msg: '背景６'},
    { src: 'img/Catalina Night.jpg', msg: '背景７'},
    { src: 'img/Catalina Rock.jpg', msg: '背景８'},
    { src: 'img/Catalina Shoreline.jpg', msg: '背景９'},
    { src: 'img/Catalina Silhouette.jpg', msg: '背景１０'},
    { src: 'img/Catalina Sunset.jpg', msg: '背景１１'},
    { src: 'img/IMG_4615.jpg', msg: '背景１３'},
    { src: 'img/IMG_8401.jpg', msg: '背景１４'},
    { src: 'img/IMG_8408.jpg', msg: '背景１５'},
    { src: 'img/Mojave Day.jpg', msg: '背景１６'},
    { src: 'img/Mojave Night.jpg', msg: '背景１７'},
    { src: 'img/Mojave.jpg', msg: '背景１８'},
    { src: 'img/Sierra 2.jpg', msg: '背景１９'},
    { src: 'img/Sierra.jpg', msg: '背景１２'},
  ];

  var mainImage = document.createElement('img');
  mainImage.setAttribute('src',album[3].src);
  mainImage.setAttribute('alt',album[3].msg);

  var mainMsg = document.createElement('p');
  mainMsg.innerText = mainImage.alt;

  var mainFlame = document.querySelector('#gallery .main');
  mainFlame.insertBefore(mainImage, null);
  mainFlame.insertBefore(mainMsg, null);

  var thumbFlame = document.querySelector('#gallery .thumb');
  for(let i = 0; i < album.length; i++){
    var thumbImage = document.createElement('img');
    thumbImage.setAttribute('src', album[i].src);
    thumbImage.setAttribute('alt', album[i].msg);
    thumbFlame.insertBefore(thumbImage, null);

  }

  thumbFlame.addEventListener('click', e => {
    if (e.target.src){
      mainImage.src = e.target.src;
      mainMsg.innerText = e.target.alt;
    }
  });
}
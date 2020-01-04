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
    { src: 'img/Ink Cloud.jpg', msg: '背景１８'},
    { src: 'img/Sierra 2.jpg', msg: '背景１９'},
    { src: 'img/Sierra.jpg', msg: '背景１２'},
  ];
  let currentIndex = 0;

  var mainImage = document.createElement('img');
  mainImage.setAttribute('src',album[3].src);
  mainImage.setAttribute('alt',album[3].msg);

  var mainMsg = document.createElement('p');
  mainMsg.innerText = mainImage.alt;

  var mainFlame = document.querySelector('#gallery .main');
  mainFlame.insertBefore(mainImage, null);
  mainFlame.insertBefore(mainMsg, null);

  var thumbFlame = document.querySelector('#gallery .thumb');

  album.forEach((image, index) => {
    var thumbImage = document.createElement('img');
    thumbImage.setAttribute('src', image.src);
    thumbImage.setAttribute('alt', image.msg);
    

    thumbImage.addEventListener('click', () => {
      const thumb = $('.thumb img');
      thumb[currentIndex].classList.remove('current');
      mainImage.src = image.src;
      mainImage.msg = image.msg;
      currentIndex = index;
      thumb[currentIndex].classList.add('current');
    });
    thumbFlame.insertBefore(thumbImage, null);

  });

  let isPlaying = false;
  let timeoutId;

  $(function () {
    $('#menu dt').click(function () {
      $('#menu dd').slideToggle()
    })
  });

  $("#next").click(function () {
    let target = currentIndex + 1;
    if(target === album.length){
      target = 0;
    }
    document.querySelectorAll('.thumb img')[target].click();
    mainMsg.innerText = document.querySelectorAll('.thumb img')[target].getAttribute('alt');
  });
  $("#prev").click(function () {
    let target = currentIndex - 1;
    if(target < 0){
      target = album.length - 1;
    }
    document.querySelectorAll('.thumb img')[target].click();
    mainMsg.innerText = $('.thumb img')[target].getAttribute('alt');
  });


  function playSlideShow() {
    timeoutId = setTimeout(() => {
      next.click();
      playSlideShow();
    }, 1000);
  }


  $("#play").click(function () {
    if (isPlaying === false) {
      playSlideShow();
      $("#play").text('Pause');
    } else {
      clearTimeout(timeoutId);
      $('#play').text('Play');
    }
    isPlaying = !isPlaying;
  });
}
{

  
}
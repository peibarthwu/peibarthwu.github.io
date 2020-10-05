var pics = [
  "https://66.media.tumblr.com/avatar_5fef41983366_128.pnj",
  "https://ih1.redbubble.net/image.552900472.2894/flat,128x128,075,t-pad,128x128,f8f8f8.jpg",
  "https://encrypted-tbn0.gstatic.com/images?q=tbn%3AANd9GcSDI7S3sa4XSwKtZthzTs9qdz5OLf5W62Sj2A-62rQS1D4BXU1n&usqp=CAU",
  "https://www.onthisday.com/images/people/audrey-hepburn-medium.jpg",
  "https://www.chordzilla.net/uploads/songs/zayn-malik.webp",
  "https://66.media.tumblr.com/371731e409b6ce7a7cb72394a3d7aa4b/tumblr_oi110iK0bg1tzfko6o1_400.jpg",
  "https://thumbor.forbes.com/thumbor/fit-in/416x416/filters%3Aformat%28jpg%29/https%3A%2F%2Fspecials-images.forbesimg.com%2Fimageserve%2F5a05d8c531358e542c0516b9%2F0x0.jpg%3Fbackground%3D000000%26cropX1%3D1963%26cropX2%3D3944%26cropY1%3D292%26cropY2%3D2271",
  "https://d3g9pb5nvr3u7.cloudfront.net/authors/571940863fb080ac05aecbf5/-1265117966/256.jpg",
  "https://pbs.twimg.com/profile_images/3650879864/a0abe8d27506bc6881cade0dc5f22720.jpeg",
  "https://ichef.bbci.co.uk/images/ic/256xn/p045h75d.jpg",
  "https://i.pinimg.com/originals/d4/86/a4/d486a472572dd7216f7b0d174829ad5a.jpg",
  "https://www.rightthisminute.com/sites/default/files/videos/images/brad-pitt-national-parks-video.jpg",
  "https://pm1.narvii.com/6460/9866299c9acf431f7ba97c48763a7c9aa68b0f1b_128.jpg",
  "https://a.wattpad.com/useravatar/GoodSmiles.256.605158.jpg",
];

var links = [
  "media-sample.html",
]

function shuffle(a) {
    var j, x, i;
    for (i = a.length - 1; i > 0; i--) {
        j = Math.floor(Math.random() * (i + 1));
        x = a[i];
        a[i] = a[j];
        a[j] = x;
    }
    return a;
}

shuffle(pics);

var currentIndex = -1;
var imageInterval = setInterval(function() {
    ++currentIndex;
    if (currentIndex < pics.length) {
        placeImage(currentIndex);
    };
}, 500);

function placeImage(index) {
  height = Math.random()*window.innerHeight;
  width = Math.random()*window.innerWidth;
  z = index;

  var imgHTML = '<img src="'+pics[index]+'" style="top: '+height+'px;'+'right: '+width+'px;'+'z-index: '+z+';">';
  var link = '<a href=' + links[0] + '>' + imgHTML + '</a>';
  document.getElementById('canvas').innerHTML += link;
}



var pics = [
  "img/stargirl.png, img/doodle.png, img/becco.png"
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
  height = 10*window.innerHeight;
  width = 10*window.innerWidth;
  z = index;

  var imgHTML = '<img src="'+pics[index]+'" style="top: '+height+'px;'+'right: '+width+'px;'+'z-index: '+z+';">';
  var link = '<a href=' + links[0] + '>' + imgHTML + '</a>';
  document.getElementById('canvas').innerHTML += link;
}



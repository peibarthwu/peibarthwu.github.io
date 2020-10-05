var pics = [
  "https://64.media.tumblr.com/478d18168a81626229d62b00171223db/9556cf9d042c50d6-97/s1280x1920/af7d3d326c97b2ab020af68145c4b3f321489f8e.png"
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



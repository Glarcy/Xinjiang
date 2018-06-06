var Rslide      = document.querySelectorAll('.Rslide'),
    Lslide      = document.querySelectorAll('.Lslide'),
    control     = document.querySelectorAll('.updownBtn'),
    slideHeight = document.querySelector('.wrapper').clientHeight,
    color = ['#fdc97c', '#FFAEB9', '#71b3d6'],
    index = 0;

function init() {
    slideHeight = document.querySelector('.wrapper').clientHeight;
    for (i = 0; i < Rslide.length; i++) {
        Rslide[i].style.backgroundColor = color[i];
        Rslide[i].style.top = -slideHeight * i + "px";
        Lslide[i].style.top = slideHeight * i + "px";
    }
}
init();
window.addEventListener('resize', function(){
    init()
});

function moveToTop() {
    index++;
    for (el = 0; el < Rslide.length; el++) {
        Rslide[el].style.top = parseInt(Rslide[el].style.top) + slideHeight + "px";
        Lslide[el].style.top = parseInt(Lslide[el].style.top) - slideHeight + "px";
    }

    if (index > Rslide.length-1) {
        index = 0;
        for (el = 0; el < Rslide.length; el++) {
            Rslide[el].style.top = -slideHeight * el + "px";
            Lslide[el].style.top = slideHeight * el + "px";
        }
    }
}

function moveToBottom() {
    index--;
    for (el = 0; el < Rslide.length; el++) {
        Rslide[el].style.top = parseInt(Rslide[el].style.top) - slideHeight + "px";
        Lslide[el].style.top = parseInt(Lslide[el].style.top) + slideHeight + "px";

    }
    if (index < 0) {
        index = Lslide.length-1;
        for (el = 0; el < Rslide.length; el++) {
            Rslide[el].style.top = parseInt(Rslide[el].style.top) + slideHeight * Rslide.length + "px";
            Lslide[el].style.top = parseInt(Lslide[el].style.top) - slideHeight * Lslide.length + "px";
        }
    }
}

function transition() {
    for (t = 0; t < Rslide.length; t++) {
        Rslide[t].style.transition = "all 0.8s";
        Lslide[t].style.transition = "all 0.8s";
    }
}

for (t = 0; t < control.length; t++) {
    control[t].addEventListener("click", function() {

        if (this.classList.contains('upBtn')) {
            moveToTop()
        }
        if (this.classList.contains('downBtn')) {
            moveToBottom()
        }
        transition()
    });
}

var wheeling;
function mousemouve(e) {
    clearTimeout(wheeling);
    e.preventDefault();
    var e = window.event || e;
    var delta = Math.max(-1, Math.min(1, (e.wheelDelta || -e.detail)));
    wheeling = setTimeout(function() {
        wheeling = undefined;
        if (delta === 1) {
            moveToTop()
        }
        if (delta === -1) {
            moveToBottom()
        }
    }, 100);
    transition()
}

document.addEventListener("mousewheel", mousemouve);
document.addEventListener("DOMMouseScroll", mousemouve);

window.onload=function () {
    var mask = document.getElementById('mask');
    var close = document.getElementById('close');
    var makingBtn = document.getElementById('video_two');
    var enquiryBtn = document.getElementById('video_one');
    var making = document.getElementById('making');
    var enquiry = document.getElementById('enquiry');
    close.onclick = function () {
        mask.style.display  ='none';
        making.pause();
        enquiry.pause();
    };
    makingBtn.onclick = function () {
        mask.style.display = 'block';
        close.style.display = 'block';
        making.style.display = 'block';
        enquiry.style.display = 'none';
    };
    enquiryBtn.onclick = function () {
        mask.style.display = 'block';
        close.style.display = 'block';
        enquiry.style.display = 'block';
        making.style.display = 'none';
    };
};


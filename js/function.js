window.onload=function (){
    var close = document.getElementById('close');
    var movie = document.getElementById('watch');
    var video = document.getElementById('mask');
    var function_video = document.getElementById('function');
    movie.onclick = function () {
        video.style.display = 'block';
    };
    close.onclick = function () {
        function_video.pause();
        video.style.display = 'none';
    };

};

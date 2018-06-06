$(document).ready(function (){
    $('.menu, nav').click(function(){
        if ($('.menu').hasClass('active')) {
            $('nav ul').removeClass('active');
            $('nav').delay(800).fadeOut('slow');
            setTimeout(function() {
                $('.menu').removeClass('active');
                $('.introdution').removeClass('active');
            }, 800);
        } else {
            $('.menu').addClass('active');
            $('nav').fadeIn('slow');
            $('nav').addClass('active');
            $('nav ul').addClass('active');
            $('.introdution').addClass('active');
        }
    });

    /*MOUSEMOVE TRANSFORM 3D*/

    !(function () {
        var screenWidth = window.screen.width / 2,
            screenHeight = window.screen.height / 2,
            $elems = document.getElementsByClassName("nav"),
            validPropertyPrefix = '',
            otherProperty = 'perspective(1000px)',
            elemStyle = $elems[0].style;

        if(typeof elemStyle.webkitTransform == 'string') {
            validPropertyPrefix = 'webkitTransform';
        } else if (typeof elemStyle.MozTransform == 'string') {
            validPropertyPrefix = 'MozTransform';
        }

        document.addEventListener('mousemove', function (e) {
            var centroX = e.clientX - screenWidth,
                centroY = screenHeight - (e.clientY + 13),
                degX = centroX * 0.04,
                degY = centroY * 0.01,
                transform;

            for (var i = 0; i < $elems.length; i++) {
                transform = $elems[i];
                transform.style[validPropertyPrefix] = otherProperty + 'rotateY('+ degX +'deg)  rotateX('+ degY +'deg)';
            }
        });
    })();

});
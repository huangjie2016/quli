$(document).ready(function(e) {
    let ii = 0;
    $('.div1 p span').on('click', function(){
        $('.ul li').removeClass('active');
        $('.ul li').eq($(this).index()).addClass('active');
        $('.div1 p span').removeClass('point-active');
        $('.div1 p span').eq($(this).index()).addClass('point-active');
        ii = $(this).index()
    });

    setInterval(() => {
        $('.ul li').eq(ii).removeClass('active');
        $('.div1 p span').eq(ii).removeClass('point-active');

        if(ii + 1 < $('.ul li').length){
            ii += 1;
        }else{
            ii = 0
        }

        $('.ul li').eq(ii).addClass('active');
        $('.div1 p span').eq(ii).addClass('point-active')
    }, 10000)


    $('.open-server-tab span').on('click', function(){
        $('.open-server-tab span').removeClass('open-server-tab-active');
        $('.open-server-tab span').eq($(this).index()).addClass('open-server-tab-active');
        $('.open-server-list ul').css({display:'none'});
        $('.open-server-list ul').eq($(this).index()).fadeIn();
    });

});

//srcroll down arrow jquery//

$(function(){
    $('#down_arrow').on('click', function (e){
        e.preventDefault();
        $('html, body').animate({ scrollTop: $($(this)).offset().top}, 500, 'linear');
    })
})

///////////////////////////////////////////////////////////////////////////////////////////



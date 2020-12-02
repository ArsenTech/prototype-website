// menu
$(".menu-btn").click(function(){
    $(this).toggleClass("fa-times");
    $(".top-nav").toggleClass("active")
});

// skill
$(".skill-per").each(function(){
    var $this = $(this);
    var per = $this.attr("per");
    $this.css("width", per + "%");
    $({animatedValue: 0}).animate({animatedValue: per}, {
        duration: 1000,
        step: function(){
            $this.attr("per", Math.floor(this.animatedValue) + "%");
        },
        complete: function(){
            $this.attr("per", Math.floor(this.animatedValue) + "%");
        }
    });
});

// protection
$(document).ready(function () {
    $("body").on("contextmenu",function(e){
        return false;
    });
    $('body').bind('cut copy paste', function (e) {
        e.preventDefault();
    });
    $('body').bind('cut copy paste', function (e) {
        e.preventDefault();
    });
    $.fn.disableTextSelection = function() {
        return this
        .attr('unselectable', 'on')
        .css('user-select', 'none')
        .on('selectstart dragstart', false);
    };
});

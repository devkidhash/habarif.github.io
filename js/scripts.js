
jQuery(document).ready(function() {
	
    /*
        Background slideshow
    */
    $('.top-content').backstretch("assets/img/backgrounds/1.jpg");
    
	/*
	    Modals
	*/
	$('.launch-modal').on('click', function(e){
		e.preventDefault();
		$( '#' + $(this).data('modal-id') ).modal();
	});

	/*$('modal-id').on('hidden.bs.modal', function () {
		var url = $('#video-frame').attr('src');
		$('#video-frame').attr('src', '');
		$('#video-frame').attr('src', url);
	});*/

	$("#modal-video").on('hidden.bs.modal', function (e) { var $this = $(this); var $frame = $this.find('iframe'); $frame.attr("src", $frame.attr("src")); });

	/*$("#modal-id").on('hidden.bs.modal', function (e) {
    $("#modal-id iframe").attr("src", $("#modal-id iframe").attr("src"));
	});*/


	
});

var clicked=true;
$(".one").on('click', function(){
    if(clicked)
    {
        clicked=false;
        $(".two").css({"top": 0});
    }
    else
    {
        clicked=true;
        $(".two").css({"top": "-500px"});
    }
});

$('.row .btn').on('click', function(e) {
    e.preventDefault();
    var $this = $(this);
    var $collapse = $this.closest('.collapse-group').find('.collapse');
    $collapse.collapse('toggle');
});

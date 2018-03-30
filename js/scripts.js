$(document).ready(function() {
    /* NAVIGATION */
    $("#scroll-home").click(function() {
        $('html, body').animate({
            scrollTop: $("#home").offset().top
        }, 1000);
    });

    $("#scroll-what-we-do").click(function() {
        $('html, body').animate({
            scrollTop: $("#what-we-do").offset().top
        }, 1000);
    });

    $("#scroll-testimonial").click(function() {
        $('html, body').animate({
            scrollTop: $("#testimonials").offset().top
        }, 1000);
    });

    $("#scroll-contact-us").click(function() {
        $('html, body').animate({
            scrollTop: $("#more-info").offset().top
        }, 1000);
    });

    $(".btn-photo").addClass('clicked-button-work');

    /* FLIP IMAGES */
    $(".btn-photo").click(function() {
        if (!$(this).hasClass('clicked-button-work'))
            $(this).addClass('clicked-button-work');
        $(".btn-design").removeClass('clicked-button-work');
        $(".btn-print").removeClass('clicked-button-work');
    });

    $(".btn-design").click(function() {
        if (!$(this).hasClass('clicked-button-work'))
            $(this).addClass('clicked-button-work');
        $(".btn-photo").removeClass('clicked-button-work');
        $(".btn-print").removeClass('clicked-button-work');
    });

    $(".btn-print").click(function() {
        if (!$(this).hasClass('clicked-button-work'))
            $(this).addClass('clicked-button-work');
        $(".btn-photo").removeClass('clicked-button-work');
        $(".btn-design").removeClass('clicked-button-work');
    });

    // EFFECT SHOW ITEMS
    $(window).scroll(function() {
        $(".slideanim").each(function() {
            var pos = $(this).offset().top;

            var winTop = $(window).scrollTop();
            if (pos < winTop + 1000) {
                $(this).addClass("slide");
            }
        });
    });



    //HOME BUTTONS RPESSED

	//default
	$("#div-home").addClass('button-clicked-home');
	$(this).addClass('Proxima-bold');

	//Remove other classes
	$("#div-what-we-do").removeClass('button-clicked-what-we-do');
	$("#scroll-what-we-do").removeClass('Proxima-bold');

	$("#div-testimonial").removeClass('button-clicked-testimonial');
	$("#scroll-testimonial").removeClass('Proxima-bold');

	$("#div-contact-us").removeClass('button-clicked-contact-us');
	$("#scroll-contact-us").removeClass('Proxima-bold');


    $("#scroll-home").click(function() {
        if (!$("#div-home").hasClass('button-clicked-home'))
            $("#div-home").addClass('button-clicked-home');
			$(this).addClass('Proxima-bold');

        //Remove other classes
        $("#div-what-we-do").removeClass('button-clicked-what-we-do');
		$("#scroll-what-we-do").removeClass('Proxima-bold');

        $("#div-testimonial").removeClass('button-clicked-testimonial');
		$("#scroll-testimonial").removeClass('Proxima-bold');

		$("#div-contact-us").removeClass('button-clicked-contact-us');
		$("#scroll-contact-us").removeClass('Proxima-bold');
    });

	$("#scroll-what-we-do").click(function() {
		if (!$("#div-what-we-do").hasClass('button-clicked-what-we-do'))
			$("#div-what-we-do").addClass('button-clicked-what-we-do');
			$(this).addClass('Proxima-bold');

		//Remove other classes
		$("#div-home").removeClass('button-clicked-home');
		$("#scroll-home").removeClass('Proxima-bold');

		$("#div-testimonial").removeClass('button-clicked-testimonial');
		$("#scroll-testimonial").removeClass('Proxima-bold');

		$("#div-contact-us").removeClass('button-clicked-contact-us');
		$("#scroll-contact-us").removeClass('Proxima-bold');
	});

	$("#scroll-testimonial").click(function() {
		if (!$("#div-testimonial").hasClass('button-clicked-testimonial'))
			$("#div-testimonial").addClass('button-clicked-testimonial');
			$(this).addClass('Proxima-bold');

		//Remove other classes
		$("#div-home").removeClass('button-clicked-home');
		$("#scroll-home").removeClass('Proxima-bold');

		$("#div-what-we-do").removeClass('button-clicked-what-we-do');
		$("#scroll-what-we-do").removeClass('Proxima-bold');

		$("#div-contact-us").removeClass('button-clicked-contact-us');
		$("#scroll-contact-us").removeClass('Proxima-bold');
	});

	$("#scroll-contact-us").click(function() {
		if (!$("#div-contact-us").hasClass('button-clicked-contact-us'))
			$("#div-contact-us").addClass('button-clicked-contact-us');
			$(this).addClass('Proxima-bold');

		//Remove other classes
		$("#div-home").removeClass('button-clicked-home');
		$("#scroll-home").removeClass('Proxima-bold');

		$("#div-what-we-do").removeClass('button-clicked-what-we-do');
		$("#scroll-what-we-do").removeClass('Proxima-bold');

		$("#div-testimonial").removeClass('button-clicked-testimonial');
		$("#scroll-testimonial").removeClass('Proxima-bold');
	});

});

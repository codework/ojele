;(function($) {

    $(document).ready( function() {
        $(document).on('click', '.header-area .show-menu', function() {
            $(this).toggleClass('active');
            $(".header-area .navbar").toggleClass('active');
        });
        // $(document).on('click', '.header-area .navbar .close-menu', function() {
        //     $(".header-area .navbar").removeClass('active');
        // });

        AOS.init({
            duration: 1500,
            once: true,
        })
    });

})(jQuery);


// Remove preloader once the page is fully loaded
    window.onload = function() {
        var preloader = document.getElementById("preloader");
        if (preloader) preloader.classList.add("off");
    };
    // Fallback: remove preloader after 3 seconds max in case resources are slow/blocked
    setTimeout(function() {
        var preloader = document.getElementById("preloader");
        if (preloader) preloader.classList.add("off");
    }, 3000);
;(function($) {

    $(document).ready( function() {
        $(document).on('click', '.header-area .show-menu', function() {
            $(this).toggleClass('active');
            $(".header-area .navbar").toggleClass('active');
        });

        if (window.AOS) {
            AOS.init({
                duration: 1500,
                once: true,
            });
        }
    });

})(jQuery);

// Remove preloader - multiple strategies for reliability
(function() {
    function removePreloader() {
        var p = document.getElementById("preloader");
        if (p) {
            p.style.display = "none";
            p.classList.add("off");
        }
    }
    // Fire immediately if DOM already loaded
    if (document.readyState === "complete" || document.readyState === "interactive") {
        removePreloader();
    }
    window.addEventListener("load", removePreloader);
    document.addEventListener("DOMContentLoaded", removePreloader);
    setTimeout(removePreloader, 1500);
})();

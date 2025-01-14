
$(document).ready(function() {
    $('header nav a').on('click', function(event) {
        event.preventDefault();
        var target = $(this).attr('href');
        $('html, body').animate({
            scrollTop: $(target).offset().top
        }, 800);
    });

    $('form').on('submit', function(event) {
        event.preventDefault();
        alert('Merci de nous avoir contactés. Nous vous répondrons bientôt !');
        $(this).trigger('reset');
    });
});


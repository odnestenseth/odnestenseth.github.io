$(document).ready(function () {
    $("#contactMeButton").click(function () {
        $(".overlay").css("visibility", "visible");
        $(".overlay").css("opacity", "1");
    });

    $("#closeContactForm").click(function () {
        $(".overlay").css("opacity", "0");
        setTimeout(function () {
            $(".overlay").css("visibility", "hidden");
        }, 500);

    });

    $("#contactForm").on("submit", function (e) {
        e.preventDefault();

        var name = $("#name").val();
        var email = $("#email").val();
        var message = $("#message").val();

        $.ajax({
            url: "https://formspree.io/odne.stenseth@gmail.com",
            method: "POST",
            data: {
                name: name,
                _replyto: email,
                email: email,
                message: message,
                _subject: "Contact Form Submission from " + name
            },
            dataType: "json"

        });

        $("#contactForm :input").prop("disabled", true);
        $("#contactForm").css("display", "none");
        $("#thankYou").css("display", "block");
    });
})

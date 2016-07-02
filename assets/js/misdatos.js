$(document).ready(function() {
    $(".contact-label>.contact-input").on("focusin", function() {
        $(this).parent("label").toggleClass("lb-focus");
        if (!$(".contact-label.lb-focus .contact-input").val()) {
            $(".contact-label.lb-focus span").toggleClass("placeholder-focus");
        }
    });
    $(".contact-label>.contact-input").on("focusout", function() {
        if (!$(".contact-label.lb-focus .contact-input").val()) {
            $(".contact-label.lb-focus span").toggleClass("placeholder-focus");
        }
        $(this).parent("label").toggleClass("lb-focus");
    });

    $(".contact-label>span").click(function() {
        var inputSpan = $(this).parent("label").children(".contact-input")
        inputSpan.focus();
    });

});

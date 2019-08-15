$(document).ready(function () {
    $(".card-project").height($(".card-project").width());
    $(".card-project-details").height($(".card-project").height() / 1.5);
    $(".card-about").height($(".card-about").width() / 2);
    new Typed("#navbar_brand_text", {
        strings: [
            'Weirdo',
            'Programmer',
            'PHP + Laravel',    
            'JavaScript',
            'SQL',
            'CSS',
        ],
        typeSpeed: 40,
        backSpeed: 40,
        loop: true,
    });
});
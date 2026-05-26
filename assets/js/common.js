// aHR0cHM6Ly9naXRodWIuY29tL2x1b3N0MjYvYWNhZGVtaWMtaG9tZXBhZ2U=
$(function () {
    function applyLanguage(lang) {
        var safeLang = lang === "en" ? "en" : "zh";
        document.documentElement.setAttribute("lang", safeLang);
        document.body.setAttribute("data-current-lang", safeLang);
        try {
            localStorage.setItem("site-lang", safeLang);
        } catch (e) {}
    }

    var savedLang = "zh";
    try {
        savedLang = localStorage.getItem("site-lang") || "zh";
    } catch (e) {}
    applyLanguage(savedLang);

    $("[data-lang-toggle]").on("click", function () {
        var nextLang = document.body.getAttribute("data-current-lang") === "zh" ? "en" : "zh";
        applyLanguage(nextLang);
    });

    lazyLoadOptions = {
        scrollDirection: 'vertical',
        effect: 'fadeIn',
        effectTime: 300,
        placeholder: "",
        onError: function(element) {
            console.log('[lazyload] Error loading ' + element.data('src'));
        },
        afterLoad: function(element) {
            if (element.is('img')) {
                // remove background-image style
                element.css('background-image', 'none');
                element.css('min-height', '0');
            } else if (element.is('div')) {
                // set the style to background-size: cover; 
                element.css('background-size', 'cover');
                element.css('background-position', 'center');
            }
        }
    }

    $('img.lazy, div.lazy:not(.always-load)').Lazy({visibleOnly: true, ...lazyLoadOptions});
    $('div.lazy.always-load').Lazy({visibleOnly: false, ...lazyLoadOptions});

    $('[data-toggle="tooltip"]').tooltip()

    var $grid = $('.grid').masonry({
        "percentPosition": true,
        "itemSelector": ".grid-item",
        "columnWidth": ".grid-sizer"
    });
    // layout Masonry after each image loads
    $grid.imagesLoaded().progress(function () {
        $grid.masonry('layout');
    });

    $(".lazy").on("load", function () {
        $grid.masonry('layout');
    });
})

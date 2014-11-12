/*jslint browser: true*/
/*global $, jQuery, alert*/

(function () {
    "use strict";
        
    //Hide the menu initially
    $(document).ready(function () {
        var menu = $(".primary-nav"),
            menuWidth = menu.outerWidth();
        
        menu.css("right", ((-1) * menuWidth) + "px");
        menu.css("display", "block");
    });
    
    //Fade in page banner on load
    $(document).ready(function () {
        $(".banner h1").animate({"opacity": "1"}, 1000);
    });
    
    //Functionality for menu buttons
    $(document).ready(function () {
        var menu = $(".primary-nav"),
            menuIcon = $(".menu-icon"),
            menuWidth = menu.outerWidth();
        
        menuWidth = (-1) * menuWidth + "px";
        
        menuIcon.click(function () {
            menu.animate({"right": "0"}, 200);
            menuIcon.css("opacity", "0");
            menuIcon.css("cursor", "auto");
        });
        
        $(".cross-icon").click(function () {
            menu.animate({"right": menuWidth}, 200);
            menuIcon.css("opacity", "1");
            menuIcon.css("cursor", "pointer");
        });
        
        $(document).mouseup(function () {
            if (!menu.is(event.target) && menu.has(event.target).length === 0) {
                menu.animate({"right": menuWidth}, 200);
                menuIcon.css("opacity", "1");
                menuIcon.css("cursor", "pointer");
            }
        });
    });
    
    //Show or hide header background on scroll
    $(window).bind("scroll", function () {
        var header = $(".primary-header"),
            menuicon = $(".menu-icon div");
        
        if ($(this).scrollTop() > 50) {
            header.css("background-color", "rgba(200, 200, 200, 0.8)");
            header.css("color", "#000");
            menuicon.css("border-color", "#000");
        } else {
            header.css("background-color", "rgba(200, 200, 200, 0)");
            header.css("color", "#fff");
            menuicon.css("border-color", "#fff");
        }
    });
}());
/*jslint browser: true*/
/*global $, WOW, jQuery, alert*/

(function () {
    'use strict';
    
    $(document).ready(function () {
        var menu = {
            self: $('.primary-nav'),
            icon: $('.menu-icon'),
            cross: $('.cross-icon')
        },
            header = $('.primary-header');
        menu.width = (menu.self.outerWidth() * (-1)) + 'px';
        menu.icon.div = $('.menu-icon div');
        
        //Position the menu initially
        menu.self.css('right', menu.width);
        menu.self.css('display', 'block');
        
        //Initialize wow.js
        
        //Functionality for menu buttons
        menu.icon.click(function () {
            menu.self.animate({ 'right': '0' }, 200);
            menu.icon.css('opacity', '0');
            menu.icon.css('cursor', 'auto');
        });
        
        menu.cross.click(function () {
            menu.self.animate({ 'right': menu.width }, 200);
            menu.icon.css('opacity', '1');
            menu.icon.css('cursor', 'pointer');
        });
        
        $(document).mouseup(function () {
            if (!menu.self.is(event.target) && menu.self.has(event.target).length === 0) {
                menu.self.animate({ 'right': menu.width }, 200);
                menu.icon.css('opacity', '1');
                menu.icon.css('cursor', 'pointer');
            }
        });
        
        //Fade in header background on scroll
        $(window).bind('scroll', function () {
            if ($(this).scrollTop() > 50) {
                header.css('background', 'rgba(200, 200, 200, 0.8)');
                header.css('color', '#000');
                menu.icon.div.css('border-color', '#000');
            } else {
                header.css('background', 'rgba(200, 200, 200, 0)');
                header.css('color', '#fff');
                menu.icon.div.css('border-color', '#fff');
            }
        });
    });
}());
/* =========================================================
Comment Form
============================================================ */
jQuery(document).ready(function(){
    if(jQuery("#comments-form").length > 0){
    // Validate the contact form
      jQuery('#comments-form').validate({
    
        // Add requirements to each of the fields
        rules: {
            name: {
                required: true,
                minlength: 2
            },
            email: {
                required: true,
                email: true
            },
            message: {
                required: true,
                minlength: 10
            }
        },
        
        // Specify what error messages to display
        // when the user does something horrid
        messages: {
            name: {
                required: "Please enter your name.",
                minlength: jQuery.format("At least {0} characters required.")
            },
            email: {
                required: "Please enter your email.",
                email: "Please enter a valid email."
            },
            url: {
                required: "Please enter your url.",
                url: "Please enter a valid url."
            },
            message: {
                required: "Please enter a message.",
                minlength: jQuery.format("At least {0} characters required.")
            }
        },
        
        // Use Ajax to send everything to processForm.php
        submitHandler: function(form) {
            jQuery("#submit-comment").attr("value", "Sending...");
            jQuery(form).ajaxSubmit({
                success: function(responseText, statusText, xhr, $form) {
                    jQuery("#response").html(responseText).hide().slideDown("fast");
                    jQuery("#submit-comment").attr("value", "Comment");
                }
            });
            return false;
        }
      });
    }
    
    if(jQuery("#contact-form").length > 0){
    // Validate the contact form
      jQuery('#contact-form').validate({
    
        // Add requirements to each of the fields
        rules: {
            name: {
                required: true,
                minlength: 2
            },
            email: {
                required: true,
                email: true
            },
            message: {
                required: true,
                minlength: 10
            }
        },
        
        // Specify what error messages to display
        // when the user does something horrid
        messages: {
            name: {
                required: "Please enter your name.",
                minlength: jQuery.format("At least {0} characters required.")
            },
            email: {
                required: "Please enter your email.",
                email: "Please enter a valid email."
            },
            url: {
                required: "Please enter your url.",
                url: "Please enter a valid url."
            },
            message: {
                required: "Please enter a message.",
                minlength: jQuery.format("At least {0} characters required.")
            }
        },
        
        // Use Ajax to send everything to processForm.php
        submitHandler: function(form) {
            jQuery("#submit-contact").attr("value", "Sending...");
            jQuery(form).ajaxSubmit({
                success: function(responseText, statusText, xhr, $form) {
                    jQuery("#response").html(responseText).hide().slideDown("fast");
                    jQuery("#submit-contact").attr("value", "Submit");
                }
            });
            return false;
        }
      });
    }
});

/* =========================================================
Sub menu
==========================================================*/
(function($){ //create closure so we can safely use $ as alias for jQuery

    jQuery(document).ready(function(){

        // initialise plugin
        var example = jQuery('#main-menu').superfish({
            //add options here if required
        });
    });

})(jQuery);

/* =========================================================
Mobile menu
============================================================ */
jQuery(document).ready(function () {
     
    jQuery('#mobile-menu > span').click(function () {
 
        var mobile_menu = jQuery('#toggle-view-menu');
 
        if (mobile_menu.is(':hidden')) {
            mobile_menu.slideDown('300');
            jQuery(this).children('span').html('-');    
        } else {
            mobile_menu.slideUp('300');
            jQuery(this).children('span').html('+');    
        }
        
        
         
    });
    
    jQuery('#toggle-view-menu li').click(function () {
 
        var text = jQuery(this).children('div.menu-panel');
 
        if (text.is(':hidden')) {
            text.slideDown('300');
            jQuery(this).children('span').html('-');    
        } else {
            text.slideUp('300');
            jQuery(this).children('span').html('+');    
        }
        
        jQuery(this).toggleClass('active');
         
    });
 
});

/* =========================================================
Create footer mobile menu
============================================================ */
function createMobileMenu(menu_id, mobile_menu_id){
    // Create the dropdown base
    jQuery("<select />").appendTo(menu_id);
    jQuery(menu_id).find('select').first().attr("id",mobile_menu_id);
    
    // Populate dropdown with menu items
    jQuery(menu_id).find('a').each(function() {        
        var el = jQuery(this);       
        
        var selected = '';
        if (el.parent().hasClass('current-menu-item') == true){
            selected = "selected='selected'";
        }        
        
        var depth = el.parents("ul").size();
        var space = '';
        if(depth > 1){
            for(i=1; i<depth; i++){
                space += '&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;';
            }
        }        
        
        jQuery("<option "+selected+" value='"+el.attr("href")+"'>"+space+el.text()+"</option>").appendTo(jQuery(menu_id).find('select').first());
    });
    jQuery(menu_id).find('select').first().change(function() {
        window.location = jQuery(this).find("option:selected").val();
    });    
}

jQuery(document).ready(function(){
    if(jQuery('.t-bottom-sidebar').length > 0){
        createMobileMenu('.t-bottom-sidebar','responsive-menu');    
    }
});

/* =========================================================
HeadLine Scroller
============================================================ */

jQuery(function() {
    var _scroll = {
        delay: 1000,
        easing: 'linear',
        items: 1,
        duration: 0.07,
        timeoutDuration: 0,
        pauseOnHover: 'immediate'
    };
    jQuery('.ticker-1').carouFredSel({
        width: 1000,
        align: false,
        items: {
            width: 'variable',
            height: 30,
            visible: 1
        },
        scroll: _scroll
    });

    //  set carousels to be 100% wide
    jQuery('.caroufredsel_wrapper').css('width', '100%');
});

/* =========================================================
Flex slider
============================================================ */
jQuery(window).load(function(){
  jQuery('.home-slider').flexslider({
    animation: "slide",
    start: function(slider){
      jQuery('body').removeClass('loading');
    }
  });

  jQuery('.news-slider').flexslider({
    animation: "slide",
    start: function(slider){
      jQuery('body').removeClass('loading');
    }
  });

  jQuery('.gallery-slider').flexslider({
    animation: "slide",
    start: function(slider){
      jQuery('body').removeClass('loading');
    }
  });
});

/* =========================================================
Carousel
============================================================ */
jQuery(window).load(function() {

    if( jQuery(".kopa-featured-news-carousel").length > 0){
        jQuery(".kopa-featured-news-carousel").carouFredSel({
            responsive: true,
            prev: '#prev-1',
            next: '#next-1',
            width: '100%',
            scroll: 1,
            auto: false,
            items: {
                width: 160,
                height: 'auto',
                visible: {
                    min: 1,
                    max: 3
                }
            }
        });
    }

    if( jQuery(".full-featured-news-carousel").length > 0){
        jQuery(".full-featured-news-carousel").carouFredSel({
            responsive: true,
            prev: '#prev-2',
            next: '#next-2',
            width: '100%',
            scroll: 1,
            auto: false,
            items: {
                width: 168,
                height: 'auto',
                visible: {
                    min: 1,
                    max: 6
                }
            }
        });
    }
});

/* =========================================================
prettyPhoto
============================================================ */
jQuery(document).ready(function(){
    init_image_effect();
});

jQuery(window).resize(function(){
    init_image_effect();
});

function init_image_effect(){    

    var view_p_w = jQuery(window).width();
    var pp_w = 500;
    var pp_h = 344;
    
    if(view_p_w <= 479){
        pp_w = '120%';
        pp_h = '100%';
    }
    else if(view_p_w >= 480 && view_p_w <= 599){
        pp_w = '100%';
        pp_h = '170%';
    }
            
    jQuery("a[rel^='prettyPhoto']").prettyPhoto({
        show_title: false,
        deeplinking:false,
        social_tools:false,
        default_width: pp_w,
        default_height: pp_h
    });    
}

/* =========================================================
Isotope
============================================================ */
// modified Isotope methods for gutters in masonry
jQuery.Isotope.prototype._getMasonryGutterColumns = function() {
    var gutter = this.options.masonry && this.options.masonry.gutterWidth || 0;
    containerWidth = this.element.width();

    this.masonry.columnWidth = this.options.masonry && this.options.masonry.columnWidth ||
            // or use the size of the first item
            this.jQueryfilteredAtoms.outerWidth(true) ||
            // if there's no items, use size of container
            containerWidth;

    this.masonry.columnWidth += gutter;

    this.masonry.cols = Math.floor((containerWidth + gutter) / this.masonry.columnWidth);
    this.masonry.cols = Math.max(this.masonry.cols, 1);
};

jQuery.Isotope.prototype._masonryReset = function() {
    // layout-specific props
    this.masonry = {};
    // FIXME shouldn't have to call this again
    this._getMasonryGutterColumns();
    var i = this.masonry.cols;
    this.masonry.colYs = [];
    while (i--) {
        this.masonry.colYs.push(0);
    }
};

jQuery.Isotope.prototype._masonryResizeChanged = function() {
    var prevSegments = this.masonry.cols;
    // update cols/rows
    this._getMasonryGutterColumns();
    // return if updated cols/rows is not equal to previous
    return (this.masonry.cols !== prevSegments);
};

jQuery(function() {
    // cache container
    var kp_columnWidth = get_colunm_width();
    var jQuerycontainer = jQuery('.kp-categories-3 .isotop-item');
// initialize isotope
    jQuerycontainer.isotope({
        itemSelector: '.kp-categories-3 .element',
        resizable: false,
        masonry: {
            columnWidth: kp_columnWidth,
            gutterWidth: 20
        }
    });

});

jQuery(window).smartresize(function() {
    var kp_columnWidth = get_colunm_width();
    var jQuerycontainer = jQuery('.kp-categories-3 .isotop-item');
    jQuerycontainer.isotope({
        // update columnWidth to a percentage of container width
        masonry: {columnWidth: kp_columnWidth}
    });
});

function get_colunm_width() {
    var view_port_w;
    var kp_colunm_width = 350;
    if (self.innerWidth !== undefined)
        view_port_w = self.innerWidth;
    else {
        var D = document.documentElement;
        if (D)
            view_port_w = D.clientWidth;
    }

    if (view_port_w >= 1024 && view_port_w <= 1120) {
        kp_colunm_width = 309;
    }
    else if (view_port_w >= 980 && view_port_w < 1023) {
        kp_colunm_width = 279;
    }
    else if (view_port_w >= 800 && view_port_w < 979) {
        kp_colunm_width = 189;
    }
    else if (view_port_w >= 768 && view_port_w < 799) {
        kp_colunm_width = 179;
    }
    else if (view_port_w >= 640 && view_port_w < 767) {
        kp_colunm_width = 270;
    }
    else if (view_port_w >= 480 && view_port_w < 639) {
        kp_colunm_width = 180;
    }
    else if (view_port_w <= 479) {
        kp_colunm_width = 240;
    }
    return kp_colunm_width;
}


jQuery(function() {
    // cache container
    var kp_columnWidth_1 = get_colunm_width_1();
    var jQuerycontainer_1 = jQuery('.kp-categories-4 .isotop-item');
// initialize isotope
    jQuerycontainer_1.isotope({
        itemSelector: '.kp-categories-4 .element',
        resizable: false,
        masonry: {
            columnWidth: kp_columnWidth_1,
            gutterWidth: 20
        }
    });

});

jQuery(window).smartresize(function() {
    var kp_columnWidth_1 = get_colunm_width_1();
    var jQuerycontainer_1 = jQuery('.kp-categories-4 .isotop-item');
    jQuerycontainer_1.isotope({
        // update columnWidth to a percentage of container width
        masonry: {columnWidth: kp_columnWidth_1}
    });
});

function get_colunm_width_1() {
    var view_port_w;
    var kp_colunm_width_1 = 226;
    if (self.innerWidth !== undefined)
        view_port_w = self.innerWidth;
    else {
        var D = document.documentElement;
        if (D)
            view_port_w = D.clientWidth;
    }

    if (view_port_w >= 1024 && view_port_w <= 1120) {
        kp_colunm_width_1 = 199;
    }
    else if (view_port_w >= 980 && view_port_w < 1023) {
        kp_colunm_width_1 = 179;
    }
    else if (view_port_w >= 800 && view_port_w < 979) {
        kp_colunm_width_1 = 189;
    }
    else if (view_port_w >= 768 && view_port_w < 799) {
        kp_colunm_width_1 = 179;
    }
    else if (view_port_w >= 640 && view_port_w < 767) {
        kp_colunm_width_1 = 270;
    }
    else if (view_port_w >= 480 && view_port_w < 639) {
        kp_colunm_width_1 = 180;
    }
    else if (view_port_w <= 479) {
        kp_colunm_width_1 = 240;
    }
    return kp_colunm_width_1;
}

/* =========================================================
Tabs
============================================================ */
jQuery(document).ready(function() {
    
    if( jQuery(".tab-content-3").length > 0){   
        //Default Action Product Tab
        jQuery(".tab-content-3").hide(); //Hide all content
        jQuery("ul.tabs-3 li:first").addClass("active").show(); //Activate first tab
        jQuery(".tab-content-3:first").show(); //Show first tab content
        //On Click Event Product Tab
        jQuery("ul.tabs-3 li").click(function() {
            jQuery("ul.tabs-3 li").removeClass("active"); //Remove any "active" class
            jQuery(this).addClass("active"); //Add "active" class to selected tab
            jQuery(".tab-content-3").hide(); //Hide all tab content
            var activeTab = jQuery(this).find("a").attr("href"); //Find the rel attribute value to identify the active tab + content
            jQuery(activeTab).fadeIn(); //Fade in the active content
            return false;
        
        });
    }
    
});

/* =========================================================
Accordion
========================================================= */
jQuery(document).ready(function() {
        var acc_wrapper=jQuery('.acc-wrapper');
        if (acc_wrapper.length >0) 
        {
            
            jQuery('.acc-wrapper .accordion-container').hide();
            jQuery.each(acc_wrapper, function(index, item){
                jQuery(this).find(jQuery('.accordion-title')).first().addClass('active').next().show();
                
            });
            
            jQuery('.accordion-title').on('click', function(e) {
                kopa_accordion_click(jQuery(this));
                e.preventDefault();
            });
            
            var titles = jQuery('.accordion-title');
            
            jQuery.each(titles,function(){
                kopa_accordion_click(jQuery(this));
            });
        }
        
});

function kopa_accordion_click (obj) {
    if( obj.next().is(':hidden') ) {
        obj.parent().find(jQuery('.active')).removeClass('active').next().slideUp(300);
        obj.toggleClass('active').next().slideDown(300);
                            
    }
jQuery('.accordion-title span').html('+');
    if (obj.hasClass('active')) {
        obj.find('span').first().html('-');              
    } 
}

/* =========================================================
Toggle Boxes
============================================================ */
jQuery(document).ready(function () {
     
    jQuery('#toggle-view li').click(function (event) {
        
        var text = jQuery(this).children('div.panel');
 
        if (text.is(':hidden')) {
            jQuery(this).addClass('active');
            text.slideDown('300');
            jQuery(this).children('span').html('-');                 
        } else {
            jQuery(this).removeClass('active');
            text.slideUp('300');
            jQuery(this).children('span').html('+');               
        }
         
    });
 
});

/* =========================================================
Gallery slider
============================================================ */
jQuery(window).load(function(){
  
  jQuery('.kp-gallery-carousel').flexslider({
    animation: "slide",
    controlNav: false,
    slideshow: false,
    itemWidth: 162,
    itemMargin: 6,
    asNavFor: '.kp-gallery-slider'
  });
  
  jQuery('.kp-gallery-slider').flexslider({
    animation: "slide",
    controlNav: false,
    slideshow: false,
    sync: ".kp-gallery-carousel",
    start: function(slider){
      jQuery('body').removeClass('loading');
    }
  });
});
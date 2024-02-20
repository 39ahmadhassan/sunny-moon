// Custom Js
// prettier-ignore
jQuery(document).ready(function() {
  "use strict";
  // Custom Navbar Collapse Menu on Mobile
  jQuery(".custom-collapse .close-collapse").on("click", function() {
    if (jQuery(".custom-collapse").hasClass("show")) {
      jQuery(".custom-collapse").addClass("closed");
      setTimeout(function() {
        jQuery(".custom-collapse").removeClass("closed");
        jQuery(".custom-collapse").removeClass("show");
      }, 300);
    }
  });
  // Homepage Product Slider
  jQuery(".product-slider-box").slick({
    infinite: true,
    arrows: true,
    dots: true,
    fade: true,
    autoplay: true,
    autolpaySpeed: 3000,
    slidesToShow: 1,
    slidesToScroll: 1,
    prevArrow:
      '<span class="slickArrow slickArrow--prev"><i class="far fa-angle-left"></i></span>',
    nextArrow:
      '<span class="slickArrow slickArrow--next"><i class="far fa-angle-right"></i></span>',
    customPaging: function(slider, i) {
      return (
        '<a class="slick-custom-dot">' +
        jQuery(slider.$slides[i]).attr("title") +
        "</a>"
      );
    }
  });
  // GSAP Animations
  var animation_controller = new ScrollMagic.Controller();
  // Header Animation
  var header_logo = jQuery("header nav .navbar-brand");
  var header_menu = jQuery("header nav .nav_menu");

  var header_tl = new TimelineMax();
  header_tl.from(header_logo, 1.5, 
    {
    x: -40,
    opacity: 0
  }
  ).from(header_menu, 1.5, 
    {
    x: 40,
    opacity: 0
  }, "-=1.5"
  );

  header_tl.timeScale(2.6);

  var header_scene = new ScrollMagic.Scene({
    triggerElement: "header",
    triggerHook: 1,
  }).setTween(header_tl).addTo(animation_controller);

  // Hero Section Animations
  var h6 = jQuery(".hero-section h6");
  var h1 = jQuery(".hero-section h1");
  var p = jQuery(".hero-section p");
  var ctn_btn = jQuery(".hero-section .hero-cta-btn");
  var hero_left_img = jQuery(".hero-section .hero-img-left");
  var hero_right_img = jQuery(".hero-section .right-side > img");
  

  var hero_tl = new TimelineMax();

  hero_tl.from(h6, 1,
      {
        y: 20,
        opacity: 0
      }
    ).from(h1, 1,
      {
        y: 20,
        opacity: 0
      }, "-=0.5"
    ).from(p, 1,
      {
        y: 20,
        opacity: 0
      },"-=0.5"
    ).from(ctn_btn, 1,
      {
        y: 20,
        opacity: 0
      }, "-=0.5"
    ).from(hero_left_img, 1,
      {
        opacity: 0,
        scale: 0.97
      }, "-=0.5"
    ).from(hero_right_img, 1.5,
      {
        opacity: 0,
        scale: 0.97,
      }, 2
    );

  hero_tl.timeScale(2.6);
  var hero_scene = new ScrollMagic.Scene({
    triggerElement: ".hero-inner",
    triggerHook: 0.15,
  }).setTween(hero_tl).addTo(animation_controller);

  // Heading Section Styles
  jQuery(".heading-box.big").each(function(){
    var heading_back_text = jQuery(this).find(".back-text");
    var h1 = jQuery(this).find("h1");
  
    var heading_tl = new TimelineMax();
  
    heading_tl.from(heading_back_text, 1,
        {
          opacity: 0,
          scale: 1.3
        }
      ).from(h1, 1,
        {
          opacity: 0,
          scale: 0.8
        }, "-=0.5"
      );
  
    heading_tl.timeScale(2);
  
    var heading_scene = new ScrollMagic.Scene({
      triggerElement: this,
      triggerHook: 0.8
    }).setTween(heading_tl).addTo(animation_controller);
  });

  // Measurement Section Styles
  var measurement_p = jQuery(".measurement-content p");
  var measurement_img = jQuery(".measerment-img-box img");

  var measurement_tl = new TimelineMax();

  measurement_tl.from(measurement_p, 0.8,
    {
      y: 30,
      opacity: 0
    }
  ).staggerFrom(measurement_img, 1.4, 
  { 
    scale:0.8, 
    opacity:0, 
    ease:Elastic.easeOut, 
    force3D:true
  }, 
  0.2
  );

  var measurement_scene = new ScrollMagic.Scene({
    triggerElement: ".measurement-section",
    triggerHook: 0.5
  }).setTween(measurement_tl).addTo(animation_controller);

  // Lifestyle Animations
  jQuery(".lifestyle-box:nth-child(odd)").each(function(){
    var bg_shape = jQuery(this).find(".bg-shape");
      var left_lifestyle_img = jQuery(this).find(".lifestyle-img-box img");
      var right_lifestyle_content = jQuery(this).find(".lifestyle-content");
      
      var lifestyle_tl1 = new TimelineMax();

      lifestyle_tl1.from(bg_shape, 1,
        {
          width: 0,
        }
      ).from(left_lifestyle_img, 1,
        {
          x: -30,
          opacity: 0
        }, "=-0.5"
      ).from(right_lifestyle_content, 1,
        {
          x: 30,
          opacity: 0
        }, "=-1"
      );

      lifestyle_tl1.timeScale(1.5);

      var lifestyle_scene1 = new ScrollMagic.Scene({
        triggerElement: this,
        triggerHook: 0.7
      }).setTween(lifestyle_tl1).addTo(animation_controller);
  });

  jQuery(".lifestyle-box:nth-child(even)").each(function(){
    var bg_shape = $(this).find(".bg-shape");
      var right_lifestyle_img = jQuery(this).find(".lifestyle-img-box img");
      var left_lifestyle_content = jQuery(this).find(".lifestyle-content");
      
      var lifestyle_tl2 = new TimelineMax();

      lifestyle_tl2.from(bg_shape, 1,
        {
          width: 0,
        }
      ).from(right_lifestyle_img, 1,
        {
          x: 30,
          opacity: 0
        }, "=-0.5"
      ).from(left_lifestyle_content, 1,
        {
          x: -30,
          opacity: 0
        }, "=-1"
      );

      lifestyle_tl2.timeScale(1.5);

      var lifestyle_scene2 = new ScrollMagic.Scene({
        triggerElement: this,
        triggerHook: 0.7
      }).setTween(lifestyle_tl2).addTo(animation_controller);
  });

  // Product Slider Animations
  var product_p = jQuery(".product-slider .product-slider-content p");
  var product_slider_img = jQuery(".product-slider .product-slider-box img");
  
  var product_slider_tl = new TimelineMax();

  product_slider_tl.from(product_p, 1,
    {
      y: 30,
      opacity: 0
    }
  ).from(product_slider_img, 1,
    {
      scale: 0.9,
      opacity: 0
    }, "=-0.5"
  );

  product_slider_tl.timeScale(1.5);

  var product_slider = new ScrollMagic.Scene({
    triggerElement: ".product-slider",
    triggerHook: 0.5
  }).setTween(product_slider_tl).addTo(animation_controller);

  // CTA Section Animation
  var cta_h1 = jQuery(".cta-section h1");
  var cta_p = jQuery(".cta-section p");
  var cta_btn = jQuery(".cta-section .hero-cta-btn > a");
  
  var cta_tl = new TimelineMax();

  cta_tl.from(cta_h1, 1,
    {
      y: 30,
      opacity: 0
    }
  ).from(cta_p, 1,
    {
      y: 30,
      opacity: 0
    }, "=-0.5"
  ).from(cta_btn, 1,
    {
      scale: 0.9,
      opacity: 0
    }, "=-0.5"
  );

  cta_tl.timeScale(2);

  var cta_scene = new ScrollMagic.Scene({
    triggerElement: ".cta-section",
    triggerHook: 0.7
  }).setTween(cta_tl).addTo(animation_controller);

  // Products Page Animation
  jQuery(".product-container").each(function(){
    var product_page_img_bg = jQuery(this).find(".img-col");
    var product_page_img = jQuery(this).find(".img-col > img");
    var product_heading = jQuery(this).find(".text-col h3");
    var product_content_p = jQuery(this).find(".product-text-content p");
    var product_features = jQuery(this).find(".product-text-content .product-features");
    var reviews = jQuery(this).find(".product-reviews");
    var stars = jQuery(this).find(".product-reviews .stars-box > i");
    var buy_btn = jQuery(this).find(".buy-product-btn");

    var product_page_tl = new TimelineMax();

    product_page_tl.from(product_page_img_bg, 1,
      {
        opacity: 0
      }
    ).from(product_page_img, 1,
      {
        scale: 0.9,
        opacity: 0
      }, "=-0.5"
    ).from(product_heading, 1,
      {
        y: 30,
        opacity: 0
      }, "=-0.7"
    ).from(product_content_p, 1,
      {
        y: 20,
        opacity: 0
      }, "=-0.7"
    ).from(product_features, 1,
      {
        y: 20,
        opacity: 0
      }, "=-0.7"
    ).from(reviews, 1,
      {
        x: 30,
        opacity: 0
      }, "=-0.7"
    ).staggerFrom(stars, 1, 
    { 
      scale: 1.6, 
      opacity: 0,
      ease: Bounce.easeInOut, 
      force3D: true
    }, 0.2,  "=-0.7"
    ).from(buy_btn, 1,
      {
        y: 30,
        opacity: 0
      }, 2
    );

    product_page_tl.timeScale(2);

    var product_page_scene = new ScrollMagic.Scene({
      triggerElement: this,
      triggerHook: 0.8
    }).setTween(product_page_tl).addTo(animation_controller);
  });

  // About Heading Animation
  var about_h1 = jQuery(".about-section .about-heading h1");
  var overlay_h1 = jQuery(".about-section .about-heading h1 > .overlay");
  var about_img = jQuery(".about-section .about-img-box > img");
  
  var about_heading_tl = new TimelineMax();

  about_heading_tl.to(overlay_h1, 1,
    {
      height: 0,
      ease:Power2.easeOut,
      delay: 0.25
    }
  ).from(about_img, 1,
    {
      scale: 0.95,
      opacity: 0
    }, "-=0.5"
  );

  about_heading_tl.timeScale(1.5);

  var about_heading_scene = new ScrollMagic.Scene({
    triggerElement: ".about-section",
    triggerHook: 0.2,
  }).setTween(about_heading_tl).addTo(animation_controller);

  // How We Are Animation
  var who_we_are_h1 = jQuery(".who-we-are-section h1");
  var who_we_are_p = jQuery(".who-we-are-section p");
  
  var who_we_are_tl = new TimelineMax();

  who_we_are_tl.from(who_we_are_h1, 1,
    {
      y: 30,
      opacity: 0
    }
  ).from(who_we_are_p, 1,
    {
      y: 30,
      opacity: 0
    }, "-=0.5"
  );

  who_we_are_tl.timeScale(2);

  var who_we_are_scene = new ScrollMagic.Scene({
    triggerElement: ".who-we-are-section",
    triggerHook: 0.8
  }).setTween(who_we_are_tl).addTo(animation_controller);

  // What Drive Section
  var what_drive_h1 = jQuery(".what-drive-section h1");
  var what_drive_p = jQuery(".what-drive-section p");
  
  var what_drive_tl = new TimelineMax();

  what_drive_tl.from(what_drive_h1, 1,
    {
      y: 30,
      opacity: 0
    }
  ).from(what_drive_p, 1,
    {
      y: 30,
      opacity: 0
    }, "-=0.5"
  );

  what_drive_tl.timeScale(2);

  var what_drive_scene = new ScrollMagic.Scene({
    triggerElement: ".what-drive-section",
    triggerHook: 0.8
  }).setTween(what_drive_tl).addTo(animation_controller);

  // Testimonial Section
  var testimonial_overlay = jQuery(".testimonial-section .overlay");
  var testimonial_h5 = jQuery(".testimonial-section h5");
  
  var testimonials_tl = new TimelineMax();

  testimonials_tl.from(testimonial_h5, 1,
    {
      opacity: 0
    }
  ).to(testimonial_overlay, 1,
    {
      width: 0
    }, "-=1"
  );

  var testimonial_scene = new ScrollMagic.Scene({
    triggerElement: ".testimonial-section",
    triggerHook: 0.8
  }).setTween(testimonials_tl).addTo(animation_controller);

  // Heading Box 2 Animation
  var heading2_h1 = jQuery(".heading-box2 h1");
  var heading_overlay = jQuery(".heading-box2 .overlay");
  
  var heading2_tl = new TimelineMax();

  heading2_tl.to(heading_overlay, 0.6,
    {
      height: 0,
      ease:Power2.easeOut,
      delay: 0.25
    }
  ).from(heading2_h1, 1,
    {
      opacity: 0
    }, "-=0.5"
  );

  var heading2_scene = new ScrollMagic.Scene({
    triggerElement: ".heading-box2",
    triggerHook: 0.2,
  }).setTween(heading2_tl).addTo(animation_controller);

  // Contact Form Animation
  var contact_form = jQuery(".contact-form-section form");
  var contact_info = jQuery(".contact-form-section .contact-info");
  
  var contact_tl = new TimelineMax();

  contact_tl.from(contact_form, 1,
    {
      x: -40,
      opacity: 0,
    }
  ).from(contact_info, 1,
    {
      x: 40,
      opacity: 0,
    }, "-=0.5"
  );

  contact_tl.timeScale(2);

  var contact_scene = new ScrollMagic.Scene({
    triggerElement: ".contact-form-inner",
    triggerHook: 0.7,
  }).setTween(contact_tl).addTo(animation_controller);
  

  // Footer Animation
  var footer_logo = jQuery("footer .footer-logo");
  var footer_links = jQuery("footer .footer-links a");
  var footer_social_links = jQuery("footer .footer-social-links > a");
  var copyright_text = jQuery("footer .copyright-text");
  
  var footer_tl = new TimelineMax();

  footer_tl.from(footer_logo, 1,
    {
      x: -30,
    }
  ).staggerFrom(footer_links, 1, 
    { 
      scale:0.9, 
      opacity:0, 
      ease:Linear.easeInOut, 
      force3D:true
    }, 
    0.1, "-=0.5"
  ).staggerFrom(footer_social_links, 1, 
    { 
      x: 10,
      opacity:0, 
    }, 
    0.2, 1
  ).from(copyright_text, 1,
    {
      opacity: 0
    }, "-=0.5"
  );

  footer_tl.timeScale(2);

  var footer_scene = new ScrollMagic.Scene({
    triggerElement: "footer",
    triggerHook: 0.9
  }).setTween(footer_tl).addTo(animation_controller);



});

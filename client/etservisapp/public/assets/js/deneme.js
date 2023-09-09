tns({
    container: '.road-map-slider',
    items: 1,
    slideBy: 'page',
    autoplay: false,
    mouseDrag: true,
    gutter: 0,
    nav: true,
    controls: false,
    responsive: {
        0: {
            items: 2,
        },
        540: {
            items: 3,
        },
        768: {
            items: 4,
        },
        992: {
            items: 4,
        },
        1170: {
            items: 6,
        }
    }
});

//========= testimonial 
tns({
    container: '.testimonial-slider',
    items: 3,
    slideBy: 'page',
    autoplay: false,
    mouseDrag: true,
    gutter: 0,
    nav: true,
    controls: false,
    responsive: {
        0: {
            items: 1,
        },
        540: {
            items: 1,
        },
        768: {
            items: 2,
        },
        992: {
            items: 2,
        },
        1170: {
            items: 3,
        }
    }
});

var cu = new counterUp({
    start: 0,
    duration: 2000,
    intvalues: true,
    interval: 100,
    append: " ",
});
cu.start();

//========= glightbox
GLightbox({
    'href': 'https://www.youtube.com/watch?v=r44RKWyfcFw&fbclid=IwAR21beSJORalzmzokxDRcGfkZA1AtRTE__l5N4r09HcGS5Y6vOluyouM9EM',
    'type': 'video',
    'source': 'youtube', //vimeo, youtube or local
    'width': 900,
    'autoplayVideos': true,
});
var favicon_images = [
    'img/titleicon/tmp-0.gif',
    'img/titleicon/tmp-1.gif',
    'img/titleicon/tmp-2.gif',
    'img/titleicon/tmp-3.gif',
    'img/titleicon/tmp-4.gif',
    'img/titleicon/tmp-5.gif',
    'img/titleicon/tmp-6.gif',
    'img/titleicon/tmp-7.gif',
    'img/titleicon/tmp-8.gif',
    'img/titleicon/tmp-9.gif',
    'img/titleicon/tmp-10.gif',
    'img/titleicon/tmp-11.gif',
    'img/titleicon/tmp-12.gif',
    'img/titleicon/tmp-13.gif',
    'img/titleicon/tmp-14.gif',
    'img/titleicon/tmp-15.gif',
    'img/titleicon/tmp-16.gif',
    'img/titleicon/tmp-17.gif',
    'img/titleicon/tmp-18.gif',
    'img/titleicon/tmp-19.gif',
],
    image_counter = 0; // To keep track of the current image

setInterval(function () {
    $("link[rel='icon']").remove();
    $("link[rel='shortcut icon']").remove();
    $("head").append('<link rel="icon" href="' + favicon_images[image_counter] + '" type="image/gif">');

    // If last image then goto first image
    // Else go to next image    
    if (image_counter == favicon_images.length - 1)
        image_counter = 0;
    else
        image_counter++;
}, 150);
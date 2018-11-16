---
layout: gallery
title:  "Stephen and Michelle's Wedding"
description: "Stephen and Michelle's Wedding - 29 Aug 2015"
date:   2015-08-29 13:30:00 +0100
categories: photo
images-count: "6 Photos"
image_path: /images/stephen/wedding/
images:
  - image_file: DSC8848.jpg
    title: Image 1
  - image_file: DSC8865.jpg
    title: Image 2
  - image_file: DSC8882.jpg
    title: Image 3
  - image_file: DSC8888_01BB.jpg
    title: Image 4
  - image_file: DSC8848.jpg
    title: Image 5
  - image_file: DSC8848.jpg
    title: Image 6
  - image_file: 200x200.png
    title: Image 7
---
<!-- <link rel="stylesheet" type="text/css" href="//cdn.jsdelivr.net/gh/kenwheeler/slick@1.8.1/slick/slick.css"/>
<link rel="stylesheet" type="text/css" href="//cdn.jsdelivr.net/gh/kenwheeler/slick@1.8.1/slick/slick-theme.css"/> -->
<!-- <script type="text/javascript">
  $(document).ready(function(){
    $('.photo-gallery-module').slick({
      slidesToShow: 1,
      slidesToScroll: 1,
      arrows: true
    });
  });
</script> -->

<div class="photo-gallery-module" data-bsp-carousel>
  {% for image in page.images %}
    <div><img src="{{ page.image_path }}{{ image.image_file }}" alt="{{ image.title}}"/></div>
  {% endfor %}
</div>

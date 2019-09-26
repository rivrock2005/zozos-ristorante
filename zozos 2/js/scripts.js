//images /work section
    // console.log(images); to test the connection count of images
    for (var i = 0; i < works.length; ++i) {
       $("#work-images").append("\
          <div class='col-sm-12 col-md-6 col-lg-6'>\
          <a href='" + works[i].url + "' target='_blank' class='work-img'>\
            <img class='img-responsive' src='" + works[i].pic + "'>\
            <span class='info'><p class='proj-title'>Project:</p>" + works[i].title + "</span>\
            </a>\
          </div>\
        ");
        var images = $("#work-images img");
      if (i % 2 === 0) {
          $(images[i]).css("border", "4px solid purple ");
      } else {
          $(images[i]).css("border", "4px solid red");
      };
  };
  $(".work-img").mouseenter(function(){
    $(".info", this).show().css("text-shadow", "2px 2px 5px black");
  }).mouseleave(function(){
    $(".info", this).hide();
  });

  $("#work").append("\
 <div class='col-sm-3 col-md-3'>\
   <a href='#' class='work-img'>\
     <img class='img-responsive' src='" + works[i].pic + "'>\
   </a>\
 </div>\
");

$(".work-img").mouseenter(function(){
 $(".info", this).show();
}).mouseleave(function(){
 $(".info", this).hide();
});

$(".work-img").mouseenter( function() {
 $(".info", this).show();
});

$(".work-img").mouseenter(function(){
 $(".info", this).show();
}).mouseleave(function(){
 $(".info", this).hide();
});

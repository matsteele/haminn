$(document).ready(function(){
//     $( "#about1" ).hover(function() {
//            $('.modal').modal({
//         show: true
//     });
//   });

//   //   $( "#about2" ).hover(function() {
//   //          $('.modal2').modal({
//   //       show: true
//   //   });
//   // });
// });

// $.ajax({
//     url: "http://api.tumblr.com/v2/blog/blog.tumblr.com/avatar/128?api_key=WQTrLyh8i3aED9OudzSudBRRcmQyUZwgCXOaelEwnphBpNvfhV",
//     dataType: 'jsonp',
//     success: function(avatar){
//   $(".avatar").attr('src', avatar.response.avatar_url);
//     }
// });

// $("#slideShow").html(info.response.blog.title);



$.ajax({
    url: "https://api.tumblr.com/v2/blog/hamiltoninn.tumblr.com/posts?api_key=WQTrLyh8i3aED9OudzSudBRRcmQyUZwgCXOaelEwnphBpNvfhV",
    dataType: 'jsonp',
    success: function(results){
      // Print Title On the Page
     var i = 0;

     while (i < 10) {

         var type = results.response.posts[i].type;

         if (type == "text") {
           	var content = results.response.posts[i].body;
           	var image = content.substr(84,100);
           	 // console.log(image);
           	 $(".slides").append("<li><img src='" + image + "'/></li>");
             	// $("#slideShow").append("<div class='slides'><img src='" + content + "'/></div>");
         } else if (type == "photo") {
         		var photourl = results.response.posts[i].photos[0].alt_sizes[i].url;
         		$(".slides").append("<li><img src='" + photourl + "'/></li>");
         }
      i++;
     }//END WHILE

    }//END RESULTS FUNCTION
});

$(function() {

var ul = $(".slider ul");
var slide_count = ul.children().length;
var slide_width_pc = 100.0 / slide_count;
var slide_index = 0;

ul.find("li").each(function(indx) {
  var left_percent = (slide_width_pc * indx) + "%";
  $(this).css({"left":left_percent});
  $(this).css({width:(100 / slide_count) + "%"});
});

// Listen for click of prev button
$(".slider .prev").click(function() {
  console.log("prev button clicked");
  slide(slide_index - 1);
});

// Listen for click of next button
$(".slider .next").click(function() {
  console.log("next button clicked");
  slide(slide_index + 1);
});

function slide(new_slide_index) {

      if(new_slide_index < 0 || new_slide_index >= slide_count) return; 

      var margin_left_pc = (new_slide_index * (-100)) + "%";

      ul.animate({"margin-left": margin_left_pc}, 400, function() {

      slide_index = new_slide_index

    });
  }
});
var RoomName;

// Input JQuery for creating modules when clicking on rooms.


  // $( "#fourOne" ).click(function() {
  //   $('#rightRoomMod').toggle();
  //   var RoomName4_1 = "Private Master Bedroom (4.1)";
  //   var Summary4_1 = "Our newly remodeled townhouse is a clean, welcoming, and spacious retreat. The house has 5 floors, 10 ft. ceilings with lots of natural light, 6 bedrooms, 5 bathrooms, 2 kitchens, laundry room, and a private yard. In total, the house is 4,000+ square feet. The master bedroom is our largest room in the house. It has a shared bath and is furnished with a queen-size bed. It is the only room faces the street and thus has some noise, but it's not significant since you are 4 floors up.";
  //   var Price4_1 = "$95";

  //   $('#roomName').text(RoomName4_1);
  //   $('#roomSummary').text(Summary4_1);
  //   $('#Price4_1').text(Price4_1);
  // });


});

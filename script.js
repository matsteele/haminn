// $(document).ready(function(){
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
       // var date = results.response.posts[i].date;

       if (type == "text") {
         	var content = results.response.posts[i].body;
         	 console.log(_.keys(content));
         	 $("#slideShow").append("<div class='postbody'>" + content + "</div>");
	         	// $("#slideShow").append("<div class='slides'><img src='" + content + "'/></div>");
       } else if (type == "photo") {
       		var photourl = results.response.posts[i].photos[0].alt_sizes[i].url;
       		$("#slideShow").append("<div class='slides'><img src='" + photourl + "'/></div>");
       }
    i++;
     }//END WHILE

    }//END RESULTS FUNCTION
});

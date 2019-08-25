$(document).ready(function() {
    $.ajax({
      type: "GET",
      url: "https://api.myjson.com/bins/k91pn", // Using our resources.json file to serve results
      success: function(result) {
        console.log(result);
        console.log($("#at").text())
        $.each(result,function(index, value){
        	if (value['name']=="Akhil"){
        		$("#at").text(value['emoji_stats']['number'])
        		$("#are").text(value['emoji_stats']['recent-3'].join(' '))
        		$.each(value['emoji_stats']['top-3'],function(index,value){
        			console.log("#a-"+(index+1))
        			$("#a-"+(index+1)).text(value[0])
        			$("#an-"+(index+1)).text(value[1])
        		})
        	}
        	else{
        		$("#st").text(value['emoji_stats']['number'])
        		$("#sre").text(value['emoji_stats']['recent-3'].join(' '))
        		$.each(value['emoji_stats']['top-3'],function(index,value){
        			$("#s-"+(index+1)).text(value[0])
        			$("#sn-"+(index+1)).text(value[1])
        		})
        	}
        })
        $('.counter').counterUp({
  delay: 10,
  time: 2000
});
$('.counter').addClass('animated fadeInDownBig');
$('h3').addClass('animated fadeIn');
      }
    });
  });
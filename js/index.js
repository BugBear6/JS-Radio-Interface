// Station selection
$('.name').click(function(){ 
  // Expand li
  $('.list').find('li').removeClass('active');                   
  $(this).parent('li').addClass('active');
  
  // Show info picture
  $(this).parent().parent().children('li').find('.info').addClass('hidden');      
  $(this).parent('li').find('.info').removeClass('hidden');
  
  // Scroll to the selected element
  var index = $(this).parent('li').index();
  $('.content').scrollTop( index * 40 );
  
  // Change currently playing
  var name = $(this).find('.station-name').text();
  $('#track').removeClass('hidden');
  $('#playing_name').text(name);
});

// Reset - back button
$('.arrow').click(function(){
  $('.name').parent().parent().children('li').find('.info').addClass('hidden');
  $('.list').find('li').removeClass('active');
  $('#track').addClass('hidden');
});
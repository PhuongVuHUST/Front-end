var init = function() {
  var card = document.getElementById('card');
  document.getElementById('card').addEventListener( 'mouseover', function(){
    card.toggleClassName('flipped');
   
  }, false);
  document.getElementById('card').addEventListener( 'mouseout', function(){
    card.toggleClassName('flipped');
 	
  }, true);
};
window.addEventListener('DOMContentLoaded', init, false);
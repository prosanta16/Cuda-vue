$(document).ready(function(){
    $('.js--services-section').waypoint(function(direction){
        if(direction == 'down'){
           $('nav').addClass("sticky");
        }else{
           $('nav').removeClass("sticky");
           
        }
     });
     
     //MIXITup(portfolio)
    var mixer = mixitup(".container");
 
 });
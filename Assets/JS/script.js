$(function(){
   'use strict';

// there are four things to animate on the page.
//.icon - animates down about 20px
//.dash animates up
//.grid title animates down. .dash and .grid title switch spots over the animation time
//.subtitle slides up
//all of these animations go for about .25 second.

$('.grid-container').hover(
   function()
   {
   //function to move icon down
      $(this).children(".icon").animate({
         paddingTop: '1em'
      },250); //end moveIcon function
   //function to move dash
      $(this).children(".dash").animate({
         marginTop: '2em'
      },250);//end move dash function
   //function to move title
      $(this).children(".title").animate({
         marginTop: '-1.5em'
      },250);
   //funtion to move subtitle
      $(this).children(".subtitle").animate({
         marginTop: '1em'
      }, 250);
   },
   function()
   {
   //function to move icon back up
      $(this).children(".icon").animate({
         paddingTop: 0,
      }, 250);//end return icon function
      //function to move dash back
      $(this).children(".dash").animate({
         marginTop: 0
      },250); //end return dash function
      //function to move title back
      $(this).children(".title").animate({
         marginTop: '0.5em'
      },250);
      //function to move subtitle back
      $(this).children(".subtitle").animate({
         marginTop: '0.5em'
      }, 250);
});//end hover function

});//end of line

$(function(){
  'use strict';
  var options = {
    debug: true,
    prefetch: true,
    cacheLength: 5,
    onStart: {
      // How long this animation takes
      duration: 1000,
      // A function that dictates the animations that take place
      render: function ($container) {
        $container.addClass("exit-transition");
        smoothState.restartCSSAnimations();
      }
    },
    onReady: {
      duration: 1000,
      // `$container` is a `jQuery Object` of the the current smoothState container
      // `$newContent` is a `jQuery Object` of the HTML that should replace the existing container's HTML.
      render: function ($container, $newContent) {
        $container.removeClass("exit-transition");
        // Update the HTML on the page
        $container.html($newContent);
      }
    }
  },
  smoothState = $('#main').smoothState(options).data('smoothState');
});

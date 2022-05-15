
  (function($) {
    
    let target1 = $('#1');
    let target2 = $('#column-1');

    console.log(target1);

    target1.hover(
        () => {
          target2.addClass('img-caption-hover');
        },
        ()=>{
            target2.removeClass('img-caption-hover');
      });    
    target2.hover(
      () => {
        target1.addClass('blurred');
      },
      ()=>{
      	target1.removeClass('blurred');
    });
  })( jQuery );

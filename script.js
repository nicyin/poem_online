$(function () {
    //Load divs in random positions//

    const padding = 100;
    const maxX = $(window).width() - padding;
    const maxY = $(window).height() - padding;

    $('.shape-container').each(function () {
      const randX = Math.floor(Math.random() * maxX);
      const randY = Math.floor(Math.random() * maxY);

      $(this).css({
        left: randX + 'px',
        top: randY + 'px'
      });
    });

    //Reveal hidden poem//

    $('.shape-container').each(function () {
      const $container = $(this);
      const $shape = $container.find('.shape');
      const $poem = $container.find('.poem');

      $shape.on('mouseenter', function () {
        $poem.css('opacity', 1);
      });

      $shape.on('mousemove', function (e) {
        const offsetX = 15;
        const offsetY = 15;
        $poem.css({
          left: e.clientX + offsetX + 'px',
          top: e.clientY + offsetY + 'px'
        });
      });

      $shape.on('mouseleave', function () {
        $poem.css('opacity', 0);
      });
    });

    //Drags each shape//
    $('.shape-container').draggable();

    //Adds poem text to the console to write a new poem//
    $('.shape').on('mouseenter', function () {
        const poemText = $(this).siblings('.poem').text();
        console.log(poemText);
      });
  });
// event listeners for menu category tab clicks
$(() => {

  $('.mains').on('click', function() {
    const container = $('.menu');
    const item = $('.main');
    const target = item.offset().top - container.offset().top + container.scrollTop();
    container.scrollTop(target);
  });

  $('.soups').on('click', function() {
    const container = $('.menu');
    const item = $('.soup');
    const target = item.offset().top - container.offset().top + container.scrollTop();
    container.scrollTop(target);
  });

  $('.sandwiches').on('click', function() {
    const container = $('.menu');
    const item = $('.sandwich');
    const target = item.offset().top - container.offset().top + container.scrollTop();
    container.scrollTop(target);
  });

  $('.drinks').on('click', function() {
    const container = $('.menu');
    const item = $('.drink');
    const target = item.offset().top - container.offset().top + container.scrollTop();
    container.scrollTop(target);
  });

  $('.desserts').on('click', function() {
    const container = $('.menu');
    const item = $('.dessert');
    const target = item.offset().top - container.offset().top + container.scrollTop();
    container.scrollTop(target);
  });

  $('.bubble-tea').on('click', function() {
    const container = $('.menu');
    const item = $('.bubbletea');
    const target = item.offset().top - container.offset().top + container.scrollTop();
    container.scrollTop(target);
  });
});

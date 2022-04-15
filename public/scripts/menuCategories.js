$(() => {

// event listeners for menu category tab clicks

const container = $('.menu');

  $('.mains').on('click', function() {
    const item = $('.main');
    const target = item.offset().top - container.offset().top;
    container.scrollTop(target);
  });

  $('.soups').on('click', function() {
    const item = $('.soup');
    const target = item.offset().top - container.offset().top + container.scrollTop() -100;
    container.scrollTop(target);
  });

  $('.sandwiches').on('click', function() {
    const item = $('.sandwich');
    const target = item.offset().top - container.offset().top + container.scrollTop() - 100;
    container.scrollTop(target);
  });

  $('.drinks').on('click', function() {
    const item = $('.drink');
    const target = item.offset().top - container.offset().top + container.scrollTop() - 100;
    container.scrollTop(target);
  });

  $('.desserts').on('click', function() {
    const item = $('.dessert');
    const target = item.offset().top - container.offset().top + container.scrollTop() - 100;
    container.scrollTop(target);
  });

  $('.bubble-tea').on('click', function() {
    const item = $('.bubbletea');
    const target = item.offset().top - container.offset().top + container.scrollTop() - 100;
    container.scrollTop(target);
  });
});

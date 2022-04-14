$(() => {

  $('.mains').on('click', function() {
    const container = $('.menu');
    const scrollTo = $('.main');
    const position = scrollTo.offset().top
            - container.offset().top
            + container.scrollTop();
    container.scrollTop(position);
  });
});

$(() => {
  $('.soups').on('click', function() {
    const container = $('.menu');
    const scrollTo = $('.soup');
    const position = scrollTo.offset().top
              - container.offset().top
              + container.scrollTop();
    container.scrollTop(position);
  });
});

$(() => {
  $('.sandwiches').on('click', function() {
    const container = $('.menu');
    const scrollTo = $('.sandwich');
    const position = scrollTo.offset().top
                - container.offset().top
                + container.scrollTop();
    container.scrollTop(position);
  });
});

$(() => {
  $('.drinks').on('click', function() {
    const container = $('.menu');
    const scrollTo = $('.drink');
    const position = scrollTo.offset().top
                  - container.offset().top
                  + container.scrollTop();
    container.scrollTop(position);
  });
});

$(() => {
  $('.desserts').on('click', function() {
    const container = $('.menu');
    const scrollTo = $('.dessert');
    const position = scrollTo.offset().top
                    - container.offset().top
                    + container.scrollTop();
    container.scrollTop(position);
  });
});

$(() => {
  $('.bubble-tea').on('click', function() {
    const container = $('.menu');
    const scrollTo = $('.bubbletea');
    const position = scrollTo.offset().top
          - container.offset().top
          + container.scrollTop();
    container.scrollTop(position);
  });
});

$(document).ready(function() {
  console.log('hi');
  $('#form').on('submit', function(event) {
    console.log('hi 2');
    event.preventDefault();
  });
});

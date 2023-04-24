// Get all the "Show More" and "Show Less" buttons
var showMoreButtons = document.querySelectorAll('.show-more');
var showLessButtons = document.querySelectorAll('.show-less');

// Loop through all the "Show More" buttons and add click event listeners
showMoreButtons.forEach(function(button) {
  button.addEventListener('click', function() {
    // Get the corresponding paragraph element to toggle
    var paragraph = this.parentElement.querySelector('.show-less');
    // Toggle the paragraph's display style
    paragraph.style.display = 'block';
    // Hide the "Show More" button
    this.style.display = 'none';
  });
});

// Loop through all the "Show Less" buttons and add click event listeners
showLessButtons.forEach(function(button) {
  button.addEventListener('click', function() {
    // Get the corresponding paragraph element to toggle
    var paragraph = this.parentElement.querySelector('.show-less');
    // Toggle the paragraph's display style
    paragraph.style.display = 'none';
    // Show the "Show More" button
    this.parentElement.querySelector('.show-more').style.display = 'block';
  });
});


var currentTheme = localStorage.getItem('theme-mode');

if (currentTheme !== null && currentTheme === 'theme-dark') {
  $('html').addClass('theme-dark');
  $('.dark').hide();
  $('.light').show();
} else {
  $('html').removeClass('theme-dark');
  localStorage.removeItem('theme-mode');
}

$('.dark').click(function() {
    localStorage.removeItem('theme-mode');
    localStorage.setItem('theme-mode','theme-dark');
    $('html').addClass('theme-dark');
    $(this).hide();
    $('.light').show();
});

$('.light').click(function() {
    $('html').removeClass('theme-dark');
    localStorage.removeItem('theme-mode');
    $(this).hide();
    $('.dark').show();
});
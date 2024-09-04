window.onscroll = function() {
  const navbar = document.getElementById("navbar");
  if (window.pageYOffset > 100) {
      navbar.classList.add("scrolled");
  } else {
      navbar.classList.remove("scrolled");
  }
};

document.querySelectorAll('a[href^="#"]').forEach(anchor => {
  anchor.addEventListener('click', function(e) {
      e.preventDefault();

      document.querySelector(this.getAttribute('href')).scrollIntoView({
          behavior: 'smooth'
      });
  });
});

// Gestion du sous-menu et de la flèche
document.querySelectorAll('.container').forEach(function (menu) {
    menu.addEventListener('click', function (e) {
      e.stopPropagation();  // Empêche la propagation de l'événement
      this.classList.toggle('active');  // Active/désactive le sous-menu
      const submenu = this.querySelector('.submenu');
      submenu.classList.toggle('active');  // Affiche/masque le sous-menu
  
      // Rotation de la flèche
      const arrow = this.querySelector('.arrow');
      arrow.classList.toggle('rotate');  // Rotation de la flèche
    });
  });
  
  // Gestion du menu hamburger pour les écrans mobiles
  const hamburger = document.querySelector('.hamburger');
  const navLinks = document.querySelector('.liens');
  
  hamburger.addEventListener('click', () => {
    navLinks.classList.toggle('active');  // Affiche/masque les liens de navigation
  });
  document.querySelector('.navbar').addEventListener('mouseenter', function() {
    document.body.style.cursor = 'default'; // Affiche le curseur par défaut
  });
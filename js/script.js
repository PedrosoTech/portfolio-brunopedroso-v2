document.addEventListener('DOMContentLoaded', function() {
  'use strict';
  
  // Adiciona efeito de hover nos cards de projetos de forma segura
  const projectCards = document.querySelectorAll('.project-card');
  
  if (projectCards) {
    projectCards.forEach(card => {
      card.addEventListener('mouseenter', function() {
        this.style.transform = 'translateY(-10px)';
      });
      
      card.addEventListener('mouseleave', function() {
        this.style.transform = 'translateY(0)';
      });
    });
  }
  
  // Adiciona efeito de destaque no menu de navegação de forma segura
  const navLinks = document.querySelectorAll('nav a');
  const currentPage = window.location.pathname.split('/').pop();
  
  if (navLinks && currentPage) {
    navLinks.forEach(link => {
      const linkPage = link.getAttribute('href');
      if (linkPage === currentPage) {
        link.style.color = '#9370DB'; // Atualizado para o tom roxo usado no site
        link.style.borderBottom = '2px solid #9370DB';
        link.style.paddingBottom = '5px';
      }
    });
  }
});
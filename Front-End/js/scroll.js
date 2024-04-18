document.addEventListener('DOMContentLoaded', function() {
  var scrollTopAnimation = lottie.loadAnimation({
    container: document.getElementById('scroll-top-animation'), // El ID del contenedor de la animación
    renderer: 'svg',
    loop: true, // Aquí puedes decidir si la animación debe repetirse
    autoplay: false, // No inicia automáticamente
    path: 'https://lottie.host/d1b35f20-1018-4068-abdf-f1c4db14c7fa/njKV033KRk.json' // La URL de tu animación
  });

  // Oculta inicialmente el botón
  var scrollTopBtn = document.getElementById('scroll-top-btn');
  scrollTopBtn.style.display = 'none'; // Asegúrate de que el botón esté oculto inicialmente

  // Evento para comenzar la animación cuando el mouse entra sobre el contenedor
  document.getElementById('scroll-top-animation').addEventListener('mouseenter', function() {
    scrollTopAnimation.play();
  });

  // Evento para detener la animación cuando el mouse sale del contenedor
  document.getElementById('scroll-top-animation').addEventListener('mouseleave', function() {
    scrollTopAnimation.stop();
  });

  // Evento de scroll para mostrar el botón después de hacer scroll
  window.addEventListener('scroll', function() {
    if (window.pageYOffset > 100) { // El valor "100" es cuánto scroll debe hacer el usuario antes de que el botón aparezca. Puedes ajustarlo según tus necesidades.
      scrollTopBtn.style.display = 'block';
    } else {
      scrollTopBtn.style.display = 'none';
    }
  });

  // Añade el manejador del evento de clic para desplazar la página hacia arriba
  scrollTopBtn.addEventListener('click', function() {
    // Desplaza la página hacia arriba suavemente
    window.scrollTo({top: 0, behavior: 'smooth'});
  });
});


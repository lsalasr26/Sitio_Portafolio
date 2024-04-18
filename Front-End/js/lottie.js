document.addEventListener('DOMContentLoaded', function() {
  var animation = lottie.loadAnimation({
    container: document.getElementById('whatsapp-animation'), // ID del contenedor donde la animación necesita ser cargada
    renderer: 'svg', // Renderiza usando SVG
    loop: true, // Loop infinito
    autoplay: false, // No inicia automáticamente
    path: 'https://lottie.host/03462ca1-6f69-4e2d-9b76-a8f0f10807e7/PXv0pG3oBS.json' 
  });

  // Evento para comenzar la animación cuando el mouse entra sobre el contenedor
  document.getElementById('whatsapp-animation').addEventListener('mouseenter', function() {
      animation.play();
  });

  // Opcional: Evento para detener la animación cuando el mouse sale del contenedor
  document.getElementById('whatsapp-animation').addEventListener('mouseleave', function() {
      animation.stop();
  });
});



document.addEventListener('DOMContentLoaded', function() {
  // Carga la animación de Lottie
  var contactAnimation = lottie.loadAnimation({
    container: document.getElementById('contact-animation'), // El ID del contenedor de la animación
    renderer: 'svg',
    loop: true,
    autoplay: false,
    path: 'https://lottie.host/828ee9be-63e7-4ee0-91f7-7499cd18d515/Vo3GGGUaRH.json' // URL de la animación de Lottie
  });

  // Evento para comenzar la animación cuando el mouse entra sobre el contenedor
  document.getElementById('contact-animation').addEventListener('mouseenter', function() {
    contactAnimation.play(); // Corrige esta línea para usar 'contactAnimation' en lugar de 'animation'
  });

  // Opcional: Evento para detener la animación cuando el mouse sale del contenedor
  document.getElementById('contact-animation').addEventListener('mouseleave', function() {
    contactAnimation.stop(); // Corrige esta línea para usar 'contactAnimation' en lugar de 'animation'
  });

  // Evento para abrir el modal al hacer clic
  document.getElementById('contact-modal-btn').addEventListener('click', function() {
    $('#contactModal').modal('show');
  });
});


// Asegúrate de que el DOM esté completamente cargado
document.addEventListener('DOMContentLoaded', function() {
  // Define la variable que almacenará la animación
  var contactAnimation = lottie.loadAnimation({
    container: document.getElementById('lottie-animation'), // el contenedor del div
    renderer: 'svg',
    loop: true,
    autoplay: false, // no reproducir automáticamente
    path: 'https://lottie.host/c0169810-e884-43c7-810a-f63cefc8d47a/t6z4S13kFW.json' // la URL de tu animación Lottie
  });

    // Espera a que la animación esté cargada para moverla al frame 14
    contactAnimation.addEventListener('DOMLoaded', function() {
      contactAnimation.goToAndStop(13, true); // Lottie cuenta los frames desde 0
    });

  // Evento para comenzar la animación desde el frame 14 cuando el mouse entra sobre el contenedor
  document.getElementById('lottie-animation').addEventListener('mouseenter', function() {
    contactAnimation.goToAndPlay(13, true); // Lottie cuenta los frames desde 0, así que el frame 14 es en realidad el 13
  });

  // Evento para detener la animación y volver al frame 14 cuando el mouse sale del contenedor
  document.getElementById('lottie-animation').addEventListener('mouseleave', function() {
    contactAnimation.goToAndStop(13, true); // Vuelve al frame 14 y se detiene
  });

});


// Asegúrate de que el DOM esté completamente cargado
document.addEventListener('DOMContentLoaded', function() {
  // Define la variable que almacenará la animación
  var contactAnimation = lottie.loadAnimation({
    container: document.getElementById('lottie-animation2'), // el contenedor del div
    renderer: 'svg',
    loop: true,
    autoplay: false, // no reproducir automáticamente
    path: 'https://lottie.host/a0a33fc3-8e2a-488c-bd4c-43a7406667a5/nxO8phtruK.json' // la URL de tu animación Lottie
  });

    // Espera a que la animación esté cargada para moverla al frame 14
    contactAnimation.addEventListener('DOMLoaded', function() {
      contactAnimation.goToAndStop(13, true); // Lottie cuenta los frames desde 0
    });

  // Evento para comenzar la animación desde el frame 14 cuando el mouse entra sobre el contenedor
  document.getElementById('lottie-animation2').addEventListener('mouseenter', function() {
    contactAnimation.goToAndPlay(13, true); // Lottie cuenta los frames desde 0, así que el frame 14 es en realidad el 13
  });

  // Evento para detener la animación y volver al frame 14 cuando el mouse sale del contenedor
  document.getElementById('lottie-animation2').addEventListener('mouseleave', function() {
    contactAnimation.goToAndStop(13, true); // Vuelve al frame 14 y se detiene
  });

});


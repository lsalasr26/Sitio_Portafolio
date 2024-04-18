// JavaScript para activar la validación
'use strict';
window.addEventListener('load', function() {
  // Obtener todos los formularios a los que queremos aplicar estilos de validación personalizados de Bootstrap
  var forms = document.getElementsByClassName('needs-validation');
  // Bucle sobre ellos y evitar el envío
  Array.prototype.filter.call(forms, function(form) {
    form.addEventListener('submit', function(event) {
      if (form.checkValidity() === false) {
        event.preventDefault();
        event.stopPropagation();
      }
      form.classList.add('was-validated');
    }, false);
  });
}, false);


document.addEventListener('DOMContentLoaded', (event) => {

    var contactModal = document.getElementById('contactModal');
    contactModal.addEventListener('hidden.bs.modal', function (event) {

        contactModal.querySelector('form').reset();

 
        var form = contactModal.querySelector('.needs-validation');
        form.classList.remove('was-validated');
        
    });
});

document.addEventListener('DOMContentLoaded', function () {
    document.getElementById('openMessagesModal').addEventListener('click', function (e) {
        e.preventDefault(); 
        var myModal = new bootstrap.Modal(document.getElementById('messagesModal'));
        myModal.show();
    });
});





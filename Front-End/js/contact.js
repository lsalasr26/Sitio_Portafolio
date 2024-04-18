emailjs.init('sUmulDTSytFgLavcu'); 

document.addEventListener('DOMContentLoaded', function() {
    const form = document.querySelector(".needs-validation");
    form.addEventListener('submit', function(event) {
        event.preventDefault();
        if (!form.checkValidity()) {
            form.classList.add('was-validated'); 
        } else {
            emailjs.sendForm('service_be6hl85', 'template_qwbh7sg', this)
                .then(function(response) {
                    Swal.fire({
                        icon: 'success',
                        title: '¡Enviado!',
                        text: 'Tu mensaje ha sido enviado con éxito.',
                        confirmButtonColor: 'var(--dark-purple)',
                        confirmButtonText: 'Excelente'
                    }).then((result) => {
                        if (result.value || result.isDismissed) {
                            $('#contactModal').modal('hide');
                        }
                    });
                })
                .catch(function(error) {
                    console.log(error); 
                    Swal.fire({
                        icon: 'error',
                        title: '¡Error!',
                        text: 'No se pudo enviar tu mensaje, inténtalo de nuevo más tarde.',
                        confirmButtonColor: 'var(--dark-purple)',
                        confirmButtonText: 'Cerrar'
                    });
                });
        }
    });
});





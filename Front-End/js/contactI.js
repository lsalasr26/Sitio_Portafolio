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
                        title: 'Sent!',
                        text: 'Your message has been successfully sent.',
                        confirmButtonColor: 'var(--dark-purple)',
                        confirmButtonText: 'Excellent'
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
                        title: 'Error!',
                        text: 'Your message could not be sent, please try again later.',
                        confirmButtonColor: 'var(--dark-purple)',
                        confirmButtonText: 'Close'
                    });
                });
        }
    });
});





function showCustomAlert(message) {
    var alertBox = document.getElementById('customAlert');
    var alertMessage = document.getElementById('alertMessage');
    alertMessage.textContent = message; 
    alertBox.classList.remove('hidden'); 


    document.querySelector('.closebtn').onclick = function() {
        alertBox.classList.add('hidden');
    };

    
    setTimeout(() => {
        alertBox.classList.add('hidden');
    }, 3000);
}

function copiaNick(texto) {
    navigator.clipboard.writeText(texto).then(() => {
        showCustomAlert("Texto copiado");
    }).catch(err => {
        showCustomAlert("Erro ao copiar o texto");
    });
}

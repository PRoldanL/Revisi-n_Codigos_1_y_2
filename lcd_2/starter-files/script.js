// Calificaciones:

// Montserrat Martínez Galván (4/5) "Competente"
// Pedro Antonio Roldán Linares (4/5) "Competente"


const API_ENDPOINT = 'https://yesno.wtf/api';

/**
 * STEPS:
 *
 * 1. Create a fetchAnswer function and call the API
 * 2. Output the API's response
 * 3. Attach fetchAnswer to an event listener
 * 4. Clear output after 3 seconds
 * 5. Optional: add loading/error states
 *
 */

function fetchAnswer() {
    fetch(API_ENDPOINT)
        .then(response => response.json())
        .then(data => {
            document.getElementById('answer').innerText = data.answer;

            setTimeout(() => {
                document.getElementById('input').value = "";
            }, 10000);

        })
        .catch(error => console.error("Error en la solicitud", error));
}

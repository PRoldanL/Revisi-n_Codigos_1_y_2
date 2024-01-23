//Calificaciones:

//Cindy Rejón Hernández (4/5) "Competente"
//Jesús Emiliano Madrigal Gonzále (4/5) "Competente"
//Pedro Antonio Roldán Linares (4/5) "Competente"

// API desde GitHub
const baseEndpoint = 'https://api.github.com';


const usersEndpoint = `${baseEndpoint}/users`;

// Elementos a mostrar nombre, blog, localización
const $n = document.querySelector('.name'); 
const $b = document.querySelector('.blog');
const $l = document.querySelector('.location');

// Corrección de función asincrona
async function displayUser(username) {
    
    $n.textContent = 'cargando...';

    try {
        // Obteniendo la información del usuario desde GitHub
        const response = await fetch(`${usersEndpoint}/${username}`);
        const data = await response.json(); // Convertir la respuesta a formato JSON
        console.log(data);

        // Mostrando  nombre,  blog y localización del usuario
        $n.textContent = `Nombre: ${data.name}`;
        $b.textContent = `Blog: ${data.blog}`;
        $l.textContent = `Ubicación: ${data.location}`;
    } catch (err) {
        handleError(err);
    }
}
// Mostrando errores
function handleError(err) {
    console.log('¡OH NO!');
    console.log(err);
    $n.textContent = `Algo salió mal: ${err}`;
}

//Imprimiendo la información del usuario
displayUser('stolinski').catch(handleError);
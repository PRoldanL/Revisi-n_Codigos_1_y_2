// Calificaciones:

// Montserrat Martínez Galván (4/5) "Competente"
// Pedro Antonio Roldán Linares (4/5) "Competente"


// Función que filtra palabras más largas
// 1.- Construye una función que reciba por parámetros un string y un array de strings.
function bigWords(inputString, stringArray) {
    const resultArray = stringArray.filter(word => word.length > inputString.length);
    return resultArray;
}

// 2.- Construye una función que reciba por parámetros un array de strings y lo imprima dentro de la lista (<ul></ul>) en el index.html.
function printArray(array) {
    const ulElement = document.getElementById('wordList');
    
    // Limpia la lista antes de agregar nuevos elementos
    ulElement.innerHTML = '';

    // Agrega cada elemento del array como un nuevo <li> dentro de la lista
    array.forEach(word => {
        const liElement = document.createElement('li');
        liElement.textContent = word;
        ulElement.appendChild(liElement);
    });
}

// Ejemplo de uso
const myArray = ['insecto', 'bootcamp', 'mangos', 'reptil', 'mosca', 'escritorio'];
const inputString = 'bocina';
const filteredArray = bigWords(inputString, myArray);
printArray(filteredArray);

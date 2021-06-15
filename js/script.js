//PARTE 1
//Creare un oggetto che descriva uno studente, con le seguenti proprietà: 
//nome, cognome e età. Stampare a schermo attraverso un ciclo for-in tutte 
//le proprietà dell’oggetto.

var listHtml = document.getElementsByClassName('student');
var result = '';

var student = {
    name: 'Mario',
    surname: 'Rossi',
    age: 24
}

for (var k in student) {
    console.log(k, student[k])
    result += '<li>' + k + ': ' + student[k] + '</li>';

}

listHtml[0].innerHTML = result;

//PARTE 2
//Creare un array di oggetti di studenti. Ciclare su tutti gli studenti e stampare 
//per ognuno di essi, nome e cognome.  Ricordatevi, è un array, quindi? for.


//funzionerebbe anche con la prima variabile result
//giusto per non sovrascriverla
var result2 ='';

var classe = {
    students: []
};

var student2 = {
    name: 'Fabio',
    surname: 'Bianchi',
    age: 30
}

var student3 = {
    name: 'Anna',
    surname: 'Giallo',
    age: 27
}

var student4 = {
    name: 'Maria',
    surname: 'Neri',
    age: 25
}

classe.students.push(student,student2,student3,student4);


for ( var x = 0; x < classe.students.length; x++) {

    for ( var key in classe.students[x]) {
        console.log(key, classe.students[x][key]);
        result2 += '<li>' + key + ': ' + classe.students[x][key] + '</li>';
    }

    //riga vuota 
    result2 += '<br/>'
}

listHtml[1].innerHTML = result2;


//PARTE 3
//Dare la possibilità all’utente, attraverso 3 prompt() - uno per ciascuna proprietà
// - di aggiungere UN SOLO oggetto studente inserendo nell’ordine: nome, cognome e età.

var nameInput = prompt('Inserisci il nome');
var surnameInput = prompt('Inserisci il cognome');
var ageInput = prompt('Inserisci l\'età');
var result3 = ''

classe.students.push ({
    name: nameInput,
    surname: surnameInput,
    age: ageInput
});

for ( var key in classe.students[classe.students.length - 1]) {
    result3 += '<li>' + key + ': ' + classe.students[classe.students.length - 1][key] + '</li>';

}

listHtml[2].innerHTML = result3;
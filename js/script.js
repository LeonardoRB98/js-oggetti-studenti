// Creare un oggetto che descriva uno studente con le seguenti proprietà:
// nome, cognome e età. Stampare a schermo attraverso il for in tutte le
// proprietà;
// Creare un array di oggetti di studenti. Ciclare su tutti gli studenti e
// stampare per ognuno nome e cognome;
// Dare la possibilità all’utente attraverso 3 prompt di aggiungere
// un nuovo oggetto studente inserendo nell’ordine: nome, cognome e età.



// creo array bidimensionale con proprietà nome, congnome ed proprietà
var studenti = [
  {
    'nome' : 'leonardo',
    'cognome' : 'ranaldo',
    'eta' : '21'
  },
  {
    'nome' : 'marco',
    'cognome' : 'rossi',
    'eta' : '25'
  },
  {
    'nome' : 'giovanni',
    'cognome' : 'radicchi',
    'eta' : '30'
  },
];
console.log(studenti);


// stapo il log della chiave nei valori cognome e nome per ogni posizione nell'array
for (var i = 0; i < studenti.length; i++) {
  var studenteNome = studenti[i]['nome'];
  var studenteCognome = studenti[i]['cognome'];

  console.log('Nome: ' + studenteNome + ' ' + 'Cognome: ' + studenteCognome);
}
// chiedo tramite prompt all'utente di inserire i propri dati e poi li pusho nell array
var nomeDaInserire = prompt('inserisci il nome');
var cognomeDaInserire = prompt('inserisci il cognome');
var etaDaInserire = prompt('inserisci il eta');
studenti.push({nome : nomeDaInserire, cognome : cognomeDaInserire, eta : etaDaInserire});

console.log(studenti);

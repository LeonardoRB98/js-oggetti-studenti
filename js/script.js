// Creare un oggetto che descriva uno studente con le seguenti proprietà:
// nome, cognome e età. Stampare a schermo attraverso il for in tutte le
// proprietà;
// Creare un array di oggetti di studenti. Ciclare su tutti gli studenti e
// stampare per ognuno nome e cognome;
// Dare la possibilità all’utente attraverso 3 prompt di aggiungere
// un nuovo oggetto studente inserendo nell’ordine: nome, cognome e età.



// creo array bidimensionale con proprietà nome, congnome ed proprietà
// array studente singolo
var studente = {
  'nome' : 'francesco',
  'cognome' : 'ferraro',
  'eta' : 30,
};
// stampo tutte le key di studente tramite for in
for (var key in studente) {
  console.log(studente[key]);
}



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
//metodo 1 push
// var nuovoStudente = {};
// nuovoStudente.nome = prompt('inserisci il nome');
// nuovoStudente.cognome = prompt('inserisci il cognome');
// nuovoStudente.eta = prompt('inserisci il eta');
// studenti.push(nuovoStudente);

//metodo 2 push
var nomePrompt = prompt('inserisci il nome');
var cognomePrompt = prompt('inserisci il cognome');
var etaPrompt = prompt('inserisci il eta');
var nuovoStudente = {
  nome : nomePrompt,
  cognome : cognomePrompt,
  eta : etaPrompt,
};

studenti.push(nuovoStudente);
console.log(studenti);

// Function to build a random word
// src: https://www.equinode.com/blog/article/generer-une-chaine-de-caracteres-aleatoire-avec-javascript

const Functions = {

  strRandom: (params) => {
    let a = 10,
        b = 'abcdefghijklmnopqrstuvwxyz',
        c = '',
        d = 0,
        e = ''+b;
    if (params) {
      if (params.startsWithLowerCase) {
        c = b[Math.floor(Math.random() * b.length)];
        d = 1;
      }
      if (params.length) {
        a = params.length;
      }
      if (params.includeUpperCase) {
        e += b.toUpperCase();
      }
      if (params.includeNumbers) {
        e += '1234567890';
      }
    }
    for (; d < a; d++) {
      c += e[Math.floor(Math.random() * e.length)];
    }
    console.log(`Dev mode : fake word is ${c.toUpperCase()}`);
    return c.toUpperCase();
  },

  getWord: (length) => {
    return fetch(`http://localhost:5000/api/wordsapi/random/${length}`, {
    method: 'GET',
      credentials: 'same-origin',
      headers: {
      'Content-Type': 'application/x-www-form-urlencoded',
      'Cache-Control': 'no-cache',
      },
      }).then(response => {
      return response.send();
      })
      .catch(err => { 
      console.log(err);
      });
    },
}

  export default Functions
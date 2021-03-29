// Function to build a random word
// src: https://www.equinode.com/blog/article/generer-une-chaine-de-caracteres-aleatoire-avec-javascript

const strRandom = (params) => {
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
    return c.toUpperCase();
  }

  export default strRandom
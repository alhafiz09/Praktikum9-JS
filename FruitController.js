/**
 * TODO 3:
 * - import fruits dari data/fruits.js
 * - refactor variabel ke ES6 variable
 */const fruits = require('../Data/fruit.js');

/**
 * TODO 4:
 * - Buat method index.
 * - Refactor function ke ES6 Arrow Function
 * - Tampilkan data fruits.
 *
 * @hint - Gunakan looping for of
 */
const index = () => {
  console.log("Daftar Buah");
  for (const fruit of fruits) {
      console.log(fruit);
  }
};

/**
* TODO 5:
* - Buat method store.
* - Refactor function ke ES6 Arrow Function
* - Menambahkan data baru ke array fruits.
*
* @param {string} name - Nama buah.
*
* @hint - Gunakan method push
*/
const store = () => {
  fruits.push("Pisang");
  fruits.forEach(fruit => console.log(fruit));
};

/**
* TODO 6:
* - Buat method update.
* - Refactor function ke ES6 Arrow Function
* - Memperbarui data fruits.
*
* @param {number} position - Posisi atau index yang ingin diupdate.
* @param {string} name - Nama buah yang baru.
*/
const update = () => {
  fruits[0] = "Kelapa";
  fruits.forEach(fruit => console.log(fruit));
};


/**
* TODO 7:
* - Buat method destroy.
* - Refactor function ke ES6 Arrow Function
* - Menghapus data fruits.
*
* @param {number} position - Posisi atau index yang ingin dihapus
*
* @hint - Gunakan method splice
*/
const destroy = () => {
  fruits.shift();
  fruits.forEach(fruit => console.log(fruit));
};


/**
* TODO 8: export method index, store, update, dan destroy
*/
module.exports =  { index, store, update, destroy };
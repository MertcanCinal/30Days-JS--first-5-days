// bir satırlık açıklama yapabilirsin!
/* istediğin
kadar
açıklama
yapabilirsin! */

/*
console.log(2 + 3)//toplama
console.log(3 - 2)//çıkartma
console.log(2 * 3)//çarpma
console.log(3 / 2)//bölme
console.log(3 % 2)//bölümünden kalan
console.log(3 ** 2)//üs alma

console.log(typeof 'Yaratıcı')//string ifade
console.log(typeof 33)//number
console.log(typeof true)//evet ya da hayır
console.log(typeof null)//obje
console.log(typeof undefined)//undefined
*/

/*
Variable
değişkenler numara ile başlayamaz!
$ ve _ hariç özel karakterler kullanılamaz!

const//değişmeyecek veriler için kullanılır!(ülkeler,matematik..)
const PI = 3.14

let//değiştirilebilir veriler için kullanılır!
let name = 'MC'
*/


// console.log('yu yazı introduction.js den geldi!')

/*
let dizi = ['m', 'e', 'r', 't', 'c', 'a', 'n']
dizi.length //=6
let lastIndex = dizi.length - 1
dizi[lastIndex]
'n'
let youtube = 'mertcan'
youtube.substr(5,3) //=ilk sayı kaçıncı harf, 2. sayı kaç uzunlukta olcağını gösteriyor.
'tur' 
*/

/*
'mertcan'.split('')
'mertcan.split('').reverse()
'mertcan.split('').reverse().join('')
'nactrem'//=ismi önce dizi haline getirdik. sonra ters yazılmasını sağladık.
*/

/*
let country = 'Finland'

console.log(country.includes('fin'))     // false
console.log(country.includes('Fin'))     // true
*/

/*
let str = 'merhaba mertcan, nasılsın mertcan?'
str.replaceAll('mertcan', 'MC')
'merhaba MC, nasılsın MC?'
*/

/*
let string = 'I love JavaScript. If you do not love JavaScript what else can you love.'
string.match(/love/g)
// string değeri içindeki 'love' sayısını aratmak için kullanılıyor. 
// /g globalde aratmak için kullanılıyor. /gi büyük küçük harf duyarlılığını kaldırıyor.)
*/

/*
let txt = 'In 2019, I ran 30 Days of Python. Now, in 2020 I am super exited to start this challenge'
let regEx = /\d+/
console.log(txt.match(regEx))  // ["2", "0", "1", "9", "3", "0", "2", "0", "2", "0"]
console.log(txt.match(/\d+/g)) // ["2019", "30", "2020"]

// kaçış karakterli d, d'nin normal olmadığı anlamına gelir, d bunun yerine bir rakam gibi davranır
// + bir veya daha fazla basamaklı sayı anlamına gelir,
// ondan sonra g varsa global demektir, her yerde ara.
*/


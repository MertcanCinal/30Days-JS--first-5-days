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

************************************************************************************DAY2*******************************************************************************************
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
'mertcan'.split('') // tek tek harfleri ayırır ve dizi haline getirir.
'mertcan.split('').reverse() // tek tek ayrılan harfleri tersten sıralar.
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

************************************************************************************DAY3&4*******************************************************************************************
/*
eğer bir değer == ile doğru değilse, === ile doğru olmayacaktır. === kullanmak == kullanmaktan daha güvenlidir. 
bağlantı veri türleri &&(ve işareti) , || (veya işareti) , !(olumsuzlama). 
&& operatörü, yalnızca iki işlenen doğruysa doğru olur. 
|| operatör, işlenenlerden herhangi birinin doğru olması durumunda gerçekleşir. 
! operatör true - false ve false - true değerini olumsuzlar.
*/

                                  Window Metotları
alert() //metodu, belirtilen bir mesaj ve bir 'Tamam' butonu ile bir uyarı kutusu görüntüler.
alert(message)
alert('Welcome to 30DaysOfJavaScript')

prompt('required text', 'optional text') //kullanıcıdan input almak için prompt komutu kullanılır.

confirm() //bir 'Tamam' ve 'İptal' düğmesiyle birlikte iletişim kutusu görüntüler. 
//onay kutusu kullanıcıdan bir şeyi yürütmek için izin istemek için kullanılır.
const isDelete = confirm('Silmek istediğine emin misin?')
console.log(isDelete ? 'Silme işlemi başarılı' : 'Silme işlemi iptal edildi.')

/*
date objesi tarih nesnesi değerlerinden tarih ve saat bilgisi almak için get kelimesi ile başlar.
getDate(), getDay(), getHours(), getMinutes, getSeconds()..
*/
const now = new Date()
console.log(now) // bu kod bulunduğumuz zamanın tam tarihini, ayını, gününü, saatini ve saniyesini alır.

const now = new Date()
console.log(now.getFullYear()) // 2023

const now = new Date()
console.log(now.getMonth()) // bulunduğunuz aydan bir önceki ayın sayısını alıcaktır çünkü Ocak 1 değil 0. ay oluyor Aralıkta 11. ay oluyor.

const now = new Date()
console.log(now.getDay()) // Pazar 0, Pazartesi 1 ve Cumartesi 6(Haftanın gününü tam sayı olarak alma (0-6))
                              
                              Conditionals - Koşullar
IF
// if koşulu kullanmak için normal parantez ve süslü parantezlerine ihtiyaç duyurulur. 
// koşul parantez() içine, sonuç süslü parantez{} içine yazılır. 
let num = 3
if (num > 0) {
  console.log(`${num} pozitif bir sayıdır`)
}
// koşul sağlanıyorsa sonuç değeri çıkar. koşul sağlanmıyorsa sonuç çıkmaz. sağlanmayan koşullar için else ile başka bir bloğumuz olmalıdır.
ELSE
// koşul doğruysa, if bloğu yürütülür, doğru değilse, else koşulu yürütülür.
let num = -5
if (num > 0) {
  console.log(`${num} pozitif bir sayıdır`)
} else{
    console.log(`${num} negatif bir sayıdır`)
}
// else bloğu yürütülecektir.
IF - ELSE IF - ELSE
// birden fazla koşulumuz olduğunda else if kullanırız.
let a = 0
if (a > 0) {
  console.log(`${a} pozitif sayıdır`)
} else if (a < 0) {
  console.log(`${a} negatif sayıdır`)
} else if (a == 0) {
  console.log(`${a} sayı sıfırdır`)
} else {
  console.log(`${a} bir sayı değildir`)
}
SWITCH
// switch anahtar sözcüğüyle başlar, ardından bir parantez ve kod bloğu gelir. 
// case bloğu, switch parantezindeki değer ile eşleşirse çalışır. 
// break ifadesi, koşul yerine getirildikten sonra kod yürütmesini sonlandırmak içindir.
// default blok, tüm durumlar koşulu karşılamıyorsa çalışır.
switch(caseValue){
    case 1:
      // code
      break
    case 2:
     // code
     break
    case 3:
     // code
     break
    default:
     // code
  }
  TERNARY
  //koşullar yazmanın başka bir yolu da üçlü operatörleri kullanmaktır.
  let isRaining = true
isRaining
  ? console.log('Bir yağmurluğa ihtiyacın var')
  : console.log('Bir yağmurluğa ihtiyacın yok')

  ************************************************************************************DAY5*******************************************************************************************
  
                                                                                 ARRAY - DİZİLER
// bir dizi değişkeni tanımlamak için "let" yerine "const" kullanmak daha yaygındır.
const  arr = Array()
console.log(arr)
// boş bir dizi oluşturmak için köşeli parantez kullanırız.
const  arr = []
console.log(arr)                    
/*
dizileri değiştirmek için kullanışlı yöntemlerden bazıları;
Array, length, concat, indexOf, slice, splice, join, toString, includes, lastIndexOf, isArray, fill, push, pop, shift, unshift
*/ 

const names= Array(3).fill(MC)
console.log(names)
//bu kod "3" tane "MC" den oluşan dizi oluşturur.

concat // bir veye birden fazla dizileri birbiri ile birleştirir.
const  array1 = [1, 2, 3]
const  array2 = [4, 5, 6]
const  array3 = array1.concat(array2)
console.log(array3) // [1, 2, 3, 4, 5, 6]

console.log(numbers.includes(5)) // dizi içindeki veriyi sorgulamaya yarar.
console.log(Array.isArray(names)) // names bir dizi mi diye sorgular.

DİZİ ELEMANLARINI BİRLEŞTİRMEK
const  names = ['MC', 'GS', 'N69']
console.log(names.join()) // MC,GS,N69
console.log(names.join('')) //MCGSN69
console.log(names.join(' ')) //MC GS N69
console.log(names.join(', ')) //MC, GS, N69
console.log(names.join(' # ')) //MC # GS # N69
DİZİ ELEMANLARINI SIRALAMAK
webTechs.sort()
console.log(webTechs) // dizi elemanlarını alfabetik sırada düzenler.
****
const numbers = [4, 10, 1, [4, 5, 6], 8]
console.log(numbers[3][1]) //=5----dizi içinde dizi varsa; önce dizi elemanı sonra dizi içindeki istenen eleman []'ler ile yan yana yazılır


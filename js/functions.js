/*проверка длины строки*/

const examinationStringLength = (str, maxLength) => str.length <= maxLength;

/*проверка палиндрома
 Строка является палиндромом
имяФункции('топот'); // true
 Несмотря на разный регистр, тоже палиндром
имяФункции('ДовОд'); // true
 Это не палиндром
имяФункции('Кекс');  // false
*/

const checkPalindrome = (str) => str.replaceAll(' ', '').toLowerCase() === str.replaceAll(' ', '').toLowerCase().split('').reverse(' ').join('');


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

function checkPalindrome (string) {
  return string.replaceAll(' ', '').toLowerCase() === string.replaceAll(' ', '').toLowerCase().split('').reverse(' ').join('');
}

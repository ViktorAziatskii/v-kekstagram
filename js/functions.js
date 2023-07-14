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

function isMeetingInWorkingHours(startTime, meetingDuration, workingDayStart, workingDayEnd) {
  // Преобразуем время начала рабочего дня и конца рабочего дня в минуты
  const startMinutes = parseTimeToMinutes(workingDayStart);
  const endMinutes = parseTimeToMinutes(workingDayEnd);

  // Преобразуем время начала встречи в минуты
  const meetingStartMinutes = parseTimeToMinutes(startTime);

  // Вычисляем время окончания встречи
  const meetingEndMinutes = meetingStartMinutes + meetingDuration;

  // Проверяем, не выходит ли время встречи за рамки рабочего дня
  return (meetingStartMinutes >= startMinutes && meetingEndMinutes <= endMinutes);
}

// Преобразует время в формате "часы:минуты" в минуты
function parseTimeToMinutes(time) {
  const [hours, minutes] = time.split(':').map(Number);
  return hours * 60 + minutes;
}

// Пример использования функции
console.log(isMeetingInWorkingHours('9:00', 60, '8:00', '18:00'));
console.log(isMeetingInWorkingHours('17:00', 120, '8:00', '18:00'));
console.log(isMeetingInWorkingHours('17:30', 120, '8:00', '18:00'));

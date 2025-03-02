const { NotImplementedError } = require('../extensions/index.js');

/**
 * Given some integer, find the maximal number you can obtain
 * by deleting exactly one digit of the given number.
 *
 * @param {Number} n
 * @return {Number}
 *
 * @example
 * For n = 152, the output should be 52
 *
 */
function deleteDigit(n) {
  let numStr = n.toString();
  let maxNum = 0;

  for (let i = 0; i < numStr.length; i++) {
    // Удаляем i-ую цифру, формируя новое число
    let newNum = parseInt(numStr.slice(0, i) + numStr.slice(i + 1), 10);

    // Обновляем максимальное число
    maxNum = Math.max(maxNum, newNum);
  }

  return maxNum;
}
module.exports = {
  deleteDigit
};

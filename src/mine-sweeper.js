const { NotImplementedError } = require('../extensions/index.js');

/**
 * In the popular Minesweeper game you have a board with some mines and those cells
 * that don't contain a mine have a number in it that indicates the total number of mines
 * in the neighboring cells. Starting off with some arrangement of mines
 * we want to create a Minesweeper game setup.
 *
 * @param {Array<Array>} matrix
 * @return {Array<Array>}
 *
 * @example
 * matrix = [
 *  [true, false, false],
 *  [false, true, false],
 *  [false, false, false]
 * ]
 *
 * The result should be following:
 * [
 *  [1, 2, 1],
 *  [2, 1, 1],
 *  [1, 1, 1]
 * ]
 */
function minesweeper(matrix) {
  let rows = matrix.length;
  let cols = matrix[0].length;
  let result = Array.from({ length: rows }, () => Array(cols).fill(0));

  // Перебираем каждую клетку
  for (let i = 0; i < rows; i++) {
    for (let j = 0; j < cols; j++) {
      if (matrix[i][j]) { // Если здесь мина
        // Обходим 8 соседних клеток
        for (let dx of [-1, 0, 1]) {
          for (let dy of [-1, 0, 1]) {
            if (dx === 0 && dy === 0) continue; // Пропускаем саму клетку
            let ni = i + dx, nj = j + dy;
            if (ni >= 0 && ni < rows && nj >= 0 && nj < cols) {
              result[ni][nj] += 1; // Увеличиваем значение у соседа
            }
          }
        }
      }
    }
  }

  return result;
}

module.exports = {
  minesweeper
};

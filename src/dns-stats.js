const { NotImplementedError } = require('../extensions/index.js');

/**
 * Given an array of domains, return the object with the appearances of the DNS.
 *
 * @param {Array} domains
 * @return {Object}
 *
 * @example
 * domains = [
 *  'code.yandex.ru',
 *  'music.yandex.ru',
 *  'yandex.ru'
 * ]
 *
 * The result should be the following:
 * {
 *   '.ru': 3,
 *   '.ru.yandex': 3,
 *   '.ru.yandex.code': 1,
 *   '.ru.yandex.music': 1,
 * }
 *
 */
function getDNSStats(domains) {
  let dnsCount = {};

  for (let domain of domains) {
    let parts = domain.split('.').reverse(); // Разбиваем и переворачиваем

    let dns = '';
    for (let part of parts) {
      dns = dns + '.' + part; // Собираем доменное имя снизу вверх
      dnsCount[dns] = (dnsCount[dns] || 0) + 1; // Увеличиваем счетчик
    }
  }

  return dnsCount;
}

module.exports = {
  getDNSStats
};

import { addIndex, filter } from 'ramda';

/**
 * {@link http://ramdajs.com/docs/#filter|R.filter} function that more closely resembles Array.prototype.filter.
 * It takes two new parameters to its callback function: the current index, and the entire list.
 * 
 * `filterIndexed` implementation is simple : `
 *  const filterIndexed = R.addIndex(R.filter);
 * `
 *
 * @func filterIndexed
 * @memberOf RA
 * @since {@link https://char0n.github.io/ramda-adjunct/2.27.0|v2.27.0}
 * @category List
 * @typedef Idx = Number
 * @sig Filterable f => ((a, Idx, f a) -> Boolean) -> f a -> f a
 * @param {Function} fn The predicate function
 * @param {Array} list The list to filter
 * @return {Array} Filterable
 * @see {@link http://ramdajs.com/docs/#addIndex|R.addIndex}, {@link http://ramdajs.com/docs/#filter|R.filter}
 * @example
 *
 * const isEven = n => n % 2 === 0;
 *
* R.filterIndexed((val, idx) => isEven(idx), [1, 2, 3, 4]); //=> [1, 3]
 */

const filterIndexed = addIndex(filter);

export default filterIndexed;

const { NotImplementedError } = require("../extensions/index.js");

/**
 * Given a singly linked list of integers l and an integer k,
 * remove all elements from list l that have a value equal to k.
 *
 * @param {List} l
 * @param {Number} k
 * @return {List}
 *
 * @example
 * For l = [3, 1, 2, 3, 4, 5] and k = 3,
 * the output should be [1, 2, 4, 5]
 *
 * Singly - linked lists are already defined using interface
 * class ListNode {
 *   constructor(x) {
 *     this.value = x;
 *     this.next = null;
 *   }
 * }
 */
const { ListNode } = require("../extensions/list-node.js");

function removeKFromList(l, k) {
  const leso = new ListNode(0);
  leso.next = l;

  let current = leso;

  while (current.next) {
    if (current.next.value === k) {
      // Skip the node with value equal to k
      current.next = current.next.next;
    } else {
      // Move to the next node
      current = current.next;
    }
  }

  return leso.next;
}

module.exports = {
  removeKFromList,
};

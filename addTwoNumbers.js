/**
 * Definition for singly-linked list.
 * class ListNode {
 *     val: number
 *     next: ListNode | null
 *     constructor(val?: number, next?: ListNode | null) {
 *         this.val = (val===undefined ? 0 : val)
 *         this.next = (next===undefined ? null : next)
 *     }
 * }
 */

function addTwoNumbers(
  l1: ListNode | null,
  l2: ListNode | null
): ListNode | null {
  let carry = 0;
  let prevNode = new ListNode();
  let headNode = prevNode;

  while (l1 || l2 || carry) {
    const val1 = l1?.val ?? 0;
    const val2 = l2?.val ?? 0;
    l1 = l1?.next;
    l2 = l2?.next;

    const sum = val1 + val2 + carry;
    carry = Math.floor(sum / 10);
    const currentNode = new ListNode(sum % 10);
    prevNode.next = currentNode;
    prevNode = currentNode;
  }

  return headNode.next;
}

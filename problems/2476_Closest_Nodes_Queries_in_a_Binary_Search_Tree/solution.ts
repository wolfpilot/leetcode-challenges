export {}

class TreeNode {
  val: number
  left: TreeNode | null
  right: TreeNode | null

  constructor(val?: number, left?: TreeNode | null, right?: TreeNode | null) {
    this.val = val === undefined ? 0 : val
    this.left = left === undefined ? null : left
    this.right = right === undefined ? null : right
  }
}

function closestNodes(root: TreeNode | null, queries: number[]): number[][] {
  let res = [[]]

  let left = 0
  let right = 0

  //   while (left <= right) {
  //       if (!root?.val) return res

  //   }

  return res
}

/**
 * TODO: Time complexity:
 * TODO: Space complexity:
 */

// const tree = new TreeNode(4, new TreeNode(), new TreeNode(9))

// console.log(closestNodes([6,2,13,1,4,9,15,null,null,null,null,null,null,14], [2,5,16]))
console.log(closestNodes(new TreeNode(4, new TreeNode(), new TreeNode(9)), [3]))

export {}

/**
 * Definition for a binary tree node.
 */
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

/**
 * As a slightly more convoluted solution, we can:
 *
 * 1. Find the shortest path to each p & q targets.
 * 2. Get the distance between the targets.
 * 3. Loop through the paths.
 *
 * Wherever they diverse is the LCA.
 */
function lowestCommonAncestor(
  root: TreeNode | null,
  p: TreeNode | null,
  q: TreeNode | null
): TreeNode | null {
  if (!root || !p || !q) return null

  let result: TreeNode | null = null

  // Find the shortest paths to the target nodes p & q
  const pathP = findPath(root, p)
  const pathQ = findPath(root, q)
  const pqMinLen = Math.min(pathP.length, pathQ.length)

  // Compare paths
  for (let i = 0; i < pqMinLen; i++) {
    if (pathP[i] !== pathQ[i]) break

    result = pathP[i]
  }

  return result
}

function findPath(root: TreeNode, target: TreeNode): TreeNode[] {
  const stack: TreeNode[] = []

  let node: TreeNode | null = root

  while (node) {
    stack.push(node)

    // Target found, we can stop
    if (node.val === target.val) return stack

    /**
     * If target is smaller than the current node, go left.
     * If target is larger than the current node, go right.
     */
    node = target.val < node.val ? node.left : node.right
  }

  return []
}

/**
 * Time: O(h) since each path traverses O(h) nodes
 * Space: O(h) because we are comparing the two paths
 */

const node_1_00 = new TreeNode(6)
const node_1_01 = new TreeNode(2)
const node_1_02 = new TreeNode(8)
const node_1_03 = new TreeNode(0)
const node_1_04 = new TreeNode(4)
const node_1_05 = new TreeNode(7)
const node_1_06 = new TreeNode(9)
const node_1_07 = new TreeNode(3)
const node_1_08 = new TreeNode(5)

const tree_01 = node_1_00
node_1_00.left = node_1_01
node_1_00.right = node_1_02

node_1_01.left = node_1_03
node_1_01.right = node_1_04

node_1_04.left = node_1_07
node_1_04.right = node_1_08

node_1_02.left = node_1_05
node_1_02.right = node_1_06

// case 1: root = [6,2,8,0,4,7,9,null,null,3,5], p = 2, q = 8
console.log(lowestCommonAncestor(tree_01, node_1_01, node_1_02))

// case 2: root = [6,2,8,0,4,7,9,null,null,3,5], p = 2, q = 4
console.log(lowestCommonAncestor(tree_01, node_1_01, node_1_04))

// case 3: root = [2,1], p = 2, q = 1
const node_2_00 = new TreeNode(2)
const node_2_01 = new TreeNode(1)

const tree_02 = node_2_00
node_2_00.left = node_2_01

console.log(lowestCommonAncestor(tree_02, node_2_01, node_2_01))

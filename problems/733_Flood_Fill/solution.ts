export {}

function floodFill(image: number[][], sr: number, sc: number, color: number): number[][] {
  const startingColor = image[sr][sc]

  // Nothing to do
  if (startingColor === color) return image

  const rowCount = image.length
  const colCount = image[0].length

  function fill(r: number, c: number) {
    if (
      // Check if we are within bounds
      r < 0 ||
      r >= rowCount ||
      c < 0 ||
      c >= colCount ||
      // and targeting the original color
      image[r][c] !== startingColor
    ) {
      return
    }

    // Color the land we are on
    image[r][c] = color

    // Check cardinal directions in clockwise order (NESW)
    fill(r, c - 1)
    fill(r + 1, c)
    fill(r, c + 1)
    fill(r - 1, c)
  }

  fill(sr, sc)

  return image
}

/**
 * Time: O(n * m)
 * Space: O(n * m) - worst case scenario due to recursion stack
 */

// case 1
// prettier-ignore
const grid1 = [
    [1,1,1],
    [1,1,0],
    [1,0,1]
]

console.log(floodFill(grid1, 1, 1, 2))

// case 2
// prettier-ignore
const grid2 = [
    [1,0,0],
    [0,0,0]
]

console.log(floodFill(grid2, 0, 0, 0))

export {}

function maxAreaOfIsland(grid: number[][]): number {
  let maxArea = 0
  let currentArea = 0

  const rows = grid.length
  const cols = grid[0].length

  function recurse(r: number, c: number) {
    if (
      // Check if we are within bounds
      r < 0 ||
      r >= rows ||
      c < 0 ||
      c >= cols ||
      // or ignore if water
      grid[r][c] === 0
    ) {
      return
    }

    // Increase found area size
    currentArea++

    // Nulify land so we don't check it again
    grid[r][c] = 0

    // Check cardinal directions in clockwise order (NESW)
    recurse(r, c - 1)
    recurse(r + 1, c)
    recurse(r, c + 1)
    recurse(r - 1, c)
  }

  for (let i = 0; i < rows; i++) {
    for (let j = 0; j < cols; j++) {
      // Ignore water
      if (grid[i][j] === 0) continue

      // New island found, reset current
      currentArea = 0
      recurse(i, j)

      maxArea = Math.max(maxArea, currentArea)
    }
  }

  return maxArea
}

/**
 * Time: O(r * c) -> since we'll be iterating through all rows * columns cells
 * Space: O(r * c) -> since we'll be storing all rows * columns cells at a maximum
 */

// case 1
// prettier-ignore
const grid1 = [
    [0,0,1,0,0,0,0,1,0,0,0,0,0],
    [0,0,0,0,0,0,0,1,1,1,0,0,0],
    [0,1,1,0,1,0,0,0,0,0,0,0,0],
    [0,1,0,0,1,1,0,0,1,0,1,0,0],
    [0,1,0,0,1,1,0,0,1,1,1,0,0],
    [0,0,0,0,0,0,0,0,0,0,1,0,0],
    [0,0,0,0,0,0,0,1,1,1,0,0,0],
    [0,0,0,0,0,0,0,1,1,0,0,0,0]
]

console.log(maxAreaOfIsland(grid1))

// case 2
// prettier-ignore
const grid2 = [
    [0,0,0,0,0,0,0,0]
]

console.log(maxAreaOfIsland(grid2))

// case 3
// prettier-ignore
const grid3 = [
    [1]
]

console.log(maxAreaOfIsland(grid3))

// case 4
// prettier-ignore
const grid4 = [
    [1,1,0,1,1],
    [1,0,0,0,0],
    [0,0,0,0,1],
    [1,1,0,1,1]
]

console.log(maxAreaOfIsland(grid4))

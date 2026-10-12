export {}

// prettier-ignore

/**
 * Another great explanation by Greg Hogg. Go watch it!
 *
 * @see https://www.youtube.com/watch?v=gCswsDauXPc
 */
function numIslands(grid: string[][]): number {
  const rows = grid.length
  const columns = grid[0].length

  let numIslands = 0

  function dfs(r: number, c: number) {
    if (
      // Outside the rows
      r < 0 || r >= rows ||
      // Outside the columns
      c < 0 || c >= columns ||
      // or simply water
      grid[r][c] === "0"
    ) {
      return
    }

    // Nullify the identified island space so we don't count it again
    grid[r][c] = "0"

    dfs(r - 1, c) // top
    dfs(r, c + 1) // right
    dfs(r + 1, c) // bottom
    dfs(r, c - 1) // left
  }

  // Loop through all rows and columns
  for (let i = 0; i < rows; i++) {
    for (let j = 0; j < columns; j++) {
      // Found an island? Great! Increment and start searching around
      // using your favourite traversal algorithm
      if (grid[i][j] === "1") {
        numIslands++
        dfs(i, j)
      }
    }
  }

  return numIslands
}

/**
 * Time: O(r * c) -> since we'll be iterating through all rows * columns cells
 * Space: O(r * c) -> since we'll be storing all rows * columns cells at a maximum
 */

// case 1
const grid1 = [
  ["1", "1", "1", "1", "0"],
  ["1", "1", "0", "1", "0"],
  ["1", "1", "0", "0", "0"],
  ["0", "0", "0", "0", "0"],
]

console.log(numIslands(grid1))

// case 2
const grid2 = [
  ["1", "1", "0", "0", "0"],
  ["1", "1", "0", "0", "0"],
  ["0", "0", "1", "0", "0"],
  ["0", "0", "0", "1", "1"],
]

console.log(numIslands(grid2))

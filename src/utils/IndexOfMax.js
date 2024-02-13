export function indexOfMax(arr) {
  let maxIndex = 0

  for (let i = 0; i < arr.length; i++) {
    if (i > maxIndex) {
      maxIndex = i
    }
  }

  return maxIndex
}

import DataPoint from '../types/DataPoint'

const linearInterpolate = (numPoints: number, increment: number, startFrom: number) => {
  let val = increment
  let points: DataPoint[] = []
  for (let i = startFrom; i < numPoints + startFrom; i++) {
    const point = {
      time: i,
      price: val += increment
    }
    points = [...points, point]
  }
  return points
}

export { linearInterpolate }

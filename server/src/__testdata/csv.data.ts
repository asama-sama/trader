const case1 = {
  csv: `Time,Price
          0,1.2546
          1,1.2567
          2,1.2577
          3,1.2579
          4,1.2593
          5,1.2668
          6,1.2695`,
  json: [
    { time: '0', price: '1.2546' },
    { time: '1', price: '1.2567' },
    { time: '2', price: '1.2577' },
    { time: '3', price: '1.2579' },
    { time: '4', price: '1.2593' },
    { time: '5', price: '1.2668' },
    { time: '6', price: '1.2695' }
  ]
}
const case2 = {
  csv: 'Time,Price',
  json: []
}

const case3 = {
  csv: '',
  json: []
}
const case4 = {
  csv: `Time,Price
          0,1.2546


          3,1.2579

          6,1.2695`,
  json: [
    { time: '0', price: '1.2546' },
    { time: '3', price: '1.2579' },
    { time: '6', price: '1.2695' }
  ]
}

export { case1, case2, case3, case4 }

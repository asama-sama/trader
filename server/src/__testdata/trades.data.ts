import Trade from '../types/Trade'

const trade1: Trade[] = [{
  open: {
    time: 1,
    price: 1
  },
  close: {
    time: 2,
    price: 2
  }
}, {
  open: {
    time: 3,
    price: 3
  },
  close: {
    time: 4,
    price: 4
  }
}, {
  open: {
    time: 5,
    price: 5
  },
  close: {
    time: 6,
    price: 7
  }
}]

const trade2: Trade[] = [{
  open: {
    time: 1,
    price: 1
  },
  close: {
    time: 2,
    price: -2.5
  }
}, {
  open: {
    time: 3,
    price: 3
  },
  close: {
    time: 4,
    price: -4
  }
}, {
  open: {
    time: 5,
    price: 5
  },
  close: {
    time: 6,
    price: -7
  }
}]

const trade3: Trade[] = []

export { trade1, trade2, trade3 }

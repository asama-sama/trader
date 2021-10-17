import ITrade from '../types/ITrades'
// takes a list of trades and renders them
const Trades = ({trades}: {trades: ITrade[]}) => {
  const tradesWithProfit = trades.map(t => {
    return {
      ...t,
      profit: t.close.price - t.open.price
    }
  })
  const totalProfit = tradesWithProfit.reduce((acc, curr) => acc + curr.profit, 0)
  return (<div>
    {tradesWithProfit.map((trade, idx) => {
      return (
        <div key={`trade-${idx}`}>
          <span>Open at {trade.open.time} ({trade.open.price.toFixed(4)}), close {trade.close.time} ({trade.close.price.toFixed(4)}) for profit {trade.profit.toFixed(4)}</span>
        </div>
      )
    })}
    <div>Total profit {totalProfit.toFixed(4)}</div>
  </div>)
}

export default Trades
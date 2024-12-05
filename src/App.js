import React, { useState } from 'react'
import NewCost from './components/NewCost/NewCost'
import Costs from './components/Costs/Costs'

const INITIAL_COSTS = [
  {
    id: 'c1',
    date: new Date(2024, 10, 29),
    description: 'LED TV',
    amount: 999.99,
  },
  {
    id: 'c2',
    date: new Date(2023, 6, 15),
    description: 'New PC',
    amount: 1999,
  },
  {
    id: 'c3',
    date: new Date(2022, 2, 21),
    description: 'Car',
    amount: 9199,
  },
]

function App() {
  const [costs, setCosts] = useState(INITIAL_COSTS)

  const addCostHandler = (cost) => {
    setCosts((precCosts) => {
      return [cost, ...precCosts]
    })
  }

  return (
    <div>
      <NewCost onAddCost={addCostHandler} />
      <Costs costs={costs} />
    </div>
  )
}

export default App

// import React from 'react'
 import { calculateTrendPercentage } from '~/lib/utils'

const StatsCard = ({
    headerTitle,
    total,
    lastMonthCount,
    currentMonthCount }: StatsCard) => {
    const { trend, percentage } = calculateTrendPercentage(currentMonthCount, lastMonthCount);

    const isDecrement = trend === 'decrement';
  return (
    <article>
        <h3>{headerTitle}</h3>
    </article>
  )
}

export default StatsCard

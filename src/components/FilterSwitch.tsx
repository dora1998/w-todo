import * as React from 'react'
import Filter from '../Filter'

import '../styles/FilterSwitch.css'

const FilterItems = [
  [Filter.ALL, '全て'],
  [Filter.NOT_COMPLETED, '未完了'],
  [Filter.COMPLETED, '完了']
]

interface FilterSwitchProps {
  selected: Filter
  onChange: (selected: Filter) => void
}

const FilterSwitch: React.FC<FilterSwitchProps> = (
  props: FilterSwitchProps
) => {
  const handleChange = (event: React.FormEvent<HTMLInputElement>) => {
    const newVal = event.currentTarget.value
    props.onChange(newVal)
  }

  const filterItems = FilterItems.map(item => (
    <label key={item[0]}>
      <input
        type="radio"
        name="filter"
        value={item[0]}
        onChange={handleChange}
        checked={item[0] === props.selected}
      />
      <div>{item[1]}</div>
    </label>
  ))

  return <div className="filterswitch">{filterItems}</div>
}

export default FilterSwitch

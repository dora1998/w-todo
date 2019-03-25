import * as React from 'react'
import Filter from '../Filter'

import styled from 'styled-components'

const FilterItems = [
  [Filter.ALL, '全て'],
  [Filter.NOT_COMPLETED, '未完了'],
  [Filter.COMPLETED, '完了']
]

interface FilterSwitchProps {
  selected: Filter
  onChange: (selected: Filter) => void
}

export default (props: FilterSwitchProps) => {
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

  return <FilterSwitch>{filterItems}</FilterSwitch>
}

const FilterSwitch = styled.div`
  width: 100%;
  display: flex;
  margin-top: 8px;

  & > label {
    flex-grow: 1;
    margin: 0 16px;
    cursor: pointer;
  }

  input {
    display: none;
  }
  div {
    text-align: center;
    padding: 8px;
  }
  input:checked + div {
    color: #fff;
    background-color: #000;
    border-radius: 16px;
  }
`

import React from 'react'

const Filter = ({searchFilter, setSearchFilter}) => {
  return (
    <div>
         filter shown with <input
         onChange={(event) => setSearchFilter(event.target.value) }
         value={searchFilter} />
      </div>
  )
}

export default Filter
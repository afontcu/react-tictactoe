import React from 'react'

const Cell = ({ value, onClick, disabled }) => (
  <button className="Cell" onClick={onClick} disabled={disabled}>
    {value}
  </button>
)

export default Cell

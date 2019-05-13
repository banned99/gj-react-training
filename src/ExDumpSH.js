import React from 'react'

export default (props) => (
  <div>
    <p>{props.name}</p>
    {props.children}
  </div>
)
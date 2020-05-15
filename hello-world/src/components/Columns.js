import React, { Fragment } from 'react'

function Columns () {
  const items = []
  return (
    <>{/*
      {items.map(item => (
        <Fragment key={item.id}>
            <h1>Title</h1>
            <p>{item.title}</p>
        </Fragment>
      ))}*/}
      <td>Name</td>
      <td>Nava</td>
    </>
  )
}

export default Columns

import React from 'react'

function NameList () {
  const names = ['Nava', 'Clark', 'Bruce','Nava']
  const nameList = names.map((name, index) => <h2 key={index}>{index} {name}</h2>)
  return (
    <div>
      {/*<h2>{names[0]}</h2>
            <h2>{names[1]}</h2>
    <h2>{names[2]}</h2>*/}
      {nameList}
    </div>
  )
}

export default NameList

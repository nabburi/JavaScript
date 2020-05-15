import React from 'react'

//JSX veriosn of hello Component
// const Hello = () => {
//     return(
//         <div>
//             <h1>Hello Nava</h1>
//         </div>
//     )
// }

//Without JSX
const Hello = () => {
  return React.createElement(
    'div',
    { id: 'hello', className: 'dummyClass' },
    React.createElement('h1', null, 'Hello Nava')
  )
}

export default Hello

import React from 'react'

// //functional component
// function Greet(){
//     return <h1>Hello Nava</h1>
// }

//using Arrow functions with named export
//export const Greet = () => <h1>Hello Nava</h1>

//using Arrow functions
// const Greet = props => {
//   return (
//     <div>
//       <h1>
//         Hello {props.name} a.k.a {props.heroName}
//       </h1>
//       {props.children}
//     </div>
//   )
// }

//destructuring props
// const Greet = ({name, heroName}) => {
//     return (
//       <div>
//         <h1>
//           Hello {name} a.k.a {heroName}
//         </h1>
//       </div>
//     )
//   }

//destructuring props in function body
const Greet = props => {
    const{name, heroName} = props
    return (
      <div>
        <h1>
          Hello {name} a.k.a {heroName}
        </h1>
      </div>
    )
  }

  
//default export
export default Greet

// import logo from './logo.svg';
import './App.css';
// import Message from './Message';

// function App()
// {
//     // let  firstValue: string = "Manny"
//   // let firstValue: number = 34
//   // let firstValue: Array<number> = [1, 2, 3, 5, 5]
//         // let  firstValue: Array<string> = ["Rasheed", "Akanni"]
//   // let aTuple: [string, number] = ["Manny", 34] 
//   // enum Codes { first = 14, second = 2}
//   // let firstName: any = 3
//   // const warning = (): void =>
//   // {
//   //   console.log("warning ")
//   // }
//   return (
//     <div className="App">
//       <header className="App-header">
//         <img src={logo} className="App-logo" alt="logo" />
//         <p>
//           {/* The value {Codes.first} is of {Codes.second} type!1 */}
//           {/* The value {firstName} is of {firstName} type! */}
//           <Message></Message>
//          </p>

//       </header>
//     </div>
//   );
// }

// export default App;

import { useState } from "react"


interface TodoProps {
  items: string
  isDone: boolean
}
const Todo = () => {
  const [items, setItem] = useState < string > ( "" )
  const [itemsList, setItemList] = useState < Array < TodoProps >> ( [] )

  const handleChange = ( event: any ) => {
    setItem( event.target.value )
  }

  const handleclick = () => {
    if(!items ){
      return alert("Input Field cannot be empty")
    }
    setItemList(prevItems => [...prevItems, { items, isDone: false }])
    setItem("")
  }

  const handleItemClass = ( index: number ) => {
    setItemList(
      itemsList.map( ( data: TodoProps ) => {
        if ( data === itemsList[index] ) {
          data.isDone = !data.isDone
        }
        return data
      } )
    )
  }

  return (
    <>
      <div className="todo-container App">
        <div>
          <input type="text" onChange={handleChange} value={items} />
          <button onClick={handleclick}>Add</button>
        </div>
        <p>
          {itemsList.filter(el => el.isDone).length} completed from{" "}
          {itemsList.length}
        </p>
        <ul>
          {itemsList.map((itemCurrent, index: number) => {
            return (
              <li
                key={index}
                onClick={() => handleItemClass(index)}
                className={itemCurrent.isDone ? "is-done" : ""}
              >
                {itemCurrent.items}
              </li>
            )
          })}
        </ul>
      </div>
    </>
  )
}
export default Todo
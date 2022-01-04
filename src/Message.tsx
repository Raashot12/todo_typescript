import React from "react"
import messageHoc from "./Hoc"
const example = (props: any): any => (
  <>
    {props.name}, {props.message}
  </>
)

const Message = messageHoc(example)

export default Message

// const initialState = {
//     name: "Manny",
//     message: "TypeScript is cool"
// }
// type State = Readonly<typeof initialState>

// export default class Message extends Component {
//     readonly state: State = initialState
//     render() {
//         return (
//             <div>
//                 <p>{this.state.name}, { this.state.message}</p>
//             </div>
//         )
//     }
// }

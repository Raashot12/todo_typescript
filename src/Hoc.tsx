import React, {Component} from "react"
const initialState = {
  name: "Manny",
  message: "HOC is cool",
}
type State = Readonly<typeof initialState>

const messageHoc = (WrappedComponent: any) => {
  class HOC extends Component<{}, State> {
    readonly state: State = initialState
    render() {
      return (
        <WrappedComponent name={this.state.name} message={this.state.message} />
      )
    }
  }
  return HOC
}

export default messageHoc
//A higher-order component (HOC) is an advanced technique in React for reusing component logic.
//HOCs are not part of the React API, perse.They are a pattern that emerges from React's compositional nature.
//A higher-order component is a function that takes a component and returns a new component.

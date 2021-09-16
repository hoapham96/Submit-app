import React from "react";

class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = { username: "", input: "" };
  }
  
  myChangeHandler = (event) => {
    this.setState({ input: event.target.value });
  };
  
  handleSubmit = (e) =>{ 
    e.preventDefault();
    this.setState({username: this.state.input})
  }

  render() {
    return (
      <form onSubmit={this.handleSubmit}>
        <h1>Hello {this.state.username}</h1>
        <p>Enter your name:</p>
        <input
          type="text"
          onChange={this.myChangeHandler}
        />
        <button>submit</button>
      </form>
    );
  }
}

export default App;

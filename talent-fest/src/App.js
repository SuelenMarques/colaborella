import React, { Component } from "react";
import Input from "./Input";
import "./App.css";
import Buttons from "./Buttons";
import { Grid, Paper } from "@material-ui/core";
import MessageCard from "./MessageCard";
import Header from "./Header";
// import Aside from "./Aside";


class App extends Component {

  constructor(props) {
    super(props);
    this.state = {
      post: [],
      message: ""
    }
    this.HandleInputChange = this.HandleInputChange.bind(this);
    this.HandleClick = this.HandleClick.bind(this);
  }

  HandleInputChange(event) {
    let message = event.target.value;
    this.setState({
      message: message
    });
  }

  HandleClick() {
    this.setState((prevState) => {
      return {
        post: prevState.post.concat([{ message: prevState.message}]).reverse(),
        message: ""
      };
    });
  }

  render() {
    return (
      <div>
        <Grid container>
          <Grid item xs={12}>
            <Header />
          </Grid>
          {/* <Grid>
            
          </Grid> */}
          <Grid item xs={12}>
            <Input />
          </Grid>
          <Grid item xs={12} className="d-flex flex-column align-items-center m-5">
           <Input value={this.state.message}
              onChange={event => {
                this.HandleInputChange(event)
              }}
            />
            <Buttons variant="raised"
              color="primary"
              size="small"
              onClick={event => {
                this.HandleClick(event);
              }}
              name={"Postar Avaliação"}
            />
            <MessageCard posts={this.state.post} />
          </Grid>
        </Grid>
         
      </div>
    );
  }
}

export default App;

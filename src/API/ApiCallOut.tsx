import React from 'react';
import axios from 'axios';

export class APICallOut extends React.Component {
      state = {
        dataReady: false
      }
  
      componentDidMount () {
        axios.get('https://jsonplaceholder.typicode.com/todos/1')
        .then(data => {
          this.setState({ dataReady: true })
        })
      }
    
    render() {
        if (this.state.dataReady) {
            return (<div> data is ready! </div>)
          } else {
            return (<div> spinner! </div>)
          }
    }
}
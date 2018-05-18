import React from 'react';
import axios from 'axios';
class Jokes extends React.Component {
    state = {
        jokes: [],
    };
    
    render() {
        return (
        <ul>
            {this.state.jokes.map(joke => {
                return(
                <div key={joke.id}>
                    <li>{joke.type}</li>
                    <li>{joke.setup}</li>
                    <li>{joke.punchline}</li>
                                        
                </div>
                )
            })}
        </ul>
    )
    }

  componentDidMount = event => {
      const token = localStorage.getItem('token');
      
      const requestOptions = {
          headers: {
              Authorization: token,
            },
        };
        axios
        .get('http://localhost:5000/api/jokes', requestOptions)
        .then(response => {
            this.setState({ jokes: response.data });
        })
        .catch(err => {
            this.props.history.push('/login');
        });
    };
         
}

export default Jokes;
import React, { Component } from 'react';
import Customer from './components/Customer';
import './App.css';

const customers = [
  {
    'id': 1,
    'image': "http://placeimg.com/64/64/8",
    'name': 'Albert',
    'birthday': '961222',
    'gender': 'male',
    'job': 'student'
  },
  {
    'id': 2,
    'image': "http://placeimg.com/64/64/2",
    'name': 'Lisa',
    'birthday': '871106',
    'gender': 'female',
    'job': 'programmer'
  },
  {
    'id': 3,
    'image': "http://placeimg.com/64/64/3",
    'name': 'Mary',
    'birthday': '960427',
    'gender': 'female',
    'job': 'accountant'
  }
]

class App extends Component {
  render() {
    return (
      <div>
        {
          customers.map(c => {
            return (
              <Customer
                key = {c.id}
                id={c.id}
                image={c.image}
                name={c.name}
                birthday={c.birthday}
                gender={c.gender}
                job={c.job}
              />
            )
          })
        }
      </div>
    );
  }
}

export default App;

import React, { Component } from "react"
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Redirect,
} from "react-router-dom";
import { Provider } from '../context/context'
import Header from '../Header'
import Registration from '../Page/Registration'
import PageUsers from '../Page/PageUsers'
import About from '../Page/About'
import './App.scss'

Date.prototype.getFormatDate = function() {
  const addZero = (num) => {
    if(num >= 0 && num <= 9) {
      return '0' + num
    }
    return num
  }

  return `${addZero(this.getDate())}.${this.getMonth() + 1}.${this.getFullYear()}`
}

class App extends Component {

  state = {
    users: [
      {
        userName: 'Лиза Нуркова',
        userGender: 'Женский',
        userCreditCard: '4747-6548-5468-1323',
        withLoyaltyProgram: false,
        userCoupon: '',
        date: new Date()
      },
      {
        userName: 'Вадим Иванов',
        userGender: 'Мужской',
        userCreditCard: '4756-6532-5218-1893',
        withLoyaltyProgram: true,
        userCoupon: '58623645',
        date: new Date()
      },
      {
        userName: 'Люда Петров',
        userGender: 'Женский',
        userCreditCard: '6578-3456-8763-5156',
        withLoyaltyProgram: true,
        userCoupon: '93849383',
        date: new Date()
      }
    ]
  }

  addUser = (user) => {
    this.setState((prevState) => {
      return {
        users: [...prevState.users, user]
      }
    })
  }

  render() {
    return (
      <Provider value={{
        addUser: this.addUser,
        users: this.state.users
      }}>
        <Router>
          <Header />
          <Switch>
            <Route path="/add-user" exact>
              <Registration />
            </Route>
            <Route path="/user-list" exact>
              <PageUsers />
            </Route>
            <Route path="/about" exact>
              <About />
            </Route>
            <Route path="/">
              <Redirect to="/add-user" />
            </Route>
          </Switch>
        </Router>
      </Provider>
    )
  }
}

export default App
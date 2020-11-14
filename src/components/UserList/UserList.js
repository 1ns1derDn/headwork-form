import React from 'react'
import { Consumer } from '../context/context'
import UserListItem from '../UserListItem'
import './UserList.scss'

const UserList = () => {
  return (
    <div className="UserList">
      <div className="UserList-Head">
        <h3 className="UserList-Title UserList-Name">Имя</h3>
        <h3 className="UserList-Title UserList-Gender">Пол</h3>
        <h3 className="UserList-Title UserList-Cupon">Купон</h3>
        <h3 className="UserList-Title UserList-Date">Дата</h3>
      </div>

      <div className="UserList-Content">
        <Consumer>
          {
            ({users}) => {
              return (
                users.map((user, index) => {
                  const {userName, userGender, userCreditCard, userCoupon, date} = user
                  return (
                    <UserListItem
                      key={index}
                      name={userName}
                      gender={userGender}
                      creditCard={userCreditCard}
                      cupon={userCoupon}
                      date={date.getFormatDate()}
                      clzs={
                        {
                          nameClazz: "UserList-Name",
                          genderClazz: "UserList-Gender",
                          cuponClazz: "UserList-Cupon",
                          dateClazz: "UserList-Date"
                        }
                      }
                    />
                  )
                })
              )
            }
          }
        </Consumer>
      </div>
    </div>
  )
}

export default UserList
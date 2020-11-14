import React, { Component } from 'react'
import InputWithMask from '../InputWithMask'
import BlockTran from '../BlockTran'
import ButtonTran from '../ButtonTran/ButtonTran'
import CheckboxTran from '../CheckboxTran'
import InputTran from '../InputTran/InputTran'
import RadioTran from '../RadioTran'
import RadioQuestion from '../RadioQuestion/RadioQuestion'
import './FormTran.scss'


const initState = {
  userName: {
    value: "",
    isValidate: true,
    errorMessage: '',
    touched: false
  },
  userGender: {
    value: ''
  },
  userCreditCard: {
    value: "",
    isValidate: true,
    errorMessage: '',
    touched: false
  },
  withLoyaltyProgram: {
    value: false
  },
  userCoupon: {
    value: "",
    isValidate: true,
    errorMessage: '',
    touched: false
  },
  date: new Date()
}

class FormTran extends Component {

  state = {
    userName: {
      value: "",
      isValidate: true,
      errorMessage: '',
      touched: false
    },
    userGender: {
      value: ''
    },
    userCreditCard: {
      value: "",
      isValidate: true,
      errorMessage: '',
      touched: false
    },
    withLoyaltyProgram: {
      value: false
    },
    userCoupon: {
      value: "",
      isValidate: true,
      errorMessage: '',
      touched: false
    },
    date: new Date()
  }

  validateInput = (target) => {
    const { name, value } = target
    const regExpUserName = /^[А-ЯЁ][а-яё]*\s[А-ЯЁ][а-яё]*$/
    const regExpUserCreditCard = /\d{4}-\d{4}-\d{4}-\d{4}/
    const regExpUserCoupon = /^[0-9]{8}$/

    if (name === 'userName') {
      if (!regExpUserName.test(value) && value !== '') {
        this.setState((prevState) => {
          return {
            [target.name]: {
              ...prevState[target.name],
              isValidate: false,
              errorMessage: 'Введите имя и фамилия заглавными буквами'
            }
          }
        });
      } else {
        this.setState((prevState) => {
          return {
            [target.name]: {
              ...prevState[target.name],
              isValidate: true,
              errorMessage: ''
            }
          }
        });
      }
    }
    if (name === "userCreditCard") {
      if (!regExpUserCreditCard.test(value) && value !== '') {
        this.setState((prevState) => {
          return {
            [target.name]: {
              ...prevState[target.name],
              isValidate: false,
              errorMessage: "Введите номер карты"
            }
          }
        });
      } else {
        this.setState((prevState) => {
          return {
            [target.name]: {
              ...prevState[target.name],
              isValidate: true,
              errorMessage: ""
            }
          }
        });
      }
    }

    if (name === "userCoupon") {
      if (!regExpUserCoupon.test(value) && value !== '') {
        this.setState((prevState) => {
          return {
            [target.name]: {
              ...prevState[target.name],
              isValidate: false,
              errorMessage: "Введите номер купона"
            }
          }
        });

      } else {
        this.setState((prevState) => {
          return {
            [target.name]: {
              ...prevState[target.name],
              isValidate: true,
              errorMessage: ""
            }
          }
        });
      }
    }
  }

  handleBlur = (e) => {
    const target = e.target
    this.validateInput(target)
    this.setState((prevState) => {
      return {
        [target.name]: { ...prevState[target.name], touched: true }
      }
    });
  }

  handleOnFocus = (e) => {
    const target = e.target
    this.setState((prevState) => {
      return {
        [target.name]: { ...prevState[target.name], isValidate: true }
      }
    });
  }


  handleChange = (e) => {
    const target = e.target;
    const value = target.type === "checkbox" ? target.checked : target.value;
    const name = target.name;

    this.setState((prevState) => {
      return {
        [name]: { ...prevState[name], value: value }
      }
    });
  };


  handleSubmit = (e) => {
    e.preventDefault()
    const { userName, userCreditCard, userCoupon } = this.state

    if (userName.isValidate && userCreditCard.isValidate && userCoupon.isValidate) {

      const {
        userName,
        userGender,
        userCreditCard,
        withLoyaltyProgram,
        userCoupon } = this.state

      this.props.addUser({
        userName: userName.value,
        userGender: userGender.value,
        userCreditCard: userCreditCard.value,
        withLoyaltyProgram: withLoyaltyProgram.value,
        userCoupon: userCoupon.value,
        date: new Date()
      });

      this.props.activePupop()
      this.setState(initState);
      e.target.closest('Form').reset()
    }
  };

  render() {

    const {
      userName,
      userCreditCard,
      withLoyaltyProgram,
      userCoupon
    } = this.state

    return (
      <form onSubmit={this.handleSubmit} className="Form">
        <BlockTran clazz="FormTran">
          <InputTran
            title="Имя и фамилия"
            value={userName.value}
            handleBlur={this.handleBlur}
            handleFocus={this.handleOnFocus}
            handleChenge={this.handleChange}
            placeholder="Введите имя и фамилию"
            id="UserName"
            type="text"
            clazz='FormTran-Inp'
            name="userName"
            required={true}
            validate={userName.isValidate}
            errorMessage={userName.errorMessage}
            touched={userName.touched}
          />

          <RadioQuestion
            clazz="FormTran-RadioQuestion"
            title="Выберите пол">
            <RadioTran
              value="Мужской"
              name="userGender"
              textHtml="Мужской"
              id="male"
              clazz="FormTran-Radio"
              handleChange={this.handleChange}
              required={true}
            />
            <RadioTran
              value="Женский"
              name="userGender"
              textHtml="Женский"
              id="female"
              handleChange={this.handleChange}
              required={true}
            />
          </RadioQuestion>

          <InputWithMask
            title="Номер карты"
            value={userCreditCard.value}
            name="userCreditCard"
            handleBlur={this.handleBlur}
            handleOnFocus={this.handleOnFocus}
            handleChange={this.handleChange}
            placeholder="Введите номер Вашей карты"
            id="maskCreditCard"
            clazz='FormTran-Inp'
            type="text"
            required={true}
            mask="9999-9999-9999-9999"
            validate={userCreditCard.isValidate}
            errorMessage={userCreditCard.errorMessage}
            touched={userCreditCard.touched}
          />

          <CheckboxTran
            title="У вас есть купон?"
            value={withLoyaltyProgram.value}
            name="withLoyaltyProgram"
            action={this.handleChange}
            id="Cupon"
            clazz='FormTran-Chec'
            checked={withLoyaltyProgram.value}
          />

          {
            withLoyaltyProgram.value ? <InputWithMask
              title="Введите пожалуйста номер купона"
              value={userCoupon.value}
              name="userCoupon"
              handleBlur={this.handleBlur}
              handleOnFocus={this.handleOnFocus}
              handleChange={this.handleChange}
              placeholder="Номер купона"
              id="loyaltyProgram"
              clazz='FormTran-Inp'
              type="text"
              required={true}
              mask="99999999"
              validate={userCoupon.isValidate}
              errorMessage={userCoupon.errorMessage}
              touched={userCoupon.touched}
            /> : null
          }
          <ButtonTran>
            {"Готово"}
          </ButtonTran>
        </BlockTran>
      </form>
    )
  }
}

export default FormTran
import React from 'react'
import { useSelector, useDispatch } from 'react-redux'
import {
  addUser,
  handleChange,
  handleFocus,
  handleBlur,
  isValidate,
  handleSubmit,
} from '../../actions/action'

import FormTran from '../FormTran/FormTran'

const ContainerFormTran = () => {
  const dispatch = useDispatch()
  const mapStateToProps = useSelector(({ user }) => ({ user }))
  const mapDispatchToProps = (dispatch) => ({
    addUser: (user) => dispatch(addUser(user)),
    handleChange: (e) => dispatch(handleChange(e)),
    handleFocus: (e) => dispatch(handleFocus(e)),
    handleSubmit: handleSubmit(dispatch),
    handleBlur: (e) => {
      dispatch(isValidate(e.target))
      dispatch(handleBlur(e))
    },
  })
  return <FormTran {...mapStateToProps} {...mapDispatchToProps(dispatch)} />
}

export default ContainerFormTran
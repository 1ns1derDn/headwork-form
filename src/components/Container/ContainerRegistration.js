import React, { useEffect, useContext } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { Redirect } from 'react-router-dom'
import { popupToggle, goToPageOurList, fetchJoke } from '../../actions/action'
import ContextServiceJoke from '../context/contextServiceJoke'

import Registration from '../Page/Registration'

const ContainerRegistration = () => {

  const serviceJoke = useContext(ContextServiceJoke)
  const dispatch = useDispatch();

  const mapStateToProps = useSelector((state) => ({
    goToOurList: state.goToPageOurList,
    popupActive: state.popupActive,
    joke: state.joke
  }))

  const mapDispatchToProps = (dispatch) => ({
    popupToggle: () => dispatch(popupToggle()),
    goToPageOurList: () => {
      dispatch(goToPageOurList())
      setTimeout(() => { dispatch(goToPageOurList()) }, 0)
    }
  })

  useEffect(() => {
    dispatch(fetchJoke(serviceJoke)())
    return () => {
      clearTimeout(mapStateToProps.joke.clearAlerSetTimeout)
    }
  }, [])

  if (mapStateToProps.goToOurList) {
    return <Redirect to="/user-list" />
  }

  return <Registration {...mapStateToProps} {...mapDispatchToProps(dispatch)}/>
}

export default ContainerRegistration
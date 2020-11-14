import React, { Component } from 'react'
import { Consumer } from '../../context/context'
import { Redirect } from 'react-router-dom'
import Video from '../../video'
import FormTran from '../../FormTran'
import Welcome from '../../Welcome'
import Popup from '../../Popup/Popup'
import './Registration.scss'

class Registration extends Component {

  state = {
    popupActive: false,
    goToPage: false
  }

  handlePopupToggle = () => {
    this.setState((state) => {
      return {
        popupActive: !state.popupActive
      }
    })
  }

  handleGoToPage = () => {
    this.setState({ goToPage: true })
  }

  render() {
    return (
      <Consumer>
        {
          (context) => {
            const { addUser } = context

            if (this.state.goToPage) {
              return <Redirect to="/user-list" />
            }

            return (
              <React.Fragment>
                <Video>
                  <section className="Intro">
                    <div className="Container">
                      <div className="Intro-Inner">
                        <Welcome />
                        <FormTran
                          addUser={addUser}
                          activePupop={this.handlePopupToggle}
                        />
                      </div>
                    </div>
                  </section>
                </Video>
                {
                  this.state.popupActive ? <Popup
                    title="Регистрация прошла успешно"
                    activePupop={this.handlePopupToggle}
                    handleClickPopupButton={this.handleGoToPage} /> : null
                }
              </React.Fragment>
            )
          }
        }
      </Consumer>
    )
  }
}

export default Registration
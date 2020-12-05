import React from 'react'
import Video from '../../UI/video'
import ContainerFromTran from '../../Container/ContainerFromTran'
import Welcome from '../../Welcome'
import Popup from '../../UI/Popup/Popup'
import JokeGeneratorContainer from '../../jokeGenerator/JokeGenerator'
import AlertTran from '../../UI/AlertTran/AlertTran'
import './Registration.scss'

const Registration = (props) => {
  return (
    <React.Fragment>
      <Video>
        <section className="Intro">
          <div className="Container">
            <div className="Intro-Inner">
              <Welcome />
              <div className="Intro-Box">
                <ContainerFromTran activePupop={props.popupToggle} />
                <JokeGeneratorContainer joke={props.joke} />
              </div>
            </div>
          </div>
        </section>
      </Video>
      {
        props.popupActive ? <Popup
          title="Регистрация прошла успешно"
          activePupop={props.popupToggle}
          handleClickPopupButton={props.goToPageOurList} /> : null
      }
      {
        props.joke.alert ?
          <AlertTran alert="Шутка про Чака Норриса загрузилась. Уведомление исчезнет через 5 секунд" />
          : null
      }
    </React.Fragment>
  )
}

export default Registration
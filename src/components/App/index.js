import React from "react";
import styles from "./App.module.scss"

const App = (props) => {
  return(
    <div className={ styles.container }>
      <div className={ styles['main-view'] }>
        <div className={ styles['current-doing'] }>
          <div className= {  `${styles['todo-check-circle']} ${styles['doing-circle']}` }></div>
          <div className= {  `${styles['doing-task-text']}` }>The First Thing To Do Today</div>
        </div>
        <div className={ styles['todo-list'] }>
          <div className= { styles['todo-item'] }>
            <div className={  `${styles['todo-check-circle']} ${styles['todo-circle']}` }></div>
            <div className={  `${styles['todo-task-text']}` }>The Second Thing To Do Today</div>
            <div className={ styles['todo-play-btn'] }></div>
          </div>
          <div className={ styles['todo-item'] }>
            <div className={  `${styles['todo-check-circle']} ${styles['todo-circle']}` }></div>
            <div className={  `${styles['todo-task-text']}` }>The Third Thing To Do Today</div>
            <div className={ styles['todo-play-btn'] }></div>
          </div>
          <div className={ styles['todo-item'] }>
            <div className={  `${styles['todo-check-circle']} ${styles['todo-circle']}` }></div>
            <div className={ styles['todo-task-text'] }>The Forth Thing To Do Today</div>
            <div className={ styles['todo-play-btn'] }></div>
          </div>
        </div>
        <div className="add-todo"></div>
        <div className="recently-done"></div>
        <div className="tomato">
          <div className="pedicle"></div>
          <div className="body"></div>
          <div className="eyes"></div>
          <div className="mouth"></div>
          <div className="clock">
            <div className="minutes"></div>
            <div className="colon"></div>
            <div className="seconds"></div>
          </div>
        </div>
        <div className="progress-bar"></div>
        <div className="tools-bar">
          <div className="play"></div>
          <div className="stop"></div>
        </div>
      </div>
      <div className="menu-bar">
        <div className="main-page"></div>
        <div className="music-config"></div>
        <div className="statistics-report"></div>
      </div>
    </div>
  );
}

export default App;
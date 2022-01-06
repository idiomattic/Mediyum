import React from 'react'
import ReactDOM from 'react-dom'
import Root from './components/root'
import configureStore from './store/store'


document.addEventListener('DOMContentLoaded', () => {

  let store
  if (window.currentUser) {
    const currentUser = window.currentUser
    const preloadedState = {
      session: { currentUserId: currentUser.id },
      entities: {
        users: { [currentUser.id]: currentUser }
      }
    }
    store = configureStore(preloadedState)
    delete window.currentUser
  } else {
    store = configureStore()
  }

  window.store = store

  const root = document.getElementById('root')
  ReactDOM.render(<Root store={store} />, root)
})

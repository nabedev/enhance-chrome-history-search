import React from 'react'
import ReactDOM from 'react-dom'

import App from './app'

ReactDOM.render(
  <App />,
  document.getElementById('root')
)

// const shadowHost = document.createElement('happy-hack-chrome')
// const shadowRoot = shadowHost.attachShadow({mode: 'open'})

// const slot = document.createElement('slot')
// shadowRoot.append(slot)

// const style = document.createElement('style')
// style.innerHTML = `
//   :host {
//     all: initial;
//   }
// `
// shadowRoot.append(style)

// const appRoot = document.createElement('div')

// shadowRoot.appendChild(appRoot)

// document.body.appendChild(shadowHost)

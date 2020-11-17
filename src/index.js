import React from 'react'
import ReactDOM from 'react-dom'

import App from './app'

const shadowHost = document.createElement('happy-hack-chrome')
const shadowRoot = shadowHost.attachShadow({mode: 'open'})

const style = document.createElement('style')
style.innerHTML = `
  :host {
    all: initial;
  }
`
shadowRoot.append(style)

const appRoot = document.createElement('div')
ReactDOM.render(
  <App emotionMountPoint={shadowRoot} />,
  appRoot
)
shadowRoot.append(appRoot)

const slot = document.createElement('slot')
shadowRoot.append(slot)

document.body.appendChild(shadowHost)

const shadowHost = document.createElement('happy-hack-chrome')
const shadowRoot = shadowHost.attachShadow({mode: 'open'})

const slot = document.createElement('slot')
shadowRoot.append(slot)

const style = document.createElement('style')
style.innerHTML = `
  :host {
    all: initial;
  }
`
shadowRoot.append(style)

const iframe = document.createElement('iframe')
iframe.src = chrome.extension.getURL('./index.html')

// const appRoot = document.createElement('div')
// ReactDOM.render(
//   <App />,
//   document.getElementById('root')
// )

shadowRoot.appendChild(iframe)
document.body.appendChild(shadowHost)

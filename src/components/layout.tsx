import * as React from 'react'

const style = {
  padding: '0px',
  display: 'block',
  position: 'fixed',
  width: 'calc(80% + 20px)',
  minWidth: '400px',
  height: 'calc(100% - 70px)',
  top: '70px',
  left: '50%',
  margin: '0 0 0 -40%',
  background: 'aliceblue',
  zIndex: '2147483647'
}

const Layout: React.FC = () => (
  <div style={style}>
    happy-hack-chrome
  </div>
)

export default Layout

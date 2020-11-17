/** @jsx jsx */
import { jsx, css } from '@emotion/react'
import React from 'react'

const Layout: React.FC = () => (
  <div
    css={{
      backgroundColor: 'hotpink',
      color: 'white',
      '&:hover': {
        color: 'lightgreen'
      }
    }}
  >
    This has a hotpink background.
  </div>
)

export default Layout

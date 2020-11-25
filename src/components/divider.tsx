/** @jsx jsx */
import { jsx } from '@emotion/react'
import React, { CSSProperties } from 'react'

const Divider: React.FC<CSSProperties> = ({ children, ...props }) => (
  <hr
    css={{
      width: '100%',
      marginTop: '8px',
      marginBottom: '8px',
      color: 'gray',
      borderStyle: 'unset',
      borderWidth: 'unset',
      borderBottom: '1px solid',
      ...props
    }}
  />
)

export default Divider

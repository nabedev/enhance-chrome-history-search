/** @jsx jsx */
import { jsx, useTheme } from '@emotion/react'
import { Interpolation, CSSObject } from '@emotion/serialize'
import React from 'react'

const layoutStyle: Interpolation<CSSObject> = {
  display: 'block',
  position: 'fixed',
  width: 'calc(80%)',
  minWidth: '400px',
  maxWidth: '600px',
  boxShadow: `
  0 2.8px 2.2px rgba(0, 0, 0, 0.034),
  0 6.7px 5.3px rgba(0, 0, 0, 0.048),
  0 12.5px 10px rgba(0, 0, 0, 0.06),
  0 22.3px 17.9px rgba(0, 0, 0, 0.072),
  0 41.8px 33.4px rgba(0, 0, 0, 0.086),
  0 100px 80px rgba(0, 0, 0, 0.12)`,
  top: '120px',
  left: '0',
  right: '0',
  margin: '0 auto',
  zIndex: '2147483647',
  padding: '10px 14px',
  borderRadius: '14px',
}

const Layout: React.FC = ({ children }) => {
  const theme = useTheme()
  return <div css={{...layoutStyle,
    background: theme.colors.background,
    color: theme.colors.text,
    fontFamily: theme.fonts.body,
    }}>
    {children}
  </div>
}

export default Layout

/** @jsx jsx */
import { jsx } from '@emotion/react'
import React, { InputHTMLAttributes, useRef, useEffect } from 'react'

const Input: React.FC<InputHTMLAttributes<{}>> = ({ children, ...props }) => {
  // NOTE: This is hacky code. 
  // I want to set autofocus=true, but the input autofocus within shadowDOM doesn't work.
  // I think need to handle the focus event.
  // https://developers.google.com/web/fundamentals/web-components/shadowdom?hl=ja#focus
  const inputEl = useRef(null)

  useEffect(() => {
    inputEl.current.focus();
  }, [])

  return <input
    css={{ all: 'unset', width: '100%' }}
    {...props}
    ref={inputEl}
  >
    {children}
  </input>
}

export default Input

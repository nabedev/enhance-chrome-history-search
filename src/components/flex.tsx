/** @jsx jsx */
import { jsx } from '@emotion/react'
import React, { HTMLAttributes } from 'react'

const Flex: React.FC<HTMLAttributes<HTMLElement>> = ({
  children,
  ...props
}) => (
  <div
    css={{
      display: 'flex'
    }}
    {...props}
  >
    {children}
  </div>
)

export default Flex

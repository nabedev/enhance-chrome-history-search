/** @jsx jsx */
import { jsx, useTheme } from '@emotion/react'
import React, { CSSProperties } from 'react'

interface Props {
  selected: boolean
}

const ListItem: React.FC<CSSProperties & Props> = ({ children, selected }) => {
  const theme = useTheme()
  return (
    <div
      css={{
        background: selected && theme.colors.highlight,
        padding: '4px 8px'
      }}
    >
      {children}
    </div>
  )
}

export default ListItem

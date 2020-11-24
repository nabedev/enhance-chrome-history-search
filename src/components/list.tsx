/** @jsx jsx */
import { jsx } from '@emotion/react'
import React, { CSSProperties, useState, useEffect } from 'react'

import Flex from './flex'
import ListItem from './list-item'

interface Props {
  histories: any[]
}

const List: React.FC<CSSProperties & Props> = ({ children, histories }) => {
  const [selectedIndex, setSelectedIndex] = useState(0)

  const handleKeyDown = (e) => {
    switch(e.key) {
      case 'ArrowDown':
        setSelectedIndex(selectedIndex < histories.length - 1 ? selectedIndex + 1 : 0)
        break
      case 'ArrowUp':
        setSelectedIndex(selectedIndex - 1 > - 1 ? selectedIndex - 1 : histories.length - 1)
        break
      case 'Enter':
        window.location.href = histories[selectedIndex].url
        break
    }
  }

  // TODO: 再renderの度にevetListenerの登録・解除を行っているので最適化が必要そう。
  // mountとunmount時にのみ副作用が実行されるようにしたいけど
  // 依存リストを空にすると、handleKeyDownコールバックが実行された時に
  // 初期値0のselectedIndexと、初回に渡された履歴リストの長さが設定されたクロージャが作成されてしまう。
  // stateの方は関数型のsetStateを使って前回のstateを利用して更新すれば良さそうなのだけど、
  // propsはどうすれば...?
  // 未来の自分頑張って
  useEffect(() => {
    window.addEventListener('keydown', handleKeyDown)
    return () => {
      window.removeEventListener('keydown', handleKeyDown)
    }
  }, [handleKeyDown])

  return <Flex css={{ flexDirection: 'column', overflow: 'scroll', maxHeight: '480px', fontSize:'16px' }}>
    {histories && histories.map((history, key) => (
      <ListItem selected={key === selectedIndex}>
        <Flex css={{ alignItems: 'center' }}>
        <img src={history.favicon} />
        <Flex css={{ flexDirection: 'column', marginLeft: '8px' }}>
          <div>{history.title}</div>
          <div css={{
            color: 'grey'
          }}>{history.url}</div>
        </Flex>
        </Flex>
      </ListItem>
    ))}
  </Flex>
}

export default List

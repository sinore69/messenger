import React from 'react'
import { chats } from '@/utils/types'
function TextCrad(chat:{chat:chats}) {
  return (
    <div>{chat.chat.content}</div>
  )
}

export default TextCrad
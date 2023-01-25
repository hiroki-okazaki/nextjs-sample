import { useEffect, useState } from 'react'

const Chat = () => {
  const [messages, setMessages]: any[] = useState([])
  const [input, setInput] = useState('')

  const handleSubmit = (e: any) => {
    e.preventDefault()
    setMessages([...messages, input])
    setInput('')
    fetch('https://jsonplaceholder.typicode.com/posts', {
      method: 'GET' // or 'PUT'
      // mode: 'no-cors',
    })
      .then((response) => console.log(response.json()))
      // .then((data) => console.log(data))
      .catch((error) => {
        console.error('Error:', error)
      })
  }

  useEffect(() => {
    console.log('useEffectが実行されました')
  }, [messages])

  return (
    <div>
      <form onSubmit={handleSubmit}>
        <input value={input} onChange={(e) => setInput(e.target.value)} placeholder="Type a message" />
        <button type="submit">Send</button>
      </form>
      <div>
        {messages.map((message: string, index: number) => (
          <div key={index}>{message}</div>
        ))}
      </div>
    </div>
  )
}

export default Chat

import React, { useState } from 'react'
import ReactDOM from 'react-dom/client'

function App() {
  const [message, setMessage] = useState("")
  const [reply, setReply] = useState("")

  const sendMessage = async () => {
    const res = await fetch(import.meta.env.VITE_API_URL, {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({ message })
    })
    const data = await res.json()
    setReply(data.reply)
  }

  return (
    <div style={{ fontFamily: "Arial", padding: "2rem" }}>
      <h1>🤖 Meet Steve</h1>
      <p>Hi! I'm Steve, your 24/7 AI support bot from ChatbotUSA.</p>
      <textarea rows="3" value={message} onChange={e => setMessage(e.target.value)} placeholder="Ask me anything..." />
      <br />
      <button onClick={sendMessage} style={{ marginTop: "10px" }}>Send</button>
      <p><strong>Steve:</strong> {reply}</p>
    </div>
  )
}

ReactDOM.createRoot(document.getElementById('root')).render(<App />)

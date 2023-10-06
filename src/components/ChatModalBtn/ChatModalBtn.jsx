import React from 'react'
import './ChatModalBtn.css'

export default function ChatModalBtn({handleBtn}) {
  return (
    <section id="chatButtonSection">
        <button id="chatButton" onClick={handleBtn}>
           <i className="fa fa-comments-o"></i>
           <label className="chatButtonLabel">Start Chat</label>
        </button>
     </section>
  )
}

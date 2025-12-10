import React from 'react'
import { useNavigate } from 'react-router-dom'
import "./Event.css"

// ➤ Import your images
import event1 from "../images/event1.jpg"
import event2 from "../images/event2.jpg"
import event3 from "../images/event3.jpg"
import event4 from "../images/event4.jpg"

const events = [
  { id: 1, title: 'Tech Future', imgSrc: event1, link: '/blog-detail/exploring-the-future-of-technology' },
  { id: 2, title: 'AI Seminar', imgSrc: event2, link: '/blog-detail/ai-seminar' },
  { id: 3, title: 'Innovation Workshop', imgSrc: event3, link: '/blog-detail/innovation-workshop' },
  { id: 4, title: 'New Event', imgSrc: event4, link: '/blog-detail/new-event' },
]

export default function Event() {
  const navigate = useNavigate()

  return (
    <section style={{ padding: '30px 20px', textAlign: 'center' }}>
      <h1>Events</h1>
      <div className="event-grid">
        {events.map((evt, index) => (
          <div 
            key={evt.id} 
            className={`card ${index === 3 ? 'full-width' : ''}`}
            onClick={() => navigate(evt.link)}
          >
            <img src={evt.imgSrc} alt={evt.title} />
            <h3>{evt.title}</h3>
          </div>
        ))}
      </div>
    </section>
  )
}

import React from 'react'
import './Similar_Topic.css'

export default function Similar_Topic() {
  return (
   <>
    <section className="similar-topic">
        <h1 className="heading">Similar Topics</h1>
        <div className="topics-1">
            <p><a href="/rape">Rape</a></p>
            <p><a href="/what-you-should-know-about-sexual-harassment">What You Should Know About Sexual Harassment </a></p>
            <p><a href="/sexual-harassment-topic">Sexual Harassment</a></p>
            <p><a href="/molestation">Molestation</a></p>
        </div>
        <div className="topics-2">
            <p><a href="/stalking">Stalking</a></p>
        </div>
    </section>
   </>
  )
}

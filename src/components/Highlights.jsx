import { useGSAP } from '@gsap/react'
import React from 'react'

const Highlights = () => {
  useGSAP(() =>{
    gsap.to('#title', {opacity: 1, y: 0})
  }, [])
  return (
    <section id="highlights" className='w-screen overflow-hidden h-full common-padding bg-custom-zinc'>
      <div className="screen-max-width">
        <div>
          <h1 id="title" className='section-heading'>Get the highlights.

          </h1>
        </div>
      </div>
    </section>
  )
}

export default Highlights
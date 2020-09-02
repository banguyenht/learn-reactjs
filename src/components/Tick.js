import React from 'react'

export default function Tick() {
  return(
    <div>
      <h4>
        { new Date().toLocaleDateString() }
      </h4>
    </div>
  )
}
setInterval(Tick, 1000);
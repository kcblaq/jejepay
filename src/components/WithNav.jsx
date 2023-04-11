import React from 'react'
import Nav from './nav/Nav'

function WithNav({children}) {
    return (
        <>
            <Nav />
            <div>{ children}</div>
        </>
  )
}

export default WithNav
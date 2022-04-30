// RFCE

import React from 'react'

function Es7snippets() {
  return (
    <div>Es7snippets</div>
  )
}

export default Es7snippets

// RAFCE

import React from 'react'

const Es7snippets = () => {
  return (
    <div>Es7snippets</div>
  )
}

export default Es7snippets

// RCE


import React, { Component } from 'react'

export class Es7snippets extends Component {
  render() {
    return (
      <div>Es7snippets</div>
    )
  }
}

export default Es7snippets


// RCONCT

constructor(props) {
  super(props)

  this.state = {
     first
  }
}


//CLG

console.log(first)

//CLO

console.log('first', first)
import React from 'react'
import "./Header.css"

function Header() {
  return (
    <header>
      <a class="app-name" href="/">The InfoSphere</a>
      <a class="create-blog" href="/addblog"> Create Blog </a>
    </header>
  )
}

export default Header
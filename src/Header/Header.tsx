import React from 'react'
import './Header.css'

interface HeaderProps {
  linkText: string
}

/**
 * The old header component
 */
const Header = (props: HeaderProps) => (
  <div>
    <header>Logo</header>
    <nav>
      <ul>
        <li>{props.linkText}</li>
        <li>{props.linkText}</li>
        <li>{props.linkText}</li>
        <li>{props.linkText}</li>
      </ul>
    </nav>
  </div>
)

export default Header

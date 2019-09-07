/** @jsx jsx */
import { jsx, Header as BaseHeader } from 'theme-ui'
import { useState } from 'react'
import { Logo } from '../Logo'

/**
 * The site header.
 */
export const Header = () => {
  const [isNavOpen, setNavOpen] = useState(false)
  const toggleNav = () => setNavOpen(!isNavOpen)

  return (
    <BaseHeader
      sx={{
        flexDirection: 'column',
        alignItems: 'center',
      }}
    >
      <Logo
        alt="Company Name"
        sx={{
          py: [2],
        }}
      />
      <nav
        aria-expanded={isNavOpen}
        aria-label="Main Navigation"
        role="navigation"
        sx={{
          width: '100%',
          display: 'flex',
          flexFlow: 'column nowrap',
        }}
      >
        <button
          onClick={toggleNav}
          sx={{
            fontSize: 2,
          }}
        >
          Menu
        </button>
        <ul hidden={!isNavOpen}>
          <li>
            <a href="#">Link</a>
          </li>
          <li>
            <a href="#">Link</a>
          </li>
          <li>
            <a href="#">Link</a>
          </li>
        </ul>
      </nav>
    </BaseHeader>
  )
}

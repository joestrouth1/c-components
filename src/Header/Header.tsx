/** @jsx jsx */
import { jsx } from 'theme-ui'
import './Header.css'

interface HeaderProps {
  linkText: string
}

/**
 * The header component
 */
const Header = (props: HeaderProps) => (
  <div>
    <header>Logo</header>
    <nav>
      <ul
        sx={{
          color: 'primary',
        }}
      >
        <li>{props.linkText}</li>
        <li>{props.linkText}</li>
        <li>{props.linkText}</li>
        <li>{props.linkText}</li>
      </ul>
    </nav>
  </div>
)

export default Header

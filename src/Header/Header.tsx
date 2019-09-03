/** @jsx jsx */
import { jsx } from 'theme-ui'

interface HeaderProps {
  /** What each link should say */
  linkText: string
}

/**
 * An example of a new Header component.
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

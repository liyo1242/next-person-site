import Link from 'next/link'
import classes from './main-nav.module.css'

function MainNav() {
  return (
    <header className={classes.header}>
      <nav>
        <ul>
          <li>
            <Link href="/post">Posts</Link>
          </li>
          <li>
            <Link href="/contact">Contact</Link>
          </li>
        </ul>
      </nav>
    </header>
  )
}

export default MainNav

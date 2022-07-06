import Link from 'next/link'
import classes from './main-nav.module.css'
import { useRouter } from 'next/router'
import { useEffect, useState } from 'react'

const navLinks = [
  {
    path: '/',
    text: 'About me',
  },
  {
    path: '/posts',
    text: 'Post',
  },
]

function MainNav() {
  const router = useRouter()

  const [activePath, setActivePath] = useState('')

  useEffect(() => {
    setActivePath('/' + (router.pathname.split('/')[1] || ''))
  }, [router.pathname])

  return (
    <header className={classes.header}>
      <nav>
        <ul>
          {navLinks.map((navLink) => (
            <li
              className={activePath === navLink.path ? classes.linkActive : ''}
              key={navLink.path}
            >
              <Link href={navLink.path}>{navLink.text}</Link>
            </li>
          ))}
        </ul>
      </nav>
    </header>
  )
}

export default MainNav

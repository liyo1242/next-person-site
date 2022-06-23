import type { PropsWithChildren } from 'react'
import { Fragment } from 'react'
import MainNav from './main-nav'

function Layout(props: PropsWithChildren) {
  return (
    <Fragment>
      <MainNav></MainNav>
      <main>{props.children}</main>
    </Fragment>
  )
}

export default Layout

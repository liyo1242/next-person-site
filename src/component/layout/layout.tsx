import type { PropsWithChildren } from 'react'
import { Fragment } from 'react'
import MainNav from './main-nav'
import Footer from './footer'

function Layout(props: PropsWithChildren) {
  return (
    <Fragment>
      <MainNav></MainNav>
      <main>{props.children}</main>
      <Footer></Footer>
    </Fragment>
  )
}

export default Layout

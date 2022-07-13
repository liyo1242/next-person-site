import type { PropsWithChildren } from 'react'
import classes from './index.module.css'

function Home(props: PropsWithChildren) {
  return <div className={classes.container}>{props.children}</div>
}

export default Home

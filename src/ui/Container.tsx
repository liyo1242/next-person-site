import type { PropsWithChildren, ReactNode } from 'react'
import { isString } from '../lib/is'
import classes from './Container.module.css'

interface ContainerProps {
  header?: string | ReactNode
}

function Container(props: PropsWithChildren<ContainerProps>) {
  const headerPart = isString(props.header) ? <h1>{props.header}</h1> : props.header

  return (
    <div className={classes.container}>
      <div className={classes.header}>{headerPart}</div>
      {props.children}
    </div>
  )
}

export default Container

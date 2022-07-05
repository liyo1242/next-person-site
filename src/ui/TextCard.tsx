import type { PropsWithChildren } from 'react'
import Link from 'next/link'
import classes from 'TextCard.module.css'

interface TextCardProps {
  title: string
  link: string
  desc: string
}

export function TextCardGrid(props: PropsWithChildren) {
  return <ul className={classes.cardGrid}>{props.children}</ul>
}

export function TextCard(props: TextCardProps) {
  return (
    <li className={classes.card}>
      <Link href={props.link} passHref>
        <a>
          <div className={classes.content}>
            <h3>{props.title}</h3>
            <p>{props.desc}</p>
          </div>
        </a>
      </Link>
    </li>
  )
}

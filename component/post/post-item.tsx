import type { Post } from '../../type/post'
import type { PropsWithChildren } from 'react'
import Link from 'next/link'
import Image from 'next/image'

import classes from './post-item.module.css'

function PostItem(props: PropsWithChildren<{ post: Post }>) {
  const { title, date, image, desc, slug } = props.post

  const formattedDate =
    date &&
    new Date(date).toLocaleDateString('zh-TW', {
      day: 'numeric',
      month: 'long',
      year: 'numeric',
    })

  const imagePath = `/images/posts/${slug}/${image}`
  const linkPath = `/posts/${slug}`

  return (
    <li className={classes.post}>
      <Link href={linkPath}>
        <a>
          <div className={classes.image}>
            <Image src={imagePath} alt={title} width={300} height={200} />
          </div>
          <div className={classes.content}>
            <h3>{title}</h3>
            <time>{formattedDate}</time>
            <p>{desc}</p>
          </div>
        </a>
      </Link>
    </li>
  )
}

export default PostItem

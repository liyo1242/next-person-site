import Image from 'next/image'
import { PropsWithChildren } from 'react'
import { Post } from '../../../type/post'

import classes from './post-header.module.css'

function PostHeader(props: PropsWithChildren<Pick<Post, 'title' | 'image' | 'slug'>>) {
  const { title, image, slug } = props

  const imagePath = image ? `/images/posts/${slug}/${image}` : '/images/site/image-default'

  return (
    <header className={classes.header}>
      <h1>{title}</h1>
      <div className={classes.image}>
        <Image src={imagePath} alt={title} layout="fill" objectFit="cover" />
      </div>
    </header>
  )
}

export default PostHeader

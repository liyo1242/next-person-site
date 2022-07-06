import Image from 'next/image'

import classes from './post-header.module.css'

interface PostHeaderProps {
  title: string
  image: string
  slug: string
}

function PostHeader(props: PostHeaderProps) {
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

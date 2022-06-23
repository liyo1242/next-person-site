import type { Post } from '../../type/post'
import type { PropsWithChildren } from 'react'
import PostItem from './post-item'
import classes from './post-grid.module.css'

function PostGrid(props: { posts: PropsWithChildren<Array<Post>> }) {
  const { posts } = props

  return (
    <ul className={classes.grid}>
      {posts.map((post) => (
        <PostItem key={post.slug} post={post}></PostItem>
      ))}
    </ul>
  )
}

export default PostGrid

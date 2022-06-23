import type { Post } from '../../type/post'
import type { PropsWithChildren } from 'react'
import PostGrid from '../post/post-grid'

function FeaturedPost(props: { posts: PropsWithChildren<Array<Post>> }) {
  return (
    <section>
      <h2>Featured Post</h2>
      <PostGrid posts={props.posts} />
    </section>
  )
}

export default FeaturedPost

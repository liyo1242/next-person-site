import type { NextPage } from 'next'
import type { Post } from '../type/post'
import { Fragment } from 'react'
import Hero from '../component/home/hero'
import FeaturedPost from '../component/home/post-feature'

import { getAllPosts } from '../lib/posts-util'

const Home: NextPage<{ posts: Array<Post> }> = (props) => {
  return (
    <Fragment>
      <Hero />
      <FeaturedPost posts={props.posts} />
    </Fragment>
  )
}

export function getStaticProps() {
  const posts = getAllPosts()
  return {
    props: {
      posts,
    },
  }
}

export default Home

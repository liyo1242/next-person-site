import type { NextPage } from 'next'
import type { Post } from '../type/post'
import { Fragment } from 'react'
import Hero from '../feature/home/hero'
import FeaturedPost from '../feature/home/featuredPost'
import Repo from '../feature/home/repo'
import Summary from '../feature/home/summary'
import { serverSideTranslations } from 'next-i18next/serverSideTranslations'

import { getPosts } from '../lib/posts-util'

const Home: NextPage<{ posts: Array<Post> }> = (props) => {
  return (
    <Fragment>
      <Hero />
      <FeaturedPost posts={props.posts} />
      <Summary />
      <Repo />
    </Fragment>
  )
}

export async function getStaticProps({ locale }) {
  const posts = getPosts(6, 0)
  return {
    props: {
      ...(await serverSideTranslations(locale, ['hero'])),
      posts,
    },
  }
}

export default Home

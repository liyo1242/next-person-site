import type { NextPage } from 'next'
import type { Post } from '../type/post'
import { Fragment } from 'react'
import Hero from '../component/home/hero'
import Article from '../component/home/article'
import Repo from '../component/home/repo'
import Contact from '../component/home/contact'
import Summary from '../component/home/summary'
import { serverSideTranslations } from 'next-i18next/serverSideTranslations'

import { getAllPosts } from '../lib/posts-util'

const Home: NextPage<{ posts: Array<Post> }> = (props) => {
  return (
    <Fragment>
      <Hero />
      <Summary />
      <Article posts={props.posts} />
      <Repo />
      <Contact />
    </Fragment>
  )
}

export async function getStaticProps({ locale }) {
  const posts = getAllPosts()
  return {
    props: {
      ...(await serverSideTranslations(locale, ['hero'])),
      posts,
    },
  }
}

export default Home

/* eslint-disable react/prop-types */
import type { NextPage, GetStaticProps } from 'next'
import { Fragment } from 'react'
import HomeContainer from '../feature/home'
import Hero from '../feature/home/hero'
import FeaturedPost from '../feature/home/featuredPost'
import Repo from '../feature/home/repo'
import Summary from '../feature/home/summary'
import { serverSideTranslations } from 'next-i18next/serverSideTranslations'

import { getPosts } from '../lib/posts-util'

const Home: NextPage<{ posts: ReturnType<typeof getPosts> }> = (props) => (
  <Fragment>
    <HomeContainer>
      <Hero />
      <FeaturedPost posts={props.posts} />
      <Summary />
      <Repo />
    </HomeContainer>
  </Fragment>
)

export const getStaticProps: GetStaticProps = async ({ locale }) => {
  const posts = getPosts(6, 0)
  return {
    props: {
      ...(await serverSideTranslations(locale!, ['home'])),
      posts,
    },
  }
}

export default Home

import { serverSideTranslations } from 'next-i18next/serverSideTranslations'
import AllPost from '../../feature/posts/postList'
import { getPosts } from '../../lib/posts-util'
import Container from '../../ui/Container'

function AllPostPage(props: { posts: ReturnType<typeof getPosts> }) {
  // * TODO i18n header text

  return (
    <Container header="All Post">
      <AllPost posts={props.posts} />
    </Container>
  )
}

export async function getStaticProps({ locale }) {
  const posts = getPosts()
  return {
    props: {
      ...(await serverSideTranslations(locale, ['hero'])),
      posts,
    },
  }
}

export default AllPostPage

import type { GetStaticPropsContext } from 'next'

import PostContent from '../../feature/posts/postDetail/post-content'
import { getPostDataDetail, getPostFiles } from '../../lib/posts-util'

function PostDetailPage(props: { post: ReturnType<typeof getPostDataDetail> }) {
  return <PostContent post={props.post} />
}

export function getStaticProps(context: GetStaticPropsContext<{ slug: string }>) {
  const { params } = context
  const { slug = '' } = params || {}

  const post = getPostDataDetail(slug)

  return {
    props: {
      post,
    },
  }
}

export function getStaticPaths() {
  const slugs = getPostFiles().map((fileName) => fileName.replace(/\.md$/, ''))

  return {
    paths: slugs.map((slug) => ({ params: { slug } })),
    fallback: true,
  }
}

export default PostDetailPage

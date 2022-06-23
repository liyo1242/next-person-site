import type { GetStaticPropsContext } from 'next'
import type { PropsWithChildren } from 'react'
import type { Post } from '../../type/post'

import PostContent from '../../component/post/post-detail/post-content'
import { getPostData, getPostFiles } from '../../lib/posts-util'

function PostDetailPage(props: PropsWithChildren<{ post: Post }>) {
  return <PostContent post={props.post} />
}

export function getStaticProps(context: GetStaticPropsContext<{ slug: string }>) {
  const { params } = context
  const { slug = '' } = params || {}

  const post = getPostData(slug)

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

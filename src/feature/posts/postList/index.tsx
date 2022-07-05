import type { Posts } from '../../../lib/posts-util'

import { Card, CardGrid } from '../../../ui/Card'

function AllPost(props: { posts: Posts }) {
  function handlePostsImagePath(post: Posts[number]) {
    const { slug, image, date, ...rest } = post
    return {
      img: `/images/posts/${slug}/${image}`,
      link: `/posts/${slug}`,
      time: new Date(date).toLocaleDateString(),
      ...rest,
    }
  }

  const displayPostArray = props.posts.map(handlePostsImagePath)

  return (
    <CardGrid>
      {displayPostArray.map((post) => (
        <Card key={post.link} {...post} />
      ))}
    </CardGrid>
  )
}

export default AllPost

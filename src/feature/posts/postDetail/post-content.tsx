import type { Post } from '../../../lib/posts-util'

import Image from 'next/image'
import PostHeader from './post-header'
import ReactMarkdown from 'react-markdown'
import rehypeRaw from 'rehype-raw'
import { Prism as SyntaxHighlighter } from 'react-syntax-highlighter'
import { dark } from 'react-syntax-highlighter/dist/cjs/styles/prism'

import classes from './post-content.module.css'

function PostContent(props: { post: Post }) {
  const { post } = props

  const customRenderers = {
    p({ node, children }) {
      if (node.children[0].tagName === 'img') {
        const image = node.children[0]

        return (
          <div className={classes.image}>
            <Image
              src={`${image.properties.src.replace('../public', '')}`}
              alt={image.alt}
              width={700}
              height={400}
            />
          </div>
        )
      }

      return <p>{children}</p>
    },
    code({ node, inline, className, children, ...props }) {
      const match = /language-(\w+)/.exec(className || '')
      return !inline && match ? (
        <SyntaxHighlighter style={dark} language={match[1]} PreTag="div" {...props}>
          {String(children).replace(/\n$/, '')}
        </SyntaxHighlighter>
      ) : (
        <code className={className} {...props}>
          {children}
        </code>
      )
    },
  }

  return (
    <article>
      <PostHeader title={post.title} image={post.image} slug={post.slug} />
      <ReactMarkdown rehypePlugins={[rehypeRaw]} components={customRenderers}>
        {post.content}
      </ReactMarkdown>
    </article>
  )
}

export default PostContent

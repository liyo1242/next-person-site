import fs from 'fs'
import path from 'path'
import { isNumber } from './is'

import matter from 'gray-matter'

interface PostHeaderData {
  title: string
  desc: string
  date: string
  image: string
}

const postsDirPath = path.join(process.cwd(), 'posts')

export function getPostFiles() {
  return fs.readdirSync(postsDirPath)
}

export function getPostData(fileName: string) {
  const postSlug = fileName.replace(/\.md$/, '')
  const filePath = path.join(postsDirPath, `${postSlug}.md`)
  const fileContent = fs.readFileSync(filePath, 'utf-8')
  const { data } = matter(fileContent)

  const slug = fileName.replace(/\.md$/, '')

  return {
    slug,
    ...(data as PostHeaderData),
  }
}

export function getPostDataDetail(fileName: string) {
  const postSlug = fileName.replace(/\.md$/, '')
  const filePath = path.join(postsDirPath, `${postSlug}.md`)
  const fileContent = fs.readFileSync(filePath, 'utf-8')
  const { data, content } = matter(fileContent)

  const slug = fileName.replace(/\.md$/, '')

  return {
    slug,
    content,
    ...(data as PostHeaderData),
  }
}

export function getPosts(maxCount?: number, offset?: number) {
  const postFiles = getPostFiles()
  if (isNumber(maxCount) && isNumber(offset)) {
    return postFiles.slice(offset, maxCount).map((fileName) => getPostData(fileName))
  }
  return postFiles.map((fileName) => getPostData(fileName))
}

export type Posts = ReturnType<typeof getPosts>
export type Post = ReturnType<typeof getPostDataDetail>

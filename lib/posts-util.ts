import fs from 'fs'
import path from 'path'

import matter from 'gray-matter'

const postsDirPath = path.join(process.cwd(), 'posts')

export function getPostFiles() {
  return fs.readdirSync(postsDirPath)
}

export function getPostData(fileName: string) {
  const postSlug = fileName.replace(/\.md$/, '')
  const filePath = path.join(postsDirPath, `${postSlug}.md`)
  const fileContent = fs.readFileSync(filePath, 'utf-8')
  const { data, content } = matter(fileContent)

  const slug = fileName.replace(/\.md$/, '')

  return {
    slug,
    ...data,
    content,
  }
}

export function getAllPosts() {
  const postFiles = getPostFiles()

  return postFiles.map((fileName) => getPostData(fileName))
}

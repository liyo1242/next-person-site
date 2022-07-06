import { TextCardGrid, TextCard } from '../../ui/TextCard'
import useSWR from 'swr'
import classes from './repo.module.css'

interface GithubRepoItemModel {
  id: number
  name: string
  updated_at: string
  language: string
  html_url: string
  description: string
  fork: boolean
}

function Repo() {
  const { data } = useSWR<Array<GithubRepoItemModel>>(
    'https://api.github.com/users/liyo1242/repos?sort=update&per_page=10',
    (url) => fetch(url).then((r) => r.json())
  )

  return (
    <section className={classes.repo}>
      <h2>Repo</h2>
      <TextCardGrid>
        {data &&
          data
            .filter((repo) => !repo.fork)
            .map((repo) => (
              <TextCard
                key={repo.id}
                title={repo.name}
                link={repo.html_url}
                desc={repo.description}
              />
            ))}
      </TextCardGrid>
    </section>
  )
}

export default Repo

import classes from './summary.module.css'
import Image from 'next/image'
import { useTranslation } from 'next-i18next'

function Summary() {
  const { t } = useTranslation('home')

  return (
    <section className={classes.summary}>
      <div className={classes.bg}>
        <div className={classes.image}>
          <Image
            src="/images/site/summary/portrait.png"
            alt="Summary Bg Image"
            layout="fill"
            objectFit="cover"
          />
        </div>
        <div className={classes.content}>
          <h3>{t('summaryHeader')}</h3>
          <p>
            Lorem, ipsum dolor sit amet consectetur adipisicing elit. Doloribus iusto vitae
            reiciendis, beatae necessitatibus iste dolorum dolores quasi! Aperiam quidem, magnam at
            qui quia modi aliquam esse impedit? Cumque, cupiditate. Lorem, ipsum dolor sit amet
            consectetur adipisicing elit. Doloribus iusto vitae reiciendis, beatae necessitatibus
            iste dolorum dolores quasi! Aperiam quidem, magnam at qui quia modi aliquam esse
            impedit? Cumque, cupiditate. Lorem, ipsum dolor sit amet consectetur adipisicing elit.
            Doloribus iusto vitae reiciendis,
          </p>
        </div>
      </div>
    </section>
  )
}

export default Summary

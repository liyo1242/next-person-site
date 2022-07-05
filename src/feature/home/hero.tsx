import Image from 'next/image'
import classes from './hero.module.css'
import { useTranslation } from 'next-i18next'
import { useEffect, useState } from 'react'

function Hero() {
  const { t } = useTranslation('hero')
  const [moveOffset, setMoveOffset] = useState(0)

  useEffect(() => {
    const handleParallaxAnimate = () => {
      window.scrollY < 400 && setMoveOffset(window.scrollY)
    }

    window.addEventListener('scroll', handleParallaxAnimate)

    return () => window.removeEventListener('scroll', handleParallaxAnimate)
  }, [])

  return (
    <section className={classes.hero}>
      <div className={classes.bg}>
        <Image
          src="/images/site/hero/bg.jpg"
          alt="Section Bg Image"
          layout="fill"
          objectFit="cover"
        />
      </div>
      <article
        style={{ transform: `translateY(calc(-50% + ${moveOffset}px))` }}
        className={classes.article}
      >
        <h1>{t('header')}</h1>
        <p>{t('describe')}</p>
      </article>
      <div className={classes.portrait}>
        <Image
          src="/images/site/hero/portrait.png"
          alt="Section Portrait Image"
          layout="fill"
          objectFit="cover"
        />
      </div>
      <div className={classes.mask}>
        <Image
          src="/images/site/hero/mask.png"
          alt="Section Mask Image"
          layout="fill"
          objectFit="cover"
        />
      </div>
    </section>
  )
}

export default Hero

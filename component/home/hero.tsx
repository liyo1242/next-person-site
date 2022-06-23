import Image from 'next/image'
import classes from './hero.module.css'

function Hero() {
  return (
    <section className={classes.hero}>
      <div className={classes.image}>
        <Image src="/images/site/hero.png" alt="Section Hero Image" width={300} height={300} />
      </div>
      <h1>Main Text</h1>
      <p>Describe Your Story</p>
    </section>
  )
}

export default Hero

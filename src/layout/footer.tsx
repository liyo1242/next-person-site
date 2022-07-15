import classes from './footer.module.css'
import Link from 'next/link'

function Footer() {
  return (
    <footer className={classes.contact}>
      <span className={classes.text}>Contact Me</span>
      <div className={classes.iconGroup}>
        <Link href="mailto:liyo1242@gmail.com" passHref={true}>
          <a target="_blank">
            <em className="icon-envelop"></em>
          </a>
        </Link>
        <Link href="https://twitter.com/liyo1242" passHref={true}>
          <a target="_blank">
            <em className="icon-twitter"></em>
          </a>
        </Link>
        <Link href="https://www.linkedin.com/in/liyo1242" passHref={true}>
          <a target="_blank">
            <em className="icon-linkedin"></em>
          </a>
        </Link>
      </div>
    </footer>
  )
}

export default Footer

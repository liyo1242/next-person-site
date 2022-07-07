import classes from './footer.module.css'

function Footer() {
  return (
    <footer className={classes.contact}>
      <span className={classes.text}>Contact Me</span>
      <div className={classes.iconGroup}>
        <em className="icon-envelop"></em>
        <em className="icon-twitter"></em>
        <em className="icon-linkedin"></em>
      </div>
    </footer>
  )
}

export default Footer

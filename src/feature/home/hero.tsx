import Image from "next/image";
import classes from "./hero.module.css";
import { useTranslation } from "next-i18next";
import Link from "next/link";

function Hero() {
  const { t } = useTranslation("home");

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
      <article className={classes.article}>
        <h1>{t("heroHeader")}</h1>
        <p>{t("heroDescribe")}</p>
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
      </article>
      <div className={classes.portrait}>
        <Image
          src="/images/site/hero/portrait.png"
          alt="Section Portrait Image"
          layout="fill"
          objectFit="cover"
        />
      </div>
    </section>
  );
}

export default Hero;

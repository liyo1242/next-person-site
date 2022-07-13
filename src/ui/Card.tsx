import type { PropsWithChildren } from "react";

import Link from "next/link";
import Image from "next/image";

import classes from "./Card.module.css";

interface CardProps {
  img: string;
  title: string;
  link: string;
  time: string;
  desc: string;
}

export function CardGrid(props: PropsWithChildren) {
  return <ul className={classes.cardGrid}>{props.children}</ul>;
}

export function Card(props: CardProps) {
  return (
    <li className={classes.card}>
      <Link href={props.link}>
        <a>
          <div className={classes.surface}>
            <div className={classes.image}>
              <Image
                src={props.img}
                alt={props.title}
                layout="fill"
                objectFit="cover"
              />
            </div>
            <div className={classes.content}>
              <h3>{props.title}</h3>
              <time>{props.time}</time>
            </div>
          </div>
          <div className={classes.back}>
            <p>{props.desc}</p>
          </div>
        </a>
      </Link>
    </li>
  );
}

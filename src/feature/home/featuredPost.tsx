import type { Posts } from "../../lib/posts-util";
import { CardGrid, Card } from "../../ui/Card";
import { useTranslation } from "next-i18next";
import classes from "./featuredPost.module.css";

function FeaturedPost(props: { posts: Posts }) {
  const { t } = useTranslation("home");

  function handlePostsImagePath(post: Posts[number]) {
    const { slug, image, date, ...rest } = post;
    return {
      img: `/images/posts/${slug}/${image}`,
      link: `/posts/${slug}`,
      time: new Date(date).toLocaleDateString(),
      ...rest,
    };
  }

  const displayPostArray = props.posts.map(handlePostsImagePath);

  return (
    <section className={classes.article}>
      <h2>{t("featuredPostHeader")}</h2>
      <CardGrid>
        {displayPostArray.map((post) => (
          <Card key={post.link} {...post} />
        ))}
      </CardGrid>
    </section>
  );
}

export default FeaturedPost;

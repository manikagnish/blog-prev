import { Article } from './Article';
import { articleContentRecentPosts } from '../content';

export default function RecentPostsMain() {
  return (
    <main>
      {articleContentRecentPosts.map(article => (
        <Article
          title={article.title}
          text={article.text}
          link={article.link}
          info={article.info}
          img={article.img}
          altText={article.altText}
        />
      ))}
    </main>
  );
}

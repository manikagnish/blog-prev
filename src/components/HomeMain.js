import { Article, FeaturedArticle } from './Article';
import { articleContent, featuredArticleContent } from '../content';

export default function HomeMain() {
  return (
    <main>
      {featuredArticleContent.map(article => (
        <FeaturedArticle
          title={article.title}
          text={article.text}
          link={article.link}
          info={article.info}
          img={article.img}
          altText={article.altText}
          strong={article.strong}
        />
      ))}
      {articleContent.map(article => (
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

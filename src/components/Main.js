import { Article, FeaturedArticle } from './Article';
import { articleContent, featuredArticleContent } from '../content';

export default function Main() {
  return (
    <main>
      {featuredArticleContent.map(article => (
        <FeaturedArticle
          key={article.id}
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
          key={article.id}
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

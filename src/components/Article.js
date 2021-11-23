export const FeaturedArticle = ({
  title,
  img,
  info,
  link,
  text,
  altText,
  strong,
}) => {
  return (
    <article class="article-featured">
      <h2 class="article-title">{title}</h2>
      <img src={img} alt={altText} class="article-featured-img" />
      <p class="article-info">{info}</p>
      <p class="article-body">
        <strong>{strong}</strong>
        {text}
      </p>
      <a href={link} class="article-read-more">
        Continue reading
      </a>
    </article>
  );
};

export const Article = ({ title, img, info, link, text, altText }) => {
  return (
    <article class="article-recent">
      <div class="article-recent-main">
        <h2 class="article-title">{title}</h2>
        <p class="article-body">{text}</p>
        <a href={link} class="article-read-more">
          Continue reading
        </a>
      </div>

      <div class="article-recent-secondary">
        <img src={img} alt={altText} class="article-img" />
        <p class="article-info">{info}</p>
      </div>
    </article>
  );
};

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
    <article className="article-featured">
      <h2 className="article-title">{title}</h2>
      <img src={img} alt={altText} className="article-featured-img" />
      <p className="article-info">{info}</p>
      <p className="article-body">
        <strong>{strong}</strong>
        {text}
      </p>
      <a href={link} className="article-read-more">
        Continue reading
      </a>
    </article>
  );
};

export const Article = ({ title, img, info, link, text, altText }) => {
  return (
    <article className="article-recent">
      <div className="article-recent-main">
        <h2 className="article-title">{title}</h2>
        <p className="article-body">{text}</p>
        <a href={link} className="article-read-more">
          Continue reading
        </a>
      </div>

      <div className="article-recent-secondary">
        <img src={img} alt={altText} className="article-img" />
        <p className="article-info">{info}</p>
      </div>
    </article>
  );
};

import { articles } from "./mocks/mocks";
import { ArticleCard } from "./ui/ArticleCard";

export const ServicesSection = () => {
  return (
    <section id="services" className="container mb-15 flex flex-col gap-12 lg:mb-40">
      <div className="flex flex-col gap-6">
        <h4 className="text-primary text-4xl font-medium xl:text-[44px]">Areas of Practice</h4>
        <p className="text-primary max-w-152 text-lg xl:text-2xl xl:leading-11">
          Our disciplined approach to resolving your legal issues will produce the best-possible
          outcome.
        </p>
      </div>
      <div className="grid grid-cols-1 gap-10 md:grid-cols-2 xl:grid-cols-3">
        {articles.map((article, index) => (
          <ArticleCard
            key={index}
            image={article.icon}
            title={article.title}
            description={article.description}
          />
        ))}
      </div>
    </section>
  );
};

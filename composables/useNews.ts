import { useState } from "#app";
import type { NewsArticle } from "~/data/news";
import {
  politicsNews,
  worldNews,
  businessNews,
  technologyNews,
  sportsNews,
  cultureNews,
  opinionNews,
  latestNews,
  moreStories,
  heroNews,
} from "~/data/news";

export const useNews = () => {
  const politics = useState<NewsArticle[]>("politics-news", () => [
    ...politicsNews,
  ]);
  const world = useState<NewsArticle[]>("world-news", () => [...worldNews]);
  const business = useState<NewsArticle[]>("business-news", () => [
    ...businessNews,
  ]);
  const technology = useState<NewsArticle[]>("technology-news", () => [
    ...technologyNews,
  ]);
  const sports = useState<NewsArticle[]>("sports-news", () => [...sportsNews]);
  const culture = useState<NewsArticle[]>("culture-news", () => [
    ...cultureNews,
  ]);
  const opinion = useState<NewsArticle[]>("opinion-news", () => [
    ...opinionNews,
  ]);
  const latest = useState<NewsArticle[]>("latest-news", () => [...latestNews]);
  const more = useState<NewsArticle[]>("more-stories", () => [...moreStories]);
  const hero = useState<NewsArticle | null>("hero-news", () => heroNews);

  // Get articles by category
  const getArticlesByCategory = (category: string): NewsArticle[] => {
    switch (category.toLowerCase()) {
      case "politics":
        return politics.value;
      case "world":
        return world.value;
      case "business":
        return business.value;
      case "technology":
        return technology.value;
      case "sports":
        return sports.value;
      case "culture":
        return culture.value;
      case "opinion":
        return opinion.value;
      default:
        return [];
    }
  };

  // Get all articles for admin page
  const getAllArticles = (): NewsArticle[] => {
    return [
      hero.value,
      ...latest.value,
      ...more.value,
      ...politics.value,
      ...world.value,
      ...business.value,
      ...technology.value,
      ...sports.value,
      ...culture.value,
      ...opinion.value,
    ].filter(Boolean) as NewsArticle[];
  };

  // Add new article
  const addArticle = (article: Omit<NewsArticle, "id">) => {
    const newArticle: NewsArticle = {
      ...article,
      id: `new-${Date.now()}-${Math.random().toString(36).substr(2, 9)}`,
    };

    // Add to the appropriate category
    switch (article.category.toLowerCase()) {
      case "politics":
        politics.value.push(newArticle);
        break;
      case "world":
        world.value.push(newArticle);
        break;
      case "business":
        business.value.push(newArticle);
        break;
      case "technology":
        technology.value.push(newArticle);
        break;
      case "sports":
        sports.value.push(newArticle);
        break;
      case "culture":
        culture.value.push(newArticle);
        break;
      case "opinion":
        opinion.value.push(newArticle);
        break;
    }
  };

  return {
    // Individual category getters
    politics,
    world,
    business,
    technology,
    sports,
    culture,
    opinion,
    latest,
    more,
    hero,

    // Functions
    getArticlesByCategory,
    getAllArticles,
    addArticle,
  };
};

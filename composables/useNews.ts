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

  const addArticle = (article: Omit<NewsArticle, "id">) => {
    const newArticle: NewsArticle = {
      ...article,
      id: `new-${Date.now()}-${Math.random().toString(36).substr(2, 9)}`,
    };

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

  const updateArticle = (id: string, updatedArticle: Partial<NewsArticle>) => {
    const updateInCategory = (categoryArray: Ref<NewsArticle[]>) => {
      const index = categoryArray.value.findIndex(
        (article) => article.id === id
      );
      if (index !== -1) {
        if (categoryArray.value[index].category === updatedArticle.category) {
          categoryArray.value[index] = {
            ...categoryArray.value[index],
            ...updatedArticle,
          };
          return true;
        } else {
          // If the category has changed, remove from old category and add to new one
          const oldCategory = categoryArray.value[index].category;
          categoryArray.value.splice(index, 1);
          updatedArticle.id = id; // Ensure the ID remains the same
          updatedArticle.category = updatedArticle.category || oldCategory; // Use old category if not provided
          addArticle(updatedArticle as Omit<NewsArticle, "id">);
          return true;
        }
      }
      return false;
    };

    if (updateInCategory(politics)) return;
    if (updateInCategory(world)) return;
    if (updateInCategory(business)) return;
    if (updateInCategory(technology)) return;
    if (updateInCategory(sports)) return;
    if (updateInCategory(culture)) return;
    if (updateInCategory(opinion)) return;

    if (hero.value?.id === id) {
      hero.value = { ...hero.value, ...updatedArticle };
      return;
    }

    if (updateInCategory(latest)) return;
    if (updateInCategory(more)) return;
  };

  const deleteArticle = (id: string) => {
    const deleteFromCategory = (categoryArray: Ref<NewsArticle[]>) => {
      const index = categoryArray.value.findIndex(
        (article) => article.id === id
      );
      if (index !== -1) {
        categoryArray.value.splice(index, 1);
        return true;
      }
      return false;
    };

    if (deleteFromCategory(politics)) return;
    if (deleteFromCategory(world)) return;
    if (deleteFromCategory(business)) return;
    if (deleteFromCategory(technology)) return;
    if (deleteFromCategory(sports)) return;
    if (deleteFromCategory(culture)) return;
    if (deleteFromCategory(opinion)) return;

    if (hero.value?.id === id) {
      hero.value = null;
      return;
    }

    if (deleteFromCategory(latest)) return;
    if (deleteFromCategory(more)) return;
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
    updateArticle,
    deleteArticle,
  };
};

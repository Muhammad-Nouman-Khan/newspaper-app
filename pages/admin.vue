<template>
  <main class="container mx-auto px-6 py-12">
    <div
      class="flex flex-col sm:flex-row justify-between items-start sm:items-center gap-4 mb-8"
    >
      <div>
        <h1
          class="text-4xl font-bold heading mb-2 border-b-2 border-primary pb-2"
        >
          Admin Dashboard
        </h1>
        <p class="text-gray-600 text-sm">
          Manage all news articles across all categories
        </p>
      </div>

      <button
        type="button"
        @click="showAddForm = true"
        class="btn btn-primary btn-sm"
      >
        <svg
          class="w-4 h-4 mr-2"
          fill="none"
          stroke="currentColor"
          viewBox="0 0 24 24"
        >
          <path
            stroke-linecap="round"
            stroke-linejoin="round"
            stroke-width="2"
            d="M12 4v16m8-8H4"
          ></path>
        </svg>
        Add Article
      </button>
    </div>

    <div v-if="showAddForm" class="card bg-base-100 shadow-lg mb-8">
      <div class="card-body">
        <div class="flex items-center justify-between mb-4">
          <h3 class="card-title">Add New Article</h3>
          <button
            type="button"
            @click="closeAddForm"
            class="btn btn-ghost btn-sm"
          >
            <svg
              class="w-4 h-4"
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
            >
              <path
                stroke-linecap="round"
                stroke-linejoin="round"
                stroke-width="2"
                d="M6 18L18 6M6 6l12 12"
              ></path>
            </svg>
          </button>
        </div>

        <div class="grid grid-cols-1 lg:grid-cols-2 gap-4">
          <div class="lg:col-span-2">
            <label class="label">
              <span class="label-text font-medium">Title</span>
            </label>
            <input
              v-model="newArticle.title"
              type="text"
              placeholder="Article title"
              class="input input-bordered w-full"
            />
          </div>

          <div class="lg:col-span-2">
            <label class="label">
              <span class="label-text font-medium">Excerpt</span>
            </label>
            <textarea
              v-model="newArticle.excerpt"
              placeholder="Article excerpt"
              rows="3"
              class="textarea textarea-bordered w-full"
            ></textarea>
          </div>

          <div class="lg:col-span-2">
            <label class="label">
              <span class="label-text font-medium">Content</span>
            </label>
            <textarea
              v-model="newArticle.content"
              placeholder="Article content"
              rows="6"
              class="textarea textarea-bordered w-full"
            ></textarea>
          </div>

          <div>
            <label class="label">
              <span class="label-text font-medium">Author</span>
            </label>
            <input
              v-model="newArticle.author"
              type="text"
              placeholder="Author name"
              class="input input-bordered w-full"
            />
          </div>

          <div>
            <label class="label">
              <span class="label-text font-medium">Category</span>
            </label>
            <select
              v-model="newArticle.category"
              class="select select-bordered w-full"
            >
              <option value="WORLD">WORLD</option>
              <option value="POLITICS">POLITICS</option>
              <option value="BUSINESS">BUSINESS</option>
              <option value="TECHNOLOGY">TECHNOLOGY</option>
              <option value="SPORTS">SPORTS</option>
              <option value="CULTURE">CULTURE</option>
              <option value="OPINION">OPINION</option>
            </select>
          </div>

          <div>
            <label class="label">
              <span class="label-text font-medium">Read Time</span>
            </label>
            <input
              v-model="newArticle.readTime"
              type="text"
              placeholder="e.g., 5 min read"
              class="input input-bordered w-full"
            />
          </div>

          <div>
            <label class="label">
              <span class="label-text font-medium">Image URL</span>
            </label>
            <input
              v-model="newArticle.imageUrl"
              type="text"
              placeholder="Image URL"
              class="input input-bordered w-full"
            />
          </div>
        </div>

        <div class="flex flex-col sm:flex-row gap-2 mt-6">
          <button
            type="button"
            @click="handleAddArticle"
            class="btn btn-success"
          >
            <svg
              class="w-4 h-4 mr-2"
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
            >
              <path
                stroke-linecap="round"
                stroke-linejoin="round"
                stroke-width="2"
                d="M5 13l4 4L19 7"
              ></path>
            </svg>
            Save Article
          </button>
          <button type="button" @click="closeAddForm" class="btn btn-outline">
            Cancel
          </button>
        </div>
      </div>
    </div>

    <div class="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
      <article
        v-for="story in allArticles"
        :key="story.id"
        class="bg-base-100 rounded-xl shadow-lg border border-base-300 overflow-hidden hover:shadow-xl transition-all duration-300"
      >
        <div class="relative overflow-hidden">
          <img
            :src="story.imageUrl"
            :alt="story.title"
            class="w-full h-48 object-cover"
          />
          <div class="absolute top-4 left-4">
            <span
              class="bg-primary text-primary-content px-3 py-1 rounded-full text-xs font-semibold"
            >
              {{ story.category }}
            </span>
          </div>
        </div>

        <div class="p-6 space-y-4">
          <h3 class="text-xl font-bold text-base-content leading-tight">
            {{ story.title }}
          </h3>

          <p class="text-base-content/70 leading-relaxed">
            {{ story.excerpt }}
          </p>

          <div
            class="flex items-center justify-between text-sm text-base-content/60"
          >
            <div class="flex items-center space-x-3">
              <span class="font-medium">{{ story.author }}</span>
              <span>•</span>
              <span>{{ formatDate(story.publishedAt) }}</span>
            </div>
            <span class="text-primary font-medium">{{ story.readTime }}</span>
          </div>

          <div class="flex gap-2 pt-3 border-t border-base-300">
            <button type="button" class="btn btn-outline btn-sm flex-1">
              <svg
                class="w-4 h-4 mr-2"
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
              >
                <path
                  stroke-linecap="round"
                  stroke-linejoin="round"
                  stroke-width="2"
                  d="M11 5H6a2 2 0 00-2 2v11a2 2 0 002 2h11a2 2 0 002-2v-5m-1.414-9.414a2 2 0 112.828 2.828L11.828 15H9v-2.828l8.586-8.586z"
                ></path>
              </svg>
              Edit
            </button>
            <button
              type="button"
              class="btn btn-outline btn-sm text-error hover:text-error-content hover:bg-error"
            >
              <svg
                class="w-4 h-4"
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
              >
                <path
                  stroke-linecap="round"
                  stroke-linejoin="round"
                  stroke-width="2"
                  d="M19 7l-.867 12.142A2 2 0 0116.138 21H7.862a2 2 0 01-1.995-1.858L5 7m5 4v6m4-6v6m1-10V4a1 1 0 00-1-1h-4a1 1 0 00-1 1v3M4 7h16"
                ></path>
              </svg>
            </button>
          </div>
        </div>
      </article>
    </div>

    <div v-if="allArticles.length === 0" class="text-center py-16">
      <h2 class="text-2xl font-bold text-base-content/80">
        No articles found.
      </h2>
      <p class="text-base-content/60 mt-2">
        Start by adding your first article.
      </p>
    </div>
  </main>
</template>

<script setup lang="ts">
import { ref, computed } from "vue";
import type { NewsArticle } from "~/data/news";
import { formatDate } from "~/utils/dateFormatter";
import { useNews } from "~/composables/useNews";

const { getAllArticles, addArticle } = useNews();

const showAddForm = ref(false);
const newArticle = ref<Omit<NewsArticle, "id" | "publishedAt">>({
  title: "",
  excerpt: "",
  content: "",
  author: "",
  category: "WORLD",
  readTime: "3 min read",
  imageUrl: "/hero.avif",
});

const allArticles = computed(() => getAllArticles());

const closeAddForm = () => {
  showAddForm.value = false;
  resetForm();
};

const resetForm = () => {
  newArticle.value = {
    title: "",
    excerpt: "",
    content: "",
    author: "",
    category: "WORLD",
    readTime: "3 min read",
    imageUrl: "/hero.avif",
  };
};

const handleAddArticle = () => {
  if (
    !newArticle.value.title ||
    !newArticle.value.excerpt ||
    !newArticle.value.content ||
    !newArticle.value.author
  ) {
    alert("Please fill in all required fields");
    return;
  }

  const articleToAdd = {
    ...newArticle.value,
    publishedAt: new Date().toISOString(),
  };

  addArticle(articleToAdd);
  closeAddForm();
};
</script>

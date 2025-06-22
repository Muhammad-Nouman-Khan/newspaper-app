<template>
  <section class="container mx-auto px-6 py-12">
    <div>
      <h2 class="text-3xl font-bold text-base-content mb-8 heading">
        More Stories
      </h2>
      <div class="border-2 border-primary -mt-7 w-12" />
    </div>

    <div class="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mt-5">
      <article
        v-for="story in more"
        :key="story.id"
        class="group cursor-pointer bg-base-100 rounded-xl shadow-lg border border-base-300 overflow-hidden hover:shadow-xl transition-all duration-300 hover:-translate-y-1"
        @click="openDialog(story)"
      >
        <div class="relative overflow-hidden">
          <img
            :src="story.imageUrl"
            :alt="story.title"
            class="w-full h-48 object-cover group-hover:scale-105 transition-transform duration-300"
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
          <h3
            class="text-xl font-bold text-base-content leading-tight group-hover:text-primary transition-colors duration-200 heading"
          >
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
        </div>
      </article>
    </div>
    <NewsDialog :news="selectedNews" @close="selectedNews = null" />
  </section>
</template>

<script setup lang="ts">
import { ref } from "vue";
import { formatDate } from "~/utils/dateFormatter";
import NewsDialog from "./NewsDialog.vue";
import type { NewsArticle } from "~/data/news";
import { useNews } from "~/composables/useNews";

const { more } = useNews();

const selectedNews = ref<NewsArticle | null>(null);
const openDialog = (news: NewsArticle) => {
  selectedNews.value = news;
};
</script>

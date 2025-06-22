<template>
  <div
    v-if="news"
    class="fixed inset-0 z-50 flex items-center justify-center bg-black/60"
  >
    <div
      class="bg-base-100 rounded-xl shadow-2xl max-w-2xl w-full mx-4 relative overflow-y-auto max-h-[90vh]"
    >
      <button
        @click="$emit('close')"
        class="absolute top-4 right-4 btn btn-sm btn-circle btn-ghost z-10 bg-white"
      >
        ✕
      </button>
      <img
        v-if="news.imageUrl"
        :src="news.imageUrl"
        :alt="news.title"
        class="w-full h-64 object-cover rounded-t-xl"
      />
      <div class="p-6 space-y-4">
        <span
          class="bg-primary text-primary-content px-3 py-1 rounded-full text-xs font-semibold"
        >
          {{ news.category }}
        </span>
        <h2 class="text-2xl font-bold heading">{{ news.title }}</h2>
        <div class="flex items-center gap-3 text-sm text-base-content/60">
          <span>{{ news.author }}</span>
          <span>•</span>
          <span>{{ formatDate(news.publishedAt) }}</span>
          <span>•</span>
          <span class="text-primary font-medium">{{ news.readTime }}</span>
        </div>
        <p class="text-base-content/80 text-lg">{{ news.excerpt }}</p>
        <div class="prose max-w-none text-base-content/90 whitespace-pre-line">
          {{ news.content }}
        </div>
      </div>
    </div>
  </div>
</template>

<script setup lang="ts">
import type { NewsArticle } from "~/data/news";
import { formatDate } from "~/utils/dateFormatter";

defineProps<{ news: NewsArticle | null }>();
</script>

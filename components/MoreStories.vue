<template>
  <section class="container mx-auto px-6 py-12">
    <h2 class="text-3xl font-bold text-base-content mb-8 text-center heading">
      More Stories
    </h2>

    <div class="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
      <article
        v-for="story in moreStories"
        :key="story.id"
        class="group cursor-pointer bg-base-100 rounded-xl shadow-lg border border-base-300 overflow-hidden hover:shadow-xl transition-all duration-300 hover:-translate-y-1"
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
            class="text-xl font-bold text-base-content leading-tight group-hover:text-primary transition-colors duration-200 line-clamp-2"
          >
            {{ story.title }}
          </h3>

          <p class="text-base-content/70 leading-relaxed line-clamp-3">
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
  </section>
</template>

<script setup lang="ts">
import { moreStories } from "~/data/news";

const formatDate = (dateString: string) => {
  const date = new Date(dateString);
  const now = new Date();
  const diffInHours = Math.floor(
    (now.getTime() - date.getTime()) / (1000 * 60 * 60)
  );

  if (diffInHours < 1) {
    return "Just now";
  } else if (diffInHours < 24) {
    return `${diffInHours}h ago`;
  } else {
    const diffInDays = Math.floor(diffInHours / 24);
    return `${diffInDays}d ago`;
  }
};
</script>

<style scoped>
.line-clamp-2 {
  display: -webkit-box;
  -webkit-line-clamp: 2;
  -webkit-box-orient: vertical;
  overflow: hidden;
}

.line-clamp-3 {
  display: -webkit-box;
  -webkit-line-clamp: 3;
  -webkit-box-orient: vertical;
  overflow: hidden;
}
</style>

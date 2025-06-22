<template>
  <section class="container mx-auto px-6 py-8">
    <div class="grid grid-cols-1 lg:grid-cols-3 gap-8">
      <!-- Hero News -->
      <div class="lg:col-span-2">
        <article
          class="group cursor-pointer bg-base-100 rounded-xl shadow-lg border border-base-300 overflow-hidden hover:shadow-xl transition-shadow duration-300"
        >
          <div class="relative overflow-hidden rounded-lg mb-4">
            <img
              :src="heroNews.imageUrl"
              :alt="heroNews.title"
              class="w-full h-96 object-cover group-hover:scale-105 transition-transform duration-300 rounded-t-xl"
            />
            <div class="absolute top-4 left-4">
              <span
                class="bg-primary text-primary-content px-3 py-1 rounded-full text-xs font-semibold"
              >
                {{ heroNews.category }}
              </span>
            </div>
          </div>
          <div class="space-y-3 p-6">
            <h1
              class="text-3xl lg:text-4xl heading font-bold text-base-content leading-tight group-hover:text-primary transition-colors duration-200"
            >
              {{ heroNews.title }}
            </h1>

            <p class="text-lg text-base-content/80 leading-relaxed">
              {{ heroNews.excerpt }}
            </p>

            <div
              class="flex items-center justify-between text-sm text-base-content/60"
            >
              <div class="flex items-center space-x-4">
                <span class="font-medium">{{ heroNews.author }}</span>
                <span>•</span>
                <span>{{ formatDate(heroNews.publishedAt) }}</span>
              </div>
              <span class="text-primary font-medium">{{
                heroNews.readTime
              }}</span>
            </div>
          </div>
        </article>
      </div>
      <!-- Latest Stories-->
      <div class="lg:col-span-1">
        <div
          class="sticky top-4 bg-base-100 rounded-xl shadow-lg border border-base-300 p-6"
        >
          <h2
            class="text-2xl font-bold text-base-content mb-6 border-b-2 border-base-300 pb-2 heading"
          >
            Latest Stories
          </h2>

          <div
            class="space-y-6 lg:max-h-[432px] lg:overflow-y-auto custom-scrollbar"
          >
            <article
              v-for="news in latestNews"
              :key="news.id"
              class="group cursor-pointer bg-base-200 rounded-lg p-4 hover:bg-base-300 transition-colors duration-200 border border-base-300 hover:shadow-md"
            >
              <div class="flex space-x-4">
                <div class="flex-shrink-0">
                  <img
                    :src="news.imageUrl"
                    :alt="news.title"
                    class="w-20 h-16 object-cover rounded-lg group-hover:scale-105 transition-transform duration-200 shadow-sm"
                  />
                </div>

                <div class="flex-1 min-w-0">
                  <div class="flex items-center space-x-2 mb-1">
                    <span
                      class="bg-primary/10 text-primary px-2 py-1 rounded text-xs font-medium"
                    >
                      {{ news.category }}
                    </span>
                    <span class="text-xs text-base-content/50">{{
                      news.readTime
                    }}</span>
                  </div>

                  <h3
                    class="text-sm font-semibold text-base-content leading-tight group-hover:text-primary transition-colors duration-200"
                  >
                    {{ news.title }}
                  </h3>

                  <div
                    class="flex items-center justify-between mt-2 text-xs text-base-content/50"
                  >
                    <span>{{ news.author }}</span>
                    <span>{{ formatDate(news.publishedAt) }}</span>
                  </div>
                </div>
              </div>
            </article>
          </div>
        </div>
      </div>
    </div>
  </section>
</template>

<script setup lang="ts">
import { heroNews, latestNews } from "~/data/news";
import { formatDate } from "~/utils/dateFormatter";
</script>

<style scoped>
.custom-scrollbar::-webkit-scrollbar {
  width: 8px;
}
.custom-scrollbar::-webkit-scrollbar-thumb {
  background: #e5e7eb;
  border-radius: 4px;
}
.custom-scrollbar {
  scrollbar-width: thin;
  scrollbar-color: #e5e7eb transparent;
}
</style>

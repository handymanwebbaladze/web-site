<script setup>
import { ref, onMounted } from 'vue';
import { Swiper, SwiperSlide } from "swiper/vue";
import { Autoplay } from "swiper";
import 'swiper/css';
import 'swiper/css/pagination';
import 'swiper/css/navigation';
import FeedbackCard from '@/components/details/FeedbackCard.vue'

const feedbacks = ref([
  {
    id: '1',
    name: 'John',
    message: 'He performed all the work incredibly professionally. He demonstrated a high level of craftsmanship and attention to detail, which resulted in perfect outcomes. I highly recommend him to anyone seeking a reliable handyman for any task!',
    rating: 5,
    date: '2023-02-10',
  },
  {
    id: '2',
    name: 'Emily',
    message: 'I was impressed by the speed and quality of the work. The handyman not only completed the task on time, but also showed exceptional attention to detail. I am very satisfied with the results and will definitely contact him again!',
    rating: 5,
    date: '2023-08-12',
  },
  {
    id: '3',
    name: 'Michael',
    message: 'Everything was done at the highest level. His skill and professionalism are evident in every aspect of the work. Thanks to his thorough approach and ability to find solutions even for complex tasks, I confidently recommend his services.',
    rating: 5,
    date: '2024-02-15',
  },
  {
    id: '4',
    name: 'Jennifer',
    message: 'His approach to work is extremely responsible. Everything was done with high quality, quickly, and with maximum attention to detail. I received not only excellent service but also useful tips for future repairs. I am completely satisfied with the collaboration!',
    rating: 5,
    date: '2024-05-18',
  },
  {
    id: '5',
    name: 'David',
    message: 'A true professional! The work was done impeccably and on time, using a creative approach to solving even the most challenging tasks. I received not only a wonderful result but also the assurance of the handyman’s reliability.',
    rating: 5,
    date: '2024-07-20',
  },
  {
    id: '6',
    name: 'Jessica',
    message: 'I was extremely pleased with the meticulous work and dedication. The handyman was professional, punctual, and ensured every detail was perfect. Truly a remarkable service!',
    rating: 5,
    date: '2024-09-15',
  },
  {
    id: '7',
    name: 'Andrew',
    message: 'Absolutely outstanding work! The handyman exceeded my expectations with his precision and efficiency. The project was completed on time and with exceptional quality.',
    rating: 5,
    date: '2024-10-10',
  },
  {
    id: '8',
    name: 'Ashley',
    message: 'I had a fantastic experience with this handyman. His expertise and friendly approach made the process smooth, and the results were even better than I imagined.',
    rating: 5,
    date: '2024-11-05',
  },
  {
    id: '9',
    name: 'Matthew',
    message: 'Remarkable service! The handyman demonstrated incredible expertise and attention to detail, ensuring a flawless finish on every aspect of the project. I highly recommend him.',
    rating: 5,
    date: '2024-12-01',
  },
  {
    id: '10',
    name: 'Olivia',
    message: 'From start to finish, the service was impeccable. The handyman was friendly, efficient, and delivered high-quality results. I am extremely satisfied with the outcome!',
    rating: 5,
    date: '2025-01-15',
  },
]);

const swiperAutoPlay = {
  delay: 4000,
  disableOnInteraction: false
};

const modules = [Autoplay];

</script>

<template>
  <div class="carousel-container">
    <swiper
      :slides-per-view="1"
      :space-between="15"
      :loop="true"
      class="mySwiper"
      :modules="modules"
      :speed="3000"
      :autoplay="swiperAutoPlay"
    >
      <swiper-slide v-for="(user, index) in feedbacks" :key="index">
        <FeedbackCard :feedback="user" />
      </swiper-slide>
    </swiper>
  </div>
</template>

<style scoped>
.carousel-container {
  width: 100%;
  max-width: 100vw;
  margin: 0 auto;
}

.mySwiper {
  width: 100%;
  height: 100%;
  padding: 0 30px;
}

</style>
<script setup>

const props = defineProps({
  feedback: { type: Object, default: () =>({}) }
})

</script>

<template>
  <div class="feedback_card">
    <p class="feedback_card-name">{{ feedback.name }}</p>
    <p class="feedback_card-text">{{ feedback.message }}</p>
    <p class="feedback_card-rating">Rating: 
      <img v-for="(icon, index) in feedback.rating" :key="index" width="20px" src="/images/rating-star.svg" alt="rating start">
    </p>
    <p class="feedback_card-date">{{ feedback.date }}</p>
  </div>
</template>

<style scoped lang='scss'>
  .feedback_card {
    position: relative;
    display: flex;
    justify-content: center;
    align-items: center;
    flex-direction: column;
    gap: 10px;
    height: 500px;
    background-color: #ffffffe5;
    font-size: 1.2rem;
    color: black;
    max-width: 100vw;
    border-radius: 20px;
    padding: 30px;
    cursor: grab;
    // max-width: 600px;

    &-name {
      font-weight: bold;
      font-size: 25px;
    }

    &-text {
      font-style: italic;
    }

    &-rating {
      margin-top: 30px;
    }

    &-date {
      font-style: italic;
      font-size: 18px;
      color: rgba(0, 0, 0, 0.549);
      position: absolute;
      bottom: 5px;
      right: 10px;
    }
  }
</style> 
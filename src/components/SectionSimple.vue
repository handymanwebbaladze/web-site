<script setup>
import CaruselComponent from "@/components/CaruselComponent.vue";

</script>

<template>
  <section class="section parallax" id="section-2">
    <div class="content hidden max-width-800" v-intersect="{ class: 'visible', options: { threshold: 0.3 }}">
      <h2>I am a skilled handyman with years of experience in repairs and interior finishing. I started with small jobs, and now I help clients create comfort in their homes by delivering high-quality work without hassle.</h2>
      <ul>
        <li>10+ years in the repair industry – I know all the details of my craft</li>
        <li>A wide range of services – from minor fixes to complex projects</li>
        <li>Work with high-quality materials and modern technologies</li>
        <li>Precision and responsibility – I leave only a flawless result behind</li>
        <li>Personalized approach – I find the best solution for each client</li>
      </ul>
    </div>
  </section>

  <section class="section static" id="section-3">
    <div class="content hidden max-width-800" v-intersect="{ class: 'visible', options: { threshold: 0.3 }}">

      <div class="mb-20 content-wrapper">
        <h2 class="color-black text-center">Customer Reviews</h2>
        <p class="color-black text-center">Trust that stands the test of time. Check out the feedback from those who have already experienced our services and see for yourself the quality of our work. Their words inspire us to continually improve for you!</p>
      </div>

      <CaruselComponent />

    </div>
  </section>
  
</template>

<style scoped lang="scss">
.section {
  min-height: 100vh;
  background-size: cover;
  background-position: center;
  display: flex;
  align-items: center;
  justify-content: center;
  color: #fff;
  padding: 40px;

  .max-width-800 {
    max-width: 800px;
  }

  .content {
    // max-width: 800px;

    &-wrapper {
      background-color: #ffffff80;
      border-radius: var(--border-radius-main);
      padding: 10px;
    }
  }

  h2 {
    font-size: 30px;
    margin-bottom: 20px;
  }

  li {
    margin-bottom: 10px;
  }

  @media (max-width: 980px) {
    h2 {
      background-color: #ffffff45;
      border-radius: 20px;
      padding: 20px 20px 10px 30px;
    }

    ul {
      background-color: #ffffff45;
      border-radius: 20px;
      padding: 20px 20px 10px 30px;
    }
  }
}

.parallax {
  background-image: 
    linear-gradient(to top, rgba(0, 0, 0, 0.75), rgba(0, 0, 0, 0.75)), 
    url('/images/section_bg_2.jpg');
  background-attachment: fixed;
}

.static {
  background-image: url('/images/section_bg_1.jpg');
  background-attachment: scroll;
}
</style>
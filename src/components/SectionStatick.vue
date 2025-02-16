<script setup>
const props = defineProps({
  img: { type: String, default: () => '@/assets/images/color-791622_1920.jpg' },
  type: { type: String, default: "colors" }
})

</script>

<template>
  <section class="section">
    <div class="section-left hidden" v-intersect="{ class: 'visible', options: { threshold: 0.3 } }">
      <slot name="left">
        <img class="section-img" :src="img" alt="">
      </slot>
    </div>

    <div class="section-right hidden" v-intersect="{ class: 'visible', options: { threshold: 0.3 } }">
      <slot name="right">
        Lorem ipsum, dolor sit amet consectetur adipisicing elit. Numquam cum et amet blanditiis, exercitationem repellendus at officiis quasi atque iste.
      </slot>
    </div>
  </section>
</template>

<style scoped lang='scss'>
.section {
  min-height: calc(100vh / 2);
  display: flex;
  align-items: center;
  justify-content: center;
  color: #4d4d4d;

  &-left {
    padding: 20px;
    width: 50%;
    height: 100%;
    display: flex;
    justify-content: center;
    align-items: center;
    flex-direction: column;
    gap: 10px;
  }

  &-right {
    padding: 20px;
    width: 50%;
    height: 100%;
    display: flex;
    justify-content: center;
    align-items: center;
    flex-direction: column;
    gap: 10px;
  }

  &-img {
    box-shadow: 0 0 20px 10px white;
    border-radius: 20px;
    width: 100%;
    max-width: 80%;
  }

  @media (max-width: 980px) {
    flex-direction: column;

    &-left {
      width: 100%;
      height: 100%;
    }

    &-right {
      width: 100%;
      height: 100%;
    }
  }
}
</style> 
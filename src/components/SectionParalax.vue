<script setup>
import { ref, onMounted, onUnmounted, computed } from 'vue'

const sectionRef = ref(null)
const scrollY = ref(window.scrollY) // створюємо реактивну змінну для збереження scrollY
const factor = 0.5  // налаштуйте за смаком

const parallaxStyle = computed(() => {
  const currentScroll = scrollY.value

  if (!sectionRef.value) return {}

  const rect = sectionRef.value.getBoundingClientRect()
  const viewportCenter = window.innerHeight / 2

  const sectionCenter = rect.top + rect.height / 2

  const distanceFromCenter = sectionCenter - viewportCenter

  let parallaxOffset = distanceFromCenter * factor

  const maxOffset = 100
  parallaxOffset = Math.max(-maxOffset, Math.min(maxOffset, parallaxOffset))
  
  return {
    backgroundPosition: `center ${-parallaxOffset}px`
  }
})

const handleScroll = () => {
  scrollY.value = window.scrollY  // оновлюємо значення при кожному скролі
}

onMounted(() => {
  window.addEventListener('scroll', handleScroll)
})

onUnmounted(() => {
  window.removeEventListener('scroll', handleScroll)
})
</script>

<template>
  <section class="parallax-section" :style="parallaxStyle" ref="sectionRef">
    <div class="content">
      <h1>Parallax Section</h1>
      <p>Контент секції з динамічним паралакс ефектом.</p>
    </div>
  </section>
</template>

<style scoped>
.parallax-section {
  min-height: calc(100vh / 2);
  display: flex;
  align-items: center;
  justify-content: center;
  color: #fff;
  background-image: url(https://insights.workwave.com/wp-content/uploads/2021/01/bricklayer-holding-construction-tools-picture-id901089886.jpg);
  background-color: white;
  /* background-size: cover; */
  background-size: 120% auto;
  background-repeat: no-repeat;
}
.content {
  z-index: 1;
  position: relative;
}
</style>
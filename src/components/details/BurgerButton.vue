<template>
  <button class="burger" :class="{ active: isActive }" @click="toggleBurger">
    <span></span>
    <span></span>
    <span></span>
  </button>
</template>

<script setup>
const props = defineProps({
  isActive: { type: Boolean, default: false }
})

const emit = defineEmits(['toggle'])

const toggleBurger = () => emit('toggle');

</script>

<style scoped>
.burger {
  display: flex;
  flex-direction: column;
  justify-content: space-around;
  width: 35px;
  height: 35px;
  background: transparent;
  border: none;
  cursor: pointer;
  padding: 0;
  z-index: 1000; /* Забезпечує розташування поверх інших елементів */
}

.burger span {
  display: block;
  width: 100%;
  height: 4px;
  background: #333;
  border-radius: 2px;
  transition: all 0.3s ease;
}

/* Стан активного бургеру */
.burger.active span:nth-child(1) {
  transform: translateY(10px) rotate(45deg);
}

.burger.active span:nth-child(2) {
  opacity: 0;
}

.burger.active span:nth-child(3) {
  transform: translateY(-10px) rotate(-45deg);
}
</style>
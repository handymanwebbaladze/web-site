<script setup>
import { ref, computed, onMounted, onUnmounted, watch } from 'vue';
import BurgerButton from './details/BurgerButton.vue';

const btnList = [
  {
    id: 'section-1',
    name: 'About Me',
  },
  {
    id: 'section-2',
    name: 'Experience',
  },
  {
    id: 'section-3',
    name: 'Feedback',
  },
  {
    id: 'contacts',
    name: 'Contacts',
  },
];


const isHidden = ref(false);
const isMenuActive = ref(false);
const windowWidth = ref(window.innerWidth);
const isMobile = computed(() => windowWidth.value < 980);

const toggleBurgerMenu = () => isMenuActive.value = !isMenuActive.value;

const scrollToSection = (id) => {
  const element = document.getElementById(id);
  if (element) {
    element.scrollIntoView({ behavior: 'smooth' });
    isMenuActive.value = false;
  }
};

const handleScroll = () => {
  isHidden.value = window.scrollY >= 200;
};

const handleResize = () => {
  windowWidth.value = window.innerWidth;
  // Якщо переключилися на десктоп — завжди показуємо меню
  if (!isMobile.value) {
    isMenuActive.value = true;
  }
};

watch(
  () => isHidden.value,
  () => isMenuActive.value = false,
)

onMounted(() => {
  window.addEventListener('scroll', handleScroll);
  window.addEventListener('resize', handleResize);
  // На десктопі меню показане за замовчуванням
  if (!isMobile.value) {
    isMenuActive.value = true;
  }
});

onUnmounted(() => {
  window.removeEventListener('scroll', handleScroll);
  window.removeEventListener('resize', handleResize);
});
</script>

<template>
  <div v-show="!isHidden" class="nav_bar">
    <BurgerButton 
      :is-active="isMenuActive" 
      class="nav_bar-burger hide_under_980" 
      @toggle="toggleBurgerMenu" 
    />

    <transition name="slide-down">
      <ul v-if="isMobile ? isMenuActive : true" class="nav_bar-list">
        <li 
          v-for="item in btnList" 
          :key="item" 
          class="nav_bar-item"
          @click="scrollToSection(item.id)"
        >
          {{ item.name.toUpperCase() }}
        </li>
      </ul>
    </transition>
  </div>
</template>

<style scoped lang="scss">
.nav_bar {
  position: fixed;
  top: 0;
  width: 100%;
  background-color: transparent;
  transition: opacity 0.3s ease;

  &-burger {
    position: absolute;
    right: 20px;
    top: 20px;
  }

  &-list {
    padding: 10px 0;
    list-style: none;
    display: flex;
    justify-content: center;
    gap: 30px;
  }

  &-item {
    font-weight: normal;
    font-size: 20px;
    cursor: pointer;
    transition: all 0.3s ease;

    &:hover {
      opacity: 0.7;
    }
  }

  @media (min-width: 980px) {
    .hide_under_980 {
      display: none;
    }
  }

  @media (max-width: 980px) {
    background-color: #838383;

    &-list {
      flex-direction: column;
      // background-image: linear-gradient(to top , rgb(56, 56, 56), rgb(177, 177, 177), rgb(56, 56, 56));
      background-image: linear-gradient(
        to top,
        rgb(56, 56, 56) 0%,
        rgb(177, 177, 177) 5%,
        rgb(177, 177, 177) 100%,
      );
      box-shadow: 1px 5px 9px 1px rgb(76, 76, 76);
      position: absolute;
      left: 0;
      right: 0;
      padding: 60px 0 20px;
    }

    &-item {
      font-size: 18px;
      margin: 10px 0;
      padding: 0 20px;
    }
  }
}

.slide-down-enter-active,
.slide-down-leave-active {
  transition: transform 0.3s ease, opacity 0.3s ease;
}
.slide-down-enter-from,
.slide-down-leave-to {
  transform: translateY(-100%);
  opacity: 0;
}
.slide-down-enter-to,
.slide-down-leave-from {
  transform: translateY(0);
  opacity: 1;
}
</style>
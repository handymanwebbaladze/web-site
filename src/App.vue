<script setup>
import HeaderComponent from './components/HeaderComponent.vue';
import SectionStatick from './components/SectionStatick.vue';
import SectionParalax from './components/SectionParalax.vue';
import FooterComponent from './components/FooterComponent.vue';
import NavBar from './components/NavBar.vue';
import SectionSimple from './components/SectionSimple.vue';


</script>

<template>

  <NavBar />

  <HeaderComponent id="header" />

  <!-- <SectionStatick id="section-1" img="/images/color-791622_1920.jpg">
    <template v-slot:right>
      <h4>I am an expert in painting interiors and buildings with years of experience. I know all the details of surface preparation, selecting high-quality paints, and applying coatings that will last for years.</h4>
      <ul>
        <li>Walls and ceilings – smooth, textured, drywall, concrete</li>
        <li>Building facades – brick, plaster, wood, metal</li>
        <li>Doors and window frames – wooden, metal, plastic</li>
        <li>Fences and barriers – metal, wooden, concrete</li>
        <li>Furniture – cabinets, tables, dressers, chairs</li>
        <li>Floors – wooden, concrete, laminate</li>
        <li>Radiators and pipes – heat-resistant paints</li>
        <li>Decorative painting – marble effect, textures, artistic painting</li>
      </ul>
    </template>
  </SectionStatick> -->

  <SectionSimple/>

  <SectionStatick img="/images/etimate_1.jpg">
    <template v-slot:right>
      <h4 class="text-bold">Ready for Change?</h4>
      <p>If you’re planning a renovation or need consultation for upcoming projects – feel free to get in touch! I offer a free cost estimate so you can confidently move forward with your ideas.</p>
      <p>Call or text me – together, we’ll find the optimal solution for your project. Your comfort and quality of work are my top priorities.</p>
    </template>
  </SectionStatick>

  <FooterComponent id="contacts" />
</template>

<style scoped>

</style>

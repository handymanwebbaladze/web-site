<script setup>

</script>

<template>
  <header class="header">
    <h1>Your reliable handyman <br> Zebur Baladze </h1>
    <p>Repairs, installation, furniture assembly, finishing works, renovation works – fast, high-quality, hassle-free.</p>

    <slot></slot>
  </header>
</template>

<style scoped lang='scss'>
  .header {
    min-height: 100vh;
    padding: 100px 0;
    background-color: rgb(240, 240, 240);
    display: flex;
    justify-content: center;
    align-items: center;
    flex-direction: column;
    gap: 40px;
    padding: 40px;
    background-image: 
      linear-gradient(to top, rgba(177, 177, 177, 0.564), rgba(172, 172, 172, 0.89)), 
      url(https://the-handyman-company.com/wp-content/uploads/2024/06/imagen_2024-06-27_014935415.png);
    background-position: center;
    background-size: cover;

    h1 {
      font-size: 60px;
      font-weight: bold;
      text-align: center;
    }

    p {
      max-width: 800px;
      font-size: 30px;
      text-align: center;
    }

    @media (max-width: 768px) {
      h1 {
        font-size: 40px;
      }

      p {
        font-size: 20px;
      }
    }
  }
</style> 
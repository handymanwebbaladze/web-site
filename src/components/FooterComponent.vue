<script setup>
import { contacts } from "@/utils/datasets";

</script>

<template>
  <footer class="footer">
    <div class="footer-content hidden" v-intersect="{ class: 'visible', options: { threshold: 0.3 }}">
      <img class="footer-logo" src="/images/logo.png" alt="logo">

      <div class="contacts">
        <h3>Contacts</h3>
        <p v-if="contacts.phoneNumber">Phone: <a :href="`tel:+${contacts.phoneNumber}`">{{ contacts.phoneNumber }}</a></p>
        <p v-if="contacts.email">Email: <a :href="`mailto:${contacts.email}`">{{ contacts.email }}</a></p>
      </div>
    </div>
  </footer>
</template>

<style scoped lang='scss'>
.footer {
  background-color: #595858;
  padding: 40px 20px;
  color: #fff;
  text-align: center;

  &-content {
    display: flex;
    flex-direction: column;
    align-items: center;
    gap: 20px;

    @media (min-width: 768px) {
      flex-direction: row;
      justify-content: space-around;
    }

    .contacts,
    .social-links {
      h3 {
        margin-bottom: 10px;
        font-size: 1.2em;
      }
      p {
        margin: 5px 0;

        a {
          color: inherit;
          text-decoration: none;
        }
      }
      ul {
        list-style: none;
        padding: 0;
        margin: 0;
        li {
          margin: 5px 0;
          a {
            color: #fff;
            text-decoration: none;
            &:hover {
              text-decoration: underline;
            }
          }
        }
      }
    }
  }

  &-logo {
    max-width: 200px;
  }
}
</style> 
<script setup>
import { contacts } from "@/utils/datasets";

</script>

<template>
  <footer class="footer">
    <div class="footer-content hidden" v-intersect="{ class: 'visible', options: { threshold: 0.3 }}">
      <div class="contacts">
        <h3>Contacts</h3>
        <p v-if="contacts.phoneNumber">Phone: <a :href="`tel:+${contacts.phoneNumber}`">{{ contacts.phoneNumber }}</a></p>
        <!-- <p v-if="contacts.phoneNumber_2">Phone: {{ contacts.phoneNumber_2 }}</p> -->
        <p v-if="contacts.email">Email: <a :href="`mailto:${contacts.email}`">{{ contacts.email }}</a></p>
        <!-- <p>Andress: {{ contacts.city }}, {{ contacts.street }}, {{ contacts.country }}</p> -->
      </div>
      <!-- <div class="social-links">
        <h3>Social</h3>
        <ul>
          <li>
            <a v-if="contacts.facebook" :href="`https://facebook.com/${contacts.facebook}`" target="_blank" rel="noopener noreferrer">
              Facebook
            </a>
          </li>
          <li>
            <a v-if="contacts.twitter" :href="`https://twitter.com/${contacts.twitter}`" target="_blank" rel="noopener noreferrer">
              Twitter
            </a>
          </li>
          <li>
            <a v-if="contacts.instagram" :href="`https://instagram.com/${contacts.instagram}`" target="_blank" rel="noopener noreferrer">
              Instagram
            </a>
          </li>
          <li>
            <a v-if="contacts.linkedIn" :href="`https://linkedin.com/${contacts.linkedIn}`" target="_blank" rel="noopener noreferrer">
              LinkedIn
            </a>
          </li>
        </ul>
      </div> -->
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
}
</style> 
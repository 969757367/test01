<template>
  <ul>
    <li><router-link to="/demo01">CSS 动画</router-link></li>
    <li><router-link to="/vue3">vue 3</router-link></li>
    <li><a @click="onClick">3</a></li>
    <li><router-link to="/vue3">4</router-link></li>
  </ul>
</template>

<script lang="ts">
import { ref, defineComponent } from "vue";
import { loadMicroApp } from "qiankun";
export default defineComponent({
  setup: () => {},
});
</script>

<style scoped>
ul {
  margin: 0;
  padding: 0;
  padding-inline-start: 0;
}
ul li {
  list-style: none;
  text-align: center;
  border-bottom: 1px solid aliceblue;
  font-size: 28px;
  color: black;
}
ul li:hover {
  background-color: aliceblue;
  cursor: pointer;
  user-select: none;
  font-size: 38px;
  font-weight: bold;
}
ul li > a {
  display: block;
  width: 100%;
  height: 100%;
  text-decoration: none;
  padding: 30px 0;
  text-decoration-color: black;
}
a {
  color: black;
}
</style>

<template>
  <div class="home">
    <input type="text" v-model="searchMsg" @input="showMsg()" />
  </div>
</template>

<script>
export default {
  name: "home",
  data() {
    return {
      searchMsg: ""
    };
  },
  methods: {
    showMsg() {
      console.log(this.searchMsg);
    }
  }
};
</script>

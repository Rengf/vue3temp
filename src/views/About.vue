<template>
  <div class="about">
    <input type="text" @keydown.enter="search()" v-model="searchmsg" />
    <h1>This is an about page</h1>
    <ul>
      <li v-for="(item,index) in data.data" :key="index">{{item.user_name}}</li>
    </ul>
  </div>
</template>
<script>
import { reqSearch } from "@/api/index";
export default {
  data() {
    return {
      data: "",
      searchmsg: ""
    };
  },
  mounted() {
    this.search();
  },
  methods: {
    async search() {
      var search = {};
      console.log(this.searchmsg);
      if (this.searchmsg != "") {
        search.user_name = this.searchmsg;
      }
      this.data = await reqSearch(search);
      console.log(this.data);
    }
  }
};
</script>

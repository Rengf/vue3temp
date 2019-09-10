<template>
  <div class="about">
    <input type="text" @keydown.enter="search()" v-model="searchmsg" />
    <h1>This is an about page</h1>
    <ul>
      <li v-for="(item,index) in data.data" :key="index">{{index+1}}---------{{item.user_name}}</li>
    </ul>
    <Pages :dataTotal="data.count" @pagechange="search"></Pages>
  </div>
</template>
<script>
import { reqSearch } from "@/api/index";
import Pages from "@/components/Pages/Pages.vue";
export default {
  data() {
    return {
      data: "",
      searchmsg: "",
      currents: 1
    };
  },
  mounted() {
    this.search();
  },
  watch: {},
  methods: {
    async search(pages, limit) {
      var search = {
        limit: limit || 10,
        pages: pages || 0
      };
      if (this.searchmsg != "") {
        this.$children[0].current = 1;
        search.searchmsg = this.searchmsg;
      }
      this.data = await reqSearch(search);
    }
  },
  components: {
    Pages
  }
};
</script>

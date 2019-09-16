<template>
  <div class="about">
    <!-- <input type="text" @keydown.enter="search('','','search')" v-model="searchmsg" /> -->
    <Search @searchmsg="search(0,10,'search')"></Search>
    <h1>This is an about page</h1>
    <ul>
      <li v-for="(item,index) in data.data" :key="index">{{index+1}}---------{{item.user_name}}</li>
    </ul>
    <Pages :dataTotal="data.count" @pagechange="search" v-if="data.count!=0"></Pages>
    <Blank v-else></Blank>
  </div>
</template>
<script>
import { reqSearch } from "@/api/index";
import Pages from "@/components/Pages/Pages.vue";
import Blank from "@/components/blank/blank.vue";
import Search from "@/components/search/search.vue";
export default {
  data() {
    return {
      data: "",
      currents: 1
    };
  },
  mounted() {
    this.search();
  },
  watch: {},
  methods: {
    async search(pages, limit, s) {
      var search = {
        limit: limit || parseInt(this.$children[1].display),
        pages: pages || 0
      };
      if (this.$children[0].searchmsg != "") {
        if (s == "search") {
          this.$children[1].current = 1;
        }
        search.searchmsg = this.$children[0].searchmsg;
      }
      this.data = await reqSearch(search);
    }
  },
  components: {
    Pages,
    Blank,
    Search
  }
};
</script>

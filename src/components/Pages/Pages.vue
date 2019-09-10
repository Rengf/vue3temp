<template>
  <div class="pages">
    <nav>
      <ul class="pagination">
        <li :class="{'disabled': current == 1}">
          <span @click="setCurrent(1)">首页</span>
        </li>
        <li :class="{'disabled': current == 1}">
          <span @click="setCurrent(current - 1)">上一页</span>
        </li>
        <li
          v-for="(page,index) in grouplist"
          :class="{'active': current == page.page}"
          :key="index"
        >
          <span @click="setCurrent(page.page)">{{page.val}}</span>
        </li>
        <li :class="{'disabled': current == pageTotal}">
          <span @click="setCurrent(current + 1)">下一页</span>
        </li>
        <li :class="{'disabled': current == pageTotal}">
          <span @click="setCurrent(pageTotal)">尾页</span>
        </li>
        <li>
          <span>
            跳到第
            <input type="text" v-model="jumpPage" />页
            <button @click="setCurrent(jumpPage)">跳转</button>
          </span>
        </li>
      </ul>
      <ul class="pagination pull-right">
        <li>
          <p>共 {{ dataTotal }} 条数据</p>
        </li>
        <li>
          <p>
            每页显示
            <input v-model="display" @input="setDisplay()" />条数据
          </p>
        </li>
        <li>
          <p>共 {{ pageTotal }} 页</p>
        </li>
        <li>
          <p>当前第 {{ current }} 页</p>
        </li>
      </ul>
    </nav>
  </div>
</template>
<script>
export default {
  props: {
    dataTotal: {
      //总的数据条数
      type: Number,
      default: 89
    }
  },
  data() {
    return {
      current: 1, //当前在第几页
      display: 10, //显示数据条数
      jumpPage: 1, //输入的跳转页码
      pageGroup: 5 //分页页码显示条数
    };
  },
  watch: {
    $route: {
      handler(newValue, oldValue) {
        this.current = 1;
        this.display = 10;
      }
    }
  },
  computed: {
    pageTotal() {
      // 总页数
      if (this.display == "") {
        return Math.ceil(this.dataTotal / 10);
      }
      return Math.ceil(this.dataTotal / this.display);
    },
    grouplist() {
      var len = this.pageTotal;
      var pageGroupList = [];
      var centerPage = parseInt(this.current);
      var pageCount = Math.floor(this.pageGroup / 2);
      if (len <= this.pageGroup) {
        for (let index = 0; index < len; index++) {
          pageGroupList.push({
            val: index + 1,
            page: index + 1
          });
        }
      } else {
        var pageGroupListStart = centerPage - pageCount;
        var pageGroupListEnd = centerPage + pageCount;
        if (pageGroupListStart <= 1) {
          for (let index = 0; index < this.pageGroup; index++) {
            pageGroupList.push({
              val: index + 1,
              page: index + 1
            });
          }
          pageGroupList.push({
            val: "...",
            page: centerPage + 5 < len ? centerPage + 5 : len - pageCount
          });
        } else if (len - pageGroupListEnd > 0) {
          pageGroupList.push({
            val: "...",
            page: centerPage - 5 > 0 ? centerPage - 5 : pageCount + 1
          });
          for (let index = 0; index < this.pageGroup; index++) {
            pageGroupList.push({
              val: pageGroupListStart + index,
              page: pageGroupListStart + index
            });
          }
          pageGroupList.push({
            val: "...",
            page: centerPage + 5 < len ? centerPage + 5 : len - pageCount
          });
        } else {
          for (let index = 0; index < this.pageGroup; index++) {
            pageGroupList.push({
              val: len - index,
              page: len - index
            });
          }
          pageGroupList.push({
            val: "...",
            page: centerPage - 5 > 0 ? centerPage - 5 : pageCount + 1
          });
          pageGroupList.reverse();
        }
      }
      return pageGroupList;
    }
  },
  methods: {
    setCurrent(index) {
      if (this.current != index && index > 0 && index < this.pageTotal + 1) {
        this.current = index;
        this.$emit(
          "pagechange",
          (this.current - 1) * parseInt(this.display),
          parseInt(this.display)
        );
      }
    },
    setDisplay() {
      this.current = 1;
      if (this.display == "") {
        this.$emit("pagechange", 0, 10);
      } else {
        this.$emit("pagechange", 0, parseInt(this.display));
      }
    }
  }
};
</script>
<style lang="scss">
.active span {
  background: #2cabff;
  color: #fff;
}
.pages {
  margin-top: 20px;
  overflow: hidden;
  .pagination {
    display: inline-block;
    vertical-align: top;
    li {
      color: #0f71f0;
      display: inline-block;
      margin: 0 5px;
      span {
        display: block;
        padding: 10px 15px;
        cursor: pointer;
        border: 1px solid #ccc;
        border-radius: 5px;
      }
    }
  }
}
.pull-right p {
  padding: 10px;
  color: #333;
}
.pagination input {
  width: 30px;
  height: 20px;
}
</style>

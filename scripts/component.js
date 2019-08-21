const fs = require('fs')
const path = require('path')
const basePath = path.resolve(__dirname, '../src')

const dirName = process.argv[2]
const capPirName = dirName.substring(0, 1).toUpperCase() + dirName.substring(1)
if (!dirName) {
  console.log('文件夹名称不能为空！')
  console.log('示例：npm run tep ${capPirName}')
  process.exit(0)
}

/**
 * @msg: vue页面模版
 */
const VueTep = `<template>
  <div class="${dirName}-wrap">
    {{componentName}}
  </div>
</template>

<script>
  // import {  } from "@/components" // 组件
  export default{
   name: string,
   components:{

   },

    // data
    data() {
      return{
        componentName:'${dirName}'
      }
    },

    created() {
      //
    },
    
    mounted() {
      //
    },
    methods:{

    },
  }
</script>

<style lang="scss">
  .${dirName}-wrap {
    width: 100%;
  }
</style>
`

fs.mkdirSync(`${basePath}/components/${dirName}`) // mkdir

process.chdir(`${basePath}/components/${dirName}`) // cd views
fs.writeFileSync(`${dirName}.vue`, VueTep) // vue 


process.exit(0)
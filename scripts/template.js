
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
    {{data.pageName}}
  </div>
</template>

<script src="./${dirName}.js"></script>

<style lang="scss">
  @import './${dirName}.scss'
</style>

`

// js 模版
const jsTep = `
// import {  } from "@/components" // 组件
export default {
  components:{},
  data(){
    return{
      pageName: '${dirName}'
    }
  },

  created() {
    //
  },

  mounted() {
    //
  },

    
}
`

// scss 模版
const scssTep = `
.${dirName}-wrap {
  width: 100%;
}
`




fs.mkdirSync(`${basePath}/views/${dirName}`) // mkdir

process.chdir(`${basePath}/views/${dirName}`) // cd views
fs.writeFileSync(`${dirName}.vue`, VueTep) // vue 
fs.writeFileSync(`${dirName}.js`, jsTep) // js
fs.writeFileSync(`${dirName}.scss`, scssTep) // scss

process.exit(0)
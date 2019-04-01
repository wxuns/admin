<template>
<div class="page-body">
  <div class="page-header">
    <h1 class="page-title">栏目列表</h1>
    <el-breadcrumb>
      <el-breadcrumb-item :to="{path: '/'}">首页</el-breadcrumb-item>
      <el-breadcrumb-item >栏目列表</el-breadcrumb-item>
    </el-breadcrumb>
  </div>

  <m-box>
    <el-row :gutter="20">
      <el-col :span="4">
        <div class="grid-content bg-purple" v-if="!buttonshow">
          <el-button type="warning" icon="el-icon-edit" @click="buttonshow = true">添加</el-button>
          <el-button type="primary" icon="el-icon-search" @click="buttonshow = true">搜索</el-button>
        </div>
        <el-form :inline="true" :model="formSeach" class="demo-form-inline" v-if="buttonshow">
          <el-input placeholder="请输入..."></el-input>
        </el-form>
      </el-col>
    </el-row>
  </m-box>

  <m-box>
    21321
  </m-box>
</div>
</template>

<script>
    export default {
      name: 'columnlist',
      data () {
        return {
          formSeach: {},
          buttonshow: false
        }
      }
    }
</script>

<style scoped>

</style>

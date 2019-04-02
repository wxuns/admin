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
        <div class="grid-content bg-purple">
          <el-button type="warning" icon="el-icon-edit">添加</el-button>
        </div>
      </el-col>
      <el-col :span="16" style="float: right;text-align: right">
        <div class="grid-content bg-purple">
          <el-button type="primary" icon="el-icon-search" v-if="!buttonshow" @click="buttonshow = true">搜索</el-button>
          <el-form :inline="true" :model="formSeach" style="float: right;width: 200px" v-if="buttonshow">
            <el-input placeholder="请输入..."></el-input>
          </el-form>
        </div>
      </el-col>
    </el-row>
  </m-box>

  <m-box>
    <el-table :data="tableData" style="width: 100%;margin-bottom: 20px;" border row-key="id">
      <el-table-column prop="time" label="日期" width="180">
      </el-table-column>

      <el-table-column prop="classname" label="栏目" width="180" align="center">
      </el-table-column>

      <el-table-column prop="itro" label="简介">
      </el-table-column>
      <el-table-column prop="classname" label="状态" width="60" align="center">
        <template slot-scope="scope">
          <el-switch
            v-model="scope.row.status"
            active-color="#13ce66"
            inactive-color="#ff4949">
          </el-switch>
        </template>
      </el-table-column>

      <el-table-column prop="classname" label="权限" width="100">
        <template slot-scope="scope">
          <el-tag size="medium" type="warning">{{ scope.row.rolename }}</el-tag>
        </template>
      </el-table-column>

      <el-table-column label="操作" width="180">
        <template slot-scope="scope">
          <el-button
            size="mini"
            @click="handleEdit(scope.$index, scope.row)">编辑</el-button>
          <el-button
            size="mini"
            type="danger"
            @click="handleDelete(scope.$index, scope.row)">删除</el-button>
        </template>
      </el-table-column>
    </el-table>

  </m-box>
</div>
</template>

<script>
    export default {
      name: 'columnlist',
      data () {
        return {
          formSeach: {},
          buttonshow: false,
          tableData: [{
            id: 1,
            time: '2016-05-02',
            classname: '技术文章',
            itro: '上海市普陀区金沙江路 1518 弄',
            status: true,
            rolename: '管理员'
          }, {
            id: 2,
            time: '2016-05-02',
            classname: '影视内容',
            itro: '上海市普陀区金沙江路 1518 弄',
            status: true,
            rolename: '用户'
          }, {
            id: 3,
            time: '2016-05-02',
            classname: '闲话少说',
            itro: '上海市普陀区金沙江路 1518 弄',
            status: false,
            rolename: '管理员'
          }, {
            id: 4,
            time: '2016-05-02',
            classname: '我的小店',
            itro: '上海市普陀区金沙江路 1518 弄',
            status: true,
            rolename: '管理员'
          }]
        }
      },
      methods: {
      }
    }
</script>

<style>
  .el-icon{top: 33% !important;}
</style>

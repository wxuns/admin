<template>
<div class="page-body">
  <div class="page-header">
    <h1 class="page-title">角色管理</h1>
    <el-breadcrumb>
      <el-breadcrumb-item :to="{path: '/'}">首页</el-breadcrumb-item>
      <el-breadcrumb-item >角色管理</el-breadcrumb-item>
    </el-breadcrumb>
  </div>

  <m-box>
    <el-row :gutter="20">
      <el-col :span="4">
        <div class="grid-content bg-purple">
          <el-button type="danger" icon="el-icon-delete" size="small">删除</el-button>
          <el-button type="warning" icon="el-icon-edit" size="small" @click="dialogadd = true">添加</el-button>
        </div>
      </el-col>
    </el-row>
  </m-box>

  <m-box>
    <el-table :data="tableData" style="width: 100%;margin-bottom: 20px;" border row-key="id">

      <el-table-column type="selection" width="45">
      </el-table-column>
      <el-table-column
              type="index"
              width="50">
      </el-table-column>
      <el-table-column prop="time" label="日期" width="180">
      </el-table-column>

      <el-table-column prop="rolename" label="角色名" width="100" align="center">
        <template slot-scope="scope">
          <el-tag size="medium" type="warning">{{ scope.row.rolename }}</el-tag>
        </template>
      </el-table-column>

      <el-table-column prop="role" label="拥有权限">
      </el-table-column>

      <el-table-column prop="description" label="简介">
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
  <el-dialog title="添加角色" :visible.sync="dialogadd" width="30%" top="6%">
    <el-form :model="ruleForm" :rules="rules" ref="ruleForm" label-width="100px" class="demo-ruleForm">
      <el-form-item label="角色名" prop="name">
        <el-input v-model="ruleForm.name"></el-input>
      </el-form-item>
      <el-form-item label="权限范围" prop="type">
        <el-checkbox-group v-model="ruleForm.type">
          <el-checkbox label="美食/餐厅线上活动" name="type"></el-checkbox>
          <el-checkbox label="地推活动" name="type"></el-checkbox>
          <el-checkbox label="线下主题活动" name="type"></el-checkbox>
          <el-checkbox label="单纯品牌曝光" name="type"></el-checkbox>
        </el-checkbox-group>
      </el-form-item>
      <el-form-item label="介绍" prop="desc">
        <el-input type="textarea" v-model="ruleForm.desc"></el-input>
      </el-form-item>
    </el-form>
    <span slot="footer" class="dialog-footer">
    <el-button @click="dialogadd = false">取 消</el-button>
    <el-button type="primary" @click="dialogadd = false">确 定</el-button>
  </span>
  </el-dialog>
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
            description: '上海市普陀区金沙江路 1518 弄',
            role: '上海市普陀区金沙江路 1518 弄',
            rolename: '管理员'
          }, {
            id: 2,
            time: '2016-05-02',
            classname: '影视内容',
            description: '上海市普陀区金沙江路 1518 弄',
            role: '上海市普陀区金沙江路 1518 弄',
            rolename: '用户'
          }, {
            id: 3,
            time: '2016-05-02',
            classname: '闲话少说',
            description: '上海市普陀区金沙江路 1518 弄',
            role: '上海市普陀区金沙江路 1518 弄',
            rolename: '管理员'
          }, {
            id: 4,
            time: '2016-05-02',
            classname: '我的小店',
            description: '上海市普陀区金沙江路 1518 弄',
            role: '上海市普陀区金沙江路 1518 弄',
            rolename: '管理员'
          }],
          ruleForm: {
            name: '',
            region: '',
            date1: '',
            date2: '',
            delivery: false,
            type: [],
            resource: '',
            desc: ''
          },
          rules: {
            name: [
              { required: true, message: '请输入活动名称', trigger: 'blur' },
              { min: 3, max: 5, message: '长度在 3 到 5 个字符', trigger: 'blur' }
            ],
            region: [
              { required: true, message: '请选择活动区域', trigger: 'change' }
            ],
            date1: [
              { type: 'date', required: true, message: '请选择日期', trigger: 'change' }
            ],
            date2: [
              { type: 'date', required: true, message: '请选择时间', trigger: 'change' }
            ],
            type: [
              { type: 'array', required: true, message: '请至少选择一个活动性质', trigger: 'change' }
            ],
            resource: [
              { required: true, message: '请选择活动资源', trigger: 'change' }
            ],
            desc: [
              { required: true, message: '请填写活动形式', trigger: 'blur' }
            ]
          },
          dialogadd: false
        }
      },
      methods: {
      }
    }
</script>

<style>
  .el-icon{top: 33% !important;}
</style>

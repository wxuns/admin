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
      <el-col :span="4" style="white-space: nowrap">
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
  <el-dialog title="添加角色" :visible.sync="dialogadd" width="500px" top="6%">
    <el-form :model="ruleForm" :rules="rules" ref="ruleForm" label-width="80px">
      <el-form-item label="角色名" prop="rolename">
        <el-input v-model="ruleForm.rolename"></el-input>
      </el-form-item>
      <el-form-item label="权限范围" prop="range">
        <el-checkbox-group v-model="ruleForm.range">
          <el-checkbox label="美食/餐厅线上活动" name="type"></el-checkbox>
          <el-checkbox label="地推活动" name="type"></el-checkbox>
          <el-checkbox label="线下主题活动" name="type"></el-checkbox>
          <el-checkbox label="单纯品牌曝光" name="type"></el-checkbox>
        </el-checkbox-group>
      </el-form-item>
      <el-form-item label="介绍" prop="description">
        <el-input type="textarea" v-model="ruleForm.description"></el-input>
      </el-form-item>
    </el-form>
    <span slot="footer" class="dialog-footer">
    <el-button @click="resetForm('ruleForm')">取 消</el-button>
    <el-button type="primary" @click="submitForm('ruleForm')">确 定</el-button>
  </span>
  </el-dialog>
</div>
</template>
<script>
  import menus from '@/components/menus'
  export default {
    name: 'role',
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
        ruleForm: {},
        rules: {
          rolename: [
            { required: true, message: '请输入角色名', trigger: 'blur' },
            { min: 2, max: 5, message: '长度在 2 到 5 个字符', trigger: 'blur' }
          ],
          range: [
            { type: 'array', required: true, message: '请选择权限范围', trigger: 'change' }
          ],
          description: [
            { required: true, message: '请填写角色介绍', trigger: 'blur' }
          ]
        },
        dialogadd: false
      }
    },
    mounted () {
      console.log(menus)
    },
    methods: {
      submitForm (formName) {
        this.$refs[formName].validate((valid) => {
          if (valid) {
            alert('submit!')
          } else {
            console.log('error submit!!')
            return false
          }
        })
      },
      resetForm (formName) {
        this.dialogadd = false
        this.$refs[formName].resetFields()
      }
    }
  }
</script>

<style>
  .el-icon{top: 33% !important;}
</style>

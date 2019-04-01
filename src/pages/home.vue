<template>
<div class="page-body">

    <el-row :gutter="15">
        <el-col :span="16">
            <div class="grid-content bg-purple">
                <el-row :gutter="15">
                    <el-col :span="12">
                        <div class="grid-content bg-purple">
                            <el-card class="box-card" shadow="hover">
                                <div slot="header" class="clearfix">
                                    <span>快捷方式</span>
                                    <el-button style="float: right; padding: 3px 0" type="text">操作按钮</el-button>
                                </div>
                                <el-row :gutter="10">
                                    <el-col :span="6" v-for="quick in quickData" :key="quick.tag">
                                        <a class="grid-content bg-purple wx-center" href="/">
                                            <el-card class="box-card" shadow="always" :body-style="{ padding: '15px 10px' }">
                                                <i :class="quick.icon" style="font-size:30px;"></i>
                                            </el-card>
                                            <p style="margin-top:10px;white-space:nowrap;">{{ quick.tag }}</p>
                                        </a>
                                    </el-col>
                                </el-row>
                            </el-card>
                        </div>
                    </el-col>
                    <el-col :span="12">
                        <div class="grid-content bg-purple-light">
                            <el-card class="box-card">
                                <div slot="header" class="clearfix">
                                    <span>待办事项</span>
                                    <el-button style="float: right; padding: 3px 0" type="text">操作按钮</el-button>
                                </div>
                                <el-row :gutter="12">
                                    <el-col :span="8" v-for="todo in TodoList" :key="todo.num">
                                        <el-card shadow="always">
                                            <p style="white-space:nowrap;">{{ todo.tag }}</p>
                                            <cite>{{ todo.num }}</cite>
                                        </el-card>
                                    </el-col>
                                </el-row>
                            </el-card>
                        </div>
                    </el-col>
                </el-row>
                <el-row class="wx-m10">
                    <el-col :span="24">
                        <div class="grid-content bg-purple-dark">
                            <el-card class="box-card">
                                <div slot="header" class="clearfix">
                                    <span>访问量</span>
                                    <el-button style="float: right; padding: 3px 0" type="text">操作按钮</el-button>
                                </div>
                                <div class="wx-chars" id="echars">

                                </div>
                            </el-card>
                        </div>
                    </el-col>
                </el-row>
            </div>
        </el-col>
        <el-col :span="8">
            <div class="grid-content bg-purple">
                <div class="grid-content bg-purple-light">
                    <el-card class="box-card">
                        {{ this.welcome }}
                    </el-card>
                    <el-card class="box-card wx-m10">
                        <div slot="header" class="clearfix">
                            <span>Todo</span>
                            <el-button style="float: right; padding: 3px 0" type="text" @click="dialogTodoVisible = true">
                                <i class="el-icon-circle-plus-outline"></i> 添加
                            </el-button>
                        </div>
                        <el-table :data="tableData"
                                border
                                style="width: 100%">
                            <el-table-column
                                    prop="date"
                                    label="日期"
                                    width="115">
                                <template slot-scope="scope">
                                    <i class="el-icon-time"></i>
                                    <span style="margin-left: 2px">{{ scope.row.time }}</span>
                                </template>
                            </el-table-column>
                            <el-table-column
                                    prop="content"
                                    label="内容">
                            </el-table-column>
                            <el-table-column
                                    fixed="right"
                                    label="操作"
                                    width="150">
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
                    </el-card>
                </div>
            </div>
        </el-col>
    </el-row>
    <el-dialog :visible.sync="dialogTodoVisible" width="26%">
        <el-form ref="form" status-icon :model="form" label-width="50px" :rules="rules">
            <el-form-item label="Todo" prop="content">
                <el-input type="textarea" v-model="form.content"></el-input>
            </el-form-item>
            <el-form-item label="日期" style="margin-bottom:0">
                <el-col :span="11">
                  <el-form-item prop="date1">
                    <el-date-picker type="date" placeholder="选择日期" v-model="form.date1" style="width: 100%;"></el-date-picker>
                  </el-form-item>
                </el-col>
                <el-col class="line" :span="2" style="text-align: center;">-</el-col>
                <el-col :span="11">
                  <el-form-item prop="date2">
                    <el-time-select placeholder="选择时间" v-model="form.date2" style="width: 100%;"></el-time-select>
                  </el-form-item>
                </el-col>
            </el-form-item>
        </el-form>
        <div slot="footer" class="dialog-footer">
            <el-button @click="dialogTodoVisible = false">取 消</el-button>
            <el-button type="primary" @click="AddTodo('form')">确 定</el-button>
        </div>
    </el-dialog>

    <el-dialog :visible.sync="dialogEditTodo" width="26%">
      <el-form ref="form" status-icon :model="form" label-width="50px" :rules="rules">
        <el-form-item label="Todo" prop="content">
          <el-input type="textarea" v-model="form.content"></el-input>
        </el-form-item>
        <el-form-item label="日期" style="margin-bottom:0">
          <el-col :span="11">
            <el-form-item prop="date1">
              <el-date-picker type="date" placeholder="选择日期" v-model="form.date1" style="width: 100%;"></el-date-picker>
            </el-form-item>
          </el-col>
          <el-col class="line" :span="2" style="text-align: center;">-</el-col>
          <el-col :span="11">
            <el-form-item prop="date2">
              <el-time-select placeholder="选择时间" v-model="form.date2" style="width: 100%;"></el-time-select>
            </el-form-item>
          </el-col>
        </el-form-item>
      </el-form>
      <div slot="footer" class="dialog-footer">
        <el-button @click="resetForm('form')">取 消</el-button>
        <el-button type="primary" @click="EditTodo('form')">确 定</el-button>
      </div>
    </el-dialog>
</div>


</template>
<script type="text/javascript">
import {mapActions, mapState} from 'vuex'
import Axios from 'axios'
import Qs from 'qs'
export default {
  name: 'home',
  computed: {
    ...mapState({
      user: ({user}) => user.user
    })
  },
  methods: {
    handleEdit (index, row) {
      this.index = index
      var time = row.time.split(' ')
      this.dialogEditTodo = true
      this.form = {
        content: row.content,
        date1: time[0],
        date2: time[1],
        id: row.id
      }
    },
    handleDelete (index, row) {
      var url = this.HOST + '/deltodo/' + row.id
      Axios.put(url, Qs.stringify({user_id: row.user_id, token: this.user.token})).then(response => {
        if (!response.errorcode) {
          this.tableData.splice(index, 1)
          this.$message.success('又一项任务完成了')
        } else {
          this.$message.error('出错了')
        }
      }).catch(error => {
        console.log(error)
      })
    },
    resetForm (form) {
      this.dialogEditTodo = false
      this.form = {}
    },
    viewline () {
      this.pageview = this.$echarts.init(document.getElementById('echars'))
      this.pageview.setOption(this.option)
    },
    AddTodo (form) {
      this.$refs[form].validate((valid) => {
        if (valid) {
          this.form.date1 = this.form.date1.getFullYear() + '-' + (this.form.date1.getMonth() + 1) + '-' + this.form.date1.getDate()
          this.form.time = this.form.date1 + ' ' + this.form.date2
          this.form.token = this.user.token
          var url = this.HOST + '/addtodo'
          Axios.put(url, Qs.stringify(this.form)).then(response => {
            if (!response.errorcode) {
              this.tableData.push(response)
              this.dialogTodoVisible = false
              this.$message.success('任务添加成功')
              this.$refs[form].resetFields()
            }
          }).catch(error => {
            console.log(error)
          })
        } else {
          return false
        }
      })
    },
    GetTodo () {
      var url = this.HOST + '/todo?token=' + sessionStorage.getItem('token')
      Axios.get(url).then(response => {
        if (response.errorcode === '4001') {
          this.$message.error('出错了')
        } else {
          this.tableData = response
        }
      }).catch(error => {
        console.log(error)
      })
    },
    EditTodo (form) {
      this.$refs[form].validate((valid) => {
        if (valid) {
          if (!this.form.date1.length) {
            this.form.date1 = this.form.date1.getFullYear() + '-' + (this.form.date1.getMonth() + 1) + '-' + this.form.date1.getDate()
          }
          this.form.time = this.form.date1 + ' ' + this.form.date2
          this.form.token = this.user.token
          var url = this.HOST + '/edittodo/' + this.form.id
          Axios.put(url, Qs.stringify(this.form)).then(response => {
            if (!response.errorcode) {
              this.tableData[this.index].content = this.form.content
              this.tableData[this.index].date1 = this.form.date1
              this.tableData[this.index].date2 = this.form.date2
              this.dialogEditTodo = false
              this.$message.success('任务修改成功')
              this.$refs[form].resetFields()
            }
          }).catch(error => {
            console.log(error)
          })
        } else {
          return false
        }
      })
    }
  },
  created () {
    let now = new Date()
    let hour = now.getHours()
    if (hour < 6) { this.welcome = '凌晨好！' } else if (hour < 9) { this.welcome = '早上好！' } else if (hour < 12) { this.welcome = '上午好！' } else if (hour < 14) { this.welcome = '中午好！' } else if (hour < 17) { this.welcome = '下午好！' } else if (hour < 19) { this.welcome = '傍晚好！' } else if (hour < 22) { this.welcome = '晚上好！' } else { this.welcome = '晚安，明天加油！' }
  },
  mounted () {
    this.viewline()
    window.onresize = this.pageview.resize
    this.GetTodo()
  },
  data () {
    var content = (rule, value, callback) => {
      if (!value) {
        return callback(new Error('内容不能为空'))
      } else {
        callback()
      }
    }
    var date1 = (rule, value, callback) => {
      if (!value) {
        return callback(new Error('日期不能为空'))
      } else {
        callback()
      }
    }
    var date2 = (rule, value, callback) => {
      if (!value) {
        return callback(new Error('时间不能为空'))
      } else {
        callback()
      }
    }
    return {
      tableData: [],
      quickData: [{
        icon: 'fa fa-edit',
        tag: '写文章',
        link: ''
      }, {
        icon: 'fa fa-expeditedssl',
        tag: '证书签发',
        link: ''
      }, {
        icon: 'fa fa-envelope-open-o',
        tag: '发邮件',
        link: ''
      }, {
        icon: 'fa fa-cogs',
        tag: '设置',
        link: ''
      }],
      TodoList: [{
        tag: '待审评论',
        num: 212,
        link: ''
      }, {
        tag: '待审友链',
        num: 231,
        link: ''
      }, {
        tag: '待发货',
        num: 22,
        link: ''
      } ],
      welcome: '',
      pageview: '',
      dialogTodoVisible: false,
      dialogEditTodo: false,
      form: {},
      index: '',
      rules: {
        content: [
          { validator: content, trigger: 'blur' }
        ],
        date1: [
          { validator: date1, trigger: 'blur' }
        ],
        date2: [
          { validator: date2, trigger: 'blur' }
        ]
      },
      option: {
        xAxis: {
          type: 'category',
          data: ['Mon', 'Tue', 'Wed', 'Thu', 'Fri', 'Sat', 'Sun']
        },
        yAxis: {
          type: 'value'
        },
        series: [{
          data: [820, 932, 901, 934, 1290, 1330, 1320],
          type: 'line',
          smooth: true
        }]
      }
    }
  }
}
</script>
<style type="text/css">
    .wx-m10{
        margin-top:10px;
    }
    .wx-center{
        text-align: center;
    }
    .test{
        height: 40px;
        background: #ccc;
        margin-bottom: 15px;
    }
    cite{
      font-size: 25.9px;
      color: #009688;
    }
    .wx-chars{
      height: 300px;
    }
</style>

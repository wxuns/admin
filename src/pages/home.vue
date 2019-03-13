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
                                    <span style="margin-left: 2px">{{ scope.row.date }}</span>
                                </template>
                            </el-table-column>
                            <el-table-column
                                    prop="title"
                                    label="标题"
                                    >
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
</div>
</template>
<script type="text/javascript">
export default {
  name: 'home',
  methods: {
    handleEdit (index, row) {
      console.log(index, row)
    },
    handleDelete (index, row) {
      console.log(index, row)
    },
    viewline () {
      this.pageview = this.$echarts.init(document.getElementById('echars'))
      this.pageview.setOption(this.option)
    }
  },
  mounted () {
    this.viewline()
    window.onresize = this.pageview.resize
  },
  data () {
    return {
      tableData: [{
        id: '100',
        date: '2019.01.01',
        title: '为违法犯罪活动提供借款'
      }, {
        id: '300',
        date: '2019.01.02',
        title: '上海市普陀区金沙江路 1518 弄'
      }, {
        id: '120',
        date: '2019.01.03',
        title: '为当前遍历的元素提供别名'
      }],
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
      welcome: '中午好',
      pageview: '',
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

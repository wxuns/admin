<template>
<m-navbar :theme="theme.theme.headerTheme">
  <m-navbar-brand>
    <i class="layui-icon layui-icon-shrink-right" style="cursor:pointer"
      :class="{
        'el-icon-more': !mini,
        'el-icon-more-outline': mini
      }"
      @click="handleSwitchSide"
      ></i>
  </m-navbar-brand>
  <m-nav>
    <m-nav-item padding="0">
      <m-dropdown align="right" padding="0 10px">
        <a href="#"  style="padding:0 0px; color: inherit">
          <i class="layui-icon layui-icon-refresh-3"></i>
        </a>
      </m-dropdown>
    </m-nav-item>
  </m-nav>
  <m-nav align="right">
    <m-nav-item padding="0 10px">
      <i class="el-icon-bell" style="font-size: 20px;vertical-align: middle;"></i>
      <span class="layui-badge-dot wxuns-dot"></span>
    </m-nav-item>

    <m-nav-item padding="0 5px">
      <a href="#" @click.stop.prevent="handleSwitchScreen">
        <i
          class="fa"
          :class="isFullScreen ? 'fa-compress' : 'fa-expand'"
          ></i>
      </a>
    </m-nav-item>

    <m-nav-item padding="0">
      <m-dropdown align="right" padding="0 10px">
        <a href="javascript:;"  style="padding:0 0px; color: inherit" @click="dialogVisible = true">
          <i class="fa layui-icon layui-icon-note"></i>
        </a>
      </m-dropdown>
    </m-nav-item>

    <m-nav-item padding="0">
      <m-dropdown align="right" padding="0 10px">
        <a href="#"  style="padding:0 0px; color: inherit">
          <i class="fa fa-gears"></i>
        </a>
        <m-dropdown-panel style="width: 200px; min-height: 100px;">
          <el-form>
            <el-form-item label="侧边栏">
              <el-switch v-model="showAside" @change="handleSwitchHideSide" />
            </el-form-item>
            <el-form-item label="主题">
              <el-select v-model="themeType" style="width: 100px">
                <el-option
                  v-for="theme in themes"
                  :key="theme.label"
                  :label="theme.label"
                  :value="theme.name"
                  ></el-option>
              </el-select>
            </el-form-item>
          </el-form>
        </m-dropdown-panel>
      </m-dropdown>
    </m-nav-item>
    <m-nav-item padding="0">
      <m-dropdown align="right" v-if="user" padding="0 10px">
        <a href="#" style="display: inline-block; padding: 0px; color: inherit">
          <img :src="user.pic" alt="" style="width:40px;border-radius: 3px;vertical-align: middle;">
          <span>{{user.nick}}</span>
          <span class="caret"></span>
        </a>
        <m-dropdown-panel>
          <m-dropdown-item>用户信息</m-dropdown-item>
          <m-dropdown-item >修改密码</m-dropdown-item>
          <m-dropdown-item disabled>注销</m-dropdown-item>
          <div class="test-line"></div>
          <m-dropdown-item name="login">退出账号</m-dropdown-item>
        </m-dropdown-panel>
      </m-dropdown>
    </m-nav-item>

    <m-nav-item padding="0">
      <m-dropdown align="right" padding="0 ">
        <a href="#"  style="padding:0 0px; color: inherit">
          <i class="layui-icon layui-icon-more-vertical"></i>
        </a>
      </m-dropdown>
    </m-nav-item>
  </m-nav>
  <el-dialog class="wx-dialog"
    title="便签" top="5vh"
    :visible.sync="dialogVisible" :close-on-click-modal="false"
    width="18%" :modal="false" :close-on-press-escape="true"
    :modal-append-to-body='false' v-dialogDrag>
    <textarea class="wx-textarea" rows="10" resize="true" @input="textInp" v-model="textVal">
    </textarea>
  </el-dialog>
</m-navbar>

</template>
<script type="text/javascript">
import {mapActions, mapState} from 'vuex'
import {
  requestFullScreen,
  exitFullscreen
} from '@/utils'
import themes from './theme'
export default {
  name: 'app-header',
  data () {
    return {
      mini: false,
      isFullScreen: false,
      themes,
      themeType: '',
      showAside: true,
      theme: {theme: {headerTheme: 'info'}},
      dialogVisible: false,
      textVal: localStorage.getItem('note') ? localStorage.getItem('note') : '只用于本地零时存放~'
    }
  },
  computed: {
    ...mapState({
      user: ({user}) => user.user
    })
  },
  watch: {
    themeType (val) {
      this.theme = this.themes.find(e => e.name === val) || {}
      this.$emit('set-theme', this.theme)
      localStorage.setItem('theme', val)
    }
  },
  methods: {
    ...mapActions(['getLoginUser', 'logout']),
    handleSwitchSide () {
      this.mini = !this.mini
      this.$emit('switch', this.mini)
    },
    handleSwitchScreen () {
      if (this.isFullScreen) {
        exitFullscreen()
        this.isFullScreen = false
      } else {
        requestFullScreen()
        this.isFullScreen = true
      }
    },
    handleSwitchHideSide () {
      console.log('change')
      this.$emit('hide-side')
    },
    textInp () {
      localStorage.setItem('note', this.textVal)
    }
  },
  created () {
    this.getLoginUser()
    var theme = localStorage.getItem('theme') || 'default'
    this.themeType = theme
  }
}
</script>
<style type="text/css">
  .side-switch{
    display: inline-block;
    font-size: 32px;
    cursor: pointer;
    color: inherit;
    margin-top: 10px;
  }
  .side-switch:hover{
    color: #fff;
  }
  .wxuns-dot{
    margin-left:-9px;
    margin-bottom: 6px;
  }
  .wx-dialog .el-dialog__header{
    padding:0px 15px;
    background-color: #20222A;
  }
  .wx-dialog .el-dialog__title{
    color: #fff;
    font-size: 15px;
  }
  .wx-dialog .el-dialog__body{
    padding: 0;
  }
  .wx-dialog .el-dialog{
    left: 27%;
  }
  .wx-textarea{
    width: 100%;
    border: 0;
    padding: 10px;
    display: block;
    box-sizing: border-box;
  }
</style>

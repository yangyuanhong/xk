<template>
  <div id="app">
    <header>
      <el-row>
        <el-col :span="4" class='title'>
          <i class="el-icon-view"></i> &nbsp;&nbsp;选课系统</el-col>
        <el-col :span="20">
          <div class="userPic"></div>
        </el-col>
      </el-row>
    </header>
    <article>
      <el-row>
        <el-col :span="4" class='navLeft'>
          <el-menu
            router=true
            default-active="2"
            class="el-menu-vertical-demo"
            background-color="#545c64"
            text-color="#fff"
            active-text-color="#ffd04b">
            <el-submenu index="/student">
              <template slot="title">
                <i class="el-icon-location"></i>

                <span>学生管理</span>
              </template>
              <el-menu-item-group>
                <el-menu-item index="/student/info">档案</el-menu-item>
                <el-menu-item index="/student/course">成绩</el-menu-item>
              </el-menu-item-group>
            </el-submenu>
             <el-submenu index="/course">
              <template slot="title">
                <i class="el-icon-tickets"></i>
                <span>课程管理</span>
              </template>
              <el-menu-item-group>
                <el-menu-item index="/course/info">信息</el-menu-item>
                <el-menu-item index="/course/test">test</el-menu-item>
              </el-menu-item-group>
            </el-submenu>
             <el-submenu index="/clazz">
              <template slot="title">
                <i class="el-icon-service"></i>
                <span>班级管理</span>
              </template>
              <el-menu-item-group>
                <el-menu-item index="/clazz/info">信息</el-menu-item>
                <el-menu-item index="/clazz/test">test</el-menu-item>
              </el-menu-item-group>
            </el-submenu>
          </el-menu>  
        </el-col>
        <el-col :span="20" class='container'>
          <!--当路由发生改变，路由对应的模块显示到这里-->
          <router-view></router-view>
        </el-col>
      </el-row>
    </article>
  </div>
</template>

<script>
import $ from 'jquery'
export default {
  name: 'app',
  mounted:function(){
    $('.navLeft').height($(window).height()-58)
  }
}
</script>

<style>
  body{
    margin: 0;
    padding:0;
  }
  header {
    background-color: #1f2d3d;
  }
  header .title {
    height: 58px;
    line-height: 58px;
    text-align: center;
    font-size: 20px;
    color: #fff;
  }
  header .userPic{
    width: 40px;
    height: 40px;
    border-radius: 50%;
    background-color: orange;
    float: right;
    margin: 9px 30px;
  }
  .navLeft{
    background-color: #545c64;
  }
  .container{
    padding: 10px;
  }
</style>

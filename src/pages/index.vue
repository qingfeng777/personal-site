<template lang="html">
        <div class="index">
            <ul>
          <li>
            <router-link to="/nav">
                导航
            </router-link>
          </li>
          <li>
            <router-link to="/resume">
              简历
            </router-link>
          </li>
          <li>
            <router-link to="/blog">
            　　MyBlog
            </router-link>
          </li>
          <!--<li>
            <router-link to="/manager">
            　　manage
            </router-link>
          </li>-->
        </ul>

        <router-view />

      </div>
    </template>
    <script >



    export default {

    }

    </script>

    <style scoped>

    .index img{
      width: 26px;
      height: 26px;
    }

    .index ul{
      display: flex;
      height: 50px;
      line-height: 50px;
      background: #f9f9f9;
    }

    .index ul li {
      flex: 1;
      text-align: center;
    }

    .index ul li a{
      font-size: 16px;
      color: #999;
    }

    </style>

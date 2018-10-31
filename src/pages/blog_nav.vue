<template>

        <div class="index">
                <ul>
              <li>
                <router-link to="/blog/home">
                    博客首页
                </router-link>
              </li>
              <li>
                <router-link to="/blog/detail">
                  详情/最新？        
                </router-link>
              </li>
              <li>
                <router-link to="/blog/all">
                　　所有博客        
                </router-link>
              </li>
              <li>
                <router-link to="/blog/message_board">
                    message board        
                </router-link>
              </li>
            </ul>

            <div class="user-select">
            <header class="header">
                    <nav class="navbar navbar-default" id="navbar">
                    <div class="container">
                      <div class="header-topbar hidden-xs link-border">
                        <ul class="site-nav topmenu">
                          <li><a href="#" >标签云</a></li>
                            <li><a href="#" rel="nofollow" >读者墙</a></li>
                            <li><a href="#" title="RSS订阅" >
                                <i class="fa fa-rss">
                                </i> RSS订阅
                            </a></li>
                        </ul>
                                 勤记录 懂分享</div>
                      <div class="navbar-header">
                        <button type="button" class="navbar-toggle collapsed" data-toggle="collapse" data-target="#header-navbar" aria-expanded="false"> <span class="sr-only"></span> <span class="icon-bar"></span> <span class="icon-bar"></span> <span class="icon-bar"></span> </button>
                        <h1 class="logo hvr-bounce-in"><a href="#" title="木庄网络博客"><img src="images/201610171329086541.png" alt="木庄网络博客"></a></h1>
                      </div>
                      <div class="collapse navbar-collapse" id="header-navbar">
                        <form class="navbar-form visible-xs" action="/Search" method="post">
                          <div class="input-group">
                            <input type="text" name="keyword" class="form-control" placeholder="请输入关键字" maxlength="20" autocomplete="off">
                            <span class="input-group-btn">
                            <button class="btn btn-default btn-search" name="search" type="submit">搜索</button>
                            </span> </div>
                        </form>
                        <ul class="nav navbar-nav navbar-right">
                          <li><a data-cont="木庄网络博客" title="木庄网络博客" href="index.html">首页</a></li>
                          <li><a data-cont="列表页" title="列表页" href="list.html">列表页</a></li>
                          <li><a data-cont="详细页" title="详细页" href="show.html">详细页</a></li>
                          <li><a data-cont="404" title="404" href="404.html">404</a></li>
                          <li><a data-cont="MZ-NetBolg主题" title="MZ-NetBolg主题" href="#" >MZ-NetBolg主题</a></li>
                          <li><a data-cont="IT技术笔记" title="IT技术笔记" href="#" >IT技术笔记</a></li>
                          <li><a data-cont="源码分享" title="源码分享" href="#" >源码分享</a></li>
                          <li><a data-cont="靠谱网赚" title="靠谱网赚" href="#" >靠谱网赚</a></li>
                          <li><a data-cont="资讯分享" title="资讯分享" href="#" >资讯分享</a></li>
                        </ul>
                      </div>
                    </div>
                    </nav>
                    </header>
                    
                    <router-view />

                    <footer class="footer">
                    <div class="container">
                    <p>Copyright &copy; 2016.Company name All rights reserved.More Templates <a href="http://www.cssmoban.com/" target="_blank" title="模板之家">模板之家</a> - Collect from <a href="http://www.cssmoban.com/" title="网页模板" target="_blank">网页模板</a></p>
                    </div>
                    <div id="gotop"><a class="gotop"></a></div>
                    </footer>

                </div>


</div>

</template>

<script src="js/bootstrap.min.js"></script>
<script src="js/jquery.ias.js"></script>
<script src="js/scripts.js"></script>
<script src="js/jquery-2.1.4.min.js"></script>
<script src="js/nprogress.js"></script>
<script src="js/jquery.lazyload.min.js"></script>


<script>
//<link rel="apple-touch-icon-precomposed" href="images/icon.png">
//<link rel="shortcut icon" href="images/favicon.ico">
</script>


<style>


@import "../assets/css/nprogress.css";
@import "../assets/css/font-awesome.min.css";

@import "../assets/nav_files/mycolor.css";
@import "../assets/plugins/bootstrap/css/bootstrap.min.css";   
@import "../assets/plugins/font-awesome/css/font-awesome.css";
@import "../assets/css/styles.css";

</style>


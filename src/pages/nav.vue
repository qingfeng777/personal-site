<template>

        <div id="body">
                
                <!-- 头部导航 -->
                <nav class="navbar navbar-default" role="navigation" style="margin-bottom: 5px;">
                        <div class="container">
                            <div class="navbar-header">
                                <span class="navbar-btn" style="margin-left: 10px;">
                                    <img alt="shouku123" src="../assets/nav_files/default_user_icon.png" class="login_img navbar-btn img-rounded">
                                    <a href="https://shouku123.com/xizi"><img alt="shouku123" src="../assets/nav_files/shouku123_logo.png" class="navbar-btn img-rounded" style="width: 100px;height: 34px;"></a>
                                </span>
                                <button type="button" class="navbar-toggle" data-toggle="collapse" data-target="#example-navbar-collapse">
                                    <span class="sr-only">切换导航</span>
                                    <span class="icon-bar"></span>
                                    <span class="icon-bar"></span>
                                    <span class="icon-bar"></span>
                                </button>
                            </div>
                    
                            <div class="collapse navbar-collapse my-navbar" id="example-navbar-collapse">
                                <form class="navbar-form navbar-left" role="search" id="addUrlForm" name="addUrlForm" onkeydown="if(event.keyCode==13){subAddUrlForm();};">
                                    <div class="form-group ">
                                        <label for="url" class="sr-only">网址</label>
                                        <input type="url" class="form-control" placeholder="粘帖需要收藏的网址" id="addUrlForm_url" name="url" maxlength="255" onblur="javascript:navbarUrlOnBlur();">
                                    </div>
                                    <div class="form-group ">
                                        <label for="title" class="sr-only">标题</label>
                                        <input type="text" class="form-control" placeholder="网址的标题(自动)" id="addUrlForm_title" name="title" maxlength="75">
                                    </div>
                                    
                                    <div class="form-group">
                                        <label for="pin" class="sr-only">口令</label>
                                        <!-- 防止表单被浏览器填充 表示无奈 -->
                                        <input type="password" class="form-control addUrlForm_pin" placeholder="收藏口令" id="addUrlForm_pin" name="pin" maxlength="6" data-toggle="tooltip" data-placement="bottom" title="解释：口令(4~6位)，用于在未登录的情况下，快速的将收藏网址到自己的分组中">
                                    </div>
                                    
                                    <hr class="visible-md visible-sm" style="margin:10px 0px;">
                                    <div class="form-group">
                                        <input type="hidden" name="appId" value="">
                                        <select class="form-control" id="addUrlForm_urlGroupSelect" name="urlGroupSelect">
                                            
                                                <option value="10120">简洁主页</option>
                                            
                                                <option value="955">社区</option>
                                            
                                                <option value="950">影音</option>
                                            
                                                <option value="1872">美剧</option>
                                            
                                                <option value="957">最爱</option>
                                            
                                                <option value="949">知乎</option>
                                            
                                                <option value="952">常用工具</option>
                                            
                                            <option value="0">+ 创建默认分组</option>
                                            <option value="-1" id="addUrlGroupsOption">+ 创建新分组</option>
                                        </select>
                                    </div>
                                    <div class="form-group ">
                                        <select class="form-control" id="addUrlForm_isPublic" name="isPublic">
                                              <option value="1">公开</option>
                                              <option value="0">私密</option>
                                        </select>
                                      </div>
                                      <button type="button" class="btn btn-default" onclick="javascript:subAddUrlForm();">收藏</button>
                                </form>
                                <ul class="nav navbar-nav navbar-right">
                                    
                                        
                                            <li><a href="https://shouku123.com/pub/login.html" data-toggle="modal" style="padding-left: 15px;padding-right: 0px;">
                                            <span class="glyphicon glyphicon-log-in"></span> 登录
                                            </a></li>
                                            <li><a href="https://shouku123.com/pub/reg.html?u=17061114025931553460" style="padding-left: 15px;padding-right: 0px;">
                                            <span class="glyphicon glyphicon-edit"></span> 定制
                                            </a></li>
                                        
                                        
                                        
                                    
                                </ul>
                            </div>
                        </div>
                    </nav>
                    
                    <!-- url消息框 -->
                    <div class="container">
                    <div class="alert alert-danger" role="alert" id="addUrlForm_alert" style="text-align: center;display: none;">
                    </div>
                    </div>
                    
                    <!-- 创建分组模态框（Modal） -->
                    <div class="modal fade" id="addUrlGroupsModal" role="dialog" aria-labelledby="addUrlGroupsLabel" aria-hidden="true" data-backdrop="static">
                        <div class="modal-dialog">
                            <div class="modal-content myfont">
                                <div class="modal-header">
                                    <button type="button" class="close" onclick="javascript:closeAddUrlGroupModel();">×</button>
                                    <h4 class="modal-title " id="addUrlGroupsLabel">创建分组</h4>
                                </div>
                                <form method="post" id="addUrlGroups_form" name="addUrlGroups_form" onkeydown="if(event.keyCode==13){return subAddUrlGroupModel();};">
                                <div class="modal-body">
                                      <div class="form-group">
                                        <label for="addUrlGroups_title">组名:</label>
                                        <input type="text" class="form-control" maxlength="10" placeholder="请输入分组名(最长10位)" id="addUrlGroups_title" name="title">
                                      </div>
                                      
                                      <div class="form-group">
                                        <div><label>颜色:</label></div>
                                        <div class="btn-group colorBtnGroup" role="group">
                                          <input type="hidden" name="color" value="default" id="addUrlGroups_color">
                                          <button type="button" class="btn btn-default" value="default">
                                              <span class="glyphicon glyphicon-ok"></span>
                                          </button>
                                          <button type="button" class="btn btn-primary" value="primary">
                                              <span class="glyphicon glyphicon-unchecked"></span>
                                          </button>
                                          <button type="button" class="btn btn-success" value="success">
                                              <span class="glyphicon glyphicon-unchecked"></span>
                                          </button>
                                          <button type="button" class="btn btn-info" value="info">
                                              <span class="glyphicon glyphicon-unchecked"></span>
                                          </button>
                                          <button type="button" class="btn btn-warning" value="warning">
                                              <span class="glyphicon glyphicon-unchecked"></span>
                                          </button>
                                          <button type="button" class="btn btn-danger" value="danger">
                                              <span class="glyphicon glyphicon-unchecked"></span>
                                          </button>
                                          </div>
                                      </div>
                                      
                                        <input type="hidden" name="appId" value="">
                                      <div class="form-group ">
                                        <label for="addUrlGroups_isPublic">是否公开:</label>
                                        <div>
                                            <label class="radio-inline">
                                              <input type="radio" name="isPublic" id="addUrlGroups_isPublic1" value="1" checked="checked"> 公开
                                            </label>
                                            <label class="radio-inline">
                                              <input type="radio" name="isPublic" id="addUrlGroups_isPublic2" value="0"> 私密
                                            </label>
                                        </div>
                                        </div>
                                      
                                      <div class="form-group">
                                        <label for="addUrlGroups_pin">口令:</label>
                                        <input type="password" class="form-control" id="addUrlGroups_pin" name="pin" placeholder="请输入口令" maxlength="6">
                                      </div>
                                      
                                      <div class="alert alert-danger" style="display: none;" role="alert" id="addUrlGroups_alert"></div>
                                </div>
                                <div class="modal-footer">
                                    <button type="button" class="btn btn-default" onclick="javascript:closeAddUrlGroupModel();">关闭</button>
                                    <button type="button" class="btn btn-primary" onclick="javascript:subAddUrlGroupModel();">提交</button>
                                </div>
                                </form>
                            </div><!-- /.modal-content -->
                        </div><!-- /.modal -->
                    </div>
                    
                    <!-- 意见反馈管理 模态框（Modal） -->
                    <div class="modal fade" id="feedbackModal" role="dialog" aria-labelledby="feedbackLabel" aria-hidden="true">
                        <div class="modal-dialog">
                            <div class="modal-content myfont">
                                <div class="modal-header">
                                    <button type="button" class="close" data-dismiss="modal" aria-hidden="true">×</button>
                                    <a href="https://shouku123.com/"><img src="../assets/nav_files/shouku123_logo.png"></a>
                                </div>
                                <div class="modal-body">
                                    <p><strong>使用问题、意见反馈 </strong></p>
                                    <p>您可以通过以下方式联系我们 ： </p>
                                    <p>邮箱：lee@ziry.me</p>
                                    <!-- <p style="padding-top: 10px;"><strong>此网站是非盈利性网站，欢迎捐赠(用于网站维护及服务器续费)</strong></p> -->
                                    <div class="row">
                                      <div class="col-md-6"><img alt="微信交流群" src="../assets/nav_files/wxqun.jpg" width="250" height="300"></div>
                                      <!-- <div class="col-md-6"><img alt="微信支付" src="/res/img/wxpay.jpg" width="250" height="300"></div> -->
                                    </div>
                                </div>
                                <div class="modal-footer">
                                    <button type="button" class="btn btn-default" data-dismiss="modal">关闭</button>
                                </div>
                            </div><!-- /.modal-content -->
                        </div><!-- /.modal -->
                    </div>
                    
                    <!-- 置顶 -->
                    
                    
                     
                    
                    
                    <!-- 置顶 -->
                    <div class="container top-div">
                        <div class="text-center">
                            <p style="margin-top: 8px;margin-bottom: 6px;font-size:16px;" class="myfont myfontColor user-settings">xi1zi</p>
                            <p class="myfont myfontColor myTextOverflow user-settings" style="margin-bottom: 5px;">周广恩的私人导航</p>
                        </div>
                        <div class="row">
                            <div class="col-lg-8 col-lg-offset-2 col-md-10 col-md-offset-1 col-sm-12">
                                <ul id="myTab" class="nav nav-tabs my-nav-tabs" style="border-bottom:0px;">
                                   
                                           <li class="">
                                               <a href="https://shouku123.com/xizi#baidu_so" data-toggle="tab" data-soid="1" aria-expanded="false">百度搜索</a>
                                           </li>
                                   
                                           <li class="">
                                               <a href="https://shouku123.com/xizi#bing_so" data-toggle="tab" data-soid="5" aria-expanded="false">必应搜索</a>
                                           </li>
                                   
                                           <li class="hidden-xs">
                                               <a href="https://shouku123.com/xizi#google_so" data-toggle="tab" data-soid="3" aria-expanded="false">谷歌搜索</a>
                                           </li>
                                   
                                           <li class="hidden-xs">
                                               <a href="https://shouku123.com/xizi#zhihu_so" data-toggle="tab" data-soid="21" aria-expanded="false">知乎</a>
                                           </li>
                                   
                                           <li class="hidden-xs active">
                                               <a href="https://shouku123.com/xizi#taobao_gouwu_so" data-toggle="tab" data-soid="16" aria-expanded="true">淘宝</a>
                                           </li>
                                   
                                           <li class="hidden-xs">
                                               <a href="https://shouku123.com/xizi#weibo_so" data-toggle="tab" data-soid="32" aria-expanded="false">微博</a>
                                           </li>
                                   
                                   
                                       <li class="dropdown">
                                          <a href="https://shouku123.com/xizi#" id="other_so" class="dropdown-toggle" data-toggle="dropdown" aria-expanded="false"><span>其他 </span><b class="caret"></b>
                                          </a>
                                          <ul class="dropdown-menu" role="menu" aria-labelledby="other_so" id="other_so_menu">
                                               
                                                       <li class="visible-xs">
                                                           <a href="https://shouku123.com/xizi#google_so" data-toggle="tab" data-soid="3">谷歌搜索</a>
                                                       </li>
                                             
                                                       <li class="visible-xs">
                                                           <a href="https://shouku123.com/xizi#zhihu_so" data-toggle="tab" data-soid="21">知乎</a>
                                                       </li>
                                             
                                                       <li class="visible-xs">
                                                           <a href="https://shouku123.com/xizi#taobao_gouwu_so" data-toggle="tab" data-soid="16">淘宝</a>
                                                       </li>
                                             
                                                       <li class="visible-xs">
                                                           <a href="https://shouku123.com/xizi#weibo_so" data-toggle="tab" data-soid="32">微博</a>
                                                       </li>
                                             
                                                       <li class="">
                                                           <a href="https://shouku123.com/xizi#sogou_so" data-toggle="tab" data-soid="4">搜狗搜索</a>
                                                       </li>
                                             
                                                       <li class="">
                                                           <a href="https://shouku123.com/xizi#panc_so" data-toggle="tab" data-soid="22">胖次搜索</a>
                                                       </li>
                                             
                                                       <li class="">
                                                           <a href="https://shouku123.com/xizi#baidu_map_so" data-toggle="tab" data-soid="7">百度地图</a>
                                                       </li>
                                             
                                                       <li class="">
                                                           <a href="https://shouku123.com/xizi#baidu_fanyi_so" data-toggle="tab" data-soid="33">百度翻译</a>
                                                       </li>
                                             
                                                       <li class="">
                                                           <a href="https://shouku123.com/xizi#google_fanyi_so" data-toggle="tab" data-soid="34">谷歌翻译</a>
                                                       </li>
                                             
                                                       <li class="">
                                                           <a href="https://shouku123.com/xizi#github_so" data-toggle="tab" data-soid="25">github</a>
                                                       </li>
                                             
                                          </ul>
                                       </li>
                                                  
                                </ul>
                                
                                <div id="soTabContent" class="tab-content">
                                    <form action="https://shouku123.com/xizi/gotoSo.do" method="post" target="_blank">
                                        <div class="input-group">
                                          <input type="text" class="form-control input-lg" name="word" placeholder="立即搜索" baidusug="1" id="bdSug_ipt1540737822522" autocomplete="off">
                                          <span class="input-group-btn">
                                            <button class="btn btn-primary btn-lg" type="submit" style="line-height: 1.34;">搜一下</button>
                                          </span>
                                        </div>
                                        <input type="hidden" name="soid" id="hide_so_id" value="16">
                                    </form>
                                    
                                       <div class="tab-pane fade" id="baidu_so">
                                            <p class="text-muted so-remark user-settings">
                                                <span class="so-remark-content" style="display: none;"></span>
                                            </p>
                                       </div>
                                    
                                       <div class="tab-pane fade" id="bing_so">
                                            <p class="text-muted so-remark user-settings">
                                                <span class="so-remark-content" style="display: none;"></span>
                                            </p>
                                       </div>
                                    
                                       <div class="tab-pane fade" id="google_so">
                                            <p class="text-muted so-remark user-settings">
                                                <span class="so-remark-content" style="display: none;">提示：谷歌搜索需要自行翻墙，推荐“Lantern（蓝灯）”</span>
                                            </p>
                                       </div>
                                    
                                       <div class="tab-pane fade" id="zhihu_so">
                                            <p class="text-muted so-remark user-settings">
                                                <span class="so-remark-content" style="display: none;"></span>
                                            </p>
                                       </div>
                                    
                                       <div class="tab-pane fade active in" id="taobao_gouwu_so">
                                            <p class="text-muted so-remark user-settings">
                                                <span class="so-remark-content" style="display: none;"></span>
                                            </p>
                                       </div>
                                    
                                       <div class="tab-pane fade" id="weibo_so">
                                            <p class="text-muted so-remark user-settings">
                                                <span class="so-remark-content" style="display: none;"></span>
                                            </p>
                                       </div>
                                    
                                       <div class="tab-pane fade " id="sogou_so">
                                            <p class="text-muted so-remark user-settings">
                                                <span class="so-remark-content" style="display: none;"></span>
                                            </p>
                                       </div>
                                    
                                       <div class="tab-pane fade " id="panc_so">
                                            <p class="text-muted so-remark user-settings">
                                                <span class="so-remark-content" style="display: none;"></span>
                                            </p>
                                       </div>
                                    
                                       <div class="tab-pane fade " id="baidu_map_so">
                                            <p class="text-muted so-remark user-settings">
                                                <span class="so-remark-content" style="display: none;"></span>
                                            </p>
                                       </div>
                                    
                                       <div class="tab-pane fade " id="baidu_fanyi_so">
                                            <p class="text-muted so-remark user-settings">
                                                <span class="so-remark-content" style="display: none;"></span>
                                            </p>
                                       </div>
                                    
                                       <div class="tab-pane fade " id="google_fanyi_so">
                                            <p class="text-muted so-remark user-settings">
                                                <span class="so-remark-content" style="display: none;"></span>
                                            </p>
                                       </div>
                                    
                                       <div class="tab-pane fade " id="github_so">
                                            <p class="text-muted so-remark user-settings">
                                                <span class="so-remark-content" style="display: none;"></span>
                                            </p>
                                       </div>
                                    
                                </div>
                                
                              </div><!-- /.col-lg-6 -->
                        </div><!-- /.row -->
                    
                    
                    <div class="row" style="text-align: center;margin-bottom: 8px;">
                            <div class="col-xs-3 col-sm-2 col-md-1 col-md-offset-1">
                                <div class="myTextOverflow">
                                
                                    
                                        <a href="https://shouku123.com/pub/gotoUrl.do?id=7558" title="B站" target="_blank">
                                        <button type="button" class="myBgColor1 my-top-btn">B</button><br>
                                        <span class="myFontSize12">B站</span>
                                        </a>
                                    
                                    
                                
                                </div>
                            </div>
                            <div class="col-xs-3 col-sm-2 col-md-1">
                                <div class="myTextOverflow">
                                
                                    
                                        <a href="https://shouku123.com/pub/gotoUrl.do?id=4853" title="壁纸大全" target="_blank">
                                        <button type="button" class="myBgColor2 my-top-btn">壁</button><br>
                                        <span class="myFontSize12">壁纸大全</span>
                                        </a>
                                    
                                    
                                
                                </div>
                            </div>
                            <div class="col-xs-3 col-sm-2 col-md-1">
                                <div class="myTextOverflow">
                                
                                    
                                        <a href="https://shouku123.com/pub/gotoUrl.do?id=4851" title="优质知乎" target="_blank">
                                        <button type="button" class="myBgColor3 my-top-btn">优</button><br>
                                        <span class="myFontSize12 ">优质知乎</span>
                                        </a>
                                    
                                    
                                
                                </div>
                            </div>
                            <div class="col-xs-3 col-sm-2 col-md-1">
                                <div class="myTextOverflow">
                                
                                    
                                        <a href="https://shouku123.com/pub/gotoUrl.do?id=4850" title="自制索引" target="_blank">
                                        <button type="button" class="myBgColor4 my-top-btn">自</button><br>
                                        <span class="myFontSize12 ">自制索引</span>
                                        </a>
                                    
                                    
                                
                                </div>
                            </div>
                            <div class="col-xs-3 col-sm-2 col-md-1">
                                <div class="myTextOverflow">
                                
                                    
                                        <a href="https://shouku123.com/pub/gotoUrl.do?id=4891" title="小森林导航" target="_blank">
                                        <button type="button" class="myBgColor5 my-top-btn">小</button><br>
                                        <span class="myFontSize12 ">小森林导航</span>
                                        </a>
                                    
                                    
                                
                                </div>
                            </div>
                            <div class="col-xs-3 col-sm-2 col-md-1">
                                <div class="myTextOverflow">
                                
                                    
                                        <a href="https://shouku123.com/pub/gotoUrl.do?id=9329" title="少数派" target="_blank">
                                        <button type="button" class="myBgColor6 my-top-btn">少</button><br>
                                        <span class="myFontSize12 ">少数派</span>
                                        </a>
                                    
                                    
                                
                                </div>
                            </div>
                    
                            <div class="col-xs-3 col-sm-2 col-md-1">
                                <div class="myTextOverflow">
                                
                                    
                                        <a href="https://shouku123.com/pub/gotoUrl.do?id=7557" title="A站" target="_blank">
                                        <button type="button" class="myBgColor7 my-top-btn">A</button><br>
                                        <span class="myFontSize12 ">A站</span>
                                        </a>
                                    
                                    
                                
                                </div>
                            </div>
                            
                            <div class="col-xs-3 col-sm-2 col-md-1">
                                <div class="myTextOverflow">
                                
                                    
                                        <a href="https://shouku123.com/pub/gotoUrl.do?id=9576" title="网剧" target="_blank">
                                        <button type="button" class="myBgColor8 my-top-btn">网</button><br>
                                        <span class="myFontSize12 ">网剧</span>
                                        </a>
                                    
                                    
                                
                                </div>
                            </div>
                            <div class="hidden-xs col-sm-2 col-md-1 ">
                                <div class="myTextOverflow">
                                
                                    
                                        <a href="https://shouku123.com/pub/gotoUrl.do?id=4863" title="IT之家" target="_blank">
                                        <button type="button" class="myBgColor9 my-top-btn">I</button><br>
                                        <span class="myFontSize12 ">IT之家</span>
                                        </a>
                                    
                                    
                                
                                </div>
                            </div>
                            <div class="hidden-xs col-sm-2 col-md-1 ">
                                <div class="myTextOverflow">
                                
                                    
                                        <a href="https://shouku123.com/pub/gotoUrl.do?id=4864" title="全网VIP免费看" target="_blank">
                                        <button type="button" class="myBgColor10 my-top-btn">全</button><br>
                                        <span class="myFontSize12 ">全网VIP免费看</span>
                                        </a>
                                    
                                    
                                
                                </div>
                            </div>
                            <div class="col-xs-3 col-sm-2 visible-sm col-md-1 ">
                                <div class="myTextOverflow">
                                
                                    
                                        <a href="https://shouku123.com/pub/gotoUrl.do?id=4892" title="AnywhereAnything" target="_blank">
                                        <button type="button" class="myBgColor11 my-top-btn">A</button><br>
                                        <span class="myFontSize12 ">AnywhereAnything</span>
                                        </a>
                                    
                                    
                                
                                </div>
                            </div>
                            <div class="col-xs-3 col-sm-2 visible-sm col-md-1 ">
                                <div class="myTextOverflow">
                                
                                    
                                        <a href="https://shouku123.com/pub/gotoUrl.do?id=4854" title="读知乎" target="_blank">
                                        <button type="button" class="myBgColor12 my-top-btn">读</button><br>
                                        <span class="myFontSize12 ">读知乎</span>
                                        </a>
                                    
                                    
                                
                                </div>
                            </div>
                        </div>
                    
                    
                    </div>
                    
                    
                    <!-- URL分组 -->
                    <div class="container url-group">
                    
                    <!--  应用列表 -->
                    
                    
                    
                     
                    
                    <!-- 应用列表 -->
                    <ol class="my-breadcrumb clearfix my-app-nav">
                        
                             
                            
                                <li class="active">默认</li>
                             
                                 
                        
                        
                      
                          
                             
                            
                                <li class="app-item">
                                      <a href="https://shouku123.com/xizi/%E5%85%B6%E4%BB%96">其他</a>
                                  </li>
                                 
                        
                      
                          
                             
                            
                                <li class="app-item">
                                      <a href="https://shouku123.com/xizi/B%E7%AB%99">B站</a>
                                  </li>
                                 
                        
                      
                      
                      <li class="so-item hidden-xs">
                            <div style="position:relative;">
                          <input type="text" class="url-so form-control" placeholder="搜索本页网址" onkeyup="javascript:pageSo(this);">
                          <span class="glyphicon glyphicon-search so-input-logo"></span>
                          </div>
                      </li>
                    </ol>
                    
                    <!-- Modal -->
                    <div class="modal fade myfont" id="user-app-modal">
                      <div class="modal-dialog" role="document">
                        <div class="modal-content">
                          <div class="modal-header">
                            <button type="button" class="close" data-dismiss="modal" aria-label="Close"><span aria-hidden="true">×</span></button>
                            <h4 class="modal-title" id="myModalLabel"><strong>设置版块</strong></h4>
                          </div>
                          <div class="modal-body">
                            <form id="appForm" name="appForm">
                              <div class="form-group">
                                <label for="appName">版块名称</label>
                                <input type="hidden" name="id" id="appId">
                                <input type="text" class="form-control" id="appName" name="appName" placeholder="请输入版块名称（最多6位）" maxlength="6" onkeyup="value=value.replace(/[^\w\u4E00-\u9FA5]/g,&#39;&#39;)">
                              </div>
                              <div class="form-group">
                                <label for="appItem">排序<small>(按数值升序)</small></label>
                                <input type="number" class="form-control" id="appItem" name="appItem" min="1" max="999999" placeholder="请输入排序值" maxlength="6" value="3">
                              </div>
                              <div class="form-group">
                                  <label for="exampleInputPassword1">是否使用密码<small>(在非登录状态下)</small></label>
                                  <div style="margin-bottom: 5px;">
                                    <label class="radio-inline">
                                      <input type="radio" name="isUsePwd" id="isUsePwd0" value="0" class="is-use-pwd-radio" checked="checked"> 不使用
                                    </label>
                                    <label class="radio-inline">
                                      <input type="radio" name="isUsePwd" id="isUsePwd1" value="1" class="is-use-pwd-radio"> 使用收藏口令
                                    </label>
                                    <label class="radio-inline">
                                      <input type="radio" name="isUsePwd" id="isUsePwd2" value="2" class="is-use-pwd-radio"> 设置新密码
                                    </label>
                                </div>
                                <input type="password" class="form-control" id="appPwd" name="appPwd" placeholder="请设置此版块密码" maxlength="32" style="display: none;">
                              </div>
                              
                                  <div class="form-group">
                                    <label for="app_pin">收藏口令<small>(免登录操作口令)</small>:</label>
                                    <input type="password" class="form-control" id="app_pin" name="pin" placeholder="请输入收藏口令" maxlength="6">
                                  </div>
                              
                              <div class="alert alert-danger" style="display: none;" role="alert" id="alterAppFormMsg"></div>
                            </form>
                          </div>
                          <div class="modal-footer">
                            <button type="button" class="btn btn-default" data-dismiss="modal">关闭</button>
                            <button type="button" class="btn btn-primary" onclick="subAppFormModel();">保存</button>
                          </div>
                        </div>
                      </div>
                    </div>
                    
                    
                        
                        
                          <div class="row">
                              <div class="col-md-3 groupCol">
                                  <ul id="urlGroups" class="list-unstyled urlGroups" style="width: 100%;">
                                      
                                          
                                          <li class="urlGroupItem" id="urlGroupItem_10120">
                                              <div class="panel panel-default">
                                              <div class="panel-heading">
                                                  <div class="pull-left myfont">简洁主页</div>
                                                  <div class="pull-right">
                                                      <span class="glyphicon glyphicon-share-alt my-glyphicon-btn" onclick="javascript:window.location.href=&#39;/pub/group/10120&#39;;" title="分享"></span>
                                                      <span class="glyphicon glyphicon-leftOrdown glyphicon-chevron-down my-glyphicon-btn" onclick="javascript:updateCollapse(&#39;10120&#39;,this);" title="折叠"></span>
                                                  </div>
                                                <div class="clearfix"></div>
                                              </div>
                                              <!-- List group -->
                                              <ul class="list-group collapse in urls " id="urls_10120" title="简洁主页">
                                                  
                                                  
                                                <li class="list-group-item" title="热度:1506" data-id="4891">
                                                    <div class="pull-left url-title url-title-width">
                                                        
                                                        <a href="https://shouku123.com/pub/gotoUrl.do?id=4891" target="_blank" title="小森林导航">小森林导航</a>
                                                    </div>
                                                    <div class="pull-right">
                                                        
                                                        <span class="glyphicon glyphicon-qrcode myButtonColor" title="点击查看二维码" style="cursor:pointer; 
                                                                    margin-left: 4px;" onclick="javascript:qrShow(&#39;小森林导航&#39;,&#39;http://hao.xsldh.com/&#39;,&#39;pub/encoderQRCode2GotoURL.do?id=4891&#39;);"></span>
                                                      </div>
                                                      <div class="clearfix"></div>
                                                </li>
                                                
                                                <li class="list-group-item" title="热度:685" data-id="4892">
                                                    <div class="pull-left url-title url-title-width">
                                                        
                                                        <a href="https://shouku123.com/pub/gotoUrl.do?id=4892" target="_blank" title="AnywhereAnything">AnywhereAnything</a>
                                                    </div>
                                                    <div class="pull-right">
                                                        
                                                        <span class="glyphicon glyphicon-qrcode myButtonColor" title="点击查看二维码" style="cursor:pointer; 
                                                                    margin-left: 4px;" onclick="javascript:qrShow(&#39;AnywhereAnything&#39;,&#39;http://lackar.com/aa/&#39;,&#39;pub/encoderQRCode2GotoURL.do?id=4892&#39;);"></span>
                                                      </div>
                                                      <div class="clearfix"></div>
                                                </li>
                                                
                                                <li class="list-group-item" title="热度:77" data-id="83998">
                                                    <div class="pull-left url-title url-title-width">
                                                        
                                                        <a href="https://shouku123.com/pub/gotoUrl.do?id=83998" target="_blank" title="GY导航">GY导航</a>
                                                    </div>
                                                    <div class="pull-right">
                                                        
                                                        <span class="glyphicon glyphicon-qrcode myButtonColor" title="点击查看二维码" style="cursor:pointer; 
                                                                    margin-left: 4px;" onclick="javascript:qrShow(&#39;GY导航&#39;,&#39;http://nav.ailuoku6.top/&#39;,&#39;pub/encoderQRCode2GotoURL.do?id=83998&#39;);"></span>
                                                      </div>
                                                      <div class="clearfix"></div>
                                                </li>
                                                
                                                <li class="list-group-item" title="热度:49" data-id="83999">
                                                    <div class="pull-left url-title url-title-width">
                                                        
                                                        <a href="https://shouku123.com/pub/gotoUrl.do?id=83999" target="_blank" title="千山">千山</a>
                                                    </div>
                                                    <div class="pull-right">
                                                        
                                                        <span class="glyphicon glyphicon-qrcode myButtonColor" title="点击查看二维码" style="cursor:pointer; 
                                                                    margin-left: 4px;" onclick="javascript:qrShow(&#39;千山&#39;,&#39;http://qianshan.co/&#39;,&#39;pub/encoderQRCode2GotoURL.do?id=83999&#39;);"></span>
                                                      </div>
                                                      <div class="clearfix"></div>
                                                </li>
                                                
                                                <li class="list-group-item" title="热度:51" data-id="84000">
                                                    <div class="pull-left url-title url-title-width">
                                                        
                                                        <a href="https://shouku123.com/pub/gotoUrl.do?id=84000" target="_blank" title="安逸导航">安逸导航</a>
                                                    </div>
                                                    <div class="pull-right">
                                                        
                                                        <span class="glyphicon glyphicon-qrcode myButtonColor" title="点击查看二维码" style="cursor:pointer; 
                                                                    margin-left: 4px;" onclick="javascript:qrShow(&#39;安逸导航&#39;,&#39;https://anyi.life/&#39;,&#39;pub/encoderQRCode2GotoURL.do?id=84000&#39;);"></span>
                                                      </div>
                                                      <div class="clearfix"></div>
                                                </li>
                                                
                                                <li class="list-group-item" title="热度:12" data-id="89964">
                                                    <div class="pull-left url-title url-title-width">
                                                        
                                                        <a href="https://shouku123.com/pub/gotoUrl.do?id=89964" target="_blank" title="奇客数码导航">奇客数码导航</a>
                                                    </div>
                                                    <div class="pull-right">
                                                        
                                                        <span class="glyphicon glyphicon-qrcode myButtonColor" title="点击查看二维码" style="cursor:pointer; 
                                                                    margin-left: 4px;" onclick="javascript:qrShow(&#39;奇客数码导航&#39;,&#39;https://nav.qikepai.cn/&#39;,&#39;pub/encoderQRCode2GotoURL.do?id=89964&#39;);"></span>
                                                      </div>
                                                      <div class="clearfix"></div>
                                                </li>
                                                
                                                <li class="list-group-item" title="热度:19" data-id="89965">
                                                    <div class="pull-left url-title url-title-width">
                                                        
                                                        <a href="https://shouku123.com/pub/gotoUrl.do?id=89965" target="_blank" title="比格一下">比格一下</a>
                                                    </div>
                                                    <div class="pull-right">
                                                        
                                                        <span class="glyphicon glyphicon-qrcode myButtonColor" title="点击查看二维码" style="cursor:pointer; 
                                                                    margin-left: 4px;" onclick="javascript:qrShow(&#39;比格一下&#39;,&#39;https://t.bigezhang.com/home&#39;,&#39;pub/encoderQRCode2GotoURL.do?id=89965&#39;);"></span>
                                                      </div>
                                                      <div class="clearfix"></div>
                                                </li>
                                                
                                                <li class="list-group-item" title="热度:14" data-id="89968">
                                                    <div class="pull-left url-title url-title-width">
                                                        
                                                        <a href="https://shouku123.com/pub/gotoUrl.do?id=89968" target="_blank" title="万花筒">万花筒</a>
                                                    </div>
                                                    <div class="pull-right">
                                                        
                                                        <span class="glyphicon glyphicon-qrcode myButtonColor" title="点击查看二维码" style="cursor:pointer; 
                                                                    margin-left: 4px;" onclick="javascript:qrShow(&#39;万花筒&#39;,&#39;https://wht.im/&#39;,&#39;pub/encoderQRCode2GotoURL.do?id=89968&#39;);"></span>
                                                      </div>
                                                      <div class="clearfix"></div>
                                                </li>
                                                
                                                <li class="list-group-item" title="热度:17" data-id="89755">
                                                    <div class="pull-left url-title url-title-width">
                                                        
                                                        <a href="https://shouku123.com/pub/gotoUrl.do?id=89755" target="_blank" title="Here">Here</a>
                                                    </div>
                                                    <div class="pull-right">
                                                        
                                                        <span class="glyphicon glyphicon-qrcode myButtonColor" title="点击查看二维码" style="cursor:pointer; 
                                                                    margin-left: 4px;" onclick="javascript:qrShow(&#39;Here&#39;,&#39;http://www.here.wiki/&#39;,&#39;pub/encoderQRCode2GotoURL.do?id=89755&#39;);"></span>
                                                      </div>
                                                      <div class="clearfix"></div>
                                                </li>
                                                
                                                <li class="list-group-item" title="热度:177" data-id="75223">
                                                    <div class="pull-left url-title url-title-width">
                                                        
                                                        <a href="https://shouku123.com/pub/gotoUrl.do?id=75223" target="_blank" title="KIM主页">KIM主页</a>
                                                    </div>
                                                    <div class="pull-right">
                                                        
                                                        <span class="glyphicon glyphicon-qrcode myButtonColor" title="点击查看二维码" style="cursor:pointer; 
                                                                    margin-left: 4px;" onclick="javascript:qrShow(&#39;KIM主页&#39;,&#39;https://www.zhuye.kim/&#39;,&#39;pub/encoderQRCode2GotoURL.do?id=75223&#39;);"></span>
                                                      </div>
                                                      <div class="clearfix"></div>
                                                </li>
                                                
                                                <li class="list-group-item" title="热度:98" data-id="75224">
                                                    <div class="pull-left url-title url-title-width">
                                                        
                                                        <a href="https://shouku123.com/pub/gotoUrl.do?id=75224" target="_blank" title="云有你">云有你</a>
                                                    </div>
                                                    <div class="pull-right">
                                                        
                                                        <span class="glyphicon glyphicon-qrcode myButtonColor" title="点击查看二维码" style="cursor:pointer; 
                                                                    margin-left: 4px;" onclick="javascript:qrShow(&#39;云有你&#39;,&#39;http://www.yunyouni.com/&#39;,&#39;pub/encoderQRCode2GotoURL.do?id=75224&#39;);"></span>
                                                      </div>
                                                      <div class="clearfix"></div>
                                                </li>
                                                
                                                <li class="list-group-item" title="热度:115" data-id="75225">
                                                    <div class="pull-left url-title url-title-width">
                                                        
                                                        <a href="https://shouku123.com/pub/gotoUrl.do?id=75225" target="_blank" title="效率集">效率集</a>
                                                    </div>
                                                    <div class="pull-right">
                                                        
                                                        <span class="glyphicon glyphicon-qrcode myButtonColor" title="点击查看二维码" style="cursor:pointer; 
                                                                    margin-left: 4px;" onclick="javascript:qrShow(&#39;效率集&#39;,&#39;http://www.xiaolvji.com/&#39;,&#39;pub/encoderQRCode2GotoURL.do?id=75225&#39;);"></span>
                                                      </div>
                                                      <div class="clearfix"></div>
                                                </li>
                                                
                                                <li class="list-group-item" title="热度:532" data-id="53108">
                                                    <div class="pull-left url-title url-title-width">
                                                        
                                                        <a href="https://shouku123.com/pub/gotoUrl.do?id=53108" target="_blank" title="早午晚好">早午晚好</a>
                                                    </div>
                                                    <div class="pull-right">
                                                        
                                                        <span class="glyphicon glyphicon-qrcode myButtonColor" title="点击查看二维码" style="cursor:pointer; 
                                                                    margin-left: 4px;" onclick="javascript:qrShow(&#39;早午晚好&#39;,&#39;http://leftshine.gitee.io/viaindex/via-ningjing-3.5/index.html&#39;,&#39;pub/encoderQRCode2GotoURL.do?id=53108&#39;);"></span>
                                                      </div>
                                                      <div class="clearfix"></div>
                                                </li>
                                                
                                                <li class="list-group-item" title="热度:401" data-id="53106">
                                                    <div class="pull-left url-title url-title-width">
                                                        
                                                        <a href="https://shouku123.com/pub/gotoUrl.do?id=53106" target="_blank" title="主页搜索">主页搜索</a>
                                                    </div>
                                                    <div class="pull-right">
                                                        
                                                        <span class="glyphicon glyphicon-qrcode myButtonColor" title="点击查看二维码" style="cursor:pointer; 
                                                                    margin-left: 4px;" onclick="javascript:qrShow(&#39;主页搜索&#39;,&#39;http://leftshine.gitee.io/viaindex/defaultpage/index.html&#39;,&#39;pub/encoderQRCode2GotoURL.do?id=53106&#39;);"></span>
                                                      </div>
                                                      <div class="clearfix"></div>
                                                </li>
                                                
                                                <li class="list-group-item" title="热度:381" data-id="53107">
                                                    <div class="pull-left url-title url-title-width">
                                                        
                                                        <a href="https://shouku123.com/pub/gotoUrl.do?id=53107" target="_blank" title="infinity">infinity</a>
                                                    </div>
                                                    <div class="pull-right">
                                                        
                                                        <span class="glyphicon glyphicon-qrcode myButtonColor" title="点击查看二维码" style="cursor:pointer; 
                                                                    margin-left: 4px;" onclick="javascript:qrShow(&#39;infinity&#39;,&#39;https://m.infinitynewtab.com/&#39;,&#39;pub/encoderQRCode2GotoURL.do?id=53107&#39;);"></span>
                                                      </div>
                                                      <div class="clearfix"></div>
                                                </li>
                                                
                                              </ul>
                                            </div>
                                          </li>
                                          
                                      
                                          
                                      
                                          
                                      
                                          
                                      
                                          
                                      
                                          
                                      
                                          
                                      
                                  </ul>
                              </div>
                              <div class="col-md-3 groupCol">
                                      <ul id="urlGroups" class="list-unstyled urlGroups" style="width: 100%;">
                                      
                                          
                                      
                                          
                                          <li class="urlGroupItem" id="urlGroupItem_955">
                                              <div class="panel panel-default">
                                              <div class="panel-heading">
                                                  <div class="pull-left myfont">社区</div>
                                                  <div class="pull-right">
                                                      <span class="glyphicon glyphicon-share-alt my-glyphicon-btn" onclick="javascript:window.location.href=&#39;/pub/group/955&#39;;" title="分享"></span>
                                                      <span class="glyphicon glyphicon-leftOrdown glyphicon-chevron-down my-glyphicon-btn" onclick="javascript:updateCollapse(&#39;955&#39;,this);" title="折叠"></span>
                                                  </div>
                                                <div class="clearfix"></div>
                                              </div>
                                              <!-- List group -->
                                              <ul class="list-group collapse in urls " id="urls_955" title="社区">
                                                  
                                                  
                                                <li class="list-group-item" title="热度:1271" data-id="9329">
                                                    <div class="pull-left url-title url-title-width">
                                                        
                                                        <a href="https://shouku123.com/pub/gotoUrl.do?id=9329" target="_blank" title="少数派">少数派</a>
                                                    </div>
                                                    <div class="pull-right">
                                                        
                                                        <span class="glyphicon glyphicon-qrcode myButtonColor" title="点击查看二维码" style="cursor:pointer; 
                                                                    margin-left: 4px;" onclick="javascript:qrShow(&#39;少数派&#39;,&#39;https://sspai.com/&#39;,&#39;pub/encoderQRCode2GotoURL.do?id=9329&#39;);"></span>
                                                      </div>
                                                      <div class="clearfix"></div>
                                                </li>
                                                
                                                <li class="list-group-item" title="热度:444" data-id="9335">
                                                    <div class="pull-left url-title url-title-width">
                                                        
                                                        <a href="https://shouku123.com/pub/gotoUrl.do?id=9335" target="_blank" title="V2EX">V2EX</a>
                                                    </div>
                                                    <div class="pull-right">
                                                        
                                                        <span class="glyphicon glyphicon-qrcode myButtonColor" title="点击查看二维码" style="cursor:pointer; 
                                                                    margin-left: 4px;" onclick="javascript:qrShow(&#39;V2EX&#39;,&#39;https://www.v2ex.com/&#39;,&#39;pub/encoderQRCode2GotoURL.do?id=9335&#39;);"></span>
                                                      </div>
                                                      <div class="clearfix"></div>
                                                </li>
                                                
                                                <li class="list-group-item" title="热度:341" data-id="40905">
                                                    <div class="pull-left url-title url-title-width">
                                                        
                                                        <a href="https://shouku123.com/pub/gotoUrl.do?id=40905" target="_blank" title="Topbook">Topbook</a>
                                                    </div>
                                                    <div class="pull-right">
                                                        
                                                        <span class="glyphicon glyphicon-qrcode myButtonColor" title="点击查看二维码" style="cursor:pointer; 
                                                                    margin-left: 4px;" onclick="javascript:qrShow(&#39;Topbook&#39;,&#39;http://topbook.cc/&#39;,&#39;pub/encoderQRCode2GotoURL.do?id=40905&#39;);"></span>
                                                      </div>
                                                      <div class="clearfix"></div>
                                                </li>
                                                
                                                <li class="list-group-item" title="热度:263" data-id="9428">
                                                    <div class="pull-left url-title url-title-width">
                                                        
                                                        <a href="https://shouku123.com/pub/gotoUrl.do?id=9428" target="_blank" title="贴吧">贴吧</a>
                                                    </div>
                                                    <div class="pull-right">
                                                        
                                                        <span class="glyphicon glyphicon-qrcode myButtonColor" title="点击查看二维码" style="cursor:pointer; 
                                                                    margin-left: 4px;" onclick="javascript:qrShow(&#39;贴吧&#39;,&#39;https://tieba.baidu.com/&#39;,&#39;pub/encoderQRCode2GotoURL.do?id=9428&#39;);"></span>
                                                      </div>
                                                      <div class="clearfix"></div>
                                                </li>
                                                
                                                <li class="list-group-item" title="热度:446" data-id="9431">
                                                    <div class="pull-left url-title url-title-width">
                                                        
                                                        <a href="https://shouku123.com/pub/gotoUrl.do?id=9431" target="_blank" title="煎蛋">煎蛋</a>
                                                    </div>
                                                    <div class="pull-right">
                                                        
                                                        <span class="glyphicon glyphicon-qrcode myButtonColor" title="点击查看二维码" style="cursor:pointer; 
                                                                    margin-left: 4px;" onclick="javascript:qrShow(&#39;煎蛋&#39;,&#39;https://jandan.net/&#39;,&#39;pub/encoderQRCode2GotoURL.do?id=9431&#39;);"></span>
                                                      </div>
                                                      <div class="clearfix"></div>
                                                </li>
                                                
                                                <li class="list-group-item" title="热度:358" data-id="4881">
                                                    <div class="pull-left url-title url-title-width">
                                                        
                                                        <a href="https://shouku123.com/pub/gotoUrl.do?id=4881" target="_blank" title="U148">U148</a>
                                                    </div>
                                                    <div class="pull-right">
                                                        
                                                        <span class="glyphicon glyphicon-qrcode myButtonColor" title="点击查看二维码" style="cursor:pointer; 
                                                                    margin-left: 4px;" onclick="javascript:qrShow(&#39;U148&#39;,&#39;http://www.u148.net/&#39;,&#39;pub/encoderQRCode2GotoURL.do?id=4881&#39;);"></span>
                                                      </div>
                                                      <div class="clearfix"></div>
                                                </li>
                                                
                                                <li class="list-group-item" title="热度:819" data-id="4863">
                                                    <div class="pull-left url-title url-title-width">
                                                        
                                                        <a href="https://shouku123.com/pub/gotoUrl.do?id=4863" target="_blank" title="IT之家">IT之家</a>
                                                    </div>
                                                    <div class="pull-right">
                                                        
                                                        <span class="glyphicon glyphicon-qrcode myButtonColor" title="点击查看二维码" style="cursor:pointer; 
                                                                    margin-left: 4px;" onclick="javascript:qrShow(&#39;IT之家&#39;,&#39;https://www.ithome.com/&#39;,&#39;pub/encoderQRCode2GotoURL.do?id=4863&#39;);"></span>
                                                      </div>
                                                      <div class="clearfix"></div>
                                                </li>
                                                
                                                <li class="list-group-item" title="热度:343" data-id="4882">
                                                    <div class="pull-left url-title url-title-width">
                                                        
                                                        <a href="https://shouku123.com/pub/gotoUrl.do?id=4882" target="_blank" title="简书">简书</a>
                                                    </div>
                                                    <div class="pull-right">
                                                        
                                                        <span class="glyphicon glyphicon-qrcode myButtonColor" title="点击查看二维码" style="cursor:pointer; 
                                                                    margin-left: 4px;" onclick="javascript:qrShow(&#39;简书&#39;,&#39;http://www.jianshu.com/&#39;,&#39;pub/encoderQRCode2GotoURL.do?id=4882&#39;);"></span>
                                                      </div>
                                                      <div class="clearfix"></div>
                                                </li>
                                                
                                                <li class="list-group-item" title="热度:351" data-id="4884">
                                                    <div class="pull-left url-title url-title-width">
                                                        
                                                        <a href="https://shouku123.com/pub/gotoUrl.do?id=4884" target="_blank" title="收趣">收趣</a>
                                                    </div>
                                                    <div class="pull-right">
                                                        
                                                        <span class="glyphicon glyphicon-qrcode myButtonColor" title="点击查看二维码" style="cursor:pointer; 
                                                                    margin-left: 4px;" onclick="javascript:qrShow(&#39;收趣&#39;,&#39;http://shouqu.me/hot.html&#39;,&#39;pub/encoderQRCode2GotoURL.do?id=4884&#39;);"></span>
                                                      </div>
                                                      <div class="clearfix"></div>
                                                </li>
                                                
                                                <li class="list-group-item" title="热度:245" data-id="4860">
                                                    <div class="pull-left url-title url-title-width">
                                                        
                                                        <a href="https://shouku123.com/pub/gotoUrl.do?id=4860" target="_blank" title="Zealer">Zealer</a>
                                                    </div>
                                                    <div class="pull-right">
                                                        
                                                        <span class="glyphicon glyphicon-qrcode myButtonColor" title="点击查看二维码" style="cursor:pointer; 
                                                                    margin-left: 4px;" onclick="javascript:qrShow(&#39;Zealer&#39;,&#39;http://www.zealer.com/&#39;,&#39;pub/encoderQRCode2GotoURL.do?id=4860&#39;);"></span>
                                                      </div>
                                                      <div class="clearfix"></div>
                                                </li>
                                                
                                                <li class="list-group-item" title="热度:337" data-id="4883">
                                                    <div class="pull-left url-title url-title-width">
                                                        
                                                        <a href="https://shouku123.com/pub/gotoUrl.do?id=4883" target="_blank" title="勺子">勺子</a>
                                                    </div>
                                                    <div class="pull-right">
                                                        
                                                        <span class="glyphicon glyphicon-qrcode myButtonColor" title="点击查看二维码" style="cursor:pointer; 
                                                                    margin-left: 4px;" onclick="javascript:qrShow(&#39;勺子&#39;,&#39;http://shaozi.info/app/explore&#39;,&#39;pub/encoderQRCode2GotoURL.do?id=4883&#39;);"></span>
                                                      </div>
                                                      <div class="clearfix"></div>
                                                </li>
                                                
                                              </ul>
                                            </div>
                                          </li>
                                          
                                      
                                          
                                      
                                          
                                      
                                          
                                          <li class="urlGroupItem" id="urlGroupItem_957">
                                              <div class="panel panel-default">
                                              <div class="panel-heading">
                                                  <div class="pull-left myfont">最爱</div>
                                                  <div class="pull-right">
                                                      <span class="glyphicon glyphicon-share-alt my-glyphicon-btn" onclick="javascript:window.location.href=&#39;/pub/group/957&#39;;" title="分享"></span>
                                                      <span class="glyphicon glyphicon-leftOrdown glyphicon-chevron-down my-glyphicon-btn" onclick="javascript:updateCollapse(&#39;957&#39;,this);" title="折叠"></span>
                                                  </div>
                                                <div class="clearfix"></div>
                                              </div>
                                              <!-- List group -->
                                              <ul class="list-group collapse in urls " id="urls_957" title="最爱">
                                                  
                                                  
                                                <li class="list-group-item" title="热度:419" data-id="9336">
                                                    <div class="pull-left url-title url-title-width">
                                                        
                                                        <a href="https://shouku123.com/pub/gotoUrl.do?id=9336" target="_blank" title="导图">导图</a>
                                                    </div>
                                                    <div class="pull-right">
                                                        
                                                        <span class="glyphicon glyphicon-qrcode myButtonColor" title="点击查看二维码" style="cursor:pointer; 
                                                                    margin-left: 4px;" onclick="javascript:qrShow(&#39;导图&#39;,&#39;https://zhimap.com/gallery&#39;,&#39;pub/encoderQRCode2GotoURL.do?id=9336&#39;);"></span>
                                                      </div>
                                                      <div class="clearfix"></div>
                                                </li>
                                                
                                                <li class="list-group-item" title="热度:544" data-id="7556">
                                                    <div class="pull-left url-title url-title-width">
                                                        
                                                        <a href="https://shouku123.com/pub/gotoUrl.do?id=7556" target="_blank" title="音乐">音乐</a>
                                                    </div>
                                                    <div class="pull-right">
                                                        
                                                        <span class="glyphicon glyphicon-qrcode myButtonColor" title="点击查看二维码" style="cursor:pointer; 
                                                                    margin-left: 4px;" onclick="javascript:qrShow(&#39;音乐&#39;,&#39;http://music.163.com/#/user/home?id=42740153&#39;,&#39;pub/encoderQRCode2GotoURL.do?id=7556&#39;);"></span>
                                                      </div>
                                                      <div class="clearfix"></div>
                                                </li>
                                                
                                                <li class="list-group-item" title="热度:1261" data-id="7557">
                                                    <div class="pull-left url-title url-title-width">
                                                        
                                                        <a href="https://shouku123.com/pub/gotoUrl.do?id=7557" target="_blank" title="A站">A站</a>
                                                    </div>
                                                    <div class="pull-right">
                                                        
                                                        <span class="glyphicon glyphicon-qrcode myButtonColor" title="点击查看二维码" style="cursor:pointer; 
                                                                    margin-left: 4px;" onclick="javascript:qrShow(&#39;A站&#39;,&#39;http://www.acfun.cn/rank/&#39;,&#39;pub/encoderQRCode2GotoURL.do?id=7557&#39;);"></span>
                                                      </div>
                                                      <div class="clearfix"></div>
                                                </li>
                                                
                                                <li class="list-group-item" title="热度:3650" data-id="7558">
                                                    <div class="pull-left url-title url-title-width">
                                                        
                                                        <a href="https://shouku123.com/pub/gotoUrl.do?id=7558" target="_blank" title="B站">B站</a>
                                                    </div>
                                                    <div class="pull-right">
                                                        
                                                        <span class="glyphicon glyphicon-qrcode myButtonColor" title="点击查看二维码" style="cursor:pointer; 
                                                                    margin-left: 4px;" onclick="javascript:qrShow(&#39;B站&#39;,&#39;https://www.bilibili.com/ranking&#39;,&#39;pub/encoderQRCode2GotoURL.do?id=7558&#39;);"></span>
                                                      </div>
                                                      <div class="clearfix"></div>
                                                </li>
                                                
                                                <li class="list-group-item" title="热度:444" data-id="10407">
                                                    <div class="pull-left url-title url-title-width">
                                                        
                                                        <a href="https://shouku123.com/pub/gotoUrl.do?id=10407" target="_blank" title="云端">云端</a>
                                                    </div>
                                                    <div class="pull-right">
                                                        
                                                        <span class="glyphicon glyphicon-qrcode myButtonColor" title="点击查看二维码" style="cursor:pointer; 
                                                                    margin-left: 4px;" onclick="javascript:qrShow(&#39;云端&#39;,&#39;https://uzer.me/z/apps&#39;,&#39;pub/encoderQRCode2GotoURL.do?id=10407&#39;);"></span>
                                                      </div>
                                                      <div class="clearfix"></div>
                                                </li>
                                                
                                              </ul>
                                            </div>
                                          </li>
                                          
                                      
                                          
                                      
                                          
                                      
                                  </ul>
                              </div>
                              <div class="col-md-3 groupCol">
                                      <ul id="urlGroups" class="list-unstyled urlGroups" style="width: 100%;">
                                      
                                          
                                      
                                          
                                      
                                          
                                          <li class="urlGroupItem" id="urlGroupItem_950">
                                              <div class="panel panel-default">
                                              <div class="panel-heading">
                                                  <div class="pull-left myfont">影音</div>
                                                  <div class="pull-right">
                                                      <span class="glyphicon glyphicon-share-alt my-glyphicon-btn" onclick="javascript:window.location.href=&#39;/pub/group/950&#39;;" title="分享"></span>
                                                      <span class="glyphicon glyphicon-leftOrdown glyphicon-chevron-down my-glyphicon-btn" onclick="javascript:updateCollapse(&#39;950&#39;,this);" title="折叠"></span>
                                                  </div>
                                                <div class="clearfix"></div>
                                              </div>
                                              <!-- List group -->
                                              <ul class="list-group collapse in urls " id="urls_950" title="影音">
                                                  
                                                  
                                                <li class="list-group-item" title="热度:22" data-id="89379">
                                                    <div class="pull-left url-title url-title-width">
                                                        
                                                        <a href="https://shouku123.com/pub/gotoUrl.do?id=89379" target="_blank" title="疯狂影视搜索">疯狂影视搜索</a>
                                                    </div>
                                                    <div class="pull-right">
                                                        
                                                        <span class="glyphicon glyphicon-qrcode myButtonColor" title="点击查看二维码" style="cursor:pointer; 
                                                                    margin-left: 4px;" onclick="javascript:qrShow(&#39;疯狂影视搜索&#39;,&#39;http://ifkdy.com/&#39;,&#39;pub/encoderQRCode2GotoURL.do?id=89379&#39;);"></span>
                                                      </div>
                                                      <div class="clearfix"></div>
                                                </li>
                                                
                                                <li class="list-group-item" title="热度:1129" data-id="9576">
                                                    <div class="pull-left url-title url-title-width">
                                                        
                                                        <a href="https://shouku123.com/pub/gotoUrl.do?id=9576" target="_blank" title="网剧">网剧</a>
                                                    </div>
                                                    <div class="pull-right">
                                                        
                                                        <span class="glyphicon glyphicon-qrcode myButtonColor" title="点击查看二维码" style="cursor:pointer; 
                                                                    margin-left: 4px;" onclick="javascript:qrShow(&#39;网剧&#39;,&#39;http://www.yue365.com/tv/list/wangluoju/haokan.shtml&#39;,&#39;pub/encoderQRCode2GotoURL.do?id=9576&#39;);"></span>
                                                      </div>
                                                      <div class="clearfix"></div>
                                                </li>
                                                
                                                <li class="list-group-item" title="热度:282" data-id="9332">
                                                    <div class="pull-left url-title url-title-width">
                                                        
                                                        <a href="https://shouku123.com/pub/gotoUrl.do?id=9332" target="_blank" title="电台">电台</a>
                                                    </div>
                                                    <div class="pull-right">
                                                        
                                                        <span class="glyphicon glyphicon-qrcode myButtonColor" title="点击查看二维码" style="cursor:pointer; 
                                                                    margin-left: 4px;" onclick="javascript:qrShow(&#39;电台&#39;,&#39;https://www.zhihu.com/question/35690869&#39;,&#39;pub/encoderQRCode2GotoURL.do?id=9332&#39;);"></span>
                                                      </div>
                                                      <div class="clearfix"></div>
                                                </li>
                                                
                                                <li class="list-group-item" title="热度:190" data-id="52608">
                                                    <div class="pull-left url-title url-title-width">
                                                        
                                                        <a href="https://shouku123.com/pub/gotoUrl.do?id=52608" target="_blank" title="硕鼠">硕鼠</a>
                                                    </div>
                                                    <div class="pull-right">
                                                        
                                                        <span class="glyphicon glyphicon-qrcode myButtonColor" title="点击查看二维码" style="cursor:pointer; 
                                                                    margin-left: 4px;" onclick="javascript:qrShow(&#39;硕鼠&#39;,&#39;http://www.flvcd.com/&#39;,&#39;pub/encoderQRCode2GotoURL.do?id=52608&#39;);"></span>
                                                      </div>
                                                      <div class="clearfix"></div>
                                                </li>
                                                
                                                <li class="list-group-item" title="热度:321" data-id="8661">
                                                    <div class="pull-left url-title url-title-width">
                                                        
                                                        <a href="https://shouku123.com/pub/gotoUrl.do?id=8661" target="_blank" title="TED">TED</a>
                                                    </div>
                                                    <div class="pull-right">
                                                        
                                                        <span class="glyphicon glyphicon-qrcode myButtonColor" title="点击查看二维码" style="cursor:pointer; 
                                                                    margin-left: 4px;" onclick="javascript:qrShow(&#39;TED&#39;,&#39;https://www.zhihu.com/question/36055161/answer/69840703&#39;,&#39;pub/encoderQRCode2GotoURL.do?id=8661&#39;);"></span>
                                                      </div>
                                                      <div class="clearfix"></div>
                                                </li>
                                                
                                                <li class="list-group-item" title="热度:424" data-id="8663">
                                                    <div class="pull-left url-title url-title-width">
                                                        
                                                        <a href="https://shouku123.com/pub/gotoUrl.do?id=8663" target="_blank" title="班得瑞音乐">班得瑞音乐</a>
                                                    </div>
                                                    <div class="pull-right">
                                                        
                                                        <span class="glyphicon glyphicon-qrcode myButtonColor" title="点击查看二维码" style="cursor:pointer; 
                                                                    margin-left: 4px;" onclick="javascript:qrShow(&#39;班得瑞音乐&#39;,&#39;https://www.bandari.net/play&#39;,&#39;pub/encoderQRCode2GotoURL.do?id=8663&#39;);"></span>
                                                      </div>
                                                      <div class="clearfix"></div>
                                                </li>
                                                
                                                <li class="list-group-item" title="热度:233" data-id="11498">
                                                    <div class="pull-left url-title url-title-width">
                                                        
                                                        <a href="https://shouku123.com/pub/gotoUrl.do?id=11498" target="_blank" title="ASMR">ASMR</a>
                                                    </div>
                                                    <div class="pull-right">
                                                        
                                                        <span class="glyphicon glyphicon-qrcode myButtonColor" title="点击查看二维码" style="cursor:pointer; 
                                                                    margin-left: 4px;" onclick="javascript:qrShow(&#39;ASMR&#39;,&#39;http://www.leasmr.com/&#39;,&#39;pub/encoderQRCode2GotoURL.do?id=11498&#39;);"></span>
                                                      </div>
                                                      <div class="clearfix"></div>
                                                </li>
                                                
                                                <li class="list-group-item" title="热度:475" data-id="4857">
                                                    <div class="pull-left url-title url-title-width">
                                                        
                                                        <a href="https://shouku123.com/pub/gotoUrl.do?id=4857" target="_blank" title="短视频">短视频</a>
                                                    </div>
                                                    <div class="pull-right">
                                                        
                                                        <span class="glyphicon glyphicon-qrcode myButtonColor" title="点击查看二维码" style="cursor:pointer; 
                                                                    margin-left: 4px;" onclick="javascript:qrShow(&#39;短视频&#39;,&#39;https://www.zhihu.com/question/24502818/answer/95047973&#39;,&#39;pub/encoderQRCode2GotoURL.do?id=4857&#39;);"></span>
                                                      </div>
                                                      <div class="clearfix"></div>
                                                </li>
                                                
                                                <li class="list-group-item" title="热度:434" data-id="4855">
                                                    <div class="pull-left url-title url-title-width">
                                                        
                                                        <a href="https://shouku123.com/pub/gotoUrl.do?id=4855" target="_blank" title="自制出品">自制出品</a>
                                                    </div>
                                                    <div class="pull-right">
                                                        
                                                        <span class="glyphicon glyphicon-qrcode myButtonColor" title="点击查看二维码" style="cursor:pointer; 
                                                                    margin-left: 4px;" onclick="javascript:qrShow(&#39;自制出品&#39;,&#39;https://www.zhihu.com/question/20604305/answer/95808006&#39;,&#39;pub/encoderQRCode2GotoURL.do?id=4855&#39;);"></span>
                                                      </div>
                                                      <div class="clearfix"></div>
                                                </li>
                                                
                                                <li class="list-group-item" title="热度:442" data-id="4856">
                                                    <div class="pull-left url-title url-title-width">
                                                        
                                                        <a href="https://shouku123.com/pub/gotoUrl.do?id=4856" target="_blank" title="纪录片">纪录片</a>
                                                    </div>
                                                    <div class="pull-right">
                                                        
                                                        <span class="glyphicon glyphicon-qrcode myButtonColor" title="点击查看二维码" style="cursor:pointer; 
                                                                    margin-left: 4px;" onclick="javascript:qrShow(&#39;纪录片&#39;,&#39;https://www.zhihu.com/question/24011143/answer/108999938&#39;,&#39;pub/encoderQRCode2GotoURL.do?id=4856&#39;);"></span>
                                                      </div>
                                                      <div class="clearfix"></div>
                                                </li>
                                                
                                                <li class="list-group-item" title="热度:739" data-id="4864">
                                                    <div class="pull-left url-title url-title-width">
                                                        
                                                        <a href="https://shouku123.com/pub/gotoUrl.do?id=4864" target="_blank" title="全网VIP免费看">全网VIP免费看</a>
                                                    </div>
                                                    <div class="pull-right">
                                                        
                                                        <span class="glyphicon glyphicon-qrcode myButtonColor" title="点击查看二维码" style="cursor:pointer; 
                                                                    margin-left: 4px;" onclick="javascript:qrShow(&#39;全网VIP免费看&#39;,&#39;http://jiuxihuan.net/niupi/down/?shengi&#39;,&#39;pub/encoderQRCode2GotoURL.do?id=4864&#39;);"></span>
                                                      </div>
                                                      <div class="clearfix"></div>
                                                </li>
                                                
                                              </ul>
                                            </div>
                                          </li>
                                          
                                      
                                          
                                      
                                          
                                      
                                          
                                          <li class="urlGroupItem" id="urlGroupItem_949">
                                              <div class="panel panel-default">
                                              <div class="panel-heading">
                                                  <div class="pull-left myfont">知乎</div>
                                                  <div class="pull-right">
                                                      <span class="glyphicon glyphicon-share-alt my-glyphicon-btn" onclick="javascript:window.location.href=&#39;/pub/group/949&#39;;" title="分享"></span>
                                                      <span class="glyphicon glyphicon-leftOrdown glyphicon-chevron-down my-glyphicon-btn" onclick="javascript:updateCollapse(&#39;949&#39;,this);" title="折叠"></span>
                                                  </div>
                                                <div class="clearfix"></div>
                                              </div>
                                              <!-- List group -->
                                              <ul class="list-group collapse in urls " id="urls_949" title="知乎">
                                                  
                                                  
                                                <li class="list-group-item" title="热度:37" data-id="87173">
                                                    <div class="pull-left url-title url-title-width">
                                                        
                                                        <a href="https://shouku123.com/pub/gotoUrl.do?id=87173" target="_blank" title="知乎封神榜">知乎封神榜</a>
                                                    </div>
                                                    <div class="pull-right">
                                                        
                                                        <span class="glyphicon glyphicon-qrcode myButtonColor" title="点击查看二维码" style="cursor:pointer; 
                                                                    margin-left: 4px;" onclick="javascript:qrShow(&#39;知乎封神榜&#39;,&#39;http://www.zhihufans.com&#39;,&#39;pub/encoderQRCode2GotoURL.do?id=87173&#39;);"></span>
                                                      </div>
                                                      <div class="clearfix"></div>
                                                </li>
                                                
                                                <li class="list-group-item" title="热度:1592" data-id="4850">
                                                    <div class="pull-left url-title url-title-width">
                                                        
                                                        <a href="https://shouku123.com/pub/gotoUrl.do?id=4850" target="_blank" title="自制索引">自制索引</a>
                                                    </div>
                                                    <div class="pull-right">
                                                        
                                                        <span class="glyphicon glyphicon-qrcode myButtonColor" title="点击查看二维码" style="cursor:pointer; 
                                                                    margin-left: 4px;" onclick="javascript:qrShow(&#39;自制索引&#39;,&#39;https://zhuanlan.zhihu.com/p/25964484?utm_source=com.miui.notes&amp;utm_medium=&#39;,&#39;pub/encoderQRCode2GotoURL.do?id=4850&#39;);"></span>
                                                      </div>
                                                      <div class="clearfix"></div>
                                                </li>
                                                
                                                <li class="list-group-item" title="热度:2234" data-id="4851">
                                                    <div class="pull-left url-title url-title-width">
                                                        
                                                        <a href="https://shouku123.com/pub/gotoUrl.do?id=4851" target="_blank" title="优质知乎">优质知乎</a>
                                                    </div>
                                                    <div class="pull-right">
                                                        
                                                        <span class="glyphicon glyphicon-qrcode myButtonColor" title="点击查看二维码" style="cursor:pointer; 
                                                                    margin-left: 4px;" onclick="javascript:qrShow(&#39;优质知乎&#39;,&#39;https://www.zhihu.com/question/20311782/answer/155308081&#39;,&#39;pub/encoderQRCode2GotoURL.do?id=4851&#39;);"></span>
                                                      </div>
                                                      <div class="clearfix"></div>
                                                </li>
                                                
                                                <li class="list-group-item" title="热度:2566" data-id="4853">
                                                    <div class="pull-left url-title url-title-width">
                                                        
                                                        <a href="https://shouku123.com/pub/gotoUrl.do?id=4853" target="_blank" title="壁纸大全">壁纸大全</a>
                                                    </div>
                                                    <div class="pull-right">
                                                        
                                                        <span class="glyphicon glyphicon-qrcode myButtonColor" title="点击查看二维码" style="cursor:pointer; 
                                                                    margin-left: 4px;" onclick="javascript:qrShow(&#39;壁纸大全&#39;,&#39;https://zhuanlan.zhihu.com/p/21428874&#39;,&#39;pub/encoderQRCode2GotoURL.do?id=4853&#39;);"></span>
                                                      </div>
                                                      <div class="clearfix"></div>
                                                </li>
                                                
                                                <li class="list-group-item" title="热度:562" data-id="4854">
                                                    <div class="pull-left url-title url-title-width">
                                                        
                                                        <a href="https://shouku123.com/pub/gotoUrl.do?id=4854" target="_blank" title="读知乎">读知乎</a>
                                                    </div>
                                                    <div class="pull-right">
                                                        
                                                        <span class="glyphicon glyphicon-qrcode myButtonColor" title="点击查看二维码" style="cursor:pointer; 
                                                                    margin-left: 4px;" onclick="javascript:qrShow(&#39;读知乎&#39;,&#39;http://duzhihu.cc/&#39;,&#39;pub/encoderQRCode2GotoURL.do?id=4854&#39;);"></span>
                                                      </div>
                                                      <div class="clearfix"></div>
                                                </li>
                                                
                                              </ul>
                                            </div>
                                          </li>
                                          
                                      
                                          
                                      
                                  </ul>
                              </div>
                              <div class="col-md-3 groupCol">
                                      <ul id="urlGroups" class="list-unstyled urlGroups" style="width: 100%;">
                                      
                                          
                                      
                                          
                                      
                                          
                                      
                                          
                                          <li class="urlGroupItem" id="urlGroupItem_1872">
                                              <div class="panel panel-default">
                                              <div class="panel-heading">
                                                  <div class="pull-left myfont">美剧</div>
                                                  <div class="pull-right">
                                                      <span class="glyphicon glyphicon-share-alt my-glyphicon-btn" onclick="javascript:window.location.href=&#39;/pub/group/1872&#39;;" title="分享"></span>
                                                      <span class="glyphicon glyphicon-leftOrdown glyphicon-chevron-down my-glyphicon-btn" onclick="javascript:updateCollapse(&#39;1872&#39;,this);" title="折叠"></span>
                                                  </div>
                                                <div class="clearfix"></div>
                                              </div>
                                              <!-- List group -->
                                              <ul class="list-group collapse in urls " id="urls_1872" title="美剧">
                                                  
                                                  
                                                <li class="list-group-item" title="热度:433" data-id="9525">
                                                    <div class="pull-left url-title url-title-width">
                                                        
                                                        <a href="https://shouku123.com/pub/gotoUrl.do?id=9525" target="_blank" title="人人影视">人人影视</a>
                                                    </div>
                                                    <div class="pull-right">
                                                        
                                                        <span class="glyphicon glyphicon-qrcode myButtonColor" title="点击查看二维码" style="cursor:pointer; 
                                                                    margin-left: 4px;" onclick="javascript:qrShow(&#39;人人影视&#39;,&#39;http://www.yyets.com/&#39;,&#39;pub/encoderQRCode2GotoURL.do?id=9525&#39;);"></span>
                                                      </div>
                                                      <div class="clearfix"></div>
                                                </li>
                                                
                                                <li class="list-group-item" title="热度:321" data-id="9526">
                                                    <div class="pull-left url-title url-title-width">
                                                        
                                                        <a href="https://shouku123.com/pub/gotoUrl.do?id=9526" target="_blank" title="衣柜军团">衣柜军团</a>
                                                    </div>
                                                    <div class="pull-right">
                                                        
                                                        <span class="glyphicon glyphicon-qrcode myButtonColor" title="点击查看二维码" style="cursor:pointer; 
                                                                    margin-left: 4px;" onclick="javascript:qrShow(&#39;衣柜军团&#39;,&#39;https://site.douban.com/170544/&#39;,&#39;pub/encoderQRCode2GotoURL.do?id=9526&#39;);"></span>
                                                      </div>
                                                      <div class="clearfix"></div>
                                                </li>
                                                
                                                <li class="list-group-item" title="热度:220" data-id="9528">
                                                    <div class="pull-left url-title url-title-width">
                                                        
                                                        <a href="https://shouku123.com/pub/gotoUrl.do?id=9528" target="_blank" title="Orange字幕组">Orange字幕组</a>
                                                    </div>
                                                    <div class="pull-right">
                                                        
                                                        <span class="glyphicon glyphicon-qrcode myButtonColor" title="点击查看二维码" style="cursor:pointer; 
                                                                    margin-left: 4px;" onclick="javascript:qrShow(&#39;Orange字幕组&#39;,&#39;http://www.orangesub.com/&#39;,&#39;pub/encoderQRCode2GotoURL.do?id=9528&#39;);"></span>
                                                      </div>
                                                      <div class="clearfix"></div>
                                                </li>
                                                
                                                <li class="list-group-item" title="热度:194" data-id="9571">
                                                    <div class="pull-left url-title url-title-width">
                                                        
                                                        <a href="https://shouku123.com/pub/gotoUrl.do?id=9571" target="_blank" title="诸神字幕组">诸神字幕组</a>
                                                    </div>
                                                    <div class="pull-right">
                                                        
                                                        <span class="glyphicon glyphicon-qrcode myButtonColor" title="点击查看二维码" style="cursor:pointer; 
                                                                    margin-left: 4px;" onclick="javascript:qrShow(&#39;诸神字幕组&#39;,&#39;http://www.kamigami.org/forum.php&#39;,&#39;pub/encoderQRCode2GotoURL.do?id=9571&#39;);"></span>
                                                      </div>
                                                      <div class="clearfix"></div>
                                                </li>
                                                
                                                <li class="list-group-item" title="热度:115" data-id="9572">
                                                    <div class="pull-left url-title url-title-width">
                                                        
                                                        <a href="https://shouku123.com/pub/gotoUrl.do?id=9572" target="_blank" title="破烂熊字幕组">破烂熊字幕组</a>
                                                    </div>
                                                    <div class="pull-right">
                                                        
                                                        <span class="glyphicon glyphicon-qrcode myButtonColor" title="点击查看二维码" style="cursor:pointer; 
                                                                    margin-left: 4px;" onclick="javascript:qrShow(&#39;破烂熊字幕组&#39;,&#39;http://www.zimuku.net/t/J49s0&#39;,&#39;pub/encoderQRCode2GotoURL.do?id=9572&#39;);"></span>
                                                      </div>
                                                      <div class="clearfix"></div>
                                                </li>
                                                
                                                <li class="list-group-item" title="热度:103" data-id="9573">
                                                    <div class="pull-left url-title url-title-width">
                                                        
                                                        <a href="https://shouku123.com/pub/gotoUrl.do?id=9573" target="_blank" title="SSK字幕组">SSK字幕组</a>
                                                    </div>
                                                    <div class="pull-right">
                                                        
                                                        <span class="glyphicon glyphicon-qrcode myButtonColor" title="点击查看二维码" style="cursor:pointer; 
                                                                    margin-left: 4px;" onclick="javascript:qrShow(&#39;SSK字幕组&#39;,&#39;http://www.sskzmz.com/&#39;,&#39;pub/encoderQRCode2GotoURL.do?id=9573&#39;);"></span>
                                                      </div>
                                                      <div class="clearfix"></div>
                                                </li>
                                                
                                                <li class="list-group-item" title="热度:94" data-id="9575">
                                                    <div class="pull-left url-title url-title-width">
                                                        
                                                        <a href="https://shouku123.com/pub/gotoUrl.do?id=9575" target="_blank" title="EF字幕组">EF字幕组</a>
                                                    </div>
                                                    <div class="pull-right">
                                                        
                                                        <span class="glyphicon glyphicon-qrcode myButtonColor" title="点击查看二维码" style="cursor:pointer; 
                                                                    margin-left: 4px;" onclick="javascript:qrShow(&#39;EF字幕组&#39;,&#39;http://www.zimuku.net/t/H49s0&#39;,&#39;pub/encoderQRCode2GotoURL.do?id=9575&#39;);"></span>
                                                      </div>
                                                      <div class="clearfix"></div>
                                                </li>
                                                
                                                <li class="list-group-item" title="热度:133" data-id="49088">
                                                    <div class="pull-left url-title url-title-width">
                                                        
                                                        <a href="https://shouku123.com/pub/gotoUrl.do?id=49088" target="_blank" title="追剧管家">追剧管家</a>
                                                    </div>
                                                    <div class="pull-right">
                                                        
                                                        <span class="glyphicon glyphicon-qrcode myButtonColor" title="点击查看二维码" style="cursor:pointer; 
                                                                    margin-left: 4px;" onclick="javascript:qrShow(&#39;追剧管家&#39;,&#39;http://neets.cc/&#39;,&#39;pub/encoderQRCode2GotoURL.do?id=49088&#39;);"></span>
                                                      </div>
                                                      <div class="clearfix"></div>
                                                </li>
                                                
                                                <li class="list-group-item" title="热度:79" data-id="54270">
                                                    <div class="pull-left url-title url-title-width">
                                                        
                                                        <a href="https://shouku123.com/pub/gotoUrl.do?id=54270" target="_blank" title="24美剧频道">24美剧频道</a>
                                                    </div>
                                                    <div class="pull-right">
                                                        
                                                        <span class="glyphicon glyphicon-qrcode myButtonColor" title="点击查看二维码" style="cursor:pointer; 
                                                                    margin-left: 4px;" onclick="javascript:qrShow(&#39;24美剧频道&#39;,&#39;http://www.24pindao.com/&#39;,&#39;pub/encoderQRCode2GotoURL.do?id=54270&#39;);"></span>
                                                      </div>
                                                      <div class="clearfix"></div>
                                                </li>
                                                
                                              </ul>
                                            </div>
                                          </li>
                                          
                                      
                                          
                                      
                                          
                                      
                                          
                                          <li class="urlGroupItem" id="urlGroupItem_952">
                                              <div class="panel panel-default">
                                              <div class="panel-heading">
                                                  <div class="pull-left myfont">常用工具</div>
                                                  <div class="pull-right">
                                                      <span class="glyphicon glyphicon-share-alt my-glyphicon-btn" onclick="javascript:window.location.href=&#39;/pub/group/952&#39;;" title="分享"></span>
                                                      <span class="glyphicon glyphicon-leftOrdown glyphicon-chevron-down my-glyphicon-btn" onclick="javascript:updateCollapse(&#39;952&#39;,this);" title="折叠"></span>
                                                  </div>
                                                <div class="clearfix"></div>
                                              </div>
                                              <!-- List group -->
                                              <ul class="list-group collapse in urls " id="urls_952" title="常用工具">
                                                  
                                                  
                                                <li class="list-group-item" title="热度:411" data-id="4865">
                                                    <div class="pull-left url-title url-title-width">
                                                        
                                                        <a href="https://shouku123.com/pub/gotoUrl.do?id=4865" target="_blank" title="微云">微云</a>
                                                    </div>
                                                    <div class="pull-right">
                                                        
                                                        <span class="glyphicon glyphicon-qrcode myButtonColor" title="点击查看二维码" style="cursor:pointer; 
                                                                    margin-left: 4px;" onclick="javascript:qrShow(&#39;微云&#39;,&#39;https://www.weiyun.com/&#39;,&#39;pub/encoderQRCode2GotoURL.do?id=4865&#39;);"></span>
                                                      </div>
                                                      <div class="clearfix"></div>
                                                </li>
                                                
                                                <li class="list-group-item" title="热度:331" data-id="4866">
                                                    <div class="pull-left url-title url-title-width">
                                                        
                                                        <a href="https://shouku123.com/pub/gotoUrl.do?id=4866" target="_blank" title="网络记事本">网络记事本</a>
                                                    </div>
                                                    <div class="pull-right">
                                                        
                                                        <span class="glyphicon glyphicon-qrcode myButtonColor" title="点击查看二维码" style="cursor:pointer; 
                                                                    margin-left: 4px;" onclick="javascript:qrShow(&#39;网络记事本&#39;,&#39;http://www.xnote.cn/favorite/&#39;,&#39;pub/encoderQRCode2GotoURL.do?id=4866&#39;);"></span>
                                                      </div>
                                                      <div class="clearfix"></div>
                                                </li>
                                                
                                                <li class="list-group-item" title="热度:265" data-id="4868">
                                                    <div class="pull-left url-title url-title-width">
                                                        
                                                        <a href="https://shouku123.com/pub/gotoUrl.do?id=4868" target="_blank" title="谷歌翻译">谷歌翻译</a>
                                                    </div>
                                                    <div class="pull-right">
                                                        
                                                        <span class="glyphicon glyphicon-qrcode myButtonColor" title="点击查看二维码" style="cursor:pointer; 
                                                                    margin-left: 4px;" onclick="javascript:qrShow(&#39;谷歌翻译&#39;,&#39;https://translate.google.cn/&#39;,&#39;pub/encoderQRCode2GotoURL.do?id=4868&#39;);"></span>
                                                      </div>
                                                      <div class="clearfix"></div>
                                                </li>
                                                
                                                <li class="list-group-item" title="热度:181" data-id="15301">
                                                    <div class="pull-left url-title url-title-width">
                                                        
                                                        <a href="https://shouku123.com/pub/gotoUrl.do?id=15301" target="_blank" title="小米云服务">小米云服务</a>
                                                    </div>
                                                    <div class="pull-right">
                                                        
                                                        <span class="glyphicon glyphicon-qrcode myButtonColor" title="点击查看二维码" style="cursor:pointer; 
                                                                    margin-left: 4px;" onclick="javascript:qrShow(&#39;小米云服务&#39;,&#39;https://i.mi.com/&#39;,&#39;pub/encoderQRCode2GotoURL.do?id=15301&#39;);"></span>
                                                      </div>
                                                      <div class="clearfix"></div>
                                                </li>
                                                
                                                <li class="list-group-item" title="热度:536" data-id="7883">
                                                    <div class="pull-left url-title url-title-width">
                                                        
                                                        <a href="https://shouku123.com/pub/gotoUrl.do?id=7883" target="_blank" title="锤子便签">锤子便签</a>
                                                    </div>
                                                    <div class="pull-right">
                                                        
                                                        <span class="glyphicon glyphicon-qrcode myButtonColor" title="点击查看二维码" style="cursor:pointer; 
                                                                    margin-left: 4px;" onclick="javascript:qrShow(&#39;锤子便签&#39;,&#39;https://cloud.smartisan.com/#/notes&#39;,&#39;pub/encoderQRCode2GotoURL.do?id=7883&#39;);"></span>
                                                      </div>
                                                      <div class="clearfix"></div>
                                                </li>
                                                
                                                <li class="list-group-item" title="热度:337" data-id="11773">
                                                    <div class="pull-left url-title url-title-width">
                                                        
                                                        <a href="https://shouku123.com/pub/gotoUrl.do?id=11773" target="_blank" title="贝贝网络收藏夹">贝贝网络收藏夹</a>
                                                    </div>
                                                    <div class="pull-right">
                                                        
                                                        <span class="glyphicon glyphicon-qrcode myButtonColor" title="点击查看二维码" style="cursor:pointer; 
                                                                    margin-left: 4px;" onclick="javascript:qrShow(&#39;贝贝网络收藏夹&#39;,&#39;http://www.perass.com/&#39;,&#39;pub/encoderQRCode2GotoURL.do?id=11773&#39;);"></span>
                                                      </div>
                                                      <div class="clearfix"></div>
                                                </li>
                                                
                                              </ul>
                                            </div>
                                          </li>
                                          
                                      
                                  </ul>
                              </div>
                          </div>
                          
                        
                    
                    
                    </div>
                    
                    
                    
                    <!-- 网页尾部 -->
                    
                    
                    
                    
                    <div id="showMsg" class="alert alert-default showMsg myfont" style="display:none;background-color: #999999;color: #FFF;">
                        更新成功!
                    </div>
                    
                    <!-- 二维码Modal -->
                    <div class="modal fade" id="qrShowModal" role="dialog">
                      <div class="modal-dialog" role="document">
                        <div class="modal-content">
                          <div class="modal-header">
                            <button type="button" class="close" data-dismiss="modal" aria-label="Close"><span aria-hidden="true">×</span></button>
                            <h4 class="modal-title" id="qrShowModalLogo"><img src="../assets/nav_files/shouku123_logo.png"></h4>
                          </div>
                          <div class="modal-body center-block">
                              <p id="qrShowModal_title" class="text-center myfont myTextOverflow" style="font-size: 16px;font-weight: bold;"></p>
                              <p id="qrShowModal_url" class="text-center myTextOverflow"></p>
                              <p class="text-center"><img id="qrShowModal_img" src="https://shouku123.com/xizi"></p>
                              <p class="text-center myTextOverflow">扫一扫，手机浏览</p>
                          </div>
                          <div class="modal-footer">
                            <a id="qrShowModal_copyurl" href="javascript:void(0);" data-clipboard-text="" style="padding-right: 20px;">一键复制网址</a>
                            <button type="button" class="btn btn-default" data-dismiss="modal">关闭</button>
                          </div>
                        </div>
                      </div>
                    </div>
                    
                    <footer class="container my-footer">
                        <hr style="margin-top: 5px;margin-bottom: 15px;">
                        
                        <div class="text-left myfont ">
                                访问:52962<span class="xlx">|</span>点击:46330<span class="xlx">|</span>搜索:21591<span class="xlx">|</span><span class="dropdown-toggle" style="cursor:pointer;" onclick="javascript:qrShow(&#39;xi1zi&#39;,&#39;https://shouku123.com/xizi&#39;,&#39;pub/encoderQRCode2Username.do?username=xizi&#39;);">扫一扫</span>
                        </div>
                        <div class="text-reght myfont">
                            <dl>
                              <dd>Copyright © 2018 shouku123. All Rights Reserved</dd>
                              <dd>
                                  <a href="http://www.miitbeian.gov.cn/">粤ICP备17037511号-2</a>
                                  &nbsp;&nbsp;<span onclick="javascript:feedbackShow();" style="cursor:pointer;">联系我们</span>
                                  &nbsp;&nbsp;<a href="http://note.youdao.com/noteshare?id=5b300ba9fdd06e18c4b1861e145ac960&amp;sub=3C06B469A3A441468D150B733A47F9A5" target="_blank">帮助</a>
                              </dd>
                            </dl>
                        </div>
                    </footer>
                    
                    <!-- 附加导航 -->
                    <div class="btn-group-vertical group-index-right" style="display: none;">
                        
                            
                            <a href="https://shouku123.com/xizi#urlGroupItem_10120" class="btn btn-default">简</a>
                            
                        
                            
                        
                            
                        
                            
                        
                            
                        
                            
                        
                            
                        
                        
                            
                        
                            
                            <a href="https://shouku123.com/xizi#urlGroupItem_955" class="btn btn-default">社</a>
                            
                        
                            
                        
                            
                        
                            
                            <a href="https://shouku123.com/xizi#urlGroupItem_957" class="btn btn-default">最</a>
                            
                        
                            
                        
                            
                        
                        
                            
                        
                            
                        
                            
                            <a href="https://shouku123.com/xizi#urlGroupItem_950" class="btn btn-default">影</a>
                            
                        
                            
                        
                            
                        
                            
                            <a href="https://shouku123.com/xizi#urlGroupItem_949" class="btn btn-default">知</a>
                            
                        
                            
                        
                        
                            
                        
                            
                        
                            
                        
                            
                            <a href="https://shouku123.com/xizi#urlGroupItem_1872" class="btn btn-default">美</a>
                            
                        
                            
                        
                            
                        
                            
                            <a href="https://shouku123.com/xizi#urlGroupItem_952" class="btn btn-default">常</a>
                            
                        
                    </div>
                    
                    
                    <!-- 侧面功能栏 -->
                    <ul class="nav nav-pills nav-stacked menu-right">
                        <li>
                            <button type="button" class="btn btn-default" data-action="expand-all" onclick="javascript:updateCollapseShow();">
                            <span class="glyphicon glyphicon-plus"></span>
                            </button>
                        </li>
                        <li>
                            <button type="button" class="btn btn-default" data-action="collapse-all" onclick="javascript:updateCollapseHide();">
                            <span class="glyphicon glyphicon-minus"></span>
                            </button>
                        </li>
                        <li>
                            <button type="button" class="btn btn-default" data-action="collapse-all" onclick="javascript:gotoTop();">
                            <span class="glyphicon glyphicon-chevron-up"></span>
                            </button>
                        </li>
                    </ul>
                    
</div>                
                
</template>

<script>

    export default{
        name:"nav"
    }

//   @import "../assets/nav_files/bootstrap.min.css";   search why this err?
//   @import "../assets/nav_files/mycolor.css";
//   @import "../assets/nav_files/app_nav.css";
//   @import "../assets/nav_files/skBase.css";
//   @import "../assets/nav_files/indexNotLogin.css";

</script>


<style scoped>


  @import "../assets/nav_files/mycolor.css";
  @import "../assets/nav_files/app_nav.css";
  @import "../assets/nav_files/skBase.css";
  @import "../assets/nav_files/indexNotLogin.css";


    .my-nav-tabs li a {
        margin-left: 2px;
    }
    #body {
    
        background-image: URL('https://pic2.zhimg.com/v2-d642055018c5523dd92664b8620adec5_r.jpg');
        background-position: center;
        background-repeat: no-repeat;
        background-attachment: fixed;
    
    
    }
    
    .my-footer,.my-footer a {
        color:#9C9C9C!important;
    }
    
    .navbar-default{
        
        
        background-color: #f8f8f8;
        
        
        
        
        border-color: #e7e7e7;
        
    }
    
    
    
    .my-app-nav{
    
    
        background-color:#9C9C9C;
    
    
        border: 1px solid #9C9C9C;
    
    }
    
    .my-app-nav a{
        color:#9C9C9C;
    }
    
    
    </style>
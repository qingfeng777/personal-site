<template>

        <div >
            <section class="container">
            <div class="content-wrap">
            <div class="content">
              <header class="article-header">
                <div class="input-group title">
                  <textarea class="form-control" aria-label="With textarea" v-model="article.title"></textarea>
                </div>
              </header>
              <article class="article-content">
                <div id="main">
                    <mavon-editor v-model="article.content" editable=false />
                </div>
                
              </article>

              <br/> <br/> <br/>
              <div class="input-group input-group-lg">
                <span class="input-group-addon" id="sizing-addon1">摘要</span>
                <input type="text" class="form-control" placeholder="简要概括" aria-describedby="sizing-addon1" v-model="article.keyWord">
              </div>

              <br/>
              <div class="input-group">
                <span class="input-group-addon">Tag </span>
                <input type="text" placeholder="tag  ',' 分隔 " v-model="tags" class="form-control" aria-label="Amount (to the nearest dollar)">
                <span class="input-group-addon">
                  <button class="btn-group btn-group-sm" type="button">选择已有Tag</button>
                </span>
              </div>

              <br/> <br/> <br/>
              <p>

                <div class="row">
                  <div class="col-lg-6">
                    <div class="input-group">
                      <input type="text" class="form-control" placeholder="分类" aria-label="..." v-model="article.category">
                      <div class="input-group-btn">
                        <button type="button" class="btn dropdown-toggle" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">可选项 </button>
                       <ul class="dropdown-menu" v-model="article.category">
                        <li  v-for="(cate,index) in categorys" @click="selectCate(cate)">{{cate.name}}</li>       
                      </ul>
                      </div><!-- /btn-group -->
                    </div><!-- /input-group -->
                  </div><!-- /.col-lg-6 -->
                &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
                <button type="button" @click="submit" class="btn btn-primary btn-lg">提交</button>
                </div><!-- /.row -->
              </p>

              <div id="postcomments">
                <ol id="comment_list" class="commentlist">
                <li class="comment-content"><span class="comment-f"></span><div class="comment-main"><p><a class="address" href="#" rel="nofollow" target="_blank">何妨吟啸且徐行</a>
                
                <br>谁怕，一骑战马任平生！</p></div></li></ol>
              </div>
            </div>
                    
            </div>
            <aside class="sidebar" v-show="true">
            <div class="fixed">
              <div class="widget widget-tabs">
                <ul class="nav nav-tabs" role="tablist">
                  <li role="presentation" class="active"><a href="#notice" aria-controls="notice" role="tab" data-toggle="tab" draggable="false">这是1</a></li>
                  <li role="presentation"><a href="#contact" aria-controls="contact" role="tab" data-toggle="tab" draggable="false">这是2</a></li>
                </ul>
                <div class="tab-content">
                  <div role="tabpanel" class="tab-pane contact active" id="notice">
                    <h2>
                      write something
                      </h2>
                      <h2>say to
                      <span id="sitetime">self </span></h2>
                  </div>
                    <div role="tabpanel" class="tab-pane contact" id="contact">
                      <h2>QQ:
                          <a href="" target="_blank" rel="nofollow" data-toggle="tooltip" data-placement="bottom" title="" draggable="false" data-original-title="QQ:577211782">577211782</a>
                      </h2>
                      <h2>Email:
                      <a href="mailto:577211782@qq.com" target="_blank" data-toggle="tooltip" rel="nofollow" data-placement="bottom" title="" draggable="false" data-original-title="Email:577211782@qq.com">577211782@qq.com</a></h2>
                  </div>
                </div>
              </div>
              <div class="widget widget_search">
                <form class="navbar-form" action="/Search" method="post">
                  <div class="input-group">
                    <input type="text" name="keyword" class="form-control" size="35" placeholder="对自己说" maxlength="15" autocomplete="off">
                    <span class="input-group-btn">
                    <button class="btn btn-default btn-search" name="search" type="submit">添加</button>
                    </span> </div>
                </form>
              </div>
            </div>
            <div class="widget widget_hot">
                  <h3>记得多清？你有多想？</h3>
                  <ul>
                    
            <li><a title="要坐直" href="#" ><span class="thumbnail">
            <img class="thumb" src="../../assets/images/201610181739277776.jpg" alt="用傻笑世界"  style="display: block;">
            </span><span class="text">坐直身体好</span><span class="muted"><i class="glyphicon glyphicon-time"></i>
            2016-11-01
            </span><span class="muted"><i class="glyphicon glyphicon-eye-open"></i>88</span></a></li>
            <li><a title="多活动" href="#" ><span class="thumbnail">
            <img class="thumb" data-original="../../assets/images/201610181739277776.jpg" src="../../assets/images/201610181739277776.jpg" alt="以柔布棋局"  style="display: block;">
            </span><span class="text">身体是革命的本钱</span><span class="muted"><i class="glyphicon glyphicon-time"></i>
            2016-11-01
            </span><span class="muted"><i class="glyphicon glyphicon-eye-open"></i>88</span></a></li>
            
                  </ul>
              </div>

              <div class="widget widget_sentence">
            
            <!-- <a href="#" target="_blank" rel="nofollow" title="专业" > 广告
                <img style="width: 100%" src="../../assets/images/201610241224221511.jpg" alt="专业写bug" ></a> -->
            
            </div>
            </aside>
            </section>
    
        </div>
    
    </template>
    
    <script src="js/jquery-2.1.4.min.js"></script>
    <script src="js/nprogress.js"></script>
    <script src="js/jquery.lazyload.min.js"></script>
    <script src="js/bootstrap.min.js"></script>
    <script src="js/jquery.ias.js"></script>
    <script src="js/scripts.js"></script>
    <script>                  window._bd_share_config = { "common": { "bdSnsKey": {}, "bdText": "", "bdMini": "2", "bdMiniList": false, "bdPic": "", "bdStyle": "1", "bdSize": "32" }, "share": {} }; with (document) 0[(getElementsByTagName('head')[0] || body).appendChild(createElement('script')).src = 'http://bdimg.share.baidu.com/static/api/js/share.js?v=0.js?cdnversion=' + ~(-new Date() / 36e5)];</script>
    
    <script>
      import fetcharticle from '../../fetch/article'
      import fetchcategory from '../../fetch/category'
      import { mapActions } from 'vuex'

      export default {
    mixins: [10],
    data () {
      
      return {
        article: {
          title: "article title",
          content: "article content, hello ming. It's a long time after laster time I see you .  ",
          keyWord: "",
          tag:[
            ""
          ],
          category: '未分类',
        },
        categorys: [
          {name:'获取失败'}
        ],
        tags: ''
      }
    },
    methods: {
      ...mapActions('article', [
        'getList' // 获取数据
      ]),
      // ---邮件服务器信息获取--- //
      'open': function () {
        debugger
        fetchMailServer._getMailServer()
        .then(res => {
          if (res.data === '') {
            this.formCustom.sendEmail = 'article.emailUnset'
          } else {
            this.formCustom.sendEmail = res.data.from
          }
          this.saveButton = false
        })
        .catch((error) => {
          console.log(error.response.data.message)
        })
      },
     'submit': function () {
        if (this.tags === '') {
          return
        }else{
          this.article.tag = this.tags.split(",")
        }
        fetcharticle._create(this.article)
        .then(res => {
          //this.getList()
          //modal.close()
          alert(name + 'base.create' + 'base.success')
        })
        .catch((error) => {
          if (error.response.data.code === 500) {
            alert(name + 'base.create' + 'base.fail')
          } else {
            alert(error.response.data.message)
          }
          //modal.close()
        })
      },
      'selectCate': function (cate) {
        this.article.category = cate.name
      },
      // 测试webhook url格式按钮，格式错误也可保存
      webhookTest () {
        fetcharticle._webhookTest(this.formCustom.recUrl)
        .then(res => {
          this.$Message.success('article.urlRight')
        })
        .catch((error) => {
          console.log(error.msg)
          alert('article.urlWrong')
        })
      }
    },
    mounted () {
      console.log("hello, 1")
      //fetch category show in 下拉框
      fetchcategory._getList()
            .then(res => {
              this.categorys = res.data
             // alert(res.msg)
            })
            .catch((error) => {
              if (error.response.data.code === 500) {
                alert(name + 'base.create' + 'base.fail')
              } else {
                alert(error.response.data.message)
              }
              //modal.close()
            })  
    },
  }
</script>

    </script>
    
    
    <style>
    
    @import "../../assets/css/nprogress.css";
    @import "../../assets/css/font-awesome.min.css";
    @import "../../assets/nav_files/mycolor.css";
    @import "../../assets/plugins/bootstrap/css/bootstrap.min.css";   
    @import "../../assets/plugins/font-awesome/css/font-awesome.css";
    @import "../../assets/css/styles.css";

    .title{
      margin-left: 5%;
      width: 85%;
    }
    .col-lg-6{
      width: 35%;
      margin-left: 10%;
    }
    
    </style>
    
    
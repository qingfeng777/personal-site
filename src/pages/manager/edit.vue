<template>
  <div>
    <section class="container">
      <div class="content-wrap">
        <div class="content">
          <header class="article-header">
            <div class="input-group title">
              <h2>
                <input type="text" class="form-control titleIn" placeholder="标题" v-model="article.title">
              </h2>
            </div>
          </header>
          <article class="article-content">
            <div id="main">
              <mavon-editor id="editor" :subfield=false  v-model="article.content" />
            </div>
          </article>

          <br/> <br/> <br/>
          <div class="input-group input-group-lg">
            <span class="input-group-addon" id="sizing-addon1">摘要</span>
            <input type="text" class="form-control" placeholder="简要概括" aria-describedby="sizing-addon1"
                   v-model="article.keyWord">
          </div>

          <br/>
          <div class="input-group">
            <span class="input-group-addon">Tag </span>
            <input type="text" placeholder="tag  ',' 分隔 " v-model="tags" class="form-control"
                   aria-label="Amount (to the nearest dollar)">
          </div>

          <br/> <br/> <br/>
          <p>

          <div class="row">
            <div class="col-lg-6">
              <div class="input-group">
                <input type="text" class="form-control floatLeft" placeholder="分类" aria-label="..." v-model="article.category">
                <div class="input-group-btn">
                  <button type="button" class="btn btn-primary btn-lg selectBtn floatLeft" data-toggle="dropdown"
                          aria-haspopup="true" aria-expanded="false">可选项
                  </button>
                  <ul class="dropdown-menu" v-model="article.category">
                    <li v-for="(cate,index) in categorys" @click="selectCate(cate)">{{cate.name}}</li>
                  </ul>
                </div><!-- /btn-group -->
                <button type="button" @click="submit" class="btn btn-primary btn-lg floatRight" style="margin-right: -800%">提交</button>
              </div><!-- /input-group -->
            </div><!-- /.col-lg-6 -->
          </div><!-- /.row -->
          </p>


          <!--提示框-->
          <div v-show="showError" class="alert alert-danger alert-dismissible" style="margin-top: 20px" role="alert">
            <button type="button" class="close" data-dismiss="alert" aria-label="Close"><span aria-hidden="true">&times;</span></button>
            <strong>错误!</strong> {{tipMessage}}
          </div>
          <div v-show="showSuccess" class="alert alert-success"  style="margin-top: 20px" role="alert">{{tipMessage}}</div>


          <div id="postcomments" class="bootTip">
            <ol id="comment_list" class="commentlist">
              <li class="comment-content"><span class="comment-f"></span>
                <div class="comment-main"><p><a class="address"  rel="nofollow" target="_blank">何妨吟啸且徐行</a>

                  <br>谁怕，一骑战马任平生！</p></div>
              </li>
            </ol>
          </div>
        </div>

      </div>
      <aside class="sidebar" v-show="true">
        <div class="fixed">
          <div class="widget widget-tabs">
            <ul class="nav nav-tabs" role="tablist">
              <li role="presentation" class="active"><a href="#notice" aria-controls="notice" role="tab"
                                                        data-toggle="tab" draggable="false">这是1</a></li>
              <li role="presentation"><a href="#contact" aria-controls="contact" role="tab" data-toggle="tab"
                                         draggable="false">这是2</a></li>
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
                  <a href="" target="_blank" rel="nofollow" data-toggle="tooltip" data-placement="bottom" title=""
                     draggable="false" data-original-title="QQ:577211782">577211782</a>
                </h2>
                <h2>Email:
                  <a href="mailto:577211782@qq.com" target="_blank" data-toggle="tooltip" rel="nofollow"
                     data-placement="bottom" title="" draggable="false" data-original-title="Email:577211782@qq.com">577211782@qq.com</a>
                </h2>
              </div>
            </div>
          </div>
          <div class="widget widget_search">
            <form class="navbar-form" action="/Search" method="post">
              <div class="input-group">
                <input type="text" name="keyword" class="form-control" size="35" placeholder="对自己说" maxlength="15"
                       autocomplete="off">
                <span class="input-group-btn">
                    <button class="btn btn-default btn-search" name="search" type="submit">添加</button>
                    </span></div>
            </form>
          </div>
        </div>
        <div class="widget widget_hot">
          <h3>记得多清？你有多想？</h3>
          <ul>

            <li><a title="要坐直" href="#"><span class="thumbnail">
            <img class="thumb" src="../../assets/images/201610181739277776ed.jpg" alt="用傻笑世界" style="display: block;">
            </span><span class="text">坐直身体好</span><span class="muted"><i class="glyphicon glyphicon-time"></i>
            2016-11-01
            </span><span class="muted"><i class="glyphicon glyphicon-eye-open"></i>88</span></a></li>
            <li><a title="多活动" href="#"><span class="thumbnail">
            <img class="thumb" data-original="../../assets/images/201610181739277776.jpg"
                 src="../../assets/images/201610181739277776ed.jpg" alt="以柔布棋局" style="display: block;">
            </span><span class="text">身体是革命的本钱</span><span class="muted"><i class="glyphicon glyphicon-time"></i>
            2016-11-01
            </span><span class="muted"><i class="glyphicon glyphicon-eye-open"></i>88</span></a></li>

          </ul>
        </div>

        <div class="widget widget_sentence">
        </div>
      </aside>
    </section>

  </div>

</template>

<!--
<script src="js/jquery-2.1.4.min.js"></script>
<script src="js/nprogress.js"></script>
<script src="js/jquery.lazyload.min.js"></script>
<script src="js/bootstrap.min.js"></script>
<script src="js/jquery.ias.js"></script>
<script src="js/scripts.js"></script>
<script>                  window._bd_share_config = {
  "common": {
    "bdSnsKey": {},
    "bdText": "",
    "bdMini": "2",
    "bdMiniList": false,
    "bdPic": "",
    "bdStyle": "1",
    "bdSize": "32"
  }, "share": {}
};
with (document) 0[(getElementsByTagName('head')[0] || body).appendChild(createElement('script')).src = 'http://bdimg.share.baidu.com/static/api/js/share.js?v=0.js?cdnversion=' + ~(-new Date() / 36e5)];</script>
-->

<script>
  import fetcharticle from '../../fetch/article'
  import fetchcategory from '../../fetch/category'
  import { mavonEditor } from 'mavon-editor'
  import 'mavon-editor/dist/css/index.css'
  import {mapActions} from 'vuex'

  export default {
    components: {
      'mavon-editor': mavonEditor
    },
    mixins: [10],
    data() {
      return {
        article: {
          title: "",
          content: "",
          keyWord: "",
          tag: [],
          category: '',
        },
        categorys: [
          {name: '获取失败'}
        ],
        tags: '',
        edit: false,
        showError: false,
        showSuccess: false,
        tipMessage: ""
      }
    },
    methods: {
      ...mapActions('article', [
        'getList' // 获取数据
      ]),

      'submit': function () {
        if (this.tags === '') {
          alert('tag 还没填')
          return
        } else {
          this.article.tag = this.tags.split(",")
        }

        // 编辑
        if (this.edit) {
          fetcharticle._edit(this.article)
            .then(res => {
              this.showSuccess = true
              this.tipMessage = "操作成功"
              this.toHome()
            })
            .catch((error) => {
              this.showError = true
              this.tipMessage = error.msg
              return
            })
          return
        }

        // 添加
        fetcharticle._create(this.article)
          .then(res => {
            this.showSuccess = true
            this.tipMessage = "操作成功"
            this.toHome() //this.$router.push({name:'manager'})
          })
          .catch((error) => {
            this.showError = true
            this.tipMessage = error.msg
            return
          })
      },

      'selectCate': function (cate) {
        this.article.category = cate.name
      },
      'toHome': function () {
        setTimeout(() => {
          this.$router.push({name:'manager'})
        }, 1300)
      }
    },
    mounted() {
      if (this.$route.params.art) {
        this.article = this.$route.params.art
        this.tags = this.article.tag.join(",")
        this.edit = true
      }
      //fetch category show in 下拉框
      fetchcategory._getList()
        .then(res => {
          this.categorys = res.data
        })
        .catch((error) => {
          this.showError = true
          this.tipMessage = error.msg
          return
        })
    },
  }
</script>

<style scoped>
  @import "../../assets/css/nprogress.css";
  @import "../../assets/css/font-awesome.min.css";
  @import "../../assets/nav_files/mycolor.css";
  @import "../../assets/plugins/bootstrap/css/bootstrap.min.css";
  @import "../../assets/plugins/font-awesome/css/font-awesome.css";
  @import "../../assets/css/styles.css";

  .title {
    margin-left: 15%;
    width: 65%;
  }
  .floatLeft{
    float: left;
  }
  .floatRight{
    float: right;
  }

  #editor{
    margin: auto;
    width: 100%;
    height: 380px;
    background-color: #F7F7F7;
  }

  .titleIn {
    border-style: solid;
    border-top-width: 0px;
    border-right-width: 0px;
    border-bottom-width: 1px;
    border-left-width: 0px;
    text-align: center;
    height: 60px;
    font-size: larger;
  }

  .col-lg-6 {
    width: 35%;
    margin-left: 0%;
  }
  .bootTip{
    padding-top: 60px;
  }

  .selectBtn {
    /* background-color:beige; */
    height: 33px;
  }
</style>


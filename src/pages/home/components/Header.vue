<template>
  <div class="header">
    <div class="header-left">
      <div class="iconfont back-icon">&#xe624;</div>
    </div>
    <div class="header-input">
      <span class="iconfont">&#xe632;</span>
      输入城市/景点/游玩主题
    </div>
    <div class="header-right">
      城市
      <span class="iconfont arrow-icon" >&#xe64a;</span>
    </div>
  </div>

</template>

<script>
export default {
  name: 'HomeHeader'
}
</script>

<!-- scoped 只对当前组件有效果 -->
<style lang="stylus" scoped>
  //~@ 表示从src目录下面开始找
  //@import "~@/assets/styles/varibles.styl"
  // styles 在config里面配置了src/assets/styles 这个目录
  @import "~styles/varibles.styl"
  .header
    display: flex
    line-height: 0.86rem
    background: $bgColor
    color: #fff
    .header-left
      width:.64rem
      float:left
      .back-icon
        font-size: .4rem
        text-align: center
    .header-input
      flex:1
      margin-top:.12rem
      margin-left:.2rem
      background:#fff
      border-radius: .1rem
      color: #ccc
      text-align left
      height :.64rem
      line-height:.64rem
      padding-left: .2rem
    .header-right
      width:1.24rem
      float: right
      text-align: center
      .arrow-icon
        font-size: .24rem
        margin-left: -.04rem
</style>

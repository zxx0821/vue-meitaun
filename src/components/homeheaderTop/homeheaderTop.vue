<template>
  <header id="home-header-top">
    <div class="size weather">
      <i class="fa fa-cloud"></i>
      <p>{{weather}}</p>
    </div>
    <div class="size city"><router-link to="/city" class="cityrouter">{{city}} <i class="fa fa-angle-down"></i> </router-link></div>
    <div class="size search">
      <router-link to="/search" class="search-wrapper">
        <div class="wrapper">
          <i class="fa fa-search"></i>
          <span>{{placeholdertext}}</span>
        </div>
      </router-link>
    </div>
    <div class="add" @click="showselect"><i class="fa fa-plus"></i></div>
  </header>
</template>

<script>
    export default {
      name: "homeheaderTop",
      props: ["placeholdertext", "city"],
      data(){
        return {
          weather: '31"',
          showselection:false
        }
      },
      methods: {
        log(){
        },
        showselect(){
          this.showselection = !this.showselection;
        }
      },
      computed: {

      },
      mounted(){

      }

    }
</script>

<style scoped lang="less">
  #home-header-top{
    box-sizing: border-box;
    display: flex;
    flex-direction: row;
    margin:6px 0;
    height:40px;
    .weather{
      flex:.8;
      font-size:0;
      text-align: center;
      .fa{
        font-size:20px;
      }
      p{
        font-size:12px;
      }
    }
    .city{
      flex: 1;
      text-align: center;
      vertical-align: middle;
      font-size: 16px;
      .cityrouter{
        display: inline-block;
        line-height: 40px;
      }
    }
    .search{
      flex: 4;
      border: 1px solid #eee;
      border-radius: 20px;
      background: #eee;
      .search-wrapper{
        display:inline-block;
        padding:6px 10px;

      }
    }
    .add{
      flex:.8;
      text-align:center;
      .fa{
        display: inline-block;
        vertical-align: middle;
        line-height:40px;
      }
    }
    .navsection{
      position:absolute;
      right:0;
      top:40px;
      width:40px;
      height:60px;
      background: red;
    }

  }
</style>

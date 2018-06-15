<template>
  <div id="navTab">
   <ul class="mainNav">
      <router-link tag="li" to="" v-for="(item, index) in othernav" :key="index" class="routerPath">
        <span :style="{background:item.color}"><i class="fa" :class="item.icon"></i></span>
        <p class="title">{{item.title}}</p>
      </router-link>
    </ul>
  </div>
</template>

<script>
  export default {
    name: "navbarTab",
    props:[],
    data(){
      return {
        othernav: [
          {
            icon: 'fa-shower',
            color: 'orange',
            title: "打车"
          },
          {
            icon: 'fa-tree',
            color: 'orangered',
            title: "民宿/公寓"
          },
          {
            icon: 'fa-plane',
            color: 'lightcoral',
            title: "周边游/旅游"
          },
          {
            icon: 'fa-car',
            color: 'orangered',
            title: "丽人/美发"
          },
          {
            icon: 'fa-bank',
            color: 'orange',
            title: "机票/火车票"
          },
          {
            icon: 'fa-subway',
            color: 'cadetblue',
            title: "家居/装修"
          },
          {
            icon: 'fa-anchor',
            color: 'lightcoral',
            title: "景点/门票"
          },
          {
            icon: 'fa-shower',
            color: 'orangered',
            title: "婚纱/摄影"
          },
          {
            icon: 'fa-th-large',
            color: 'burlywood',
            title: "跑腿代购"
          },
          {
            icon: 'fa-th-large',
            color: 'cadetblue',
            title: "跑腿代购"
          }
        ]
      }
    },
    methods: {

    },
    computed: {
      color(){
        return "color=red"
      }
    }
  }
</script>

<style scoped lang="less">
  #navTab{
    .mainNav{
      display: flex;
      justify-content: space-between;
      text-align: center;
      flex-wrap: wrap;
      padding-bottom: 20px;
      margin:0 20px;
      .routerPath{
        width:20%;
        margin-top:20px;
        span{
          position:relative;
          display: inline-block;
          width:40px;
          height:40px;
          border-radius: 20px;
          background:#ccc;
          .fa{
            display: inline-block;
            position:absolute;
            left:50%;
            top:50%;
            transform:translate(-50%,-50%);
            font-size: 20px;
            color:#fff;
          }
        }
        .title{
          font-size:14px;
        }
      }
    }

  }
</style>

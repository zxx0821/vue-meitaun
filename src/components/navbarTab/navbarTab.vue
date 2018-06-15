<template>
    <div id="navTab">
      <ul class="mainNav">
        <router-link tag="li" to="" v-for="(item, index) in navTabtop" :key="index" class="routerPath">
          <span :style="{background:item.color}"><i class="fa" :class="item.icon"></i></span>
          <p class="title">{{item.title}}</p>
        </router-link>
      </ul>
      <!--<ul class="motherNav">
        <router-link tag="li" to="" v-for="(item, index) in othernav" :key="index" class="routerPath">
          <i class="fa" :class="item.icon"></i>
          <p>{{item.title}}</p>
        </router-link>
      </ul>-->
    </div>
</template>

<script>
    export default {
      name: "navbarTab",
      props:[],
      data(){
        return {
          navTabtop:[
            {
              icon: 'fa-plane',
              color: 'orange',
              title: "美食"
            },
            {
              icon: 'fa-car',
              color: 'burlywood',
              title: "电影/演出"
            },
            {
              icon: 'fa-bank',
              color: 'orangered',
              title: '酒店住宿'
            },
            {
              icon: 'fa-subway',
              color: 'cadetblue',
              title: "休闲娱乐"
            },
            {
              icon: 'fa-anchor',
              color: 'lightcoral',
              title: "外卖"
            }
          ],
          othernav: [
            {
              icon: 'fa-shower',
              title: "打车"
            },
            {
              icon: 'fa-tree',
              title: "民宿/公寓"
            },
            {
              icon: 'fa-plane',
              title: "周边游/旅游"
            },
            {
              icon: 'fa-car',
              title: "丽人/美发"
            },
            {
              icon: 'fa-bank',
              title: "机票/火车票"
            },
            {
              icon: 'fa-subway',
              title: "家居/装修"
            },
            {
              icon: 'fa-anchor',
              title: "景点/门票"
            },
            {
              icon: 'fa-shower',
              title: "婚纱/摄影"
            },
            {
              icon: 'fa-th-large',
              title: "跑腿代购"
            },
            {
              icon: 'fa-th-large',
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
    padding-bottom: 20px;
    margin:0 20px;
    border-bottom: 1px solid #ccc;
    .routerPath{
      flex: 1;
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

<template>
    <div id="navTab">
      <ul class="mainNav">
        <router-link tag="li" to="" v-for="(item, index) in navTabtop" :key="index" class="routerPath">
          <span><i class="fa" :class="item.icon"></i></span>
          <p>{{item.title}}</p>
        </router-link>
      </ul>
      <ul class="motherNav">
        <router-link tag="li" to="" v-for="(item, index) in othernav" :key="index" class="routerPath">
          <i class="fa" :class="item.icon"></i>
          <p>{{item.title}}</p>
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
          navTabtop:[
            {
              icon: 'fa-plane',
              title: "美食"
            },
            {
              icon: 'fa-car',
              title: "电影/演出"
            },
            {
              icon: 'fa-bank',
              title: '酒店住宿'
            },
            {
              icon: 'fa-subway',
              title: "休闲娱乐"
            },
            {
              icon: 'fa-anchor',
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

      }
    }
</script>

<style scoped lang="less">
#navTab{
  .mainNav{
    display: flex;
    justify-content: space-around;
    text-align: center;
    .routerPath{
      flex: 1;
      span{
        display: inline-block;
        width:40px;
        height:40px;
        border-radius: 20px;
        background:#ccc;
        position:relative;
        .fa{
          display: inline-block;
          font-size: 20px;
          position:absolute;
          left:50%;
          top:50%;
          transform:translate(-50%,-50%);

        }
      }
    }
  }

}
</style>

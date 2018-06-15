<template>
    <div class="slider" v-on:mouseover="stop()" v-on:mouseout="move()" v-on:touchstart="stop()">
      <div class="slideshow">
        <transition-group tag="ul" name="image">
          <li v-for="(img, index) in imgArray" :key="index" v-show="index===marke">
              <a href="#">
                <img :src="img.url" alt="">
              </a>
            </li>
        </transition-group>
      </div>
      <div class="bar">
        <span v-for="(item, index) in imgArray" :key="index" :class="{'active':index===marke}"
        @click="change(index)"></span>
      </div>
    </div>
</template>

<script>
  import a from '../../assets/image/sliperone.jpg'
    export default {
      name: "vuesliper",
      props:[],
      data(){
        return {
          imgArray: [
            {
              url: require('../../assets/image/sliperone.jpg')
            },
            {
              url: require('../../assets/image/slipertwo.jpg')
            },
            {
              url: require('../../assets/image/sliperthree.jpg')
            },
            {
              url: require('../../assets/image/sliperfour.jpg')
            },
            {
              url: require('../../assets/image/sliperfive.jpg')
            }
          ],
          marke:0,
          timer:null
        }
      },
      methods: {
        autoPlay(){
          this.marke ++;
          if(this.marke === this.imgArray.length) {
            this.marke = 0;
          }
        },
        play(){
          this.timer=setInterval(this.autoPlay,3400);
        },
        change(i){
          this.marke = i;
        },
        stop(){
          clearInterval(this.timer)
        },
        move(){
          this.timer = setInterval(this.autoPlay, 3400);
        }
      },
      mounted(){

      },
      created(){
        this.play();
      }

    }
</script>

<style scoped lang="less">
.slider{
  box-sizing: border-box;
  width:100%;
  height:150px;
  margin:0 auto 10px auto;
  /*overflow: hidden;*/
  position:relative;
  .slideshow{
    width:100%;
    height: 150px;
    .image-enter-active {
      transform: translateX(0);
      transition: all 1.5s ease;
    }
    .image-leave-active {
      transform: translateX(-100%);
      transition: all 1.5s ease;
    }
    .image-enter {
      transform: translateX(100%);
    }
    .image-leave {
      transform: translateX(0);
    }
    li{
      position:absolute;
      left:0;
      top:0;
      width:100%;
      img{
        width:100%;
        height:150px;
      }
    }
  }
  .bar {
    position:absolute;
    width:100%;
    bottom: 10px;
    margin:0 auto;
    z-index: 10;
    text-align:center;
    span{
      width:20px;
      height:4px;
      border:1px solid #ccc;
      display: inline-block;
      margin-right: 10px;
    }
    .active{
      background: red;
    }
  }
}
</style>

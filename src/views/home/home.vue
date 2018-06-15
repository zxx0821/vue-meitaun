<template>
  <div id="home">
    <headerTop singin-up="home" :placeholdertext="placeholdertext" :city="city">
    </headerTop>
    <vuesliper></vuesliper>
    <navbarTab></navbarTab>
  </div>
</template>

<script>
  import headerTop from '../../components/homeheaderTop/homeheaderTop';
  import vuesliper from '../../components/vuesliper/vuesliper';
  import navbarTab from '../../components/navbarTab/navbarTab';
    export default {
      name: "home",
      data(){
        return {
          city:'杭州',
          placeholdertext: '尾尾鲜无刺酸菜鱼'
        }
      },
      mounted(){

      },
      components: {
        headerTop,
        vuesliper,
        navbarTab
      },
      computed:{

      },
      methods: {
        reload(){
          console.log('x')
        }
      }
    }
</script>

<style scoped>

</style>

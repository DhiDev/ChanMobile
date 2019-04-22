<template>
    <Page  actionBarHidden="true">
    <ScrollView class="coverImage">

      

    </ScrollView>
    </Page>
</template>





<script>
    import Home from "./Home";
    import AddPages from "./AddPage";
    
    export default {

        data () {
    return {
      netTotal :'',
      eachPay: 0,
    }

  },
         methods: {
            back(){
                this.$navigateTo(Home, {
                            clearHistory: true
            }
                )},

}

        };
</script>

<style scoped lang="scss">

.coverImage {
    background-image: url("~/images/bill.png") ;
    background-repeat: no-repeat;
    //-webkit-background-size: cover;
    //-moz-background-size: cover;
    //-o-background-size: cover;
   // background-position: center;
    //background-size: cover;
      position: absolute;
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
  margin: auto;
  min-width: 50%;
  min-height: 50%;
  opacity: 1;
  width: 100%;
  max-width: 100%;
  height: auto;
}
</style>


<template>
    <Page class="page" actionBarHidden="true">
        <ScrollView class="coverImage">
            <StackLayout>
                    <ListView class="list-group" for="friend in friends">
                        <v-template>
                            <FlexboxLayout flexDirection="row" class="list-group-item">
                                <Label :text="friend.name" class="list-group-item-heading"
                                    style="width: 60%" />
							              <Label :text="friend.price" class="list-group-item-heading"
																	                                    style="width: 60%" />
                             <Label :text="friend.splity" class="list-group-item-heading"
																	                                    style="width: 60%" />                                                                             
                            </FlexboxLayout>
                        </v-template>
                    </ListView>
                    <StackLayout>
                      <Label :text="netTotal" class="list-group-item-heading"
																	                                    style="width: 60%" />
                <Button class="btn btn-primary" text="Continue" @tap="back"></Button>
                  </StackLayout>
            </StackLayout>
        </ScrollView>
    </Page>
</template>






<script>
    import Home from "./Home";
    import AddPages from "./AddPage";
    
    export default {
       props: ['netTotal', 'friends'],
        data () {
    return {
      netTotal : this.netTotal,
      friends: this.friends,
    }

  },
         methods: {
            back(){
                console.log(this.netTotal);
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
    -webkit-background-size: cover;
    -moz-background-size: cover;
    -o-background-size: cover;
    background-position: center;
    background-size: cover;
    position: absolute;
}

.list-group {
  margin-top:100px;
  height:1500px;
  margin-left:28px;
  margin-right:28px;
}
</style>


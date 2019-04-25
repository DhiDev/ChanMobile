<template>
    <Page actionBarHidden="true">
      <ScrollView >
        <FlexboxLayout class="page">

            <StackLayout class="form">
                    <TextView editable="false">
                    <FormattedString>
                        <Span text="You can use text attributes such as " />
                        <Span text="bold, " fontWeight="Bold" />
                        <Span text="italic " fontStyle="Italic" />
                        <Span text="and " />
                        <Span text="underline." textDecoration="Underline" />
                    </FormattedString>
                    </TextView>



            <StackLayout>
                <TextField class="input" ref="price"
                            hint="Total Price Inc Gst & Service Charge" keyboardType="phone" v-model="netTotal"></TextField>
            </StackLayout>

            <StackLayout>
                <Button class="btn btn-primary" text="Add a Person" @tap="addNewFriendForm"></Button>
            </StackLayout>

                <GridLayout rows="auto, auto, auto" v-for="(friend,index) in friends" :key="index">
                    <Button row="0" @tap="deleteFriendForm" class="faclose" :text="'X' | fonticon" horizontalAlignment="right" />
                    <StackLayout row="0" class="input-field">
                        <TextField class="input" hint="Name" v-model="friend.name"
                            returnKeyType="next" ></TextField>
                        <StackLayout class="hr-light"></StackLayout>
                    </StackLayout>

                    <StackLayout row="1" class="input-field">
                        <TextField class="input" ref="price"
                            hint="Price of the meal" keyboardType="phone" v-model="friend.price"></TextField>
                        <StackLayout class="hr-light"></StackLayout>
                    </StackLayout>
                </GridLayout>

                <Button text="Split"
                    @tap="spliter" class="btn btn-primary m-t-20"></Button>
            </StackLayout>

            <StackLayout>
                <Button class="btn btn-primary" text="Back" @tap="back"></Button>
            </StackLayout>
        </FlexboxLayout>
      </ScrollView>
    </Page>
</template>
<script>
    import Home from "./Home";
    import Result from "./Result";

export default {
  name: 'app',
  data () {
    return {
      netTotal :'',
      eachPay: 0,
      isHidden: true,
      split:0,


           friends: [{
               name:'',
               price:'',
               splity:''
             }]
    }

  },
  methods: {
            addNewFriendForm () {
                 this.friends.push({
                     name:'',
                     price:''
                 })
            },

            deleteFriendForm(index) {
                this.friends.splice(index, 1)  
            },

            spliter(){
                           for(var i = 0; i < this.friends.length; ++i){
                                let el= this.friends[i].price;
                                console.log(el);
                                let val = el.split('+');
                                el = val.reduce((a,c)=> a + Number(c), 0);
                                this.max = val.reduce((a,c)=> a + Number(c), 0);
                                this.friends[i].price = this.max;
                                console.log(this.friends[i].price);
                                }
                        let sum = this.friends.reduce((prev, cur) => {
                         return prev + parseInt(cur.price);               
                           },0); 
                        for(var i = 0; i < this.friends.length; ++i){
                            this.eachPay = this.friends[i].price;
                            this.split = (this.eachPay/sum)*this.netTotal;
                            this.friends[i].splity = this.split.toFixed(2);
                            console.log(`${this.friends[i].name} has to pay: MVR ${this.split.toFixed(2)}`);
                         }

                     this.$navigateTo(Result, {
                    props: {
                        netTotal: this.netTotal,
                        friends: this.friends
                    }

                   });

                  },
            back(){
                this.$navigateTo(Home, {
                            clearHistory: true
            }
                )},

}
}
</script>


<style scoped lang="scss">
    .page {
        align-items: center;
        flex-direction: column;
    }

    .form {
        margin-left: 30;
        margin-right: 30;
        flex-grow: 2;
        vertical-align: middle;
    }

    .logo {
        margin-bottom: 12;
        height: 90;
        font-weight: bold;
    }

    .header {
        horizontal-align: center;
        font-size: 25;
        font-weight: 600;
        margin-bottom: 70;
        text-align: center;
        color: #D51A1A;
    }

    .btn-primary {
        margin: 30 5 15 5;
    }

    .faclose {
        margin: 5;
    } 

    .login-label {
        horizontal-align: center;
        color: #A8A8A8;
        font-size: 16;
    }

    .sign-up-label {
        margin-bottom: 20;
    }

    .bold {
        color: #000000;
    }
</style>


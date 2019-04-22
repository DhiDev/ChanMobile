<template>
    <Page actionBarHidden="true">
        <FlexboxLayout class="page">
            <StackLayout class="form">
                <Image class="logo" src="~/images/logo.png"></Image>
                <Label class="header" text="CHANDAA"></Label>

                <GridLayout rows="auto, auto, auto">
                    <StackLayout>
                        <Label class="info" horizontalAlignment="center"
                       verticalAlignment="center">
                        <FormattedString>
                       <Span class="fa" text.decode="&#xf135; " />
                        <Span :text="message" />
                        </FormattedString>
                       </Label>
                    </StackLayout>
                </GridLayout>
            <StackLayout>
                <Button class="btn btn-primary" text="Continue" @tap="conti"></Button>
            </StackLayout>
        </StackLayout>

        </FlexboxLayout>
    </Page>
</template>

<script>
    import AddPage from "./AddPage";
    
    export default {
        computed: {
            message() {
                return "Blank {N}-Vue app";
            }
        },
        methods: {
            conti() {
                this.$navigateTo(AddPage, {
                            clearHistory: true
                 });
            }
        }
    };
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


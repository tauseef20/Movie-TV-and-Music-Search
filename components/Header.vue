<template>
  <div>
    <a-row class="navbarRow">
        <a-col align="center" class="NavTitle pt-2" :span="6">
        <img src="../static/navbar/tunefind-white-260x80.png" alt="">
        </a-col>
        <a-col  :span="12">
        <a-row class="pt-4">
            <NuxtLink to="/tvShows">
            <a-col class="signIn" :span="3">
                
                    TV Shows
                
            </a-col>
        </NuxtLink>
        <NuxtLink to="/movies">
            <a-col class="signIn" :span="3">
                Movies
            </a-col>
        </NuxtLink>
        <NuxtLink to="/games">
            <a-col class="signIn" :span="3">
                Games
            </a-col>
        </NuxtLink>
        <NuxtLink to="/music">
            <a-col class="signIn" :span="10">
                Treding Music
            </a-col>
        </NuxtLink>
        </a-row>
        </a-col>
        <a-col  :span="6">
            <div class="buttons pt-3">
                <a-button class="signIn" type="link">Sign In</a-button>
              
                    <a-button class="signUp">Sign Up</a-button>
        <!-- <a-button >Sign Up</a-button> -->
            </div>
       
        </a-col>
    </a-row>
  </div>
</template>

<script>
export default {

}
</script>

<style lang="scss">
@import "@/assets/global/shortHandClasses.scss";

.navbarRow{
    background: black;
    height: 80px;
    color: #fff;
    font-size: 16px;
    border-bottom: 5px solid #ee490e;
}
.signIn{
    color:#fff;
}
.signIn:hover{
    color:#ee490e;
    cursor: pointer;
}
.NavTitle img{
    width: 145px;
    height:45px;
    cursor: pointer;
}
.buttons .ant-btn{
    font-size: 16px;
}
.signUp{
    background:rgba(214,54,0,.7);
    color:#fff;
    border:1px solid #ff6735;
}
.signUp:hover{
    background:rgba(214,54,0,.7);
    color:#fff;
    border:1px solid #ff6735;
}
// .signUp:hover{
//     background:#b33405;
//     color:#ebc5b7;
//     border:2px solid #b33405;
// }

</style>
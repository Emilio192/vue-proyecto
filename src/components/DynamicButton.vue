<template>
     <a @click="count++" :class="'figure-btn '+ bg">
    <span
      class="iconify"
      data-icon="bx:bx-user-pin"
      style="color: white;"
      data-width="64"
      data-height="64"
    ></span>
    <p :class="color">
      {{buttonText + count + " veces "}}
    </p>
    <div :class="'squarebg '+bgFigure"></div>
  </a>
</template>

<script>
    export default{
        data(){
            return{
                count:0
            }
        },
        props:{
            buttonText:String,
            bg:String,
            bgFigure:String,
            color:String
        },
        methods:{
            add(){
                this.count++
            }
        }
    }
</script>
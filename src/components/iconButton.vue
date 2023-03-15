<template>
    <a :class="'icon-btn '+ bg">
        <iconify-icon :icon="icon" width="50px" height="50px" :class="color"></iconify-icon>
    <p :class="color">{{buttonText}}</p>
  </a>
</template>

<script>
    export default{
        props:{
            buttonText:String,
            icon:String,
            color:String,
            bg:String
        }
    }
</script>
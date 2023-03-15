<template>
    <div class="container">
        <div class="row">
            <div class="col-12">
                <h1>Sidebar</h1>
            </div>
            <div class="col-12">
                <iconButton buttonText="Soy un boton de icono" icon="fxemoji:pencil" color="text_1" bg="bg_3"></iconButton>
            </div>
            <div class="col">
                <DynamicButton buttonText="me has presionado " bg="bg_dg-3" color="text_1"  bgFigure="bg_dg-3"></DynamicButton>
            </div>
        </div>
    </div>
</template>

<script>
    import iconButton from "./iconButton.vue";
    import DynamicButton from "./DynamicButton.vue";

    export default{
        components:{
    iconButton,
    DynamicButton,
}
    }

</script>
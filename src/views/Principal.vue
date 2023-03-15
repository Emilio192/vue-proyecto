<template>
    <div class="container">
        <div class="row">
            <div class="col-12">
                <h1>Principal</h1>
            </div>
            <div class="col">
                <Bannerinfo bannerTitle="UAA" bannerText="Universidad Autonoma De Aguascalientes" bannerButtonText="Ir al Sitio" buttonLink="https://www.uaa.mx/portal/"></Bannerinfo>
            </div>
        </div>
    </div>
</template>

<script>
    import Bannerinfo from "../components/Bannerinfo.vue";

    export default{
        components:{
            Bannerinfo,
        }
    }
</script>
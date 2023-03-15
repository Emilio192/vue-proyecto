<template>
    <div class="container">
        <div class="row">
            <div class="col">
                <div class="banner"
                    style="background:linear-gradient(0deg, rgba(0,0,0,1) 0%, rgba(0,0,0,0.2) 100%), url(https://source.unsplash.com/random);">
                    <div class="item1">
                        <p class="title">
                            {{bannerTitle}}
                        </p>
                    </div>
                    <div class="item2">
                        <p class="content">
                            {{bannerText}}

                        </p>
                    </div>
                    <div class="item3">
                        <a :href="buttonLink" class="btn btn-primary">{{bannerButtonText}}</a>
                    </div>
                </div>
            </div>
        </div>
    </div>
</template>

<script>
    export default{
        props: {
            bannerTitle: String,
            bannerText: String,
            bannerButtonText: String,
            buttonLink: String
        }
    }
</script>
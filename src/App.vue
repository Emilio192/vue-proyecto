<template>
  <!-- header -->
  <header>
    <Header></Header>
  
    <!-- header secundario -->
    <Banner></Banner>
  </header>

  <nav>
    <!-- navbar -->
    <Navbar></Navbar>
  </nav>

  <main>
    <div class="container">
      <div class="row">
        <div class="col-md-8">
          <router-view></router-view>
        </div>
        <div class="col-md-4">
          <!-- Sidebar -->
          <Sidebar></Sidebar>
        </div>
      </div>
    </div>
  </main>
  <!-- <Bannerinfo></Bannerinfo> -->

  <Footer></Footer>
  <!-- <nav>
    <router-link to="/">Home</router-link> |
    <router-link to="/about">About</router-link>
  </nav>
  <router-view/> -->
</template>


<script>
  // @ is an alias to /src
  import Header from '@/components/Header.vue'
  import Banner from '@/components/banner.vue'
import Navbar from '@/components/Navbar.vue';
import Sidebar from '@/components/Sidebar.vue';
import Footer from '@/components/Footer.vue';
import Bannerinfo from '@/components/Bannerinfo.vue';


  
  export default {
    name: 'HomeView',
    components: {
    Header,
    Banner,
    Navbar,
    Sidebar,
    Footer,
    Bannerinfo
}
  }
  
  </script>

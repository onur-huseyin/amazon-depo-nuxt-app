<template>
  <Menu/>
  <!-- Hero Start -->
  <section class="bg-half-260 border-bottom agency-wrapper d-table w-100" id="home">
    <div class="container">
      <div class="row align-items-center justify-content-between">
        <div class="col-lg-6 col-md-7 order-1 order-md-2">
          <div class="title-heading mt-4 ms-lg-5 ps-lg-5">
            <h1 class="heading mb-3"> Ürün  <span class="text-primary">Arama </span></h1>
            <p class="para-desc text-muted">Amazon'da gerçek zamanlı ürün araştırması için başka bir uygulama ya da yazılıma ihtiyaç duymadan tek bir ekrandan anlık ürün taraması yapın.</p>
          </div>
        </div><!--end col-->

        <div class="col-lg-5 col-md-5 order-2 order-md-1 mt-4 pt-2 mt-sm-0 pt-sm-0">
          <iframe data-v-416ec634="" width="560" height="315" src="https://www.youtube.com/embed/uAJyev1IPyY" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen="allowfullscreen"></iframe>        </div>
      </div><!--end row-->
    </div><!--end container-->
  </section><!--end section-->
  <!-- Hero End -->
  <div class="container mt-100 mt-60">
    <div class="row align-items-center">
      <div class="col-lg-7 col-md-6 d-flex justify-content-lg-end">
        <img src="@/assets/images/urun-arama-filtreleri-easy-shipping.png" class="img-fluid w-75" alt="">
      </div><!--end col-->

      <div class="col-lg-5 col-md-6 mt-4 mt-sm-0 pt-2 pt-sm-0">
        <div class="section-title ms-lg-3">
          <p style="font-size: 18px">Easyinventory’nin yüzlerce sunucusu ile dakikalar içinde binlerce ürünü gerçek zamanlı tarayıp, filtre ve ayarlarınıza uygun ürünleri kolayca envanterinize ekleyebilirsiniz.
            <br> <br>Taramak istediğiniz sayfalar bulut sunucularımıza aktarılır ve ürünler bulut tabanlı arama servisimizde aratılır. Bu sırada bilgisayarınızın açık olmasına gerek yoktur. Bu durum Amazon tarafından IP’nizin engellenmesini de önlemektedir.</p>
        </div>
      </div><!--end col-->
    </div><!--end row-->
  </div><!--end container-->
  <div class="container mt-100 mt-60">
    <div class="row align-items-center justify-content-end">
      <div class="col-lg-5 col-md-6 mt-4 mt-sm-0 pt-2 pt-sm-0">
        <div class="section-title ms-lg-3">
          <p style="font-size: 18px">Ayrıca Easyinventory panelinde yer alan “ASIN Listesi ile Filtreleme Yap” özelliği ile topladığınız ASIN’leri liste şeklinde yazıp taratabilir ve uygun ürünleri hızlıca mağazanıza ekleyebilirsiniz. Bu özellik sayesinde Amazon sayfalarında gezerken gözünüze takılan ürünleri kolayca filtrelerden geçirebilir ve mağazanıza yükleyebilirsiniz.
            <br>Tarama işlemini cep telefonunuzdan da başlatabilir, böylece bilgisayara erişemediğiniz durumlarda zamandan tasarruf edebilirsiniz.
          </p>
        </div>
      </div><!--end col-->
      <div class="col-lg-6 col-md-6">
        <img src="@/assets/images/asin-ile-urun-arama-easy-shipping.png" class="img-fluid w-75" alt="">
      </div><!--end col-->
    </div><!--end row-->
  </div><!--end container-->
  <OtherFeature/>
  <!-- Back to top -->
  <a href="#" onclick="topFunction()" id="back-to-top" class="back-to-top fs-5"><i class="uil uil-arrow-up align-middle"></i></a>
  <!-- Back to top -->
  <Footer/>
</template>

<script>
export default {
  name: "urun-arama"
}
</script>

<style scoped>

</style>
<template>
  <Menu/>
  <!-- Hero Start -->
  <section class="bg-half-260 border-bottom agency-wrapper d-table w-100" id="home">
    <div class="container">
      <div class="row align-items-center">
        <div class="col-lg-7 col-md-7 order-1 order-md-2">
          <div class="title-heading mt-4 ms-lg-5 ps-lg-5">
            <h1 class="heading mb-3">Satıcı Markalı   <span class="text-primary">Ürün</span></h1>
            <p class="para-desc text-muted">Satıcı Markalı ürün: Kaynak mağazadaki ürünün markası ile mağaza adının aynı olması durumudur.
            </p>
          </div>
        </div><!--end col-->

        <div class="col-lg-5 col-md-5 order-2 order-md-1 mt-4 pt-2 mt-sm-0 pt-sm-0">
          <img src="@/assets/images/selling.svg" class="img-fluid" alt="">
        </div>
      </div><!--end row-->
    </div><!--end container-->
  </section><!--end section-->
  <!-- Hero End -->
  <div class="container mt-100 mt-60">
    <div class="row align-items-center justify-content-center">
      <div class="col-lg-6 col-md-6">
        <img src="@/assets/images/urun-ornek.png" class="img-fluid w-75" alt="">
      </div><!--end col-->

      <div class="col-lg-4 col-md-6 mt-4 mt-sm-0 pt-2 pt-sm-0">
        <div class="section-title ms-lg-3">
          <p style="font-size: 18px">Satıcı Markalı ürün: Kaynak mağazadaki ürünün markası ile mağaza adının aynı olması durumudur.</p>
        </div>
      </div><!--end col-->
    </div><!--end row-->
  </div><!--end container-->
  <div class="container mt-100 mt-60">
    <div class="row align-items-center justify-content-end">
      <div class="col-lg-6 col-md-6 mt-4 mt-sm-0 pt-2 pt-sm-0">
        <div class="section-title ms-lg-3">
          <p style="font-size: 18px">Easyinventory mağaza güvenliğinizi korumak amacıyla marka sahibi satıcının sattığı ürünleri tespit eder ve envanterinize yüklemez. Ürünler Trademark olarak kayıtlı olmasa da satıcı ürününü izinsiz sattığınız için Amazon ile iletişime geçebilir ve fikri mülkiyet ihlali yaptığınız için sizi şikayet edebilir. Bu filtre ile marka ve mağaza ismi aynı olan ürünleri eleyebilir ve mağaza sağlığınızı koruyabilirsiniz..</p>
        </div>
      </div><!--end col-->
      <div class="col-lg-6 col-md-6">
        <img src="@/assets/images/filtre-urun.png" class="img-fluid w-75" alt="">
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
  name: "satici-markali-urunler"
}
</script>

<style scoped>

</style>
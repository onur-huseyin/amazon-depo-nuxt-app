<template>
  <Menu/>
  <!-- Hero Start -->
  <section class="bg-half-260 border-bottom agency-wrapper d-table w-100" id="home">
    <div class="container">
      <div class="row align-items-center">
        <div class="col-lg-7 col-md-7 order-1 order-md-2">
          <div class="title-heading mt-4 ms-lg-5 ps-lg-5">
            <h1 class="heading mb-3"> Mağaza  <span class="text-primary">Karşılaştırma </span></h1>
            <p class="para-desc text-muted">Amazon'da rekabet ederken, rakip mağazaları tek tek kontrol etmekle uğraşmayın.</p>
          </div>
        </div><!--end col-->

        <div class="col-lg-5 col-md-5 order-2 order-md-1 mt-4 pt-2 mt-sm-0 pt-sm-0">
          <img src="@/assets/images/compare-retail-store-thumbnail.svg" class="img-fluid" alt="">
        </div>
      </div><!--end row-->
    </div><!--end container-->
  </section><!--end section-->
  <!-- Hero End -->
  <div class="container mt-100 mt-60">
    <div class="row align-items-center justify-content-center">
      <div class="col-lg-7 col-md-6 d-flex justify-content-lg-end">
        <img src="@/assets/images/magaza-karsilastirma-filtre-ayarlari.png" class="img-fluid w-75" alt="">
      </div><!--end col-->

      <div class="col-lg-5 col-md-6 mt-4 mt-sm-0 pt-2 pt-sm-0">
        <div class="section-title ms-lg-3">
          <p style="font-size: 18px">Ürünün satıcı sayısını ve rakiplerinizle aranızdaki maksimum fiyat farkı oranını manuel olarak belirleyebileceğiniz gibi, <span style="background-color: #fbeeb8;">“Lowest olamayacağım ürünleri ele”</span> seçeneğiyle işi tamamen gelişmiş Easyinventory algoritmasına bırakabilirsiniz.</p>
        </div>
      </div><!--end col-->
    </div><!--end row-->
  </div><!--end container-->
  <div class="container mt-100 mt-60">
    <div class="row align-items-center justify-content-end">
      <div class="col-lg-5 col-md-6 mt-4 mt-sm-0 pt-2 pt-sm-0">
        <div class="section-title ms-lg-3">
          <p style="font-size: 18px">Ayrıca <b>Prime, SBA, FBA ve aynı satıcı</b> olan ürünleri liste dışı bırakabilirsiniz. SBA(Sold By Amazon): Amazon tarafından satılan ve listelerde amazon.ca, amazon.com, amazon.us çıkan ürünlerdir.</p>
        </div>
      </div><!--end col-->
      <div class="col-lg-6 col-md-6">
        <img src="@/assets/images/magaza-karsilastirma-ornegi.png" class="img-fluid w-75" alt="">
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
  name: "magaza-karsilastirma"
}
</script>

<style scoped>

</style>
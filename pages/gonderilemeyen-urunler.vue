<template>
  <Menu/>
  <!-- Hero Start -->
  <section class="bg-half-260 border-bottom agency-wrapper d-table w-100" id="home">
    <div class="container">
      <div class="row align-items-center justify-content-between">
        <div class="col-lg-6 col-md-7 order-1 order-md-2">
          <div class="title-heading mt-4 ms-lg-5 ps-lg-5">
            <h1 class="heading mb-3"> Gönderilmeyen <span class="text-primary">Ürünler</span></h1>
            <p class="para-desc text-muted">Kaynak mağazada bulunan ürünlerin hepsi, Amazon tarafından satış ülkesine gönderilmeyebilir. Easyinventory ile bu ürünleri tek bir tık ile eleyebilirsiniz.</p>
          </div>
        </div><!--end col-->

        <div class="col-lg-5 col-md-5 order-2 order-md-1 mt-4 pt-2 mt-sm-0 pt-sm-0">
          <iframe width="560" height="315" src="https://www.youtube.com/embed/XrIkrehxY38" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen="allowfullscreen"></iframe>        </div>
      </div><!--end row-->
    </div><!--end container-->
  </section><!--end section-->
  <!-- Hero End -->
  <div class="container mt-100 mt-60">
    <div class="row align-items-center justify-content-start">
      <div class="col-lg-6 col-md-6 d-flex justify-content-end">
        <img src="@/assets/images/not-send.png" class="img-fluid w-75" alt="">
      </div><!--end col-->

      <div class="col-lg-5 col-md-6 mt-4 mt-sm-0 pt-2 pt-sm-0">
        <div class="section-title ms-lg-3">
          <p style="font-size: 18px">Easyshipping ara depo hizmetinden yararlanmıyorsanız, kaynak mağazanızda tüm filtrelerinize uygun olsa dahi satış mağazanızın bulunduğu ülkeye gönderilmeyen ürünleri elemek için Satış Ülkesine Gönderilmeyen Ürünler filtresini kullanabilirsiniz.</p>
        </div>
      </div><!--end col-->
    </div><!--end row-->
  </div><!--end container-->
  <div class="container mt-100 mt-60">
    <div class="row align-items-center justify-content-end">
      <div class="col-lg-5 col-md-6 mt-4 mt-sm-0 pt-2 pt-sm-0">
        <div class="section-title ms-lg-3">
          <p style="font-size: 18px">Mağaza envanterinizi genişletmek ve bu ürünleri listelemek isterseniz Easyshipping ile güvenli ve hızlı gönderim yapabilirsiniz. Bu sayede yüksek kâr oranları ve ürün çeşitliliği ile rakiplerinizin önüne geçebilirsiniz.</p>
        </div>
      </div><!--end col-->
      <div class="col-lg-6 col-md-6">
        <img src="@/assets/images/kargo-vergi.png" class="img-fluid w-75" alt="">
      </div><!--end col-->
    </div><!--end row-->
  </div><!--end container-->
  <Avantage/>
  <OtherFeature/>
  <!-- Back to top -->
  <a href="#" onclick="topFunction()" id="back-to-top" class="back-to-top fs-5"><i class="uil uil-arrow-up align-middle"></i></a>
  <!-- Back to top -->
  <Footer/>
</template>
<script>
export default {
  name: "gonderilemeyen-urunler"
}
</script>

<style scoped>

</style>
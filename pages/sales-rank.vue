<template>
  <Menu/>
  <!-- Hero Start -->
  <section class="bg-half-260 border-bottom agency-wrapper d-table w-100" id="home">
    <div class="container">
      <div class="row align-items-center">
        <div class="col-lg-7 col-md-7 order-1 order-md-2">
          <div class="title-heading mt-4 ms-lg-5 ps-lg-5">
            <h1 class="heading mb-3"> Sales <span class="text-primary">Rank </span></h1>
            <p class="para-desc text-muted">Sales rank, ürünlerin kendi kategorilerindeki satış durumuna göre sıralamasını gösterir. Ürünlerin satış potansiyelleri ve sırası sıklıkla değişir.</p>
          </div>
        </div><!--end col-->

        <div class="col-lg-5 col-md-5 order-2 order-md-1 mt-4 pt-2 mt-sm-0 pt-sm-0">
          <img src="@/assets/images/competition.svg" class="img-fluid" alt="">
        </div>
      </div><!--end row-->
    </div><!--end container-->
  </section><!--end section-->
  <!-- Hero End -->
  <div class="container mt-100 mt-60">
    <div class="row align-items-center justify-content-center">
      <div class="col-lg-7 col-md-6 d-flex justify-content-lg-end">
        <img src="@/assets/images/sales-rank-nedir.png" class="img-fluid w-75" alt="">
      </div><!--end col-->

      <div class="col-lg-5 col-md-6 mt-4 mt-sm-0 pt-2 pt-sm-0">
        <div class="section-title ms-lg-3">
          <p style="font-size: 18px">Siparişlerinizi arttırmanın en iyi yollarından biri, mağazanıza yüksek satış potansiyeli olan ürünler eklemektir. Envanterinizdeki her ürünün satış sıralaması sıklıkla değişir ve tek tek sales rank değerlerini kontrol etmeniz oldukça zahmetlidir.</p>
        </div>
      </div><!--end col-->
    </div><!--end row-->
  </div><!--end container-->
  <div class="container mt-100 mt-60">
    <div class="row align-items-center justify-content-end">
      <div class="col-lg-5 col-md-6 mt-4 mt-sm-0 pt-2 pt-sm-0">
        <div class="section-title ms-lg-3">
          <p style="font-size: 18px">Easyinventory ile sales rankı yüksek ürünleri hem tarama sırasında hem de güncelleme işlemlerinde envanterinize ekleyebilir ya da çıkarabilirsiniz.
            <br> <br>Amazon.com'a yeni eklenen ancak satış ihtimali yüksek olan bir ürünün sales rank değerinin çok düşük olabileceğini unutmayın.</p>
        </div>
      </div><!--end col-->
      <div class="col-lg-6 col-md-6">
        <img src="@/assets/images/sales-rank-filtresi.png" class="img-fluid w-75" alt="">
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
  name: "sales-rank"
}
</script>

<style scoped>

</style>
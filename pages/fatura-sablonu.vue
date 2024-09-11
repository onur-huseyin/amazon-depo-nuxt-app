<template>
  <Menu/>
  <!-- Hero Start -->
  <section class="bg-half-260 border-bottom agency-wrapper d-table w-100" id="home">
    <div class="container">
      <div class="row align-items-center">
        <div class="col-lg-7 col-md-7 order-1 order-md-2">
          <div class="title-heading mt-4 ms-lg-5 ps-lg-5">
            <h1 class="heading mb-3">Fatura   <span class="text-primary">Şablonu</span></h1>
            <p class="para-desc text-muted">Teslim edilen ürünleriniz için müşterilerinizden feedback isterken her şeyi easyinventory üzerinden yönetin! Kriterlerinize uyan tüm ürünler için, belirlediğiniz zaman ve feedback şablonu ile mesajınız müşterinize otomatik olarak gönderilir.</p>
          </div>
        </div><!--end col-->

        <div class="col-lg-5 col-md-5 order-2 order-md-1 mt-4 pt-2 mt-sm-0 pt-sm-0">
          <img src="@/assets/images/support_banner.svg" class="img-fluid" alt="">
        </div>
      </div><!--end row-->
    </div><!--end container-->
  </section><!--end section-->
  <!-- Hero End -->
  <div class="container mt-100 mt-60">
    <div class="row align-items-center">
      <div class="col-lg-7 col-md-6 d-flex justify-content-lg-end">
        <img src="@/assets/images/invoice-preview.png" class="img-fluid w-75" alt="">
      </div><!--end col-->

      <div class="col-lg-4 col-md-6 mt-4 mt-sm-0 pt-2 pt-sm-0">
        <div class="section-title ms-lg-3">
          <p style="font-size: 18px">Sipariş detay sayfasında <b>"Müşteri Bilgileri"</b> bölümünde yer alan <b>"Fatura"</b> kısmına tıklayarak, siparişe dair faturanızı anında görüntüleyebilirsiniz. Üstelik faturadaki bilgileri değiştirmek için, tüm sipariş verisini değiştirmenize gerek yok!</p>
        </div>
      </div><!--end col-->
    </div><!--end row-->
  </div><!--end container-->
  <div class="container mt-100 mt-60">
    <div class="row align-items-center justify-content-end">
      <div class="col-lg-4 col-md-6 mt-4 mt-sm-0 pt-2 pt-sm-0">
        <div class="section-title ms-lg-3">
          <p style="font-size: 18px">Fatura üzerinde dilediğiniz değişiklikleri zahmetsizce yapabilirsiniz. Firmanızın logosunu faturanıza ekleyebilir, 5 adet değişik fatura renk temasından dilediğinizi seçebilirsiniz.</p>
        </div>
      </div><!--end col-->
      <div class="col-lg-7 col-md-6">
        <img src="@/assets/images/invoice-create.png" class="img-fluid w-75" alt="">
      </div><!--end col-->
    </div><!--end row-->
  </div><!--end container-->
  <!-- Back to top -->
  <a href="#" onclick="topFunction()" id="back-to-top" class="back-to-top fs-5"><i class="uil uil-arrow-up align-middle"></i></a>
  <!-- Back to top -->
  <Footer/>
</template>

<script>
export default {
  name: "fatura-sablonu"
}
</script>

<style scoped>

</style>
<template>
  <Menu/>
  <!-- Hero Start -->
  <section class="bg-half-260 border-bottom agency-wrapper d-table w-100" id="home">
    <div class="container">
      <div class="row align-items-center justify-content-center flex-row-reverse">
        <div class="col-lg-6 col-md-7 order-1 order-md-2">
          <div class="title-heading mt-4 ms-lg-5 ps-lg-5">
            <h1 class="heading mb-3"> Easy  <span class="text-primary">Shipping</span></h1>
            <p class="para-desc text-muted">Çoklu ara depo sistemimiz Easy Shipping ile bekleyen gönderiler, ara depo ile haberleşme, ticketlar ve çok daha fazlasını tek bir panelden yönetin!</p>
          </div>
        </div><!--end col-->
        <div class="col-lg-6 col-md-5 order-2 order-md-1 mt-4 pt-2 mt-sm-0 pt-sm-0">
          <img src="@/assets/images/warehouse.svg" alt="">
        </div>
      </div><!--end row-->
    </div><!--end container-->
  </section><!--end section-->
  <!-- Hero End -->
  <div class="container mt-100 mt-60">
    <div class="row align-items-center">
      <div class="col-lg-7 col-md-6 d-flex justify-content-lg-end">
        <img src="@/assets/images/easy-shipping.png" class="img-fluid w-75" alt="">
      </div><!--end col-->

      <div class="col-lg-5 col-md-6 mt-4 mt-sm-0 pt-2 pt-sm-0">
        <div class="section-title ms-lg-3">
          <p style="font-size: 18px">Sisteme entegre ara depolardan fiyat, teslimat süresi, kargo firması gibi alternatiflerden dilediğinizi seçin. Easyinventory envanterinizi fiyatlandırırken sizin için her zaman en uygun fiyatı seçecektir.</p>
        </div>
      </div><!--end col-->
    </div><!--end row-->
  </div><!--end container-->
  <div class="container mt-100 mt-60">
    <div class="row align-items-center justify-content-end">
      <div class="col-lg-5 col-md-6 mt-4 mt-sm-0 pt-2 pt-sm-0">
        <div class="section-title ms-lg-3">
          <p style="font-size: 18px">Belirleyeceğiniz akıllı dönüştürme kuralları ile SKU’ya gerek kalmadan ürününüzün ara depo ile mi yoksa global gönderim olarak mı listeleneceğine Easyinventory karar verecektir. Talebinize göre tüm ürünlerinizi sadece depo, sadece global ya da karma olarak listeleyebilirsiniz.
          </p>
        </div>
      </div><!--end col-->
      <div class="col-lg-6 col-md-6">
        <img src="@/assets/images/easy-not.png" class="img-fluid w-75" alt="">
      </div><!--end col-->
    </div><!--end row-->
  </div><!--end container-->
  <Avantage/>
  <div class="container mt-100 mt-60">
    <div class="row align-items-center justify-content-end">
      <div class="col-lg-5 col-md-6 mt-4 mt-sm-0 pt-2 pt-sm-0">
        <div class="section-title ms-lg-3">
          <p style="font-size: 18px">Ayrıca olası bir suspend durumunda ara depolardan temin edeceğiniz ürün faturası, ara depo sözleşmesi ve satıcı sertifikası appeal yazımında size avantaj sağlayacaktır.
          </p>
        </div>
      </div><!--end col-->
      <div class="col-lg-6 col-md-6">
        <img src="@/assets/images/cargo.png" class="img-fluid w-75" alt="">
      </div><!--end col-->
    </div><!--end row-->
  </div><!--end container-->
  <div class="container mt-100 mt-60">
    <div class="row align-items-center justify-content-end">
      <div class="col-lg-6 col-md-6">
        <img src="@/assets/images/firmalar.png" class="img-fluid w-75" alt="">
      </div><!--end col-->
      <div class="col-lg-5 col-md-6 mt-4 mt-sm-0 pt-2 pt-sm-0">
        <div class="section-title ms-lg-3">
          <p style="font-size: 18px">Ara depoları sadece gönderimi olmayan ya da kargo-vergi fiyatı belirsiz ürünler için değil, envanterinizdeki tüm ürünler için tercih edebilirsiniz. Bu sayede mağaza sağlığınız ve güvenirliğiniz daha da artacaktır.
            <br> <br> Tüm Easyinventory kullanıcıları için Easyshipping ve ShipHack ara depo hizmetleri ücretsizdir.
          </p>
        </div>
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
import Avantage from "../components/Avantage.vue";

export default {
  name: "ara-depo",
  components: {Avantage}
}
</script>

<style scoped>

</style>
<template>
  <Menu/>
  <!-- Hero Start -->
  <section class="bg-half-260 border-bottom agency-wrapper d-table w-100" id="home">
    <div class="container">
      <div class="row align-items-center">
        <div class="col-lg-7 col-md-7 order-1 order-md-2">
          <div class="title-heading mt-4 ms-lg-5 ps-lg-5">
            <h1 class="heading mb-3">Otomatik  <span class="text-primary">Sipariş</span></h1>
            <p class="para-desc text-muted">Her gün gelen siparişleri tek tek göndermekle vakit kaybetmeyin. Zengin puanlama ve filtreleme seçeneği ile ayarlarınızı yapın ve gerisini Easyinventory’nin Otomatik Sipariş özelliğine bırakın. Size sadece feedbackleri okumak kalsın.</p>
          </div>
        </div><!--end col-->

        <div class="col-lg-5 col-md-5 order-2 order-md-1 mt-4 pt-2 mt-sm-0 pt-sm-0">
          <img src="@/assets/images/illustrator/working_with_computer.svg" class="img-fluid" alt="">
        </div>
      </div><!--end row-->
    </div><!--end container-->
  </section><!--end section-->
  <!-- Hero End -->
  <div class="container mt-100 mt-60">
    <div class="row align-items-center">
      <div class="col-lg-7 col-md-6">
        <img src="@/assets/images/saas/2.png" class="img-fluid" alt="">
      </div><!--end col-->

      <div class="col-lg-4 col-md-6 mt-4 mt-sm-0 pt-2 pt-sm-0">
        <div class="section-title ms-lg-3">
          <p style="font-size: 18px">Siparişlerinizi tek ekrandan yönetebilirsiniz. Easyinventory gelen siparişlerinizi öncelik sırasına göre listeler ve tek tık ile siparişlerinizi gönderir. Sizin için geliştirdiğimiz otomatik sipariş ilgili ürün sayfasına gider, ürün satıcılarını belirler ve bunları sizin belirlediğiniz kriterlere göre puanlar. İsterseniz gelişmiş algoritmamız ile ürünü alacağınız satıcıyı biz seçebilir, isterseniz de satıcı sayfasında puanlama yaparak sizin seçim yapmanızı bekleyebiliriz.</p>
        </div>
      </div><!--end col-->
    </div><!--end row-->
  </div><!--end container-->
  <div class="container mt-100 mt-60">
    <div class="row align-items-center justify-content-end">
      <div class="col-lg-4 col-md-6 mt-4 mt-sm-0 pt-2 pt-sm-0">
        <div class="section-title ms-lg-3">
          <p style="font-size: 18px">Ödeme yapmak istediğiniz kartı tanımlayabilir ve ödeme seçeneklerini çok hızlı bir şekilde bizim doldurmamızı sağlayabilirsiniz. İsterseniz Gift Card ile öde seçeneğini seçebilir ve ödemelerinizin gift card aracılığıyla yapılmasını sağlayabilirsiniz. Gift kartınız bittiğinde durup sizi uyarabilir ya da belirlediğiniz kart ile ödemeye devam edebiliriz. İşte bu kadar kolay!</p>
        </div>
      </div><!--end col-->
      <div class="col-lg-7 col-md-6">
        <img src="@/assets/images/saas/urun-bilgi.png" class="img-fluid" alt="">
      </div><!--end col-->
    </div><!--end row-->
  </div><!--end container-->
  <div class="container mt-100 mt-60">
    <div class="row align-items-center justify-content-center">
      <div class="col-lg-6 col-md-6">
        <img src="@/assets/images/saas/urun-gonder.png" class="img-fluid" alt="">
      </div><!--end col-->

      <div class="col-lg-4 col-md-6 mt-4 mt-sm-0 pt-2 pt-sm-0">
        <div class="section-title ms-lg-3">
          <p style="font-size: 18px">Sizin yapmanız gereken tek şey Place Your Order butonuna basmak. Gönderdiğiniz siparişlerinizi zamanı geldiğinde satıcı hesabınızda onaylayabilir (confirm), tracking ID’lerini takip edip, Satıcı hesabınıza yazabiliriz.</p>
        </div>
      </div><!--end col-->
    </div><!--end row-->
  </div><!--end container-->
  <CommentOne/>
  <OtherFeature/>
  <!-- Back to top -->
  <a href="#" onclick="topFunction()" id="back-to-top" class="back-to-top fs-5"><i class="uil uil-arrow-up align-middle"></i></a>
  <!-- Back to top -->
  <Footer/>
</template>

<script>
import CommentOne from "../components/CommentOne.vue";
import OtherFeature from "../components/OtherFeature.vue";

export default {
  name: "otomatik-siparis",
  components: {OtherFeature, CommentOne}
}
</script>

<style scoped>

</style>
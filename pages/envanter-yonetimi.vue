<template>
  <Menu/>
  <!-- Hero Start -->
  <section class="bg-half-260 border-bottom agency-wrapper d-table w-100" id="home">
    <div class="container">
      <div class="row align-items-center justify-content-between">
        <div class="col-lg-7 col-md-7 order-1 order-md-2">
          <div class="title-heading mt-4 ms-lg-5 ps-lg-5">
            <h1 class="heading mb-3"> Envanter  <span class="text-primary">Yönetimi  </span></h1>
            <p class="para-desc text-muted">Envanter önizleme sayfasında, ürünlerinizin toplu olarak Amazon mağazanızda nasıl göründüğüne ve tüm detaylarına ulaşabilirsiniz.</p>
          </div>
        </div><!--end col-->

        <div class="col-lg-5 col-md-5 order-2 order-md-1 mt-4 pt-2 mt-sm-0 pt-sm-0">
          <iframe width="500" height="315" src="https://www.youtube.com/embed/PvSqf2SozmU" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen="allowfullscreen"></iframe>
        </div>
      </div><!--end row-->
    </div><!--end container-->
  </section><!--end section-->
  <!-- Hero End -->
  <div class="container mt-100 mt-60">
    <div class="row align-items-center">
      <div class="col-lg-8 col-md-6 ">
        <img src="@/assets/images/envanter-sayfası.png" class="img-fluid w-75" alt="">
      </div><!--end col-->

      <div class="col-lg-4 col-md-6 mt-4 mt-sm-0 pt-2 pt-sm-0 ">
        <div class="section-title ms-lg-3">
          <p style="font-size: 18px">Envanter Güncelleme ayarlarında, mağazanızdaki ürünlerin filtrelenmesi için belirlediğiniz kurallar yer almaktadır. EasyInventory zengin ve karşılaştırmalı filtre seçenekleri ile tüm envanterinizi günde 6 kez otomatik olarak günceller.
          </p>
        </div>
      </div><!--end col-->
    </div><!--end row-->
  </div><!--end container-->
  <div class="container mt-100 mt-60">
    <div class="row align-items-center justify-content-end">
      <div class="col-lg-5 col-md-6 mt-4 mt-sm-0 pt-2 pt-sm-0">
        <div class="section-title ms-lg-3">
          <p style="font-size: 18px">Ayrıca güncelleme sıklığını değiştirebilir ya da Envanter Önizleme sayfasında bulunan “Şimdi Güncelle” butonu ile anlık olarak da güncelleyebilirsiniz.
            <br><br>Zengin ve karşılaştırmalı filtre seçeneklerimize Özellikler’den ulaşabilirsiniz.
          </p>
        </div>
      </div><!--end col-->
      <div class="col-lg-6 col-md-6">
        <img src="@/assets/images/envanter-istatistikleri-easy-shipping.png" class="img-fluid w-75" alt="">
      </div><!--end col-->
    </div><!--end row-->
  </div><!--end container-->
  <div class="container mt-100 mt-60">
    <div class="row align-items-center">
      <div class="col-lg-6 col-md-6 ">
        <img src="@/assets/images/cok-sattigim-urunler.png" class="img-fluid w-100" alt="">
      </div><!--end col-->

      <div class="col-lg-5 col-md-6 mt-4 mt-sm-0 pt-2 pt-sm-0 ">
        <div class="section-title ms-lg-3">
          <p style="font-size: 18px">Envanter önizleme sayfasında, ürünlerinizin toplu olarak Amazon mağazanızda nasıl göründüğüne ve tüm detaylarına ulaşabilirsiniz.
            <br><br>Ürünlerin genel bilgilerinin yanı sıra, minimum, standart, maksimum ve güncel satış fiyatları, stok durumu, ürün maliyeti, Easypricer durumu (Lowest, buybox, rakip sayısı, rekabet durumu gibi), ürünlerin güncel sergilenme durumunu ve çok daha fazlasını tek ekrandan görüntüleyebilirsiniz.
            <br><br>Ayrıca görseline tıkladığınızda ürünle ilgili çok daha fazla detaya ulaşabilirsiniz.
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
export default {
  name: "envanter-yonetimi"
}
</script>

<style scoped>

</style>
<template>
  <Menu/>
  <!-- Hero Start -->
  <section class="bg-half-260 border-bottom agency-wrapper d-table w-100" id="home">
    <div class="container">
      <div class="row align-items-center justify-content-between">
        <div class="col-lg-6 col-md-7 order-1 order-md-2">
          <div class="title-heading mt-4 ms-lg-5 ps-lg-5">
            <h1 class="heading mb-3"> Kelime  <span class="text-primary">Filtresi </span></h1>
            <p class="para-desc text-muted">Mağaza sağlığınızı riske sokacağını veya güvenli olduğunu düşündüğünüz kelimeler ile filtre yapabilirsiniz.</p>
          </div>
        </div><!--end col-->

        <div class="col-lg-5 col-md-5 order-2 order-md-1 mt-4 pt-2 mt-sm-0 pt-sm-0">
          <iframe width="560" height="315" src="https://www.youtube.com/embed/3TgKE6Qszec" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen="allowfullscreen"></iframe>        </div>
      </div><!--end row-->
    </div><!--end container-->
  </section><!--end section-->
  <!-- Hero End -->
  <div class="container mt-100 mt-60">
    <div class="row align-items-center">
      <div class="col-lg-7 col-md-6 d-flex justify-content-lg-end">
        <img src="@/assets/images/kelime-filtresi-ekleme.png" class="img-fluid w-75" alt="">
      </div><!--end col-->

      <div class="col-lg-5 col-md-6 mt-4 mt-sm-0 pt-2 pt-sm-0">
        <div class="section-title ms-lg-3">
          <p style="font-size: 18px">Dilerseniz ürün isminde geçtiği için mağaza sağlığını riske sokabilecek kelimeleri <b>Yasaklı Kelime</b> listenize ekleyebilir,dilerseniz güvenli olduğuna kanaat getirdiğiniz kelimeleri <b>Güvenli Kelime</b> listesine taşıyabilirsiniz.</p>
        </div>
      </div><!--end col-->
    </div><!--end row-->
  </div><!--end container-->
  <div class="container mt-100 mt-60">
    <div class="row align-items-center justify-content-center">
      <div class="col-lg-5 col-md-6 mt-4 mt-sm-0 pt-2 pt-sm-0">
        <div class="section-title ms-lg-3">
          <p style="font-size: 18px">Mağaza listeniz dışında, Easyinventory ile yönettiğiniz tüm mağazalarınıza ait kelimeleri Genel Listem başlığı altına sıralayabilirsiniz. Ayrıca binlerce kelimeden oluşan Easy Havuzuna erişebilir, diğer Easyinventory kullanıcılarının puanlarını ve kullanılan mağazaları görüntüleyebilirsiniz. Buradaki kelimeleri ister yasaklı, ister güvenli listesine taşıyabilirsiniz.
          </p>
        </div>
      </div><!--end col-->
      <div class="col-lg-7 col-md-6">
        <img src="@/assets/images/kelime-filtresi-kullanim-puani.png" class="img-fluid w-75" alt="">
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
  name: "kelime-filtresi"
}
</script>

<style scoped>

</style>
<template>
  <Menu/>
  <!-- Hero Start -->
  <section class="bg-half-260 border-bottom agency-wrapper d-table w-100" id="home">
    <div class="container">
      <div class="row align-items-center">
        <div class="col-lg-7 col-md-7 order-1 order-md-2">
          <div class="title-heading mt-4 ms-lg-5 ps-lg-5">
            <h1 class="heading mb-3"> Extenship  <span class="text-primary">Nedir?</span></h1>
            <p class="para-desc text-muted">
              Şubat 2018'de çıktığımız bu yolda sektörün öncüsü olarak binlerce kişiye hizmet vermenin haklı gururunu yaşıyoruz. Müşterilerimize zamandan tasarruf ettiren Amazon operasyonlarını kolaylaştıran ve müşterilerimizin geri bildirimleriyle her geçen gün gelişen yazılımlarımız ile büyük bir aile olmanın verdiği güveni daha da ileriye taşıyarak büyümeye devam ediyoruz. Ürünlerimizi geliştirmeye, sizlere daha çok fayda sağlamaya ve her daim beklentilerinizi en üst seviyede karşılamaya devam edeceğiz.
            </p>
          </div>
        </div><!--end col-->

        <div class="col-lg-5 col-md-5 order-2 order-md-1 mt-4 pt-2 mt-sm-0 pt-sm-0">
          <img src="@/assets/images/about-banner-1.svg" class="img-fluid" alt="">
        </div>
      </div><!--end row-->
    </div><!--end container-->
  </section><!--end section-->
  <!-- Hero End -->
  <div class="container mt-100 mt-60">
    <div class="row align-items-center">
      <div class="col-lg-7 col-md-6">
        <img src="@/assets/images/about-banner-2.svg" class="img-fluid w-75" alt="">
      </div><!--end col-->

      <div class="col-lg-5 col-md-6 mt-4 mt-sm-0 pt-2 pt-sm-0">
        <div class="section-title ms-lg-3">
          <h2>Neler üretiyoruz?</h2>
          <p style="font-size: 18px">Sadece tek sektöre bağlı kalmadan, piyasa ihtiyaçlarına göre çeşitli AR-GE çalışmaları ve yazılım araçları geliştirmeyi hedefliyoruz. Sektöre öncülük eden Amazon Tool Pro, Easyinventory ve Automate Order yazılımlarımız ile Amazonda satış konusunda başlangıçtan profesyonelliğe kadar her ihtiyacınızı karşılayacak hizmetler sunmaktayız.
          </p>
        </div>
      </div><!--end col-->
    </div><!--end row-->
  </div><!--end container-->
  <div class="container mt-100 mt-60">
    <div class="row align-items-start justify-content-center">
      <div class="col-lg-4 col-md-6 d-flex flex-column">
        <div class="iconColumn"><div class="icon"><i class="uil uil-code-branch"></i></div></div>
        <div class="item-info">
          <h4>Çözüm Odaklı</h4>
          <p>Yazılımlarımız ile yaşanan sorunlara çözüm buluyoruz.
          </p>
        </div>
      </div><!--end col-->
      <div class="col-lg-4 col-md-6 mt-4 mt-sm-0 pt-2 pt-sm-0 d-flex flex-column">
        <div class="iconColumn"><div class="icon"><i class="uil uil-question-circle"></i></div></div>
        <div class="item-info">
          <h4>Profesyonel Destek</h4>
          <p>Yaşadığınız sorunları uzman ekibimiz ile hızlıca çözüme ulaştırıyoruz.
          </p>
        </div>
      </div><!--end col-->
      <div class="col-lg-4 col-md-6 mt-4 mt-sm-0 pt-2 pt-sm-0 d-flex flex-column">
        <div class="iconColumn"><div class="icon"><i class="uil uil-compass"></i></div></div>
        <div class="item-info">
          <h4>Güncel Araçlar
          </h4>
          <p>Her geçen gün iyileştirmeler ile teknolojilerimizi güçlendiriyoruz.
          </p>
        </div>
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
  name: "hakkimizda"
}
</script>

<style scoped>

</style>
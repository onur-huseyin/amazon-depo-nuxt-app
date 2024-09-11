<template>
  <Menu/>
  <!-- Hero Start -->
  <section class="bg-half-260 border-bottom agency-wrapper d-table w-100" id="home">
    <div class="container">
      <div class="row align-items-center">
        <div class="col-lg-7 col-md-7 order-1 order-md-2">
          <div class="title-heading mt-4 ms-lg-5 ps-lg-5">
            <h1 class="heading mb-3">  <span class="text-primary">Feedback</span></h1>
            <p class="para-desc text-muted">Teslim edilen ürünleriniz için müşterilerinizden feedback isterken her şeyi easyinventory üzerinden yönetin! Kriterlerinize uyan tüm ürünler için, belirlediğiniz zaman ve feedback şablonu ile mesajınız müşterinize otomatik olarak gönderilir.</p>
          </div>
        </div><!--end col-->

        <div class="col-lg-5 col-md-5 order-2 order-md-1 mt-4 pt-2 mt-sm-0 pt-sm-0">
          <img src="@/assets/images/feedback-banner.svg" class="img-fluid" alt="">
        </div>
      </div><!--end row-->
    </div><!--end container-->
  </section><!--end section-->
  <!-- Hero End -->
  <div class="container mt-100 mt-60">
    <div class="row align-items-center">
      <div class="col-lg-7 col-md-6">
        <img src="@/assets/images/feedback-list.png" class="img-fluid w-75" alt="">
      </div><!--end col-->

      <div class="col-lg-4 col-md-6 mt-4 mt-sm-0 pt-2 pt-sm-0">
        <div class="section-title ms-lg-3">
          <p style="font-size: 18px">Birden çok feedback kampanyası ile şablonlarınızı özgürce yönetebilirsiniz. Easyinventory’nin hazır şablonlarından yararlanabilir ve değişkenlerle içeriği zenginleştirebilirsiniz.
            <br> <br> Kriterleriniz doğrultusunda feedback gönderilecek veya gönderilmesini istemediğiniz durumları belirleyebilirsiniz.</p>
        </div>
      </div><!--end col-->
    </div><!--end row-->
  </div><!--end container-->
  <div class="container mt-100 mt-60">
    <div class="row align-items-center justify-content-end">
      <div class="col-lg-4 col-md-6 mt-4 mt-sm-0 pt-2 pt-sm-0">
        <div class="section-title ms-lg-3">
          <p style="font-size: 18px">İade edilen, zamanında gönderilemeyen siparişler ya da sürekli negatif feedback bırakan kullanıcılar gibi pek çok seçeneği Dikkate Alma, Hariç Tut, Dahil Et filtreleri ile düzenleyebilirsiniz.
            <br>Ayrıca feedback mesajının iletileceği gün ve zamanı belirleyebilirsiniz.</p>
        </div>
      </div><!--end col-->
      <div class="col-lg-7 col-md-6">
        <img src="@/assets/images/feedback-preview.png" class="img-fluid w-75" alt="">
      </div><!--end col-->
    </div><!--end row-->
  </div><!--end container-->
  <div class="container mt-100 mt-60">
    <div class="row align-items-center justify-content-center">
      <div class="col-lg-6 col-md-6">
        <img src="@/assets/images/negative-feedback.png" class="img-fluid" alt="">
      </div><!--end col-->

      <div class="col-lg-4 col-md-6 mt-4 mt-sm-0 pt-2 pt-sm-0">
        <div class="section-title ms-lg-3">
          <p style="font-size: 18px">Gönderilen mesajların durumunu <b>Sırada, Gönderildi, Teslim Edildi, Okundu, Tıklandı</b> olarak tek bir ekrandan kontrol edebilirsiniz.
            <br><br>Negatif Yorumlar sayfasında ise mağazanızın aldığı 1-3 yıldız aralığındaki değerlendirmeleri ve vermiş olduğunuz yanıtları görüntüleyebilirsiniz.
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
  name: "feedback"
}
</script>

<style scoped>

</style>
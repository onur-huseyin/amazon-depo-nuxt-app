<template>
  <Menu/>
  <!-- Hero Start -->
  <section class="bg-half-260 border-bottom agency-wrapper d-table w-100" id="home">
    <div class="container">
      <div class="row align-items-center justify-content-between">
        <div class="col-lg-6 col-md-7 order-1 order-md-2">
          <div class="title-heading mt-4 ms-lg-5 ps-lg-5">
            <h1 class="heading mb-3"> Easy  <span class="text-primary">Clipboard</span></h1>
            <p class="para-desc text-muted">Detaylı bir arama yaparak ASIN toplayıp envanterinizi zenginleştirmek isterseniz, EasyClipboard tam sizin için. Aktif hale getirdiğiniz anda, ürünleri açılan ASIN listenize tek bir tıkla ekleyip, doğrudan filtreleme sayfasına giderek taramayı başlatabilirsiniz.</p>
          </div>
        </div><!--end col-->

        <div class="col-lg-5 col-md-5 order-2 order-md-1 mt-4 pt-2 mt-sm-0 pt-sm-0">
          <iframe width="560" height="315" src="https://www.youtube.com/embed/tkiXWkc3RpU" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen="allowfullscreen"></iframe>
        </div>
      </div><!--end row-->
    </div><!--end container-->
  </section><!--end section-->
  <!-- Hero End -->
  <div class="container mt-100 mt-60">
    <div class="row align-items-center">
      <div class="col-lg-7 col-md-6 d-flex justify-content-lg-end">
        <img src="@/assets/images/clipboard-copy.png" class="img-fluid w-75" alt="">
      </div><!--end col-->

      <div class="col-lg-5 col-md-6 mt-4 mt-sm-0 pt-2 pt-sm-0">
        <div class="section-title ms-lg-3">
          <p style="font-size: 18px">Easy Clipboard özellikle tecrübeli satıcılar tarafından kullanılan ve özel ürün bulma konusunda size çok yardımı dokunacak ilk ve tek ASIN toplama uygulamasıdır.</p>
        </div>
      </div><!--end col-->
    </div><!--end row-->
  </div><!--end container-->
  <div class="container mt-100 mt-60">
    <div class="row align-items-center justify-content-end">
      <div class="col-lg-5 col-md-6 mt-4 mt-sm-0 pt-2 pt-sm-0">
        <div class="section-title ms-lg-3">
          <p style="font-size: 18px">Uygulamayı çalıştırdıktan sonra Amazon.com’da gezerken, ilginizi çeken ürünleri tek tıklama ile toplayabilir ve işiniz bittiğinde toplanan ASIN’leri doğrudan bulut taramaya gönderebilirsiniz.
          </p>
        </div>
      </div><!--end col-->
      <div class="col-lg-6 col-md-6">
        <img src="@/assets/images/clipboard-list.png" class="img-fluid w-75" alt="">
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
  name: "easy-clipboard"
}
</script>

<style scoped>

</style>
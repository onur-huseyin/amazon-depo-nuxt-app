<template>
  <Menu/>
  <!-- Hero Start -->
  <section class="bg-half-260 border-bottom agency-wrapper d-table w-100" id="home">
    <div class="container">
      <div class="row align-items-center justify-content-between">
        <div class="col-lg-6 col-md-7 order-1 order-md-2">
          <div class="title-heading mt-4 ms-lg-5 ps-lg-5">
            <h1 class="heading mb-3"> Fiyatlandırma   <span class="text-primary">Ayarları</span></h1>
            <p class="para-desc text-muted">Easyinventory ile tüm envanteriniz için tek bir kâr oranı, minimum stok ve adet kuralı belirlemek zorunda değilsiniz. Çeşitli fiyatlandırma kuralları ile envanterinizi özgürce yönetin!</p>
          </div>
        </div><!--end col-->

        <div class="col-lg-5 col-md-5 order-2 order-md-1 mt-4 pt-2 mt-sm-0 pt-sm-0">
          <iframe width="560" height="315" src="https://www.youtube.com/embed/iYxkAX9cUWM" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen="allowfullscreen"></iframe>
        </div>
      </div><!--end row-->
    </div><!--end container-->
  </section><!--end section-->
  <!-- Hero End -->
  <div class="container mt-100 mt-60">
    <div class="row align-items-center">
      <div class="col-lg-7 col-md-6 ">
        <img src="@/assets/images/fiyatlandirma-ayarlari.png" class="img-fluid w-75" alt="">
      </div><!--end col-->

      <div class="col-lg-5 col-md-6 mt-4 mt-sm-0 pt-2 pt-sm-0 ">
        <div class="section-title ms-lg-3">
          <p style="font-size: 18px">Tüm envanteriniz için tek bir kâr oranı, minimum stok ve adet kuralı belirleyebileceğiniz gibi, farklı fiyat aralıkları veya sadece ASIN bazlı olarak da ayarlayabilirsiniz. Ayrıca Easyshipping ara depo hizmeti ile göndereceğiniz ürünler için de yine farklı kâr, minimum stok ve adet kurallarını belirleyebilirsiniz.
          </p>
        </div>
      </div><!--end col-->
    </div><!--end row-->
  </div><!--end container-->
  <div class="container mt-100 mt-60">
    <div class="row">
      <div class="col-lg-4 col-md-6 mt-4 pt-2">
        <div class="d-flex flex-column features feature-primary key-feature align-items-start gap-3 p-3 rounded shadow">
          <div class="icon text-center rounded-circle me-3">
            <i class="uil uil-dollar-sign fs-2 align-middle"></i>
          </div>
          <div class="flex-1 gap-2">
            <h4><b>Fiyata Özel</b></h4>
            <h4 class="title mb-0">Belirli fiyat aralığında satışa sunduğunuz ürünler için genel kurallardan ayrı olarak farklı kâr oranları, minimum stok ve adet kuralı belirleyebilirsiniz.</h4>
          </div>
        </div>
      </div><!--end col-->
      <div class="col-lg-4 col-md-6 mt-4 pt-2">
        <div class="d-flex flex-column features feature-primary key-feature align-items-start gap-3 p-3 rounded shadow">
          <div class="icon text-center rounded-circle me-3">
            <i class="uil uil-clipboard-notes fs-2 align-middle"></i>
          </div>
          <div class="flex-1 gap-2">
            <h4><b>ASIN'e Özel</b></h4>
            <h4 class="title mb-0">Aynı şekilde sadece tek bir ürün için de ASIN’e özel kâr, stok ve adet kuralı oluşturabilir, dilerseniz toplu olarak, dilerseniz tek tek bu ayarları değiştirebilirsiniz.</h4>
          </div>
        </div>
      </div><!--end col-->
      <div class="col-lg-4 col-md-6 mt-4 pt-2">
        <div class="d-flex flex-column features feature-primary key-feature align-items-start gap-3 p-3 rounded shadow">
          <div class="icon text-center rounded-circle me-3">
            <i class="uil uil-truck fs-2 align-middle"></i>
          </div>
          <div class="flex-1 gap-2">
            <h4><b>Easyshipping'e Özel</b></h4>
            <h4 class="title mb-0">Kâr, stok ve adet kurallarını Easyshipping ile göndereceğiniz ürünler için ayrı tutabilir, bu sayede özellikle tek satıcı olduğunuz ürünlerde çok daha yüksek kârlar elde edebilirsiniz.</h4>
          </div>
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
  name: "fiyatlandirma-ayarlari"
}
</script>

<style scoped>

</style>
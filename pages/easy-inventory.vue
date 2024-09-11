<template>
  <Menu/>
  <!-- Hero Start -->
  <section class="bg-home d-flex align-items-center" :style="{ backgroundImage: `url(${image})`}" style="height: auto;" id="home">
    <div class="container">
      <div class="row justify-content-center">
        <div class="col-lg-12 text-center mt-0 mt-md-5 pt-0 pt-md-5">
          <div class="title-heading margin-top-100">
            <h1 class="heading mb-3"><img  class="easy-banner" src="@/assets/images/easy-inventory.svg" alt=""> ile <span class="text-primary">Ürün Araması Yap
            </span></h1>
            <p class="para-desc mx-auto text-muted">Stoksuz e-ticaret hiç bu kadar kolay olmamıştı!</p>
            <div class="mt-4 pt-2 d-flex justify-content-center align-items-center gap-4">
              <NuxtLink  to="/fiyatlar" class="btn btn-primary">Paketler</NuxtLink>
              <a href="https://easyinventory.extenship.com/login" target="_blank" style="background: #ef6d02 !important;" class="btn btn-primary">Giriş Yap</a>
            </div>
          </div>

          <div class="home-dashboard">
            <img src="@/assets/images/easyinventory-paneli-easy-shipping.png" alt="" class="img-fluid">
          </div>
        </div><!--end col-->
      </div><!--end row-->
    </div><!--end container-->
  </section><!--end section-->
  <!-- Hero End -->
  <div class="container mt-100 mt-60">
    <div class="row align-items-center justify-content-center">
      <div class="col-lg-6 col-md-6">
        <img src="@/assets/images/settingsP.svg" class="img-fluid w-75" alt="">
      </div><!--end col-->

      <div class="col-lg-6 col-md-6 mt-4 mt-sm-0 pt-2 pt-sm-0">
        <div class="section-title ms-lg-3">
          <h3>Filtrelerini Hazırla ve Hemen Stoksuz Ticarete Başla</h3>
          <p style="font-size: 18px">Kendi belirlediğiniz akıllı ve gelişmiş filtreler ile dakikalar içinde binlerce ürün bulup, envanterinizdeki on binlerce ürünü tüm detaylarıyla hızlıca güncelleyip, karşılaştırmalı elemeleri ve kritik marka kontrolüyle kaldırılması gereken ürünlerden kolayca kurtulun.</p>
        </div>
      </div><!--end col-->
    </div><!--end row-->
  </div><!--end container-->
  <div class="container mt-100 mt-60">
    <div class="row align-items-center justify-content-center">
      <div class="col-lg-6 col-md-6 mt-4 mt-sm-0 pt-2 pt-sm-0">
        <div class="section-title ms-lg-3">
          <p style="font-size: 18px">Easyinventory Mobil Uygulamamamız ile ürünlerin taranmasını beklemenize gerek yok. Cep telefonunuzdan taramayı başlatın, gerisini Easyinventory’e bırakın. Belirlediğiniz kategori, kelime veya ASIN listesinde aramayı başlatabilir ve mağaza güncelleme ayarlarına uygun olan ürünleri Amazon entegrasyonu ile hızlıca mağazanıza yükletebilirsiniz.</p>
        </div>
      </div><!--end col-->
      <div class="col-lg-6 col-md-6">
        <img src="@/assets/images/mobile_testingP.svg" class="img-fluid w-75" alt="">
      </div><!--end col-->
    </div><!--end row-->
  </div><!--end container-->
  <div class="text-center mt-100">
    <h1 class="text-primary"><b>Öne Çıkan Özelliklerimiz</b></h1>
    <h6>Tüm Easyinventory paketlerimizde standart olarak bulunan gelişmiş özelliklerle mağazanızı hızla büyütün ve kolayca yönetin!</h6>
  </div>
  <!-- Hero Start -->
  <section class="bg-half-260 border-bottom  d-table w-100" id="home">
    <div class="container">
      <div class="row align-items-center">
        <div class="col-lg-7 col-md-7 order-1 order-md-2">
          <div class="title-heading mt-4 ms-lg-5 ps-lg-5">
            <h2 class=" mb-3">Otomatik  <span class="text-primary">Sipariş</span></h2>
            <p class="para-desc text-muted">Her gün gelen siparişleri tek tek göndermekle vakit kaybetmeyin. Zengin puanlama ve filtreleme seçeneği ile ayarlarınızı yapın ve gerisini Easyinventory’nin Otomatik Sipariş özelliğine bırakın. Size sadece feedbackleri okumak kalsın.</p>
            <NuxtLink  to="/ara-depo" class="mt-4 h6 text-primary">Özelliklerimizi inceleyin
              <i class="uil uil-angle-right-b align-middle"></i></NuxtLink>
          </div>
        </div><!--end col-->

        <div class="col-lg-4 col-md-5 order-2 order-md-1 mt-4 pt-2 mt-sm-0 pt-sm-0">
          <img src="@/assets/images/illustrator/working_with_computer.svg" class="img-fluid" alt="">
        </div>
      </div><!--end row-->
    </div><!--end container-->
  </section><!--end section-->
  <!-- Hero End -->
  <!-- Hero Start -->
  <section class=" d-table w-100 mt-5" id="home">
    <div class="container">
      <div class="row align-items-center justify-content-between">
        <div class="col-lg-6 col-md-7 order-1 order-md-2">
          <div class="title-heading mt-4 ms-lg-5 ps-lg-5">
            <h2 class=" mb-3"> Mobil  <span class="text-primary">Uygulama</span></h2>
            <p class="para-desc text-muted">Ürün tarama işlemini bilgisayara erişemediğiniz zamanlarda cep telefonunuz üzerinden gerçekleştirebilirsiniz.</p>
            <NuxtLink  to="/mobil-uygulama" class="mt-4 h6 text-primary">Özelliklerimizi inceleyin
              <i class="uil uil-angle-right-b align-middle"></i></NuxtLink>
          </div>
        </div><!--end col-->

        <div class="col-lg-6 col-md-5 order-2 order-md-1 mt-4 pt-2 mt-sm-0 pt-sm-0">
          <iframe width="560" height="315" src="https://www.youtube.com/embed/bsQRTxlXS6s" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen="allowfullscreen"></iframe>
        </div>
      </div><!--end row-->
    </div><!--end container-->
  </section><!--end section-->
  <!-- Hero End -->
  <!-- Hero Start -->
  <section class="d-flex w-100 mt-100" id="home">
    <div class="container">
      <div class="row align-items-center justify-content-between">
        <div class="col-lg-6 col-md-7 order-1 order-md-2">
          <div class="title-heading mt-4 ms-lg-5 ps-lg-5">
            <h2 class="mb-3"> Easy   <span class="text-primary">Pricer</span></h2>
            <p class="para-desc text-muted">Rakiplerinizle ne için yarışacaksınız? İster Lowest, ister Buybox, tercihleriniz doğrultusunda her ürününüzü 5 dakika arayla kontrol ediyor ve sizi hedeflediğiniz noktaya taşıyoruz. Aynı zamanda ürünün stok bilgisini de güncelliyoruz.</p>
            <NuxtLink  to="/easy-pricer" class="mt-4 h6 text-primary">Özelliklerimizi inceleyin
              <i class="uil uil-angle-right-b align-middle"></i></NuxtLink>
          </div>
        </div><!--end col-->
        <div class="col-lg-5 col-md-5 order-2 order-md-1 mt-4 pt-2 mt-sm-0 pt-sm-0">
          <iframe width="560" height="315" src="https://www.youtube.com/embed/H3WcbDH0iqA" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen="allowfullscreen"></iframe>
        </div>
      </div><!--end row-->
    </div><!--end container-->
  </section><!--end section-->
  <!-- Hero End -->
  <!-- Hero Start -->
  <section class="d-table w-100 mt-100" id="home">
    <div class="container">
      <div class="row align-items-center justify-content-between">
        <div class="col-lg-6 col-md-7 order-1 order-md-2">
          <div class="title-heading mt-4 ms-lg-5 ps-lg-5">
            <h2 class="mb-3"> Easy  <span class="text-primary">Clipboard</span></h2>
            <p class="para-desc text-muted">Detaylı bir arama yaparak ASIN toplayıp envanterinizi zenginleştirmek isterseniz, EasyClipboard tam sizin için. Aktif hale getirdiğiniz anda, ürünleri açılan ASIN listenize tek bir tıkla ekleyip, doğrudan filtreleme sayfasına giderek taramayı başlatabilirsiniz.</p>
            <NuxtLink  to="/easy-clipboard" class="mt-4 h6 text-primary">Özelliklerimizi inceleyin
              <i class="uil uil-angle-right-b align-middle"></i></NuxtLink>
          </div>
        </div><!--end col-->

        <div class="col-lg-5 col-md-5 order-2 order-md-1 mt-4 pt-2 mt-sm-0 pt-sm-0">
          <iframe width="560" height="315" src="https://www.youtube.com/embed/tkiXWkc3RpU" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen="allowfullscreen"></iframe>
        </div>
      </div><!--end row-->
    </div><!--end container-->
  </section><!--end section-->
  <!-- Hero End -->
  <!-- Hero Start -->
  <section class="mt-100 d-table w-100" id="home">
    <div class="container">
      <div class="row align-items-center justify-content-center flex-row-reverse">
        <div class="col-lg-7 col-md-7 order-1 order-md-2">
          <div class="title-heading mt-4 ms-lg-5 ps-lg-5">
            <h1 class=" mb-3"> Easy  <span class="text-primary">Shipping</span></h1>
            <p class="para-desc text-muted">Çoklu ara depo sistemimiz Easy Shipping ile bekleyen gönderiler, ara depo ile haberleşme, ticketlar ve çok daha fazlasını tek bir panelden yönetin!</p>
            <NuxtLink  to="/ara-depo" class="mt-4 h6 text-primary">Özelliklerimizi inceleyin
              <i class="uil uil-angle-right-b align-middle"></i></NuxtLink>
          </div>
        </div><!--end col-->
        <div class="col-lg-5 col-md-5 order-2 order-md-1 mt-4 pt-2 mt-sm-0 pt-sm-0">
          <img src="@/assets/images/warehouse.svg" alt="">
        </div>
      </div><!--end row-->
    </div><!--end container-->
  </section><!--end section-->
  <!-- Hero End -->
  <!-- Hero Start -->
  <section class="mt-100 d-table w-100" id="home">
    <div class="container">
      <div class="row align-items-center">
        <div class="col-lg-6 col-md-7 order-1 order-md-2">
          <div class="title-heading mt-4 ms-lg-5 ps-lg-5">
            <h2 class="mb-3">Satıcı Markalı   <span class="text-primary">Ürün</span></h2>
            <p class="para-desc text-muted">Satıcı Markalı ürün: Kaynak mağazadaki ürünün markası ile mağaza adının aynı olması durumudur.
            </p>
            <NuxtLink  to="/satici-markali-urun" class="mt-4 h6 text-primary">Özelliklerimizi inceleyin
              <i class="uil uil-angle-right-b align-middle"></i></NuxtLink>
          </div>
        </div><!--end col-->

        <div class="col-lg-4 col-md-5 order-2 order-md-1 mt-4 pt-2 mt-sm-0 pt-sm-0">
          <img src="@/assets/images/selling.svg" class="img-fluid w-100" alt="">
        </div>
      </div><!--end row-->
    </div><!--end container-->
  </section><!--end section-->
  <!-- Hero End -->
  <!-- Hero Start -->
  <section class="mt-100 d-table w-100" id="home">
    <div class="container">
      <div class="row align-items-center flex-row-reverse">
        <div class="col-lg-7 col-md-7 order-1 order-md-2">
          <div class="title-heading mt-4 ms-lg-5 ps-lg-5">
            <h2 class="mb-3">  <span class="text-primary">Trademark</span></h2>
            <p class="para-desc text-muted">Kaynak mağaza ülkesi de dahil olmak üzere Easyinventory’e entegre edebileceğiniz toplam 17 ülke mağazası için sürekli olarak güncellediğimiz gelişmiş Trademark veritabanımızı kullanabilirsiniz.
            </p>
            <NuxtLink  to="/trademark" class="mt-4 h6 text-primary">Özelliklerimizi inceleyin
              <i class="uil uil-angle-right-b align-middle"></i></NuxtLink>
          </div>
        </div><!--end col-->
        <div class="col-lg-5 col-md-5 order-2 order-md-1 mt-4 pt-2 mt-sm-0 pt-sm-0">
          <img src="@/assets/images/trademark-thumbnail.svg" class="img-fluid" alt="">
        </div>
      </div><!--end row-->
    </div><!--end container-->
  </section><!--end section-->
  <!-- Hero End -->
  <!-- Hero Start -->
  <section class="mt-100 d-table w-100" id="home">
    <div class="container">
      <div class="row align-items-center justify-content-between">
        <div class="col-lg-7 col-md-7 order-1 order-md-2">
          <div class="title-heading mt-4 ms-lg-5 ps-lg-5">
            <h2 class="mb-3"> Envanter  <span class="text-primary">Yönetimi  </span></h2>
            <p class="para-desc text-muted">Envanter önizleme sayfasında, ürünlerinizin toplu olarak Amazon mağazanızda nasıl göründüğüne ve tüm detaylarına ulaşabilirsiniz.</p>
            <NuxtLink  to="/envanter-yonetimi" class="mt-4 h6 text-primary">Özelliklerimizi inceleyin
              <i class="uil uil-angle-right-b align-middle"></i></NuxtLink>
          </div>
        </div><!--end col-->

        <div class="col-lg-5 col-md-5 order-2 order-md-1 mt-4 pt-2 mt-sm-0 pt-sm-0">
          <iframe width="500" height="315" src="https://www.youtube.com/embed/PvSqf2SozmU" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen="allowfullscreen"></iframe>
        </div>
      </div><!--end row-->
    </div><!--end container-->
  </section><!--end section-->
  <!-- Hero End -->
  <Footer/>
</template>

<script>
import bikeImg from "@/assets/images/saas/home-shape.png";
export default {
  name: "easy-inventory",
  data(){
    return{
      image: bikeImg,
    }
  }
}
</script>

<style scoped>

</style>
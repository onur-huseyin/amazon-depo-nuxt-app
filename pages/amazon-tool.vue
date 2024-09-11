<template>
  <Menu/>
  <!-- Hero Start -->
  <section class="bg-home d-flex align-items-center" :style="{ backgroundImage: `url(${image})`}" style="height: auto;" id="home">
    <div class="container">
      <div class="row justify-content-center">
        <div class="col-lg-12 text-center mt-0 mt-md-5 pt-0 pt-md-5">
          <div class="title-heading margin-top-100">
            <h1 class="heading mb-3"><b>Amazon Tool</b> <span class="orange">Pro</span></h1>
          </div>

          <div class="home-dashboard position-relative">
            <img src="@/assets/images/amazon-tool-pro-thumbnail.png" alt="" class="img-fluid">
            <img style="right:0" src="@/assets/images/amazon-tool-pro-app.png" alt="" class="img-fluid position-absolute top-0 pro-mobil">
          </div>
        </div><!--end col-->
      </div><!--end row-->
    </div><!--end container-->
  </section><!--end section-->
  <!-- Hero End -->
  <div class="container mt-lg-100">
    <div class="row justify-content-center d-flex">
      <div class="col-lg-8 d-flex flex-column justify-content-center">
        <h1 class="text-center"><b>17 Ülkede Satış Yap</b></h1>
        <span style="line-height: 32px;font-size: 18px;font-weight: 600">
          Extenship Yazılım'ın ilk ürünü olan Amazon Tool Pro, kullanıcıların kendi bilgisayarları üzerinden Amazon'da binlerce ürün bulup, envanterine bir dosya aracılığıyla ekleyebilmesi için yardımcı oluyordu. Gelişen sektör ve kullanıcı ihtiyaçlarını göz önüne alarak, bir süre önce Amazon Tool Pro'nun satışını durdurduk ve çok daha gelişmiş özellikleri ile Easyinventory'i yarattık.
          <br> <br>Kullanıcının kendi bilgisayarı üzerinden işlem yapan bir yazılım olması ve alt yapısı gereğince ihtiyacınız olan birçok özellik Amazon Tool Pro'ya dahil edilemiyor. Siz de ayrıcalıklı özellikleri ile Easyinventory'i hemen deneyin.
        </span>

      </div>
    </div>
  </div>
  <div style="padding: 2rem 2rem" class="container mt-100">
    <div class="row justify-content-center">
      <div class="col-lg-10 table-feature">
        <table class="container">
          <thead>
          <tr>
            <th><h6><b>ÖZELLİKLER</b></h6></th>
            <th><NuxtLink to="/"><img width="150" src="@/assets/images/amazon-tool-logoslider.png" alt=""></NuxtLink></th>
            <th><NuxtLink to="/easy-inventory"><img width="150" src="@/assets/images/easy-a.png" alt=""></NuxtLink></th>
          </tr>
          </thead>
          <tbody>
          <tr>
            <td><i class="uil uil-search fs-3 fw-bold text-primary align-middle me-1"></i> Ürün Arama</td>
            <td><i class="uil uil-check fs-2 green-check fw-bold text-primary align-middle me-1"></i><br><b>Kullanıcı bilgisayarı</b></td>
            <td><i class="uil uil-check fs-2 green-check fw-bold text-primary align-middle me-1"></i><br><b>Bulut sunucu 500+</b></td>

          </tr>
          <tr>
            <td><i class="uil uil-server-network fs-3 fw-bold text-primary align-middle me-1"></i> Amazon Entegrasyonu</td>
            <td><i class="uil uil-times red-times fs-2 fw-bold text-primary align-middle me-1"></i></td>
            <td><i class="uil uil-check fs-2 green-check fw-bold text-primary align-middle me-1"></i></td>

          </tr>
          <tr>
            <td><i class="uil uil-mobile-android fs-3 fw-bold text-primary align-middle me-1"></i> Telefondan Ürün Arama</td>
            <td><i class="uil uil-times red-times fs-2 fw-bold text-primary align-middle me-1"></i></td>
            <td><i class="uil uil-check fs-2 green-check fw-bold text-primary align-middle me-1"></i></td>

          </tr>
          <tr>
            <td><i class="uil uil-shopping-bag fs-3 fw-bold text-primary align-middle me-1"></i> Ara Depo</td>
            <td><i class="uil uil-times red-times fs-2 fw-bold text-primary align-middle me-1"></i></td>
            <td><i class="uil uil-check fs-2 green-check fw-bold text-primary align-middle me-1"></i></td>

          </tr>
          <tr>
            <td><i class="uil uil-mobile-android fs-3 fw-bold text-primary align-middle me-1"></i> Mobil Uygulama</td>
            <td><i class="uil uil-times red-times fs-2 fw-bold text-primary align-middle me-1"></i></td>
            <td><i class="uil uil-check fs-2 green-check fw-bold text-primary align-middle me-1"></i></td>

          </tr>
          <tr>
            <td><i class="uil uil-box fs-3 fw-bold text-primary align-middle me-1"></i> Otomatik Sipariş</td>
            <td><i class="uil uil-times red-times fs-2 fw-bold text-primary align-middle me-1"></i></td>
            <td><i class="uil uil-check fs-2 green-check fw-bold text-primary align-middle me-1"></i></td>
          </tr>
          <tr>
            <td><i class="uil uil-tag fs-3 fw-bold text-primary align-middle me-1"></i> Easy Pricer</td>
            <td><i class="uil uil-times red-times fs-2 fw-bold text-primary align-middle me-1"></i></td>
            <td><i class="uil uil-check fs-2 green-check fw-bold text-primary align-middle me-1"></i></td>
          </tr>
          <tr>
            <td><i class="uil uil-clipboard-notes fs-3 fw-bold text-primary align-middle me-1"></i>Easy Clipboard</td>
            <td><i class="uil uil-times red-times fs-2 fw-bold text-primary align-middle me-1"></i></td>
            <td><i class="uil uil-check fs-2 green-check fw-bold text-primary align-middle me-1"></i></td>
          </tr>
          <tr>
            <td><i class="uil uil-trademark fs-3 fw-bold text-primary align-middle me-1"></i> Trademark</td>
            <td><i class="uil uil-check fs-2 green-check fw-bold text-primary align-middle me-1"></i></td>
            <td><i class="uil uil-check fs-2 green-check fw-bold text-primary align-middle me-1"></i>*</td>
          </tr>
          <tr>
            <td><i class="uil uil-copyright fs-3 fw-bold text-primary align-middle me-1"></i>Kritik Marka</td>
            <td><i class="uil uil-check fs-2 green-check fw-bold text-primary align-middle me-1"></i></td>
            <td><i class="uil uil-check fs-2 green-check fw-bold text-primary align-middle me-1"></i>*</td>
          </tr>
          <tr>
            <td><i class="uil uil-ban fs-3 fw-bold text-primary align-middle me-1"></i>Riskli Kelime</td>
            <td><i class="uil uil-times red-times fs-2 fw-bold text-primary align-middle me-1"></i></td>
            <td><i class="uil uil-check fs-2 green-check fw-bold text-primary align-middle me-1"></i></td>
          </tr>
          <tr>
            <td><i class="uil uil-filter fs-3 fw-bold text-primary align-middle me-1"></i>Satıcı Markalı Ürünler</td>
            <td><i class="uil uil-times red-times fs-2 fw-bold text-primary align-middle me-1"></i></td>
            <td><i class="uil uil-check fs-2 green-check fw-bold text-primary align-middle me-1"></i>*</td>
          </tr>
          <tr>
            <td><i class="uil uil-layer-group fs-3 fw-bold text-primary align-middle me-1"></i>Mağaza Karşılaştırma</td>
            <td><i class="uil uil-check fs-2 green-check fw-bold text-primary align-middle me-1"></i></td>
            <td><i class="uil uil-check fs-2 green-check fw-bold text-primary align-middle me-1"></i></td>
          </tr>
          <tr>
            <td><i class="uil uil-truck-loading fs-3 fw-bold text-primary align-middle me-1"></i>Maliyeti Belirsiz Ürünler</td>
            <td><i class="uil uil-times red-times fs-2 fw-bold text-primary align-middle me-1"></i></td>
            <td><i class="uil uil-check fs-2 green-check fw-bold text-primary align-middle me-1"></i></td>
          </tr>
          <tr>
            <td><i class="uil uil-truck fs-3 fw-bold text-primary align-middle me-1"></i>Gönderilemeyen Ürünler</td>
            <td><i class="uil uil-times red-times fs-2 fw-bold text-primary align-middle me-1"></i></td>
            <td><i class="uil uil-check fs-2 green-check fw-bold text-primary align-middle me-1"></i></td>
          </tr>
          <tr>
            <td><i class="uil uil-shopping-basket fs-3 fw-bold text-primary align-middle me-1"></i>Envanter Güncelleme</td>
            <td><i class="uil uil-times red-times fs-2 fw-bold text-primary align-middle me-1"></i></td>
            <td><i class="uil uil-check fs-2 green-check fw-bold text-primary align-middle me-1"></i></td>
          </tr>
          <tr>
            <td><i class="uil uil-shopping-bag fs-3 fw-bold text-primary align-middle me-1"></i>Envanter Önizleme</td>
            <td><i class="uil uil-times red-times fs-2 fw-bold text-primary align-middle me-1"></i></td>
            <td><i class="uil uil-check fs-2 green-check fw-bold text-primary align-middle me-1"></i></td>
          </tr>
          <tr>
            <td><i class="uil uil-dollar-sign fs-3 fw-bold text-primary align-middle me-1"></i>Fiyatlandırma Ayarları</td>
            <td><i class="uil uil-check fs-2 green-check fw-bold text-primary align-middle me-1"></i></td>
            <td><i class="uil uil-check fs-2 green-check fw-bold text-primary align-middle me-1"></i> *</td>
          </tr>
          </tbody>
        </table>
        <p style="color: #919eab;" class="mt-3">*
          Easyinventory ile çok daha gelişmiş bir yapı kurulmuştur.</p>
        <div class="d-flex justify-content-center">
          <NuxtLink class="table-link" to="/fiyatlar">Hemen <b>%50 indirim</b> ile <span style="padding:0 .5rem"><img width="100" src="@/assets/images/easy-b.png" alt=""></span> kullanmaya başlayın.</NuxtLink>
        </div>
      </div>
    </div>
  </div>
  <Footer/>
</template>

<script>
export default {
  name: "amazon-tool"
}
</script>

<style scoped>

</style>
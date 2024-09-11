<template>
  <div class="bg-full">
    <div class="container">
      <div class="row justify-content-center align-items-center">
        <div class="col-12 col-md-9 col-lg-8 text-center">
          <h1>%50 İndirim Kodu</h1>
          <p>EasyInventory’i vakit kaybetmeden 50% <b>MERHABA</b> indirimi ile deneyin.</p>
          <a href="#">MERHABA</a>
        </div>
      </div>
    </div>
  </div>
  <!-- Footer Start -->
  <footer class="footer">
    <div class="container">
      <div class="row">
        <div class="col-12">
          <div class="footer-py-60">
            <div class="row">
              <div class="col-lg-3 col-12 mb-0 mb-md-4 pb-0 pb-md-2">
                <a href="#" class="logo-footer">
                  <img src="@/assets/images/easycentral-c.svg" height="24" alt="">
                </a>
                <h5 class="footer-head">ÜRÜNLER</h5>
                <ul class="list-unstyled footer-list mt-4">
                  <li><NuxtLink to="/easy-inventory" class="text-foot"> EasyInventory</NuxtLink></li>
                  <li><a href="https://usadroptool.com/" target="_blank" class="text-foot"> USA Drop Tool</a></li>
                  <li><a href="https://foving.com/)" target="_blank" class="text-foot"> Foving</a></li>
                  <li><NuxtLink to="/amazon-tool" class="text-foot"> Amazon Tool Pro</NuxtLink></li>
                </ul>
                <h5 class="footer-head">UYGULAMALAR</h5>
                <ul class="list-unstyled footer-list mt-4">
                  <li><NuxtLink to="/otomatik-siparis" class="text-foot"> Otomatik Sipariş</NuxtLink></li>
                  <li><NuxtLink to="/feedback" class="text-foot"> Feedback</NuxtLink></li>
                  <li><NuxtLink to="/mobil-uygulama" class="text-foot"> Mobil Uygulama</NuxtLink></li>
                  <li><NuxtLink to="/easy-pricer" class="text-foot"> Easy Pricer</NuxtLink></li>
                  <li><NuxtLink to="/fatura-sablonu" class="text-foot"> Fatura Şablonu</NuxtLink></li>
                  <li><NuxtLink to="/easy-clipboard" class="text-foot"> Easy Clipboard</NuxtLink></li>
                  <li><NuxtLink to="/ara-depo" class="text-foot"> Easy Shipping</NuxtLink></li>
                </ul>
              </div><!--end col-->

              <div class="col-lg-3 col-md-4 col-12 mt-4 mt-sm-0 pt-2 pt-sm-0">
                <h5 class="footer-head">MAĞAZA FİLTRELERİ</h5>
                <ul class="list-unstyled footer-list mt-4">
                  <li><NuxtLink to="/satici-markali-urunler" class="text-foot"> Satıcı Markalı Ürün</NuxtLink></li>
                  <li><NuxtLink to="/trademark" class="text-foot"> Trademark</NuxtLink></li>
                  <li><NuxtLink to="/kritik-marka" class="text-foot"> Kritik Marka</NuxtLink></li>
                  <li><NuxtLink to="/kelime-filtresi" class="text-foot"> Kelime Filtresi</NuxtLink></li>
                </ul>
              </div><!--end col-->

              <div class="col-lg-3 col-md-4 col-12 mt-4 mt-sm-0 pt-2 pt-sm-0">
                <h5 class="footer-head">RAKİP MAĞAZA FİLTRELERİ</h5>
                <ul class="list-unstyled footer-list mt-4">
                  <li><NuxtLink to="/magaza-karsilastirma" class="text-foot"> Mağaza Karşılaştırma</NuxtLink></li>
                  <li><NuxtLink to="/sales-rank" class="text-foot"> Sales Rank</NuxtLink></li>
                  <li><NuxtLink to="/uncertain" class="text-foot"> Maliyeti Belirsiz Ürünler</NuxtLink></li>
                  <li><NuxtLink to="/gonderilemeyen-urunler" class="text-foot"> Gönderilmeyen Ürünler</NuxtLink></li>
                </ul>
                <h5 class="footer-head">MAĞAZA FİLTRELERİ</h5>
                <ul class="list-unstyled footer-list mt-4">
                  <li><NuxtLink to="/urun-arama" class="text-foot"> Ürün Arama</NuxtLink></li>
                  <li><NuxtLink to="/envanterden-yonetimi" class="text-foot"> Envanter Yönetimi</NuxtLink></li>
                  <li><NuxtLink to="/fiyatlandirma-ayarlari" class="text-foot"> Fiyatlandırma Ayarları</NuxtLink></li>
                  <li><NuxtLink to="/envanterden-ayir" class="text-foot"> Envanterden Ayır</NuxtLink></li>
                </ul>
              </div><!--end col-->

              <div class="col-lg-3 col-md-4 col-12 mt-4 mt-sm-0 pt-2 pt-sm-0">
                <h5 class="footer-head">BİLGİLENDİRME</h5>
                <ul class="list-unstyled footer-list mt-4">
                  <li><NuxtLink to="/hakkimizda" class="text-foot"> Hakkımızda</NuxtLink></li>
                  <li><a href="https://static.extenship.com/download/yazilim-kullanim-sozlesmesi.pdf" target="_blank" class="text-foot"> Kullanıcı Sözleşmesi</a></li>
                  <li><a href="https://static.extenship.com/download/kvkk-aydinlatma-metni.pdf" target="_blank" class="text-foot"> KVKK Aydınlatma Metni</a></li>
                </ul>
                <form>
                  <div class="row">
                    <div class="col-lg-12">
                      <div class="foot-subscribe mb-3">
                        <label class="form-label">Mailinizi yazınız <span class="text-danger">*</span></label>
                        <div class="form-icon position-relative">
                          <i data-feather="mail" class="fea icon-sm icons"></i>
                          <input type="email" name="email" id="emailsubscribe" class="form-control ps-5 rounded" placeholder="Sizin emailiniz : " required>
                        </div>
                      </div>
                    </div>
                    <div class="col-lg-12">
                      <div class="d-grid">
                        <input type="submit" id="submitsubscribe" name="send" class="btn btn-soft-primary" value="Abone ol">
                      </div>
                    </div>
                  </div>
                </form>
                <div class="mt-4 d-flex flex-column w-100">
                  <a href="https://apps.apple.com/us/app/easy-inventory/id1497094915?l=tr&ls=1" class="btn btn-primary mt-2 me-2 w-100"><i class="uil uil-apple"></i> App Store</a>
                  <a href="https://play.google.com/store/apps/details?id=com.extenship" class="btn btn-outline-primary mt-2 w-100"><i class="uil uil-google-play"></i> Play Store</a>
                  <ul class="list-unstyled  d-flex justify-content-between foot-social-icon mb-0 mt-4">
                    <li class="list-inline-item"><a href="https://www.facebook.com/extenship" target="_blank" class="rounded"><i class="uil uil-facebook-f fs-2 align-middle me-1"></i></a></li>
                    <li class="list-inline-item"><a href="https://www.instagram.com/extenship/" target="_blank" class="rounded"><i class="uil uil-instagram fs-2 align-middle me-1"></i></a></li>
                    <li class="list-inline-item"><a href="https://web.telegram.org/#/im?p=s1358473305_8456620088091584033" target="_blank" class="rounded"><i class="uil uil-telegram fs-2 align-middle me-1"></i></a></li>
                    <li class="list-inline-item"><a href="https://www.youtube.com/channel/UCAzQVQGvfNlDbW95ew-e7BQ" target="_blank" class="rounded"><i class="uil uil-youtube fs-2 align-middle me-1"></i></a></li>
                  </ul><!--end icon-->
                </div>
              </div><!--end col-->
            </div><!--end row-->
          </div>
        </div><!--end col-->
      </div><!--end row-->
    </div><!--end container-->

    <div class="footer-py-30 footer-bar">
      <div class="container text-center">
        <div class="row align-items-center">
          <div class="col-sm-6">
            <div class="text-sm-start">
              <p class="mb-0">© 2018 - 2022 Extenship Yazılım</p>
            </div>
          </div><!--end col-->

          <div class="col-sm-6 mt-4 mt-sm-0 pt-2 pt-sm-0">
            <ul class="list-unstyled text-sm-end mb-0">
              <li class="list-inline-item"><a href="javascript:void(0)"><img src="@/assets/images/payments/american-ex.png" class="avatar avatar-ex-sm" title="American Express" alt=""></a></li>
              <li class="list-inline-item"><a href="javascript:void(0)"><img src="@/assets/images/payments/discover.png" class="avatar avatar-ex-sm" title="Discover" alt=""></a></li>
              <li class="list-inline-item"><a href="javascript:void(0)"><img src="@/assets/images/payments/master-card.png" class="avatar avatar-ex-sm" title="Master Card" alt=""></a></li>
              <li class="list-inline-item"><a href="javascript:void(0)"><img src="@/assets/images/payments/paypal.png" class="avatar avatar-ex-sm" title="Paypal" alt=""></a></li>
              <li class="list-inline-item"><a href="javascript:void(0)"><img src="@/assets/images/payments/visa.png" class="avatar avatar-ex-sm" title="Visa" alt=""></a></li>
            </ul>
          </div><!--end col-->
        </div><!--end row-->
      </div><!--end container-->
    </div>
  </footer><!--end footer-->
  <!-- Footer End -->
</template>

<script>
export default {
  name: "Footer"
}
</script>

<style scoped>

</style>
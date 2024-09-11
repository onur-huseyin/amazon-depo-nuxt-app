<template>
  <Menu/>
  <!-- Hero Start -->
  <section class="bg-half-260 border-bottom agency-wrapper d-table w-100" id="home">
    <div class="container">
      <div class="row align-items-center">
        <div class="col-lg-7 col-md-7 order-1 order-md-2">
          <div class="title-heading mt-4 ms-lg-5 ps-lg-5">
            <h1 class="heading mb-3">Size yardımcı olmak için buradayız!</h1>
            <p class="para-desc text-muted">Ürünlerimiz ile ilgili aklınıza takılan bir soru ya da yaşadığınız bir sorun varsa bize her zaman ulaşabilirsiniz.</p>
          </div>
        </div><!--end col-->

        <div class="col-lg-5 col-md-5 order-2 order-md-1 mt-4 pt-2 mt-sm-0 pt-sm-0">
          <img src="@/assets/images/support_banner.svg" class="img-fluid" alt="">
        </div>
      </div><!--end row-->
    </div><!--end container-->
  </section><!--end section-->
  <!-- Hero End -->
  <div class="container mt-100 mt-60">
    <div class="d-flex flex-column align-items-center justify-content-center">
      <h1>Sürekli Destek</h1>
      <p>Alanında uzman ekibimiz tüm soru ve sorunlarınız için canlı yardım ve uzaktan bağlantı desteği ile her zaman yanınızda!</p>
    </div>
    <div class="row">
      <div class="col-lg-4 col-md-6 mt-4 pt-2">
        <div class="d-flex flex-column features feature-primary key-feature align-items-start gap-3 p-3 rounded shadow">
          <div class="icon text-center rounded-circle me-3">
            <i class="uil uil-user-plus fs-2 align-middle"></i>
          </div>
          <div class="flex-1 gap-2">
            <h4><b>Bizimle iletişime geçin</b></h4>
            <h4 class="title mb-0">Aklınızda bulunan satış öncesi ya da satış sonrası teknik destek soruları ile ilgili bize ulaşabilirsiniz.}</h4>
          </div>
        </div>
      </div><!--end col-->
      <div class="col-lg-4 col-md-6 mt-4 pt-2">
        <div class="d-flex flex-column features feature-primary key-feature align-items-start gap-3 p-3 rounded shadow">
          <div class="icon text-center rounded-circle me-3">
            <i class="uil uil-history fs-2 align-middle"></i>
          </div>
          <div class="flex-1 gap-2">
            <h4><b>Geri Bildirimde Bulunun</b></h4>
            <h4 class="title mb-0">Kullanımınızın ardından edindiğiniz tecrübeler doğrultusunda geliştirilmesi gereken noktalarda bize bildirimde bulunun.</h4>
          </div>
        </div>
      </div><!--end col-->
      <div class="col-lg-4 col-md-6 mt-4 pt-2">
        <div class="d-flex flex-column features feature-primary key-feature align-items-start gap-3 p-3 rounded shadow">
          <div class="icon text-center rounded-circle me-3">
            <i class="uil uil-shield-plus fs-2 align-middle"></i>
          </div>
          <div class="flex-1 gap-2">
            <h4><b>Topluluğumuza Katılın</b></h4>
            <h4 class="title mb-0">Extenship kullanıcılarının bulunduğu bilgi ve deneyim paylaşım platformuna katılabilirsiniz.</h4>
          </div>
        </div>
      </div><!--end col-->
    </div><!--end row-->
  </div><!--end container-->
  <section>
    <div class="container info-area mt-100">
      <div class="row text-center justify-content-center align-items-center">
        <div class="col-12 col-lg-8">
          <h1 class="info-title">Gelişmelerden Anında Haberdar Ol</h1>
          <span class="info-small text-center">Her geçen gün yeni özelliklerle seni bir adım daha öteye taşıyoruz. Gelişmeleri kaçırmamak ve bizi daha da yakından tanımak için sosyal medya hesaplarımız ve YouTube kanalımızı takip edebilirsin.</span>
          <ul class="list-unstyled social-icon foot-social-icon mb-0 mt-4">
            <li class="list-inline-item"><a href="https://www.facebook.com/extenship" class="rounded-circle"><i class="uil uil-facebook-f  align-middle"></i></a></li>
            <li class="list-inline-item"><a href="https://www.instagram.com/extenship/" class="rounded-circle"><i class="uil uil-instagram align-middle"></i></a></li>
            <li class="list-inline-item"><a href="https://www.youtube.com/channel/UCAzQVQGvfNlDbW95ew-e7BQ" class="rounded-circle"><i class="uil uil-youtube align-middle"></i></a></li>
            <li class="list-inline-item"><a href="https://web.telegram.org/#/im?p=s1358473305_8456620088091584033" class="rounded-circle"><i class="uil uil-linkedin align-middle"></i></a></li>
          </ul><!--end icon-->
        </div>
      </div>
    </div>
  </section>
  <div class="container mt-100">
    <div class="row justify-content-center ">
      <div class="col-lg-8 mail-send">
        <div class="text-center">
          <h1><b>Bize Bildirin</b></h1>
        </div>
        <div class="col-md-12 mt-5">
          <div class="mb-3">
            <label class="form-label">Adınız Soyadınız <span class="text-danger">*</span></label>
            <div class="form-icon position-relative">
              <i data-feather="user" class="fea icon-sm icons"></i>
              <input style="background-color: #f4f6f8;" name="name" id="name" type="text" class="form-control">
            </div>
          </div>
        </div><!--end col-->
        <div class="col-12">
          <div class="mb-3">
            <label class="form-label">E-mail <span class="text-danger">*</span></label>
            <div class="form-icon position-relative">
              <i data-feather="mail" class="fea icon-sm icons"></i>
              <input style="background-color: #f4f6f8;" name="email" id="email" type="email" class="form-control">
            </div>
          </div>
        </div><!--end col-->
        <div class="col-12">
          <div class="mb-3">
            <label class="form-label">Mesaj</label>
            <div class="form-icon position-relative">
              <i data-feather="message-circle" class="fea icon-sm icons"></i>
              <textarea style="background-color: #f4f6f8;" name="comments" id="comments" rows="4" class="form-control"></textarea>
            </div>
          </div>
        </div>
        <div class="col-12 justify-content-center d-flex">
          <input type="submit" id="submit" name="send" class="btn btn-primary" value="Gönder">
        </div><!--end col-->
      </div>
    </div><!--end row-->
  </div>
  <div class="container mt-100 mt-60">
    <div class="row justify-content-center">
      <div class="col-12">
        <div class="section-title mb-4 pb-2 text-center">
          <h4 class="title mb-4">Paketler için Sıkça Sorulan Sorular</h4>
          <p class="text-muted para-desc mb-0 mx-auto">Farklı bir sorunuz mu var? O halde hemen bizimle iletişime geçin.</p>
        </div>
      </div><!--end col-->
    </div><!--end row-->

    <div class="row">
      <div class="col-md-6 col-12 mt-4 pt-2">
        <div class="d-flex">
          <i data-feather="help-circle" class="fea icon-ex-md text-primary me-2 mt-1"></i>
          <div class="flex-1">
            <h5 class="mt-0">Amazon Tool Nedir?</h5>
            <p class="answer text-muted mb-0">Amazon Tool; Amazon’da bulunan milyonlarca ürünün belirlediğiniz kriterlere göre taranıp incelenmesini sağlayan, düzenleyen ve satış mağazanızda kolaylıkla toplu bir şekilde sergilenmesini sağlayan bir yazılımdı.</p>
          </div>
        </div>
      </div><!--end col-->

      <div class="col-md-6 col-12 mt-4 pt-2">
        <div class="d-flex">
          <i data-feather="help-circle" class="fea icon-ex-md text-primary me-2 mt-1"></i>
          <div class="flex-1">
            <h5 class="mt-0"> Amazon Tool ile Easy Inventory Bulut Sisteminin farkı nedir?</h5>
            <p class="answer text-muted mb-0">Amazon Tool tüm tarama sürecini sizin bilgisayarınız üzerinden gerçekleştirir. Dropshipping dünyasındaki gelişmelere ayak uydurmak, sizlere çok daha hızlı ve kaliteli bir alt yapı sunmak adına Easy Inventory Bulut Sistemini geliştirdik.
              <br>Bulut Sistemiyle birlikte Easy Inventory tüm tarama ve güncelleme işlemlerini arka planda bulunan yüzlerce sunucu ile gerçekleştirir. Ayrıca Mobil Uygulaması sayesinde kullanıcıların bilgisayara bağlılığını ortadan kaldırır ve bu sayede her an her yerde ürün arama işlemini gerçekleştirebilirsiniz. Ürün arama ve envanter güncelleme işlemini tek bir çatı altına bulunduran Easy Inventory Bulut Sistemi ile birlikte Amazon Tool’un da satışını kaldırdık.
            </p>
          </div>
        </div>
      </div><!--end col-->

      <div class="col-md-6 col-12 mt-4 pt-2">
        <div class="d-flex">
          <i data-feather="help-circle" class="fea icon-ex-md text-primary me-2 mt-1"></i>
          <div class="flex-1">
            <h5 class="mt-0"> Easyinventory Nedir?</h5>
            <p class="answer text-muted mb-0">Easyinventory ile kendi belirlediğiniz akıllı ve gelişmiş filtreler ile saniyeler içinde binlerce ürün bulur, envanterinizdeki on binlerce ürünü tüm detaylarıyla yine kendi belirlediğiniz akıllı ve gelişmiş filtreler sayesinde saniyeler içinde günceller, karşılaştırmalı elemeleri ve kritik marka kontrolüyle kaldırılması gereken ürünlerden kolayca kurtulursunuz.</p>
          </div>
        </div>
      </div><!--end col-->

      <div class="col-md-6 col-12 mt-4 pt-2">
        <div class="d-flex">
          <i data-feather="help-circle" class="fea icon-ex-md text-primary me-2 mt-1"></i>
          <div class="flex-1">
            <h5 class="mt-0"> Easyinventory ile ülkelerdeki mağazalarımı yönetebilirim?</h5>
            <p class="answer text-muted mb-0">Kaynak mağaza Amerika olmak üzere; Kanada - amazon.ca Meksika - amazon.com.mx Birleşik Arap Emirlikleri - amazon.ae Almanya - amazon.de Fransa - amazon.fr İspanya - amazon.es İtalya - amazon.it İngiltere - amazon.co.uk Türkiye - amazon.com.tr Avustralya - amazon.com.au Japonya - amazon.co.jp Singapur - amazon.com.sg Hollanda - amazon.nl Suudi Arabistan - amazon.sa Toplam 15 pazar yerindeki mağazalarınızı yönetebilirsiniz.</p>
          </div>
        </div>
      </div><!--end col-->
    </div><!--end row-->
    <div class="row">
      <div class="col-md-6 col-12 mt-4 pt-2">
        <div class="d-flex">
          <i data-feather="help-circle" class="fea icon-ex-md text-primary me-2 mt-1"></i>
          <div class="flex-1">
            <h5 class="mt-0">Mağazamdaki ürünleri yazılıma nasıl aktarabilirim?</h5>
            <p class="answer text-muted mb-0">Mağaza entegrasyonunuzu tamamladığınız an ilk otomatik güncelleme işleminde mağazanıdaki mevcut ürünleriniz Easyinventory’e aktarılır.</p>
          </div>
        </div>
      </div><!--end col-->

      <div class="col-md-6 col-12 mt-4 pt-2">
        <div class="d-flex">
          <i data-feather="help-circle" class="fea icon-ex-md text-primary me-2 mt-1"></i>
          <div class="flex-1">
            <h5 class="mt-0"> İşlemler için seller hesabıma dosya yüklememe gerek var mı?</h5>
            <p class="answer text-muted mb-0">Kusursuz MWS entegrasyonu sayesinde herhangi bir dosya ile uğraşmanıza gerek yok. Tüm işlemleri Easyinventory sizin için hızlıca hallediyor.</p>
          </div>
        </div>
      </div><!--end col-->
      <div class="col-md-6 col-12 mt-4 pt-2">
        <div class="d-flex">
          <i data-feather="help-circle" class="fea icon-ex-md text-primary me-2 mt-1"></i>
          <div class="flex-1">
            <h5 class="mt-0"> Yazılımlar için eğitim veriliyor mu?</h5>
            <p class="answer text-muted mb-0">Youtube kanalımızda bulunan eğitim ve özellikleri anlattığımız videolardan yararlanabilirsiniz. Bunun haricinde yazılımla ilgili öğrenmek istediğiniz, videoların yeterli kalmadığı durumlar olursa mail ya da sosyal medya hesaplarımız aracılığıyla ulaşabileceğiniz destek ekibimiz sizlere her zaman yardımcı olacak, gerekirse uzaktan bağlantı sistemiyle destek verecektir. Ayrıca çok yakında Udemy üzerinde de yazılımlarımız için tamamen ücretsiz yararlanabileceğiz bir eğitim paketi sunacağız.
              <a class="text-primary" href="https://www.youtube.com/channel/UCAzQVQGvfNlDbW95ew-e7BQ"><b>kanalımıza buradan ulaşabilirsiniz.</b></a></p>
          </div>
        </div>
      </div><!--end col-->
      <div class="col-md-6 col-12 mt-4 pt-2">
        <div class="d-flex">
          <i data-feather="help-circle" class="fea icon-ex-md text-primary me-2 mt-1"></i>
          <div class="flex-1">
            <h5 class="mt-0"> Herhangi bir durumda size nasıl ulaşabilirim?</h5>
            <p class="answer text-muted mb-0">Destek sayfasındaki iletişim formu aracılığıyla Messenger butonundan, iletişim kısmındaki iletişim formu aracılığıyla,
              <a class="text-primary" href="https://www.facebook.com/extenship" target="_blank">Facebook</a> ve <a class="text-primary"
                                                                                                                   href="https://www.instagram.com/extenship/" target="_blank">Instagram</a> sosyal medya hesaplarımızdan ve
              <a class="text-primary" href="mailto:support@extenship.com"  target="_blank"> support@extenship.com</a> mail adresimiz ile bizlere ulaşabilirsiniz.</p>
          </div>
        </div>
      </div><!--end col-->
    </div><!--end row-->
  </div><!--end container-->
  <Footer/>
</template>

<script>
export default {
  name: "destek"
}
</script>

<style scoped>

</style>
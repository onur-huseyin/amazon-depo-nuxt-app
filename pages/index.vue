<template>
    <Menu/>
  <!-- Hero Start -->
  <section class="bg-home d-flex align-items-center" :style="{ backgroundImage: `url(${image})`}" style="height: auto;" id="home">
    <div class="container">
      <div class="row justify-content-center">
        <div class="col-lg-12 text-center mt-0 mt-md-5 pt-0 pt-md-5">
          <div class="title-heading margin-top-100">
            <h1 class="heading mb-3"><img width="170" src="@/assets/images/amazon-logo.svg" alt=""> 'da <span class="text-primary">E-Ticarete Başla</span></h1>
            <p class="para-desc mx-auto text-muted">Stoksuz e-ticaret hiç bu kadar kolay olmamıştı!</p>
            <div class="mt-4 pt-2">
              <a href="#about" class="btn btn-primary">EasyInventory ile Tanış</a>
            </div>
          </div>

          <div class="home-dashboard">
            <img src="@/assets/images/saas/home.png" alt="" class="img-fluid">
          </div>
        </div><!--end col-->
      </div><!--end row-->
    </div><!--end container-->
  </section><!--end section-->
  <!-- Hero End -->
  <div class="container mt-100">
    <div class="text-center">
      <h1>17 Ülkede Satış Yap</h1>
      <h6>Easyinventory ile Amazon’un olduğu 17 pazar yerinde tek bir kullanıcı hesabıyla tüm mağazalarını yönetebilirsin.</h6>
    </div>
    <Swiper class="mt-5"
        ref="swiper"
        :modules="modules"
        :options="swiperOptions"
        :space-between="5"
        :loop="true"
        :pagination="{clickable: true}"
        :slides-per-view="11"
        :autoplay="{
        delay:3500,
        disableOnInteraction: false,
       }">
      <swiper-slide v-for="parse in SwiperContent" :key="parse.img" >
        <div>
            <img :src="parse.img" alt="" >
        </div>
      </swiper-slide>
    </Swiper>
  </div>

  <!-- How It Work Start -->
  <section class="section bg-light border-bottom mt-5">
    <div class="container ">
      <div class="row align-items-center">
        <div class="col-lg-5 col-md-6 mt-4 pt-2">
          <img src="@/assets/images/illustrator/seo.svg" alt="">
        </div><!--end col-->
        <div class="col-lg-7 col-md-6 mt-4 pt-2">
          <div class="section-title ms-lg-5">
            <h4 class="title mb-4">Rakiplerini Solla!</h4>
            <p class="text-muted">İster hızlıca Lowest olmak isteyen yeni bir mağaza, ister BuyBox için mücadele eden eski bir mağaza ol. Easypricer ile rakiplerinin daima bir adım önünde ol!</p>
            <p class="text-muted">Hızlı sunucularımız ile 5 dakikada bir ürün hareketlerini analiz ediyor ve seni olman gereken yere taşıyoruz.</p>
            <NuxtLink  to="/easy-pricer" class="mt-4 h6 text-primary">Özelliklerimizi inceleyin
              <i class="uil uil-angle-right-b align-middle"></i></NuxtLink>
          </div>
        </div><!--end col-->
      </div><!--end row-->
      <div class="row align-items-center mt-4">
        <div class="col-lg-7 col-md-6 mt-4 pt-2">
          <div class="section-title ms-lg-5">
            <h4 class="title mb-4">Tek Bir Kurala Bağlı Kalma</h4>
            <p class="text-muted">Kullanıcı dostu Easyinventory ile mağazanı özgürce yönet. Tüm envanterine aynı kuralları uygulayabileceğin gibi belirlediğin fiyat aralıklarına, ASIN’e veya ara depo ile gönderilen ürünlere göre dilediğin kar, stok ve adet kuralını belirleyebilirsin.</p>
            <NuxtLink  to="/feedback" class="mt-4 h6 text-primary">Özelliklerimizi inceleyin
              <i class="uil uil-angle-right-b align-middle"></i></NuxtLink>
          </div>
        </div><!--end col-->
        <div class="col-lg-5 col-md-6 mt-4 pt-2">
          <img class="w-100" src="@/assets/images/illustrator/maintenance.svg" alt="">
        </div><!--end col-->
      </div><!--end row-->
      <div class="row align-items-center mt-4 flex-column-reverse d-lg-flex flex-lg-row">
        <div class="col-lg-5 col-md-6 mt-4 pt-2">
          <img class="w-75" src="@/assets/images/illustrator/security.svg" alt="">
        </div><!--end col-->
        <div class="col-lg-7 col-md-6 mt-4 pt-2">
          <div class="section-title ms-lg-5">
            <h4 class="title mb-4">Mağaza Sağlığını ve Güvenliğini Riske Atma</h4>
            <p class="text-muted">Amerika Birleşik Devletleri başta olmak üzere, Easyinventory’de entegre edebileceğin tüm mağazaların için her ülkenin Fikri Mülkiyet Ofisinden aldığımız bilgilerle gelişmiş bir Trademark veri tabanı sunuyoruz. </p>
            <p class="text-muted">Riskli kelime ve Kritik Marka listeni kendin yönetebilir, diğer kullanıcıların havuza eklediği binlerce kelime ve markayı kolayca listene ekleyip, çıkarabilirsin.</p>
            <NuxtLink  to="/ara-depo" class="mt-4 h6 text-primary">Özelliklerimizi inceleyin
              <i class="uil uil-angle-right-b align-middle"></i></NuxtLink>
          </div>
        </div><!--end col-->
      </div><!--end row-->
    </div><!--end container-->
  </section><!--end section-->
  <!-- How It Work End -->
  <!-- Features Start -->
  <section class="section bg-light">
    <div class="container">
      <div class="row justify-content-center">
        <div class="col-12 text-center">
          <div class="section-title mb-4 pb-2">
            <h2 class="title mb-4">Özellikler</h2>
            <p class="text-muted para-desc mb-0 mx-auto">Amazon’da stoksuz ticaret için ihtiyaçlarınızı karşılayan birçok özellik bir arada, en uygun fiyat ile sadece Easyinventory’de!</p>
          </div>
        </div><!--end col-->
      </div><!--end row-->

      <div class="row justify-content-center align-items-center">
        <div class="col-lg-12 col-md-10">
          <div class="row mt-4 pt-2">
            <div class="col-md-6 col-12">
              <div class="d-flex features feature-primary pt-4 pb-4">
                <div class="icon text-center rounded-circle text-primary me-3 mt-2">
                  <i class="uil uil-fast-mail feature-icon align-middle "></i>
                </div>
                <div class="flex-1">
                  <h4 class="title">Kolay ve Hızlı</h4>
                  <p class="text-muted para mb-0">Amazon’da Bulut sistemimizle kolay ve bekletmeden ürün tarıyoruz.</p>
                </div>
              </div>
            </div><!--end col-->

            <div class="col-md-6 col-12">
              <div class="d-flex features feature-primary pt-4 pb-4">
                <div class="icon text-center rounded-circle text-primary me-3 mt-2">
                  <i class="uil uil-box feature-icon align-middle"></i>
                </div>
                <div class="flex-1">
                  <h4 class="title">Daima Güncel Envanter</h4>
                  <p class="text-muted para mb-0">İstediğin aralıklarla tüm ürünlerini belirlediğin stok, fiyat ve filtrelere göre güncelliyoruz.</p>
                </div>
              </div>
            </div><!--end col-->

            <div class="col-md-6 col-12">
              <div class="d-flex features feature-primary pt-4 pb-4">
                <div class="icon text-center rounded-circle text-primary me-3 mt-2">
                  <i class="uil uil-server-network feature-icon align-middle"></i>
                </div>
                <div class="flex-1">
                  <h4 class="title">Mükemmel Entegrasyon</h4>
                  <p class="text-muted para mb-0">Kullanıcı dostu yazılımlarımızı sistem gözetmeksizin çalışması için her platform ve tarayıcıya uygun olarak geliştiriyoruz.</p>
                </div>
              </div>
            </div><!--end col-->

            <div class="col-md-6 col-12">
              <div class="d-flex features feature-primary pt-4 pb-4">
                <div class="icon text-center rounded-circle text-primary me-3 mt-2">
                  <i class="uil uil-user-check feature-icon align-middle"></i>
                </div>
                <div class="flex-1">
                  <h4 class="title">Eşsiz Deneyimler</h4>
                  <p class="text-muted para mb-0">Mobil uygulama ayrıcalığı sunan tek yazılım Easyinventory’dir. Dilediğin yerden ürün arama imkanı sağlıyoruz.</p>
                </div>
              </div>
            </div><!--end col-->

            <div class="col-md-6 col-12">
              <div class="d-flex features feature-primary pt-4 pb-4">
                <div class="icon text-center rounded-circle text-primary me-3 mt-2">
                  <i class="uil uil-cloud-times feature-icon align-middle"></i>
                </div>
                <div class="flex-1">
                  <h4 class="title">Kesintisiz Hizmet</h4>
                  <p class="text-muted para mb-0">Dünyanın dört bir yanında bulunan 1000’e yakın sunucumuzla kesintisiz ve yüksek performans sunuyoruz.</p>
                </div>
              </div>
            </div><!--end col-->

            <div class="col-md-6 col-12">
              <div class="d-flex features feature-primary pt-4 pb-4">
                <div class="icon text-center rounded-circle text-primary me-3 mt-2">
                  <i class="uil uil-file-question feature-icon align-middle "></i>
                </div>
                <div class="flex-1">
                  <h4 class="title">Sürekli Destek</h4>
                  <p class="text-muted para mb-0">Alanında uzman ekibimizle canlı yardım ve uzaktan bağlantı desteği ile her zaman yanındayız.</p>
                </div>
              </div>
            </div><!--end col-->
          </div><!--end row-->
        </div><!--end col-->
      </div><!--end row-->
    </div><!--end container-->
  </section><!--end section-->
  <!-- Feature End -->
  <section>
    <div class="container person-area">
      <div class="row justify-content-center align-items-start">
        <div class="col-12 col-lg-10 ">
          <h1 class="text-center">EasyInventory ile Büyüyenler</h1>
          <p style="color:#637381" class="text-center">Mağazanı her yerden yönetmenin keyfini çıkar!</p>
          <div class="row mt-4">
            <div class="col-lg-6">
              <div class="person-card">
                <div class="person-profil d-flex align-items-start">
                  <img width="55px" height="55px" class="rounded-circle" src="@/assets/images/person1.jpeg" alt="">
                  <div>
                    <h6>Kurtca K.</h6>
                    <p>EasyInventory Kullanıcısı</p>
                  </div>
                </div>
                <div class="person-info">
                  <p>
                    Stok ve fiyat kontrolleri, envanter arama filtreleri ve hızıyla büyük bir kolaylık sağlayan Easyinventory, yeni özelliği Easypricer ile de rakip mağazalara karşı güçlü aksiyon alabilme fırsatı sunuyor. Mağazalarımız güvenle Easyinventory'e emanet. Teşekkürler.
                  </p>
                </div>
              </div>
              <div class="person-card">
                <div class="person-profil d-flex align-items-start">
                  <img width="55px" height="55px" class="rounded-circle" src="@/assets/images/person3.jpeg" alt="">
                  <div>
                    <h6>Enes Ö.</h6>
                    <p>EasyInventory Kullanıcısı</p>
                  </div>
                </div>
                <div class="person-info">
                  <p>
                    Bu yazılımı almadan önce “dropshipping nasıl yapılır, olur mu, olmaz mı?” diye düşünür, sürdürülemez bir iş modeli olarak görürdüm. Ta ki Easyinventory ile karşılaşıncaya dek. Sistemi kullanmak o kadar basit ve anlaşılır ki amazonu bilmeyen biri bile çok kısa sürede her şeyi öğrenir. Hele ki EasyPricer senin adına 5 dakikada bir envanterini güncelleyip rakiplerinle adeta savaşıyor, lowest olmak ya da buybox almak için. Bunu manuel yapmanız imkansız… Gönder butonu ile tek tıkla siparişini senin adına hazırlayıp müşteriye yolluyorlar. Sen sadece otur izle.
                    <br> <br> Extenship ailesini bu güzel yazılımı bizlere sundukları için can-ı gönülden tebrik ediyorum.
                  </p>
                </div>
              </div>
            </div>
            <div class="col-lg-6">
              <div class="person-card">
                <div class="person-profil d-flex align-items-start">
                  <img width="55px" height="55px" class="rounded-circle" src="@/assets/images/person2.jpeg" alt="">
                  <div>
                    <h6>Seda Ç.</h6>
                    <p>EasyInventory Kullanıcısı</p>
                  </div>
                </div>
                <div class="person-info">
                  <p>
                    Yönetim Danışmanı Peter Drucker 'Ölçemediğin şeyi yönetemezsin' der. Extenship, yeni özellikleri ile hem rekabet etme şansı veriyor hem de bu rekabetteki durumu analiz etmek için harika bir veri sunuyor.
                    Ciddi hız kazandığımı söyleyebilirim. <br>Ayrıca, iş geliştirme sürecindeki Kurumsal Yaklaşımı, iletişim sürecinde ise adeta 'Anne Şefkati' yaklaşımı için Extenship ailesine teşekkür ederim.
                  </p>
                </div>
              </div>
              <div class="person-card">
                <div class="person-profil d-flex align-items-start">
                  <img width="55px" height="55px" class="rounded-circle" src="@/assets/images/person4.jpeg" alt="">
                  <div>
                    <h6>Ozancan Ş.</h6>
                    <p>EasyInventory Kullanıcısı</p>
                  </div>
                </div>
                <div class="person-info">
                  <p>
                    Amazon’da satıcıysanız ve bu programı kullanıyorsanız yapacak olduğunuz işler %90 oranında azalmış demektir. "Stok takibi, Trademark sıkıntısı, kar mı ettim zarar mı?" gibi şeyleri artık düşünmüyorum. Girdiğim filtrelemeler sayesinde kullanımı çok rahat. Şimdi EasyPricer adlı bir güncelleme yaptılar, Amazon’un Automatic Pricer’ını bile kullanmama gerek kalmıyor. Gönül rahatlığıyla güvenli bir şekilde kullanıyorum.
                  </p>
                </div>
              </div>
            </div>
          </div>

        </div>
      </div>
    </div>
  </section>
  <section>
    <div class="container info-area">
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

  <!-- Back to top -->
  <a href="#" onclick="topFunction()" id="back-to-top" class="back-to-top fs-5"><i class="uil uil-arrow-up align-middle"></i></a>
  <!-- Back to top -->
  <Footer/>
</template>

<script>
import bikeImg from "@/assets/images/saas/home-shape.png";
import Footer from "../components/Footer.vue";
import {Swiper, SwiperSlide} from 'swiper/vue'
import {Autoplay, Pagination, Navigation} from 'swiper'
import 'swiper/css'
import 'swiper/css/pagination'
import 'swiper/css/navigation'
import {ref} from 'vue'


export default{
  components: {Footer, Swiper, SwiperSlide},
  methods: {
    prev() {
      this.$refs.swiper.$swiper.slidePrev();
    },
    next() {
      this.$refs.swiper.$swiper.slideNext();
    }
  },
  data() {
    return {
      image: bikeImg,
      swiperOptions: {
        navigation: {
          nextEl: '.swiper-button-next',
          prevEl: '.swiper-button-prev'
        }
      }
    };
  },
  setup(){
    const SwiperContent = ref([
      {
        img: 'https://extenship.com/img/country/ES.svg',
        title: 'amazon.es'
      },
      {
        img: 'https://extenship.com/img/country/IT.svg',
        title: 'amazon.it'
      },
      {
        img: 'https://extenship.com/img/country/UK.svg',
        title: 'amazon.uk'
      },
      {
        img: 'https://extenship.com/img/country/SW.svg',
        title: 'amazon.sw'
      },
      {
        img: 'https://extenship.com/img/country/TR.svg',
        title: 'amazon.tr'
      },
      {
        img: 'https://extenship.com/img/country/SA.svg',
        title: 'amazon.sa'
      },
      {
        img: 'https://extenship.com/img/country/SG.svg',
        title: 'amazon.sa'
      },
      {
        img: 'https://extenship.com/img/country/AU.svg',
        title: 'amazon.au'
      },
      {
        img: 'https://extenship.com/img/country/JP.svg',
        title: 'amazon.jp'
      },
      {
        img: 'https://extenship.com/img/country/PL.svg',
        title: 'amazon.pl'
      },
      {
        img: 'https://extenship.com/img/country/BE.svg',
        title: 'amazon.be'
      },
        ]);
    return{modules: [Pagination, Autoplay, Navigation], SwiperContent }
  },

}
</script>
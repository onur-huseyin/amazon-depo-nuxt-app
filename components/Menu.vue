<template>
  <!-- Google Tag Manager (noscript) -->
  <noscript><iframe src="https://www.googletagmanager.com/ns.html?id=GTM-TZGK9JW"
                    height="0" width="0" style="display:none;visibility:hidden"></iframe></noscript>
  <!-- End Google Tag Manager (noscript) -->
        
        <!-- Navbar Start -->
        <header id="topnav" class="defaultscroll sticky">
            <div class="container">
                <!-- Logo container-->
                <NuxtLink to="/" class="logo" href="index.html">
                    <img src="@/assets/images/easycentral-a.svg" height="24" alt="">
                </NuxtLink>
                <!-- Logo End -->

                <!-- End Logo container-->
                <div class="menu-extras">
                    <div class="menu-item">
                        <!-- Mobile menu toggle-->
                        <a class="navbar-toggle" id="isToggle" onclick="toggleMenu()">
                            <div class="lines">
                                <span></span>
                                <span></span>
                                <span></span>
                            </div>
                        </a>
                        <!-- End mobile menu toggle-->
                    </div>
                </div>

                <!--Login button Start-->
                <ul class="buy-button list-inline mb-0">
                    <li class="list-inline-item ps-1 mb-0">
                        <a href="https://extenship.com/hesabim" target="_blank">
                            <div class="btn btn-icon btn-pills btn-primary"><i class="uil uil-user-circle fs-6 align-middle me-1"></i>Hesabım</div>
                        </a>
                    </li>
                </ul>
                <!--Login button End-->

                <div id="navigation">
                    <!-- Navigation Menu-->   
                    <ul class="navigation-menu">
                      <li class="has-submenu parent-parent-menu-item">
                        <a href="javascript:void(0)">Özellikler</a><span class="menu-arrow"></span>
                        <ul class="submenu megamenu">
                          <li>
                            <ul>
                              <li><a class="sub-menu-item"> Özellikler</a></li>
                              <li><NuxtLink to="/otomatik-siparis" class="sub-menu-item"><i class="uil uil-box fs-6 align-middle me-1"></i>Otomatik Sipariş</NuxtLink></li>
                              <li><NuxtLink to="/feedback" class="sub-menu-item"><i class="uil uil-message fs-6 align-middle me-1"></i>
                                Feedback</NuxtLink></li>
                              <li><NuxtLink to="/mobil-uygulama" class="sub-menu-item"><i class="uil uil-mobile-android fs-6 align-middle me-1"></i>
                                Mobil Uygulama</NuxtLink></li>
                              <li><NuxtLink to="/easy-pricer" class="sub-menu-item"><i class="uil uil-tag-alt fs-6 align-middle me-1"></i>
                                Easy Pricer</NuxtLink></li>
                              <li><NuxtLink to="easy-clipboard" class="sub-menu-item"><i class="uil uil-copy-landscape fs-6 align-middle me-1"></i>
                                Easy Clipboard</NuxtLink></li>
                              <li><NuxtLink to="/ara-depo" class="sub-menu-item"><i class="uil uil-truck-loading fs-6 align-middle me-1"></i>

                                Easy Shipping</NuxtLink></li>
                            </ul>
                          </li>
                          <li>
                            <ul>
                              <li><a class="sub-menu-item"> MAĞAZA FİLTRELERİ</a></li>
                              <li><NuxtLink to="/satici-markali-urunler" class="sub-menu-item"><i class="uil uil-filter fs-6 align-middle me-1"></i>
                                Satıcı Markalı Ürün</NuxtLink></li>
                              <li><NuxtLink to="/trademark" class="sub-menu-item"><i class="uil uil-trademark fs-6 align-middle me-1"></i>
                                Trademark</NuxtLink></li>
                              <li><NuxtLink to="/kritik-marka" class="sub-menu-item"><i class="uil uil-copyright fs-6 align-middle me-1"></i>
                                Kritik Marka</NuxtLink></li>
                              <li><NuxtLink to="/kelime-filtresi" class="sub-menu-item"><i class="uil uil-ban fs-6 align-middle me-1"></i>
                                Kelime Filtresi</NuxtLink></li>
                            </ul>
                          </li>

                          <li>
                            <ul>
                              <li><a class="sub-menu-item"> RAKİP MAĞAZA FİLTRELERİ</a></li>
                              <li><NuxtLink to="/sales-rank" class="sub-menu-item"><i class="uil uil-trophy fs-6 align-middle me-1"></i>
                                Sales Rank</NuxtLink></li>
                              <li><NuxtLink to="/magaza-karsilastirma" class="sub-menu-item"><i class="uil uil-balance-scale fs-6 align-middle me-1"></i>
                                Mağaza Karşılaştırma</NuxtLink></li>
                              <li><NuxtLink to="/uncertain" class="sub-menu-item"><i class="uil uil-truck-loading fs-6 align-middle me-1"></i>
                                Maliyeti Belirsiz Ürünler</NuxtLink></li>
                              <li><NuxtLink to="/gonderilemeyen-urunler" class="sub-menu-item"><i class="uil uil-traffic-barrier fs-6 align-middle me-1"></i>
                                Gönderilmeyen Ürünler</NuxtLink></li>
                            </ul>
                          </li>

                          <li>
                            <ul>
                              <li><a  class="sub-menu-item"> ENVANTER AYARLARI</a></li>
                              <li><NuxtLink to="/fatura-sablonu" class="sub-menu-item"><i class="uil uil-file-blank fs-6 align-middle me-1"></i>
                                Fatura Şablonu</NuxtLink></li>
                              <li><NuxtLink to="/urun-arama" class="sub-menu-item"><i class="uil uil-search-plus fs-6 align-middle me-1"></i>
                                Ürün Arama</NuxtLink></li>
                              <li><NuxtLink to="/envanter-yonetimi" class="sub-menu-item"><i class="uil uil-box fs-6 align-middle me-1"></i>
                                Envanter Yönetimi</NuxtLink></li>
                              <li><NuxtLink to="/fiyatlandirma-ayarlari" class="sub-menu-item"><i class="uil uil-usd-square fs-6 align-middle me-1"></i>
                                Fiyatlandırma Ayarları</NuxtLink></li>
                              <li><NuxtLink to="/envanterden-ayir" class="sub-menu-item"><i class="uil uil-analytics fs-6 align-middle me-1"></i>
                                Envanterden Ayır</NuxtLink></li>

                            </ul>
                          </li>
                        </ul>
                      </li>
                      <li class="has-submenu parent-menu-item">
                        <NuxtLink to="/fiyatlar">Fiyatlar</NuxtLink>
                      </li>
                      <li class="has-submenu parent-menu-item">
                        <a href="https://events.extenship.com/stoksuz-e-ticaret-konferansi.html" target="_blank">Etkinlikler</a>
                      </li>
                      <li class="has-submenu parent-parent-menu-item">
                        <a href="javascript:void(0)">Videolar</a><span class="menu-arrow"></span>
                        <ul class="submenu">
                          <li class="has-submenu parent-menu-item"><a target="_blank" href="https://www.youtube.com/watch?v=wSqp7jxgXK4&list=PLsfSVILnx8QpFO8Da4P8D6Q-4cIoSK-Uk"> EasyInventory Eğitimi </a>
                          </li>
                          <li class="has-submenu parent-menu-item"><a target="_blank" href="https://www.youtube.com/c/Extenship/videos"> Extenship Videoları </a>
                          </li>
                        </ul>
                      </li>

                        <li class="has-submenu parent-menu-item">
                            <NuxtLink to="/affiliate">Affiliate</NuxtLink>
                        </li>
                      <li class="has-submenu parent-menu-item">
                        <a href="javascript:void(0)">Blog</a>
                      </li>
                      <li class="has-submenu parent-menu-item">
                        <NuxtLink to="/destek"> Destek</NuxtLink>
                      </li>
                    </ul><!--end navigation menu-->
                </div><!--end navigation-->
            </div><!--end container-->
        </header><!--end header-->
        <!-- Navbar End -->
</template>

<script>

export default{
  name: "Menu",
  mounted() {
    const script = document.createElement("script");
    script.type = "text/javascript";
    script.src = "https://shreethemes.in/landrick/landing/assets/js/app.js";
    document.body.appendChild(script);
  }
}
</script>
<template>
  <header id="header" class="fixed-top">
    <div class="container d-flex align-items-center">
      <h2 class="logo me-auto"><a href="/">Senat Polindra</a></h2>
      <nav id="navbar" class="navbar">
        <ul>
          <li>
            <router-link to="/" class="nav-link scrollto">Home</router-link>
          </li>
          <li>
            <router-link to="/dokumen" class="nav-link scrollto"
              >Dokumen</router-link
            >
          </li>

          <li class="dropdown">
            <a href="#"
              ><span>Struktur Organisasi</span>
              <i class="bi bi-chevron-down"></i
            ></a>
            <ul>
              <li><router-link to="/keanggotaan"> Keanggotaan</router-link></li>
              <li>
                <router-link to="fungsi-kerja">Fungsi Kerja </router-link>
              </li>
            </ul>
          </li>
          <li class="dropdown">
            <a href="#"
              ><span>Profil</span> <i class="bi bi-chevron-down"></i
            ></a>
            <ul>
              <li>
                <router-link to="/sejarah-polindra">
                  Sejarah Polindra</router-link
                >
              </li>
              <li>
                <router-link to="/sambutan-ketua"
                  >Sambutan Ketua Senat</router-link
                >
              </li>
            </ul>
          </li>
          <li><router-link to="/berita"> Berita</router-link></li>
          <li><router-link to="/galeri">Galeri</router-link></li>
          <li>
            <i class="bi bi-flag-fill" style="color: aliceblue"></i>
          </li>
          <li>
            <a
              class="getstarted scrollto"
              href=" http://127.0.0.1:5173/auth/login"
              >Masuk</a
            >
          </li>
        </ul>
      </nav>
    </div>
  </header>
</template>

<script>
export default {};
</script>

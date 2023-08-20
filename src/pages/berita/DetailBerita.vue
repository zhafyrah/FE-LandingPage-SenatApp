<template>
  <section id="breadcrumbs" class="breadcrumbs">
    <div class="container">
      <h2>Detail Berita</h2>
    </div>
  </section>
  <section id="portfolio-details" class="portfolio-details">
    <div class="container">
      <div class="row gy-4">
        <div class="col-lg-8">
          <div class="portfolio-details-slider swiper">
            <div class="swiper-wrapper align-items-center">
              <img :src="data.fotoPath" alt="" style="width: 600px" />
            </div>
          </div>
        </div>

        <div class="col-lg-4">
          <div class="portfolio-info">
            <h3>Informasi Berita</h3>
            <ul>
              <li><strong>Pembuat</strong>: {{ data.namaUser }}</li>
              <li>
                <strong>Tanggal Unggah</strong>:
                {{ formatDateTimeFromServer(data.createdAt) }}
              </li>
            </ul>
          </div>
        </div>
        <div class="col-lg-8">
          <div class="portfolio-description">
            <h2>{{ data.judul }}</h2>
            <p>{{ data.isi }}</p>
          </div>
        </div>
      </div>
    </div>
  </section>
</template>
<script>
import { mounted } from "vue";

export default {
  props: ["id"],
  data() {
    return {
      data: {},
      judul: "",
      isi: "",
      foto_url: "",
      foto_path: "",
      nama_user: "",
      tanggal_unggah: "",
      page: 1,
      totalPage: 10,
    };
  },

  methods: {
    showDataBerita() {
      const self = this;
      self.$store.dispatch("showData", ["berita", this.id]).then((response) => {
        console.log(response.data);
        this.data = response.data;
      });
    },
    formatDateTimeFromServer(date) {
      var d = new Date(date),
        month = "" + (d.getMonth() + 1),
        day = "" + d.getDate(),
        year = d.getFullYear(),
        hours = d.getHours() < 10 ? `0${d.getHours()}` : d.getHours(),
        minutes = d.getMinutes() < 10 ? `0${d.getMinutes()}` : d.getMinutes();

      if (month.length < 2) month = "0" + month;
      if (day.length < 2) day = "0" + day;

      return `${[day, month, year].join("/")} ${[hours, minutes].join(":")}`;
    },
  },
  mounted() {
    this.showDataBerita();
  },
};
</script>

<template>
  <div id="faq" class="faq section-bg">
    <div class="container">
      <div class="section-title">
        <a href="/dokumen-senat">
          <h2>Dokumen Senat</h2>
        </a>
      </div>
      <div class="col mt-3" v-for="(dok, index) in data" :key="index">
        <div class="row mb-3">
          <a :href="dok.linkUrl" target="_blank"> {{ dok.judulDokumen }}</a>
          <p>{{ dok.keterangan }}</p>
        </div>
        <center>
          <p>Anda juga dapat melihat langsung dengan scan QR Code Berikut</p>
          <img :src="dok.dokumenUrl" alt="dokumen-senat" style="width: 200px" />
        </center>
      </div>
    </div>
  </div>
</template>
<script>
import { mounted } from "vue";

export default {
  data() {
    return {
      data: {},
      judul_dokumen: "",
      tanggal_unggah: "",
      keterangan: "",
      link_url: "",
      dokumen_url: "",
      dokumen_name: "",
      dokumen_path: "",
      page: 1,
      totalPage: 10,
    };
  },

  methods: {
    getDataDokumen() {
      const self = this;
      self.$store
        .dispatch("getData", ["dokumen-senat", []])
        .then((response) => {
          this.data = response.data;
        });
    },
  },
  mounted() {
    this.getDataDokumen();
  },
};
</script>

<style></style>

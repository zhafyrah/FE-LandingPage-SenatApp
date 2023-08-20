<template>
  <div class="mt-4x"></div>
  <GChart
    :settings="{
      packages: ['orgchart'],
      callback: () => {
        this.drawChart();
      },
    }"
    type="OrgChart"
    :data="chartData"
  />
</template>

<script>
import { GChart } from "vue-google-charts";

export default {
  components: {
    GChart,
  },
  data() {
    return {
      chartData: null,
    };
  },
  methods: {
    drawChart() {
      this.chartData = new google.visualization.DataTable();
      this.chartData.addColumn("string", "Name");
      this.chartData.addColumn("string", "Manager");
      this.chartData.addColumn("string", "ToolTip");

      // For each orgchart box, provide the name, manager, and tooltip to show.
      this.$store.dispatch("getData", ["chart", []]).then((res) => {
        console.log("res =>");
        // console.log(res.data);
        this.chartData.addRows(res);
      });
      // this.chartData.addRows(
      //     [
      //   [
      //     {
      //       v: "Ketua Senat",
      //       f: "Eka Ismantohadi, S.Kom. M.Eng \n Ketua Senat",
      //     },
      //     "", // No manager for the Ketua Senat
      //     "Ketua Senat",
      //   ],
      //   [
      //     {
      //       v: "Sekertaris Senat",
      //       f: "Ahmad Mujammil S.Kom \n Sekertaris Senat",
      //     },
      //     "Ketua Senat",
      //     "Sekertaris Senat",
      //   ],
      //   // Ketua Komisi 1 and its members
      //   [
      //     { v: "Ketua Komisi 1", f: "Kamaludin M.T \n Ketua Komisi A" },
      //     "Sekertaris Senat",
      //     "Ketua Komisi 1",
      //   ],
      //   [
      //     { v: "Ketua Komisi 2", f: "Komarudin S.T, M.Ag \n Ketua Komisi B" },
      //     "Sekertaris Senat",
      //     "Ketua Komisi 2",
      //   ],
      //   [
      //     { v: "Ketua Komisi 3", f: "Eka Saputri M.MCs \n Ketua Komisi C" },
      //     "Sekertaris Senat",
      //     "Ketua Komisi 3",
      //   ],
      //   [
      //     {
      //       v: "Ketua Komisi 4",
      //       f: "Kiki Putra Handayanto S.E \n Ketua Komisi D",
      //     },
      //     "Sekertaris Senat",
      //     "Ketua Komisi 4",
      //   ],
      //   [
      //     {
      //       v: "Anggota Komisi 1.2",
      //       f: "Kokom \n Anggota Komisi A",
      //     },
      //     "Ketua Komisi 1",
      //     "Anggota Komisi 1.1",
      //   ],
      //   [
      //     {
      //       v: "Anggota Komisi 1.3",
      //       f: "Luna Maya \n Anggota Komisi A",
      //     },
      //     "Ketua Komisi 1",
      //     "Anggota Komisi 1.1",
      //   ],
      //   [
      //     {
      //       v: "Anggota Komisi 1.1",
      //       f: "Lucky Hakim \n Anggota Komisi A",
      //     },
      //     "Ketua Komisi 1",
      //     "Anggota Komisi 1.1",
      //   ],
      //   [
      //     {
      //       v: "Anggota Komisi 2.1",
      //       f: "Angga Yunanda \n Anggota Komisi B",
      //     },
      //     "Ketua Komisi 2",
      //     "Anggota Komisi 1.2",
      //   ],
      //   [
      //     {
      //       v: "Anggota Komisi 2.2",
      //       f: "Anggita Kurniasih \n Anggota Komisi B",
      //     },
      //     "Ketua Komisi 2",
      //     "Anggota Komisi 1.2",
      //   ],
      //   [
      //     {
      //       v: "Anggota Komisi 2.3",
      //       f: "Anton Supratno \n Anggota Komisi B",
      //     },
      //     "Ketua Komisi 2",
      //     "Anggota Komisi 1.2",
      //   ],
      //   [
      //     {
      //       v: "Anggota Komisi 3.1",
      //       f: "Anita Lucy \n Anggota Komisi C",
      //     },
      //     "Ketua Komisi 3",
      //     "Anggota Komisi 1.2",
      //   ],
      //   [
      //     {
      //       v: "Anggota Komisi 3.2",
      //       f: "Andra M. H \n Anggota Komisi C",
      //     },
      //     "Ketua Komisi 3",
      //     "Anggota Komisi 1.2",
      //   ],
      //   [
      //     {
      //       v: "Anggota Komisi 3.3",
      //       f: " Sofy Putri \n Anggota Komisi C",
      //     },
      //     "Ketua Komisi 3",
      //     "Anggota Komisi 1.2",
      //   ],
      //   [
      //     {
      //       v: "Anggota Komisi 2.4",
      //       f: "Angga Fatullah \n Anggota Komisi D",
      //     },
      //     "Ketua Komisi 4",
      //     "Anggota Komisi 1.4",
      //   ],
      //   [
      //     {
      //       v: "Anggota Komisi 4.1",
      //       f: "Jeremy Taufan \n Anggota Komisi D",
      //     },
      //     "Ketua Komisi 4",
      //     "Anggota Komisi 1.4",
      //   ],
      //   [
      //     {
      //       v: "Anggota Komisi 4.3",
      //       f: "Chiko Jerico \n Anggota Komisi D",
      //     },
      //     "Ketua Komisi 4",
      //     "Anggota Komisi 1.4",
      //   ],
      //   // Add more Ketua Komisi entries and their members
      //   // ...
      // ]);

      // Create the chart.
      var chart = new google.visualization.OrgChart(
        document.getElementById("tree")
      );
      // Draw the chart, setting the allowHtml option to true for the tooltips.
      chart.draw(this.chartData, { allowHtml: true, nodeClass: "custom-node" });
    },
  },
  mounted() {
    google.charts.load("current", { packages: ["orgchart"] }); // Load Google Charts API

    google.charts.setOnLoadCallback(() => {
      this.drawChart();
    });
  },
};
</script>

<style>
table {
  border-collapse: inherit;
  border-spacing: 0;
}

.google-visualization-orgchart-node {
  width: 200px !important;
}
</style>

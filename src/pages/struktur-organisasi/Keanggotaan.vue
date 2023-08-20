<template>
  <div class="container">
    <div class="section-title">
      <a href="/">
        <h2>Keanggotaan</h2>
      </a>
    </div>
  </div>
  <div>
    <OrgChart />
  </div>
</template>

<script>
import OrgChart from "@/components/OrgChart.vue";

export default {
  components: {
    OrgChart,
  },
  data() {
    return {};
  },
};
</script>

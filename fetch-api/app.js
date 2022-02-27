const app = new Vue({
  el: "#app",
  data: {
    galerias: [],
  },
  methods: {
    async fetchGalerias() {
      const resp = await fetch(
        "http://deveduc.ddns.net:88/listadocursos/agenda/galerias.json"
      );
      const data = await resp.json();
      console.log(data)
      this.galerias = data.galerias;
    },
  },
  created() {
    this.fetchGalerias();
  },
});

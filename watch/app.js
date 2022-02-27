const app = new Vue({
  el: "#app",
  data: {
    counter: 0,
  },
  watch: {
    counter: function(newCounter, oldCounter) {
      console.log({newCounter, oldCounter})
      this.counter += 10;
    },
  },
});

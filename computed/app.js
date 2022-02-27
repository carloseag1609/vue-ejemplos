const app = new Vue({
  el: "#app",
  data: {
    counter: 0,
  },
  methods: {
    increment() {
      this.counter++;
    },
    decrement() {
      this.counter--;
    },
  },
  computed: {
    getSquareCounter() {
      console.log("getSquareCounter");
      return this.counter * this.counter;
    },
  },
});

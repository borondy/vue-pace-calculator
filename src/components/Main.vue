<template>
  <div class="container">
    <div class="col">
      <h1 class="text-center">My 1km pace is:</h1>
      <form class="form m-3" v-on:submit.prevent="calculate()">
        <div class="row justify-content-center">
          <div class="form-group">
            <label class="form-label" for="minutes">Minutes: </label
            ><input
              class="form-control"
              type="number"
              name="minutes"
              id="minutes"
              v-model.number="mins"
            />
          </div>
          <div class="form-group">
            <label class="form-label" for="seconds">Seconds:</label
            ><input
              class="form-control"
              type="number"
              name="seconds"
              id="seconds"
              v-model.number="secs"
            />
          </div>
        </div>
        <div class="row">
          <button class="btn btn-success form-control" v-on:click="calculate()">
            Which equals to:
          </button>
        </div>
        <div class="row">
          <div class="col" v-if="paces">
            <table class="table table-striped">
              <thead class="thead">
                <tr>
                  <th>Distance</th>
                  <th>Time</th>
                </tr>
              </thead>
              <tbody class="table table-striped">
                <tr v-for="p in paces" :key="p.distanceString">
                  <td>{{ p.distanceString }}</td>
                  <td>{{ p.paceString }}</td>
                </tr>
              </tbody>
            </table>
          </div>
        </div>
      </form>
    </div>
  </div>
</template>
<script lang="ts">
import { Component, Vue } from "vue-property-decorator";
import getGeneralPaces, { Pace } from "../models/pace-calculator";
@Component
export default class Main extends Vue {
  private mins = 0;
  private secs = 0;
  private paces: Pace[] = [];

  public calculate() {
    this.paces = getGeneralPaces(this.mins, this.secs);
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
h3 {
  margin: 40px 0 0;
}
ul {
  list-style-type: none;
  padding: 0;
}
li {
  display: inline-block;
  margin: 0 10px;
}
a {
  color: #42b983;
}
</style>

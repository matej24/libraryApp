<template>
  <div id="app">
    <div>
      <notifications group="foo" />
      <b-navbar toggleable="lg" type="dark" variant="info">
        <b-navbar-brand href="#">Library APP</b-navbar-brand>

        <b-navbar-toggle target="nav-collapse"></b-navbar-toggle>

        <b-collapse id="nav-collapse" is-nav>
          <b-navbar-nav>
            <b-nav-item href>
              <router-link to="/" style="color: white">Home</router-link>
            </b-nav-item>
            <b-nav-item href>
              <router-link to="/about" style="color: white">About</router-link>
            </b-nav-item>
          </b-navbar-nav>
        </b-collapse>
      </b-navbar>
    </div>
    <router-view />
  </div>
</template>

<style lang="scss">
#app {
  font-family: "Avenir", Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
}

#nav {
  padding: 30px;
}
</style>

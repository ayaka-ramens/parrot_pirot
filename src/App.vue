<template>
  <div id="app">
    <div id="nav">
      <router-link to="/">Home</router-link> |
      <router-link to="/departures">departures</router-link>|
      <router-link to="/check-in">check-in</router-link>|
      <router-link to="/security-check">security-check</router-link>|
      <router-link to="/immigration">immigration</router-link>|
      <router-link to="/boarding-gate">boarding-gate</router-link>|
      <router-link to="/on-board">on-board</router-link>
    </div>
    <router-view/>
  </div>
</template>

<style>
</style>

<template>
  <div class="hello">
    <Header/>
    <!-- <ClientAddsSelf/> -->
    <AgentAddsClient/>
    <!-- <ClientList/> -->
  </div>
</template>

<script>
import ClientList from './ClientList';
import AgentAddsClient from './AgentAddsClient';
import ClientAddsSelf from './ClientAddsSelf';
import Header from './Header';

export default {
  name: 'App',
  components: {
    ClientList,
    AgentAddsClient,
    ClientAddsSelf,
    Header
  }
}
</script>

<style scoped>

</style>

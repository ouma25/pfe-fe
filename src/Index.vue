<template>
  <div id="index_main">
    <Header></Header>
    <br>
    <br>
    <br>
    <Main_content></Main_content>
    <Footer></Footer>
  </div>
</template>

<script>

import Header from './components/header'
import Footer from './components/footer'
import Main_content from './components/main_content'

export default {
  components: {
    'Header' : Header,
    'Footer': Footer,
    'Main_content': Main_content
  }
}
</script>

<style>
</style>

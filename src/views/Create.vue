<template>
  <div class="create">
    <h1>Create your post</h1>
    <CreatePost/>
  </div>
</template>



<script>
import CreatePost from '../components/CreatePost.vue'

export default {
  name: 'Create',
  components: {
    CreatePost
  }
}
</script>

<style>

</style>
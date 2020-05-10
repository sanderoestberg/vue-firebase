<template>
<div class="create">
    <form class="form-container">
        <input type="text" v-model="post.title" placeholder="Make a title" required>
        <input type="text" v-model="post.description" placeholder="Type a description" required>
        <input type="file" ref="fileInput" accept="image/*" @change="previewImage">
    <div>
        <img :src="post.img" class="image-preview">
    </div>
    <button type="button" class="createBtn" v-on:click="createPost">Create post</button>
    </form>
</div>

</template>

<script>
import { postRef } from '../firebase-db'
export default {
data () {
    return {
        post:{
            title: "",
            description: "",
            img: null
        }
    }
},
methods: {
   
    previewImage () {
        const imageFile = this.$refs.fileInput.files[0]
        const fileReader = new FileReader()
        fileReader.onload = (event) => {
            this.post.img = event.target.result
        }
        fileReader.readAsDataURL(imageFile)
    },
    createPost () {
        postRef.add(this.post)
        this.$router.push('/')
    }
}
}
</script>

<style>
.create{
display: flex;
justify-content: center;
align-items: center;
flex-direction: column;
}
.form-container{
 display: flex;
 flex-direction: column;
 max-width: 400px;
}

.createBtn{
    /*box-shadow: 0px 10px 14px -7px #3e7327;*/
	background:linear-gradient(to bottom, #77b55a 5%, #72b352 100%);
	background-color:#77b55a;
	border-radius:4px;
	border:1px solid #4b8f29;
	display:inline-block;
	cursor:pointer;
	color:#ffffff;
	font-family:Arial;
	font-size:13px;
	padding:6px 12px;
	text-decoration:none;
}


.form-container input{
margin: 5px 0px;
padding: 10px;
border: 2px solid lightgray
}
</style>
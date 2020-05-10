<template>
<section>
  <div class="grid-container">
      <article class="post-items" v-for="post in posts" :key="post.id">
          <h2>{{post.title}}</h2>
          <img :src="post.img" :alt="post.title">
          <p>{{post.description}}</p>
          <button class="updateBtn" @click="selectPost(post.id, post.title, post.img, post.description)">Edit</button>
          <button class="deleteBtn" type="button" v-on:click="DeletePost(post.id)">Delete</button>
      </article>
  </div>
<div class="update-container" v-if="isHidden === false">
    <div id="update-form">
  <form class="form-container">
    <h2>Update your post</h2>
    <input v-model="postUpdate.title" value:postUpdate.title>
    <input v-model="postUpdate.description" value:postUpdate.description>
    <input type="file" ref="fileInput" accept="image/*" @change="previewImage">
    <div>
        <img :src="postUpdate.img" class="image-preview">
    </div>
    <button type="button" class="updateBtn" v-on:click="UpdatePost()">Update</button>
        </form>
        <div v-on:click="CloseUpdatePost()" class="closeBtn">x</div>
        </div>
        <div class="update-background" v-on:click="CloseUpdatePost()"></div>
</div>

        </section>
</template>

<script>
import { postRef } from '../firebase-db'
export default {
data () {
    return {
        posts: [],
        isHidden: true,
        postUpdate: {
        id: "",
        title: "",
        img: "",
        description: "",
        },
        
    }
},
firestore: {
    posts: postRef
},
methods: {
    selectPost(postId, titleId, imgId, descriptionId){
    this.isHidden = false
    this.postUpdate.id = postId
    this.postUpdate.title = titleId
    this.postUpdate.img = imgId
    this.postUpdate.description = descriptionId
    },
    CloseUpdatePost(){
    this.isHidden = true
    },
    UpdatePost(){
    postRef.doc(this.postUpdate.id).update(this.postUpdate)
    this.postUpdate = {
        id: "",
        title: "",
        img: "",
        description: "",
        }
    },
    DeletePost(id){
        postRef.doc(id).delete();
    },
    previewImage () {
        const imageFile = this.$refs.fileInput.files[0]
        const fileReader = new FileReader()
        fileReader.onload = (event) => {
            this.postUpdate.img = event.target.result
        }
        fileReader.readAsDataURL(imageFile)
    }
}
}
</script>

<style>
.grid-container{
    display: grid;
    grid-template-columns: 1fr 1fr 1fr;
    grid-gap: 5%;
    margin: 0px 5%;
}

.post-items{
    border: 4px solid lightgray;
    padding: 10px;
}
img{
    max-height: 200px;
    max-width: 400px;
}
.update-background{
    width: 100%;
    height: 100%;
    position: fixed;
    top: 0;
    left: 0;
    background: rgba(100, 100, 100, 0.40);
    z-index: 1;
}
.update-container{
    width: 100%;
    height: 100%;
    position: fixed;
    top: 0;
    left: 0;
    display: flex;
    justify-content: center;
    align-items: center;
    z-index: 2;
    /*flex-direction: column; */
}
#update-form{
display: flex;
border: 10px solid rgb(53,73,94);
box-shadow: 8px 8px 8px 0px rgb(65,184,131,0.60);
 background-color: #ffffff;
 z-index: 9;
 padding-left: 50px;
}

.closeBtn{
display: flex;
justify-content: center;
align-items: center;
color: #ffffff;
font-weight: bold;
font-size: 18px;
background-color:gray;
width: 30px;
height: 30px;
border-radius: 30px;
z-index: 10;
margin: 10px;
cursor: pointer;

}
.updateBtn{
 /*box-shadow: 0px 10px 14px -7px #54a3f7;*/
	background:linear-gradient(to bottom, #007dc1 5%, #0061a7 100%);
	background-color:#007dc1;
	border-radius:4px;
	border:1px solid #124d77;
	display:inline-block;
	cursor:pointer;
	color:#ffffff;
	font-family:Arial;
	font-size:13px;
	padding:6px 12px;
	text-decoration:none;
}
.deleteBtn{
    /*box-shadow: 0px 10px 14px -7px #f5978e;*/
	background:linear-gradient(to bottom, #f24537 5%, #c62d1f 100%);
	background-color:#f24537;
	border-radius:4px;
	border:1px solid #d02718;
	display:inline-block;
	cursor:pointer;
	color:#ffffff;
	font-family:Arial;
	font-size:13px;
	padding:6px 12px;
	text-decoration:none;
}
.form-container{
 display: flex;
 flex-direction: column;
 max-width: 400px;
 padding: 5vh;
}
.form-container input{
margin: 5px 0px;
padding: 10px;
border: 2px solid lightgray
}
</style>
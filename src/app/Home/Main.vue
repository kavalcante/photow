<template>
<section>
  <root-header></root-header>
  <div class="container-fluid">
    <div class="row">
      <div class="col-xs-12 col-md-6 col-md-offset-3">
        <vue-webcam ref='webcam' width="100%" height="auto"></vue-webcam>
        <button id="camera-btn" @click="takePhoto()"></button>
      </div>
    </div>
    <div class="row">
      <div class="col-xs-12 col-md-4" style="margin-bottom: 1rem" v-for="photo in photos">
        <img :src="photo.url" alt="photo.name" width="100%">
      </div>
    </div>
  </div>
</section>
</template>

<script>
import VueWebcam from 'vue-webcam';
import RootHeader from '../../components/Header';
import storage from '../../storage';
import db from '../../database';

export default {
  name: 'Main',

  firebase: {
    photos: db.ref('photos'),
  },

  components: { RootHeader, VueWebcam },

  methods: {
    takePhoto() {
      const path = this.generatePath();
      const ref = this.generateRef(path);

      this.uploadPhoto(ref, this.$refs.webcam.getPhoto())
      .then(() => this.getUrl(path))
      .then(url => this.addPhoto(url, path))
      .then(res => console.log(res));
    },

    generatePath() {
      return Math.random().toString(36).slice(2);
    },

    generateRef(path) {
      return storage.child(path);
    },

    uploadPhoto(ref, photo) {
      return ref.putString(photo, 'data_url');
    },

    getUrl(path) {
      return storage.child(path).getDownloadURL();
    },

    addPhoto(url, name) {
      return this.$firebaseRefs.photos.push({
        url,
        name,
      });
    },
  },
};
</script>

<style lang="css">
  body {
    background-color: #000;
  }

  #camera-btn {
    position: absolute;
    bottom: 10px;
    right: 45%;
    background-color: red;
    border-radius: 40px;
    height: 40px;
    width: 40px;
    border: 0;
    outline: 0;
  }
</style>

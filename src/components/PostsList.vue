<template>
  <ul class="news-list">
    <li v-for="post in posts" :key="post.id" class="news-item">
      <template v-if="post.type=='printed'">
        <a v-if="post.type=='printed'" :href="`https://r.sicabe.com/${post.type}/item/${post.id}`" target="_blank" rel="noopener">
        <img class="image" :src="post.imgurl" />
        </a>
      </template>
      <template v-else>
        <img v-if="post.imgurl" class="image" :src="post.imgurl" />
      </template>
<!--
      <router-link
        :to="{ name: 'commentsList', params: { id: post.id, type: post.type } }"
        class="post-title">{{post.title}}</router-link>
-->
      <a :href="`https://r.sicabe.com/${post.type}/item/${post.id}`" target="_blank" rel="noopener" class="post-title">{{post.title}}</a>
      <!-- .post-title -->
      <!-- .txt-grey -->
      <div class="txt-grey">
        <span>{{post.time_ago}} |</span>
        <span class="txt-grey" v-if="post.domain">{{post.domain}}</span>
      </div>
      <!-- .txt-grey -->
    </li>
    <!-- .list-item -->
  </ul>
</template>

<script>
/*eslint linebreak-style: ["error", "windows"]*/
import { pluralize, isShortUrl } from "../utils";

export default {
  name: "posts-list",
  props: {
    posts: {
      type: Array,
      default: () => []
    },
    start: {
      type: Number,
      default: () => 1
    }
  },
  methods: {
    pluralize,
    isShortUrl
  }
};
</script>

<style>

ul.news-list {
    list-style-type: none;
    padding: 0;
    margin: 0;
}
.news-item {
  background-color: #fff;
  padding: 20px 30px 20px 30px;
  border-bottom: 1px solid #eee;
  position: relative;
  line-height: 20px;
}
.list-item {
  padding: 15px 10px;
}

.post-title {
  font-size: 16px;
  color: #333;
}

.comment-link {
  color: inherit;
}
.comment-link:hover {
  color: #4dba87;
}
.image {
    width: 100%;
    max-height: 13em;
    object-fit: cover;
    margin-bottom: 8px;
  }
</style>

<template>
    <v-layout column>
        <v-flex xs12 sm6 offset-sm3>
            <v-container fluid grid-list-md class="grey lighten-4">
                <v-carousel hide-controls>
                    <v-carousel-item v-for="(item,i) in news" v-bind:src="item.src" :key="i"></v-carousel-item>
                </v-carousel>
                <v-layout  v-for="(cate,i) in albums" :key="i" row wrap >
                    <v-subheader>{{cate.cate_name}}</v-subheader>
                    <v-container fluid grid-list-sm>
                        <v-layout row wrap>
                            <v-flex xs4 v-for="(album ,j) in cate.albums" :key="j">
                                <router-link :to="{name:'view', params: { album_id: album.id }}">
                                    <img class="image" v-bind:src="album.src" alt="lorem" width="100%" height="100%">
                                </router-link>
                            </v-flex>
                        </v-layout>
                    </v-container>
                </v-layout>
            </v-container>
        </v-flex>
    </v-layout>
</template>
<script src="./list.js"></script>
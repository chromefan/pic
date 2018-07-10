<template>
    <v-content>
        <v-toolbar color="pink" dark fixed app>
            <v-toolbar-side-icon @click.stop="drawer = !drawer"></v-toolbar-side-icon>
            <v-toolbar-title>SexMM</v-toolbar-title>
        </v-toolbar>

        <v-layout column>
            <v-flex xs12 sm6 offset-sm3>
                <v-container fluid grid-list-md class="grey lighten-4">

                        <v-container fluid grid-list-sm>
                            <v-layout row wrap>
                                <v-flex xs4 v-for="(album ,j) in albums.data" :key="j">
                                    <router-link :to="{name:'view', params: { album_id: album.id }}">
                                        <img class="image" v-lazy="album.src" v-bind:title="album.title" v-bind:alt="album.title" width="100%" height="100%">
                                    </router-link>
                                </v-flex>
                            </v-layout>
                            <div class="text-xs-center">
                                <v-pagination
                                        @input="next"
                                        v-model="pagination.page"
                                        :length="pagination.total"
                                        :total-visible="pagination.visible"
                                ></v-pagination>
                            </div>
                        </v-container>
                </v-container>
            </v-flex>
        </v-layout>
    </v-content>
</template>
<script src="./list.js"></script>
<style src="./home.scss"></style>
<template>
    <v-content>
        <v-toolbar color="pink" dark fixed app>
            <v-toolbar-side-icon @click.stop="drawer = !drawer"></v-toolbar-side-icon>
            <v-toolbar-title>SexMM</v-toolbar-title>
            <v-spacer></v-spacer>
            <v-btn color="pink" @click="go('list')">
                <v-icon>arrow_back</v-icon>Back
            </v-btn>
        </v-toolbar>
        <v-layout>
            <v-flex xs12 sm6 offset-sm3>
                <v-card v-for="(item,i) in cards" :key="i">
                    <img v-lazy="item.src" width="100%">
                    <v-card-title primary-title>
                        <div>
                            <h3 class="headline mb-0">{{item.title}}</h3>
                        </div>
                    </v-card-title>
                    <v-card-actions>
                        <v-btn flat icon color="pink"><v-icon>thumb_up</v-icon></v-btn>
                    </v-card-actions>
                </v-card>
            </v-flex>
        </v-layout>

    </v-content>
</template>
<script src="./view-index.js"></script>


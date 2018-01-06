<style src="./home.scss"></style>
<template>
    <v-layout>
        <v-flex xs12 sm6 offset-sm3>
            <v-card v-for="(item,i) in cards" :key="i">
                <img v-bind:src="item.src" width="100%">
                <v-card-title primary-title>
                    <div>
                        <h3 class="headline mb-0">{{item.title}}</h3>
                    </div>
                </v-card-title>
                <v-card-actions>
                    <v-btn flat color="orange">Share</v-btn>
                    <v-btn flat color="orange">Explore</v-btn>
                </v-card-actions>
            </v-card>
        </v-flex>
    </v-layout>
</template>
<script src="./view-index.js"></script>


<template>
    <v-layout column>
        <v-flex xs12 sm6 offset-sm3>
            <v-container fluid grid-list-md class="grey lighten-4">
                <v-carousel hide-controls>
                    <v-carousel-item v-for="(item,i) in items" v-bind:src="item.src" :key="i"></v-carousel-item>
                </v-carousel>
                <v-layout row wrap>
                    <v-subheader>May</v-subheader>
                    <v-container fluid grid-list-sm>
                        <v-layout row wrap>
                            <v-flex xs4 v-for="i in 6" :key="i">
                                <img class="image" v-bind:src="`/images/${i}.jpg`" alt="lorem" width="100%" height="100%">
                            </v-flex>
                        </v-layout>
                    </v-container>
                    <v-subheader>June</v-subheader>
                    <v-container fluid grid-list-sm>
                        <v-layout row wrap>
                            <v-flex xs4 v-for="i in 6" :key="i">
                                <img class="image" v-bind:src="`/images/${i + 5}.jpg`" alt="lorem" width="100%" height="100%">
                            </v-flex>
                        </v-layout>
                    </v-container>
                </v-layout>
            </v-container>
        </v-flex>
    </v-layout>
</template>
<script src="./list.js"></script>
<style src="./home.scss"></style>
<template>
    <!-- body start-->

        <div class="page-lazyload">
            <ul class="page-lazyload-list">
                <li class="page-lazyload-listitem" v-for="item in list" >
                    <img class="page-lazyload-image" v-lazy.container="item">
                </li>
            </ul>
        </div>
    <!-- body end-->
</template>
<script src="./home-index.js"></script>


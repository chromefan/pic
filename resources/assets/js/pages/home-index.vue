<style src="./home.scss"></style>
<template>
    <!-- body start-->
    <div id="container">
        <ul>
            <li v-for="item in list">
                <img v-lazy.container="item">
            </li>
        </ul>
    </div>
    <!-- body end-->
</template>
<script src="./home-index.js"></script>


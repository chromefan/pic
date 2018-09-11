<template>
    <div>
        <vue-canvas-nest :config="{color:'0,0,0', count: 88}" :el="'#area'"></vue-canvas-nest>
        <div id="area" style="width: 400px;height: 300px;position: absolute;right: 0;bottom: 0;border: dashed 1px;">
        </div>
    </div>
</template>
<script src="./image.js"></script>
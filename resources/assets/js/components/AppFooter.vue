<template>
    <!--Footer-part-->

    <div class="row-fluid">

        <div id="footer" class="span12">
            <div class="site-footer" role="contentinfo">
                <ul class="site-footer-links">
                    <li>© 2017 <span title="">MeiLunMei</span> Inc.</li>
                </ul>
            </div>
        </div>

    </div>
    <!--End-Footer-part-->
</template>

<script>
    export default {
        mounted() {
            console.log('App Footer Component mounted.')
        },
        data() {
            return {
            }
        }
    }
</script>

<style lang="scss" scoped>
    #footer {

        ul {
            list-style: none;

            li {
                display: inline-block;
                margin-right: 20px;
            }
        }

        .site-footer-links {
            padding: 0;

            li:last-child {
                margin-right: 0;
            }
        }

        .site-footer {
            text-align: center;
        }
    }

</style>

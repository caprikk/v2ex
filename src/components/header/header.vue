<template>
    <div class="header">
        <div class="logo">
            <img src="./logo@2x.png" width="94">
        </div>
        <div class="tab">
            <div class="tab-item">
                <router-link to="/new">最新</router-link>
            </div>
            <div class="tab-item">
                <router-link to="/hot">最热</router-link>
            </div>
        </div>
    </div>
</template>

<script type="es6">

</script>

<style lang="less">
    .header {
        .logo {
            padding: 10px 0;
            border-bottom: 1px solid #e4e4e4;
            box-shadow: 0 0px 10px rgba(0, 0, 0, 0.2);
        }
    }
    .tab {
        display: flex;
        .tab-item {
            flex: 1;
            height: 50px;
            border-bottom: 1px solid #e4e4e4;
            line-height: 50px;
            a {
                display: block;
                &.router-link-active {
                    font-weight: 700;
                }
            }
        }
    }
</style>

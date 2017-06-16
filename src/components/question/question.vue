<template>
    <transition name="move">
        <div class="question-detail" v-show="showFlag">
            <div class="back">
                <a @click="hide" class="icon icon-left"></a>
                <img src="./logo@2x.png" width="94">
            </div>
            <div class="title">
                {{question.title}}
            </div>
            <split></split>
            <div class="author" v-if="question.member">
                <img :src="question.member.avatar_normal" alt="" />
                <div class="name">
                    {{question.member.username}} / {{question.member.tagline}}
                </div>
            </div>
            <div class="content" v-html="question.content_rendered">
            </div>
        </div>
    </transition>
</template>

<script type="es6">
    import split from 'components/split/split'
    export default {
        props: {
            question: {
                type: Object
            }
        },
        data() {
            return {
                showFlag: false
            }
        },
        methods: {
            show() {
                this.showFlag = true
            },
            hide() {
                this.showFlag = false
            }
        },
        components: {
            split
        }
    }
</script>

<style lang="less">
    .question-detail {
        position: fixed;
        top: 0;
        bottom: 0;
        left: 0;
        width: 100%;
        background: #fff;
        transform: translate3d(0, 0, 0);
        text-align: left;
        &.move-enter-active, &.move-leave-active {
            transition: all .5s;
        }
        &.move-enter, &.move-leave-active {
            transform: translate3d(100%, 0, 0);
        }
        .back {
            position: relative;
            height: 54px;
            padding: 0;
            line-height: 54px;
            font-size: 24px;
            text-align: center;
            border-bottom: 1px solid #e4e4e4;
            img {
                vertical-align: middle;
            }
            a {
                position: absolute;
                left: 0;
                top: 0;
                display: block;
                height: 54px;
                line-height: 54px;
                padding: 0 20px;
                font-size: 18px;
            }
        }
        .title {
            padding: 25px 30px;
            line-height: 24px;
        }
        .author {
            min-height: 62px;
            padding: 15px;
            border-bottom: 1px solid #e4e4e4;
            .name {
                font-size: 16px;
                color: #424146;
                line-height: 32px;
            }
            img {
                float: left;
                width: 32px;
                height: 32px;
                margin-right: 10px;
                border-radius: 50%;
            }
        }
        .content {
            padding: 20px;
            line-height: 24px;
            img {
                width: 100%;
            }
        }
    }
</style>

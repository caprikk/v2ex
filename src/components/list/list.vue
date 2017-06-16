<template>
    <div class="question">
        <div class="question-list">
            <ul>
                <li v-for="question in questions">
                    <div class="title">
                        <a @click="selectQuestion(question)">{{question.title}}</a>
                    </div>
                    <div class="meta">
                        <img :src="question.member.avatar_normal" alt="" />
                        <span class="pull-right">回复 {{question.replies}}</span>
                        <span>{{question.created | formatDate}}</span>
                    </div>
                </li>
            </ul>
        </div>
        <question ref="question" :question="selectedQuestion"></question>
    </div>

</template>

<script type="es6">
    import question from 'components/question/question'
    import {formatDate} from 'common/js/date'

    export default {
        props: {
            questions: {
                type: Array,
                default: []
            }
        },
        data() {
            return {
                selectedQuestion: {}
            }
        },
        methods: {
            selectQuestion(question) {
                this.selectedQuestion = question
                this.$refs.question.show()
            }
        },
        filters: {
            formatDate(time) {
                let date = new Date(time * 1000) // unix时间戳
                return formatDate(date, 'yyyy-MM-dd hh:mm')
            }
        },
        components: {
            question
        }
    }
</script>

<style lang="less">
    .question-list {
        ul {
            li {
                position: relative;
                text-align: left;
                margin: 0 20px;
                padding: 10px 0;
                border-bottom: 1px solid #eceff1;
                .title {
                    line-height: 32px;
                }
                .meta {
                    margin-top: 10px;
                    font-size: 12px;
                    line-height: 24px;
                    img {
                        width: 24px;
                        height: 24px;
                        border-radius: 50%;
                        vertical-align: top;
                    }
                }
            }
        }
    }
</style>

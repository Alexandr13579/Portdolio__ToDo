<template>
    <div class="totals__tasks">
        <p>Total tasks: <span>{{ tasks.length }}</span></p>
        <p>Completed: <span class="border">{{ complitedTasks }} of {{ tasks.length }}</span></p>
    </div>
</template>
<script>
export default {
    props: {
        complitedTasks: Number,
        tasks: Array,
        required: true
    },
}
</script>
<style lang="scss" scoped>
        .totals__tasks{
        display: flex;
        justify-content: space-between;
        font-style: 16px;

        p{
            color: #4EA8DE;

            span{
                margin-left: 8px;
                display: inline-block;
                padding: 2px 8px;
                background-color: #333333;
                border-radius: 50%;
                color: #D9D9D9;

                &.border{
                    border-radius: 15px;
                }
            }
        }
    }
</style>
<template>
    <a
        class="tab-item"
        :style="$parent.value === id ? activeStyle : {}"
        @click="onItemClicked"
        :clstag="clstag"
    >
        <div
            class="tab-item-icon"
            v-if="$parent.fixBottom"
        >
            <slot name="icon"></slot>
        </div>
        <div class="tab-item-label">
            <slot></slot>
        </div>
    </a>
</template>

<script>
export default {
    name: 'TabItem',
    props: {
        clstag: {
            type: String,
            default: ''
        }
    },
    computed: {
        activeStyle() {
            return {
                color: this.$parent.activeColor,
                'font-weight': 600
            };
        }
    },
    data() {
        return {
            id: (this.$parent.$children.length || 1) - 1
        };
    },
    methods: {
        onItemClicked() {
            this.$parent.$emit('input', this.id);
        }
    }
};
</script>

<style  scoped lang="scss">
@import '../scss/_size.scss';
.tab-item {
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    text-decoration: none;
    text-align: center;
    font-size: $rem28;
    font-weight: 500;
    color: rgba(102, 102, 102, 1);
}

.tab-item-icon {
    margin: 0 auto 5px;
}
</style>

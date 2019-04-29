<template>
    <div class="ly-tab">
        <Tab
            v-model="selectedId"
            v-bind="options"
        >
            <TabItem
                v-for="(item, index) in items"
                :key="index"
                :clstag="'jr|keycount|jiandandian_0305|hot_detail_top_tab_'+item[options.labelKey]"
            >
                <span
                    v-if="options.fixBottom && item.icon"
                    slot="icon"
                >
                    <i :class="item.icon"></i>
                </span>
                <span>{{ item[labelKey] }}</span>
            </TabItem>
        </Tab>
    </div>
</template>

<script>
import Tab from './tab.vue';
import TabItem from './tab-item.vue';

export default {
    name: 'LyTab',
    components: {
        Tab,
        TabItem
    },
    props: {
        value: {
            type: Number,
            default: 0
        },
        items: {
            type: Array,
            default() {
                return [];
            }
        },
        options: {
            type: Object,
            default() {
                return {};
            }
        }
    },
    data() {
        return {
            selectedId: this.value,
            clstagNmae: ''
        };
    },
    computed: {
        labelKey() {
            return this.options.labelKey || 'label';
        }
    },
    watch: {
        value(value) {
            this.selectedId = value;
        },
        selectedId(value) {
            this.$emit('input', value);

            this.clstagNmae = this.items[value][this.options.labelKey];
            this.$emit('change', this.items[value], value);
        }
    }
};
</script>


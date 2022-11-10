<template>
    <select 
        :value="modelValue"
        @change="$emit(
                'update:modelValue', 
                $event.target.value
            )">
        <option value="">{{ unselectedText }}</option>

        <template v-if="optionGroup">
            <optgroup
                v-for="(optionGroup, index) in options"
                :key="index"
                :label="optionGroup[textKey]">
                <option v-for="(option, option_index) in optionGroup.items"
                    :key="option_index"
                    :value="option[valueKey]"
                    :disabled="option.disabled">
                    {{ option[textKey] }}
                </option>
            </optgroup>
        </template>
        <template v-else>
            <option v-for="(option, index) in options"
                :key="index"
                :value="option[valueKey]"
                :disabled="option.disabled">
                {{ option[textKey] }}
            </option>
        </template>
    </select>
</template>
<script>

import localization from "@/composables/localization"
import messages from '@/localization/components/form'



const translate = localization(messages)

export default {
    setup() {
        return {
            translate
        }
    },
    props: {
        modelValue: {
            required: true,
        },
        options: {
            required: true,
        },
        valueKey: {
            default() {
                return "value"
            }
        },
        textKey: {
            default() {
                return "text"
            }
        },
        optionGroup: {
            type: Boolean,
            default() {
                return false
            }
        },
        unselectedText: {
            default() {
                return translate("tap_select")
            }
        }
    }
}
</script>
<style scoped lang="scss">
@import "./index";
</style>
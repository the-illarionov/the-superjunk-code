<template>
    <div class="l-content" v-show="state_user.authorized && state_user.courses !== null">
        <h1> {{ state_user.user.name }}  </h1>
        <p> {{ state_user.user.email }} </p>
        
        <div class="divider" />

        <courses />
	</div>
</template>

<script>
import useUser from '@/store/user'
import { onBeforeMount } from "vue"

import Courses from '@/views/courses'

const { state_user } = useUser()

export default {
	components: {
		Courses,
	},
    setup() {
		onBeforeMount(() => {
			ym(71143837,'reachGoal','visit_profile')
		})
        
        return {
            state_user,
        }
    },
    beforeRouteEnter(to, from, next) {
        if(!localStorage.getItem("token")) next("/login")
        else next()
    }
}
</script>

<style scoped lang="scss">
@import "./index";
</style>
<!--
<div class="unavailable">
    <div v-html="translate('index.development')">
    </div>
</div>
-->
<!--
            <transition name="left-to-right">
            <div v-if="!clicked">
                <h2>{{ translate("index.start") }} </h2>
                <div>
                    <div class="create" @click="createNew">
                        <div>
                            <h3>
                                {{ translate("index.create_header") }}
                            </h3>
                            <p>
                                {{ translate("index.create_desc") }}
                            </p>
                        </div>
                        <div>
                            <v-button
                                @click="createNew"
                                class="my-3">
                                {{ translate("index.choose") }}
                            </v-button>
                        </div>
                    </div>
                    <div class="create" @click="modifyExisting">
                        <div>
                            <h3>
                                {{ translate("index.modify_header") }}
                            </h3>
                            <p>
                                {{ translate("index.modify_desc") }}
                            </p>
                        </div>
                        <div>
                            <v-button
                                @click="modifyExisting"
                                class="my-3">
                                {{ translate("index.choose") }}
                            </v-button>
                        </div>
                    </div>
                    <div class="button mb-3" @click="addCourse">
                        {{ translate("index.add_course") }}
                    </div>
                    
                    <div v-for="course in userStore.courses" v-bind:key="course.id" class="button" @click="openCourse(course.slug)">
                        <h3>  {{ course.name }} </h3>
                    </div>
            </div>
            </transition>
            -->
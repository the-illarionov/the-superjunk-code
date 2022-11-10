<template>
	<div class="sidenav">
		<router-link to="/">logo</router-link>
		<list :routes="routes" style="display: block" />
		<div v-if="!user.logged">
			Войдите:
			<login />
		</div>
		<p>соцсети</p>
		<a v-for="(lang, i) in locales" :key="`lang-${i}`" :href="'/' + lang.locale + $route.path" @click="application.preloaders.main = true">
			{{ lang.text }}
		</a>
	</div>
</template>
<script>
import { useRoute } from "vue-router";
import { computed } from "vue";

import user from "@/stores/User";
import application from "@/stores/Application";

import locales from "@/common/Locales";

import List from "./List";
import Login from "@/components/Login";

export default {
	setup() {
		const route = useRoute();

		const routes = computed(() => {
			return filterRoutes([
				{
					name: "Profile",
					text_ru: "Личный кабинет",
					text_en: "LK",
					condition: user.logged,
					params: {
						nickname: user.nickname,
					},
					children: [
						{
							name: "EditorOfCourses",
							text_ru: "Редактируемые курсы",
							params: {
								nickname: user.nickname,
							},
							children: [
								{
									name: "EditorOfCoursesCourse",
									dynamic: {
										params: ["course_url"],
									},
									condition: route.name === "EditorOfCoursesCourse" || route.name === "EditorOfCoursesLesson",
									children: [
										{
											name: "EditorOfCoursesLesson",
											dynamic: {
												params: ["lesson_number"],
											},
											condition: route.name === "EditorOfCoursesLesson",
										},
									],
								},
							],
						},
						{
							name: "StudentOfCourses",
							text_ru: "Изучаемые курсы",
							params: {
								nickname: user.nickname,
							},
							children: [
								{
									name: "StudentOfCoursesCourse",
									dynamic: {
										params: ["course_url"],
									},
									condition: route.name === "StudentOfCoursesCourse" || route.name === "StudentOfCoursesLesson",
									children: [
										{
											name: "StudentOfCoursesLesson",
											dynamic: {
												params: ["lesson_number"],
											},
											condition: route.name === "StudentOfCoursesLesson",
										},
									],
								},
							],
						},
					],
				},
				{
					name: "Teens",
					text_ru: "Для подростков",
					text_en: "For teenagers",
					children: [
						{
							name: "TeensCourses",
							text_ru: "Курсы",
							text_en: "Courses",
							children: [
								{
									name: "TeensCourse",
									params: {
										course_url: "graphics-first-course",
									},
									text_ru: "Компьютерная графика, 1 курс",
									text_en: "Компьютерная графика, 1 курс",
								},
								{
									name: "TeensCourse",
									params: {
										course_url: "graphics-second-course",
									},
									text_ru: "Компьютерная графика, 2 курс",
									text_en: "Компьютерная графика, 2 курс",
								},
								{
									name: "TeensCourse",
									params: {
										course_url: "programming-first-course",
									},
									text_ru: "Программирование, 1 курс",
									text_en: "Программирование, 1 курс",
								},
								{
									name: "TeensCourse",
									params: {
										course_url: "programming-second-course",
									},
									text_ru: "Программирование, 2 курс",
									text_en: "Программирование, 2 курс",
								},
							],
						},
					],
				},
				{
					name: "Marketplace",
					text_ru: "Магазин курсов",
					text_en: "Course marketplace",
					children: [
						{
							name: "MarketplaceCourse",
							dynamic: {
								params: ["course_url"],
							},
							condition: route.name === "MarketplaceCourse" || route.name === "MarketplaceLesson",
							children: [
								{
									name: "MarketplaceLesson",
									dynamic: {
										params: ["lesson_number"],
									},
									condition: route.name === "MarketplaceLesson",
								},
							],
						},
					],
				},
				/*
				{
					name: "Schools", // наверное не надо такой список делать? и получается schools и Users будут привязаны к конкретному курсу (ну или /marketplace/schools)
					text_ru: "Все школы",
					text_en: "Schools",
					children: [
						{
							name: "School",
							dynamic: {
								params: ["school_url"]
							},
							condition: route.name === "School"
						}
					]
				}
				*/
			]);
		});

		const filterRoutes = (elements) => {
			return elements.filter((element) => {
				if (element.children) element.children = filterRoutes(element.children);
				if (typeof element.condition === "undefined" || element.condition) return true;
			});
		};

		return {
			user,
			application,
			routes,
			locales,
		};
	},
	components: {
		List,
		Login,
	},
};
</script>
<style scoped lang="scss" src="./index.scss" />

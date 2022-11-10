import { reactive } from "vue"

import localization from "@/composables/localization"
import messages from '@/localization/values/devices'



const translate = localization(messages)

export default reactive([
	{
		value: "theory",
		text: translate("theory.text"),
		checked: true,
		hidden: false,
		values: [
			{
				value: "repeat",
				text: translate("theory.values.repeat.text"),
				disabled: false,
				category: "theory",
				variations: [
					{
						description: translate("theory.values.repeat.variations.first.description"),
						examples: {
							dop_cgi: {
								good: [
									{
										text: translate("theory.values.repeat.variations.first.examples.dop_cgi.good.first.text"),
										explain: translate("theory.values.repeat.variations.first.examples.dop_cgi.good.first.explain"),
									},
								],
								bad: [
									{
										text: translate("theory.values.repeat.variations.first.examples.dop_cgi.bad.first.text"),
										explain: translate("theory.values.repeat.variations.first.examples.dop_cgi.bad.first.explain"),
									},
								],
							},
						}
					},
				]
			},
			{
				value: "statement",
				text: translate("theory.values.statement.text"),
				disabled: false,
				category: "theory",
				variations: [
					{
						description: translate("theory.values.statement.variations.first.description"),
						examples: {
							dop_cgi: {
								good: [
									{
										text: translate("theory.values.statement.variations.first.examples.dop_cgi.good.first.text"),
										explain: translate("theory.values.statement.variations.first.examples.dop_cgi.good.first.explain"),
									},
								],
								bad: [
									{
										text: translate("theory.values.statement.variations.first.examples.dop_cgi.bad.first.text"),
										explain: translate("theory.values.statement.variations.first.examples.dop_cgi.bad.first.explain"),
									},
								],
							},
						}
					},
				]
			},
			{
				value: "problem",
				text: translate("theory.values.problem.text"),
				disabled: false,
				category: "theory",
				variations: [
					{
						description: translate("theory.values.problem.variations.first.description"),
						examples: {
							dop_cgi: {
								good: [
									{
										text: translate("theory.values.problem.variations.first.examples.dop_cgi.good.first.text"),
										explain: translate("theory.values.problem.variations.first.examples.dop_cgi.good.first.explain"),
									},
								],
								bad: [
									{
										text: translate("theory.values.problem.variations.first.examples.dop_cgi.bad.first.text"),
										explain: translate("theory.values.problem.variations.first.examples.dop_cgi.bad.first.explain"),
									},
								],
							},
						}
					},
				]
			},
			{
				value: "c_from_problem",
				text: translate("theory.values.c_from_problem.text"),
				category: "theory",
				map: [
					["theory","statement"],
					["theory","problem"],
				],
				disabled: false,
				variations: [
					{
						description: translate("theory.values.c_from_problem.variations.first.description"),
						examples: {
							dop_cgi: {
								good: [
									{
										text: translate("theory.values.c_from_problem.variations.first.examples.dop_cgi.good.first.text"),
										explain: translate("theory.values.c_from_problem.variations.first.examples.dop_cgi.good.first.explain"),
									},
								],
								bad: [
									{
										text: translate("theory.values.c_from_problem.variations.first.examples.dop_cgi.bad.first.text"),
										explain: translate("theory.values.c_from_problem.variations.first.examples.dop_cgi.bad.first.explain"),
									},
								],
							},
						}
					},
				]
			},
		],
	},
	{
		value: "practice",
		text: translate("practice.text"),
		checked: true,
		hidden: false,
		values: [
			{
				value: "finish",
				text: translate("practice.values.finish.text"),
				category: "practice",
				disabled: false,
				variations: [
					{
						description: translate("practice.values.finish.variations.first.description"),
						examples: {
							dop_cgi: {
								good: [
									{
										text: translate("practice.values.finish.variations.first.examples.dop_cgi.good.first.text"),
										explain: translate("practice.values.finish.variations.first.examples.dop_cgi.good.first.explain"),
									},
								],
								bad: [
									{
										text: translate("practice.values.finish.variations.first.examples.dop_cgi.bad.first.text"),
										explain: translate("practice.values.finish.variations.first.examples.dop_cgi.bad.first.explain"),
									},
								],
							},
						}
					},
				]
			},
		]
	},
	{
		value: "engagement",
		text: translate("engagement.text"),
		checked: true,
		hidden: false,
		values: [
			
		]
	},
	{
		value: "custom",
		text: translate("custom.text"),
		checked: true,
		hidden: false,
		values: [
			
		]
	},
	{
		value: "service",
		text: translate("service.text"),
		checked: false,
		hidden: true,
		values: [
			{
				value: "skills",
				text: translate("service.values.skills.text"),
				disabled: false,
				variations: [
					{
						description: translate("service.values.skills.variations.first.description"),
						examples: {
							dop_cgi: {
								good: [
									{
										text: translate("service.values.skills.variations.first.examples.dop_cgi.good.first.text"),
										explain: translate("service.values.skills.variations.first.examples.dop_cgi.good.first.explain"),
									},
								],
								bad: [
									{
										text: translate("service.values.skills.variations.first.examples.dop_cgi.bad.first.text"),
										explain: translate("service.values.skills.variations.first.examples.dop_cgi.bad.first.explain"),
									},
								],
							},
						}
					},
				]
			},
			{
				value: "task_concept",
				text: translate("service.values.task_concept.text"),
				disabled: false,
				variations: [
					{
						description: translate("service.values.task_concept.variations.first.description"),
						examples: {
							dop_cgi: {
								good: [
									{
										text: translate("service.values.task_concept.variations.first.examples.dop_cgi.good.first.text"),
										explain: translate("service.values.task_concept.variations.first.examples.dop_cgi.good.first.explain"),
									},
								],
								bad: [
									{
										text: translate("service.values.task_concept.variations.first.examples.dop_cgi.bad.first.text"),
										explain: translate("service.values.task_concept.variations.first.examples.dop_cgi.bad.first.explain"),
									},
								],
							},
						}
					},
				]
			},
			{
				value: "task_together",
				text: translate("service.values.task_together.text"),
				disabled: false,
				variations: [
					{
						description: translate("service.values.task_together.variations.first.description"),
						examples: {
							dop_cgi: {
								good: [
									{
										text: translate("service.values.task_together.variations.first.examples.dop_cgi.good.first.text"),
									},
								],
							},
						}
					},
				]
			},
			{
				value: "task_solo",
				text: translate("service.values.task_solo.text"),
				disabled: false,
				variations: [
					{
						description: translate("service.values.task_solo.variations.first.description"),
						examples: {
							dop_cgi: {
								good: [
									{
										text: translate("service.values.task_solo.variations.first.examples.dop_cgi.good.first.text"),
									},
								],
							},
						}
					},
				]
			},
			{
				value: "demo",
				text: translate("service.values.demo.text"),
				disabled: false,
				variations: [
					{
						description: translate("service.values.demo.variations.first.description"),
						examples: {
							dop_cgi: {
								good: [
									{
										text: translate("service.values.demo.variations.first.examples.dop_cgi.good.first.text"),
									},
								],
							},
						}
					},
				]
			},
			{
				value: "practice_together",
				text: translate("service.values.practice_together.text"),
				disabled: false,
				variations: [
					{
						description: translate("service.values.practice_together.variations.first.description"),
					},
				]
			},
			{
				value: "practice_solo",
				text: translate("service.values.practice_solo.text"),
				disabled: false,
				variations: [
					{
						description: translate("service.values.practice_solo.variations.first.description"),
					},
				]
			},
			{
				value: "finish",
				text: translate("service.values.finish.text"),
				disabled: false,
				variations: [
					{
						description: translate("service.values.finish.variations.first.description"),
					},
				]
			},
		]
	},
])
/*
	theory: {
		
		values: {
			repeat: {
				text: {
					ru: "Повтор за учителем",
				},
				disabled: false,
				variations: [
					{
						description: { 
							ru: `
								<p>Выполняете задание пошагово, ученики повторяют за вами. Комментируйте каждый шаг. Ученик не делает ничего самостоятельно.</p>
								<p>В это время очень важно следить за тем, чтобы у ученика всё получилось. Он в какой-то момент может отвлечься, потерять нить и не сообщить об этом. В таком случае вы его потеряете.</p>
								<p>Поэтому делайте какие-то остановки и проверяйте, что у ученика всё получается.</p>
							`,
						},
						examples: {
							dop_cgi: {
								good: [
									{
										ru: {
											text: `
												<p>После каждого шага препод ждет, когда ученики за ним повторят.</p>
											`,
											explain: `
												<p>Пошаговое объяснение разделено на мелкие шаги. Это позволяет преподу не упустить медленных и подать тему просто.</p>
											`
										},
									},
								],
								bad: [
									{
										ru: {
											text: `
												<p>Препод показывает все очень быстро и много, слишком большие шаги. Не следит все ли успели повторить за ним.</p>
											`,
											explain:
												`
												<p>Полученные знания смешиваются в кашу. </p>
												<p>Если ученики столкнутся с проблемой, преподу нужно обьяснять каждому решение.</p>
												<p>Стеснительные ученики могут не понять тему, не спросить и в итоге не освоят нужное знание. </p>
												<p>Преподаватель не знает кто справился а кто не понял. </p>
											`,
										}
									}
								],
							},
						}
					},
				]
			},
			statement: {
				text: {
					ru: "Утверждение",
				},
				disabled: false,
				variations: [
					{
						description: { 
							ru: `
								<p>Подайте тему простым утверждением. Это самый скучный, но, иногда, необходимый приём.</p>
								<p>Его можно раскрасить демонстрацией применения темы в реальной жизни.</p>
							`,
						},
						examples: {
							dop_cgi: {
								good: [
									{
										ru: {
											text: `
												<p>2D — вид компьютерной графики, где изображение плоское. 2D графику можно увидеть на постерах, логотипах, в мультфильмах, в инфографике, на сайтах и приложениях (показать примеры).</p>
											`,
											explain: `
												<p>Приведены примеры использования. Простыми словами объясняется.</p>
											`
										},
									},
								],
								bad: [
									{
										ru: {
											text: `
												<p>2D — это, по сути, двухмерная графика. То есть, это изображение, представленное в двух измерениях, обладающее лишь двумя параметрами, а именно: высотой и шириной. Называется этот формат также плоским изображением.</p>
											`,
											explain:
												`
												<p>Не приведены примеры использования, используются некоторые термины.</p>
											`,
										}
									}
								],
							},
						}
					},
				]
			},
			problem: {
				text: {
					ru: "Нарочная проблема",
				},
				disabled: false,
				variations: [
					{
						description: { 
							ru: `
								<p>В задании специально добавляется какая-либо проблема, с которой ученики должны столкнуться.</p>
								<p>Препод дает задание и ждет, когда ученики столкнутся с ней в ходе решения задания.</p>
								<p>Потом эта проблема разбирается.</p>
							`,
						},
						examples: {
							dop_cgi: {
								good: [
									{
										ru: {
											text: `
												<p>Во время работы над постером учитель ждет пока какой-нибудь ученик не добавит картинку с непрозрачным фоном. Потом говорит всей группе обратить внимание на проблему, которая возникла у этого ученика. И показывает решение.</p>
											`,
											explain: `
												<p>Ученики на своем опыте сталкиваются с проблемой. </p>
											`
										},
									},
								],
								bad: [
									{
										ru: {
											text: `
												<p>В постере используется шрифт, которого нет в программе, на которой работают. Учитель показывает как устанавливать сторонние шрифты.</p>
											`,
											explain:
												`
												<p>Проблема не очевидная. Ученикам достаточно тех шрифтов, которые уже есь в программе (около 800)</p>
											`,
										}
									}
								],
							},
						}
					},
				]
			},
		}
	},
			practice: {
				text: {
					ru: 'Для практики',
				},
				values: {
					finish: {
						text: {
							ru: "Доделай",
						},
						disabled: false,
						variations: [
							{
								description: { 
									ru: `
										<p>У ученика должно быть частично готовое задание, которое он самостоятельно доделывает.</p>
										<p>Это позволяет ему повторить и закрепить полученные знания.</p>
										<p>Важно! Все знания и умения, которые нужны ученику, должны быть предварительно выполнены совместно с преподавателем.</p>
									`,
								},
								examples: {
									dop_cgi: {
										good: [
											{
												ru: {
													text: `
														<p>Доделать постер к событию Comic Con. Добавляют картинки своих любимых персонажей, добавляют дополнительно текст и фигуры как показано на референсе.</p>
													`,
													explain: `
													<p>Потому что ученик может внести что-то от себя, то, что близко конкретно ему и у каждого ученика будет уникальный постер.</p>
													`
												},
											},
										],
										bad: [
											{
												ru: {
													text: `
														<p>Доделать постер, добавить картинки персонажей, текст и картинки внутри круга.</p>
													`,
													explain:
														`
														<p>Есть теория, которую ученики не разбирали с учителем. А именно, создание масок когда делаешь картинку внутри круга.</p>
													`,
												}
											}
										],
									},
								}
							},
						]
					},
				}
			},
			engagement: {
				text: {
					ru: 'Для вовлечения',
				},
				values: {
					xz: {
						text: {
							ru: "xz",
						},
						map: [
							["simple","theory","xz"],
							["simple","theory","xz"],
						],
						disabled: false,
						variations: [
							{
								description: { 
									ru: `
										xz
									`,
								},
								examples: {
									dop_cgi: {
										good: [
											{
												ru: {
													text: `
														xz
													`,
													explain: `
														xz
													`
												},
											},
										],
										bad: [
											{
												ru: {
													text: `
														xz
													`,
													explain:
														`
														xz
													`,
												}
											}
										],
									},
								}
							},
						]
					},
				}
			}
		}
	},
	complex: {
		values: {
			theory: {
				text: {
					ru: 'Для объяснения',
				},
				values: {
					from_problem: {
						text: {
							ru: "От проблемы",
						},
						map: [
							["simple","theory","statement"],
							["simple","theory","problem"],
						],
						disabled: false,
						variations: [
							{
								description: { 
									ru: `
										<ol class='mb-3'>
											<li>Сформулируйте проблему и наглядно её продемонстрируйте.</li>
											<li>Обсудите вместе с учеником проблему: почему она возникла, какие могут быть способы её решения. Подведите ученика к правильному ответу.</li>
											<li>Покажите решение проблемы, используя новую тему.</li>
										</ol>
										<p>Так ученик лучше поймёт пользу и практическое применение новых знаний.</p>
									`,
								},
								examples: {
									dop_cgi: {
										good: [
											{
												ru: {
													text: `
														<p>Для выполнения задания нужны картинки с прозрачным фоном. Скачаю непрозрачную картинку и размещу её. Что не так? Почему так произошло? Как бы нам хотелось, чтобы было? Расскажу про альфа-канал и формат PNG, покажу как искать в гугле прозрачные картинки.</p>
													`,
													explain: `
														<p>Задание сделано таким образом, что ученик обязательно столкнётся с такой проблемой. Тут же узнает, как её решить с помощью новой темы и в итоге лучше усвоит знание.</p>
													`
												},
											},
										],
										bad: [
											{
												ru: {
													text: `
														<p>Препод показывает все очень быстро и много, слишком большие шаги. Не следит все ли успели повторить за ним.</p>
													`,
													explain:
														`
														<p>Полученные знания смешиваются в кашу. </p>
														<p>Если ученики столкнутся с проблемой, преподу нужно обьяснять каждому решение.</p>
														<p>Стеснительные ученики могут не понять тему, не спросить и в итоге не освоят нужное знание. </p>
														<p>Преподаватель не знает кто справился а кто не понял. </p>
													`,
												}
											}
										],
									},
								}
							},
							{
								options: {
									lesson_format_sync: "new_theme",
								},
								description: { 
									ru: `
										123123123
									`,
								},
								examples: {
									dop_cgi: {
										good: [
											{
												ru: {
													text: `
														<p>Для выполнения задания нужны картинки с прозрачным фоном. Скачаю непрозрачную картинку и размещу её. Что не так? Почему так произошло? Как бы нам хотелось, чтобы было? Расскажу про альфа-канал и формат PNG, покажу как искать в гугле прозрачные картинки.</p>
													`,
													explain: `
														<p>Задание сделано таким образом, что ученик обязательно столкнётся с такой проблемой. Тут же узнает, как её решить с помощью новой темы и в итоге лучше усвоит знание.</p>
													`
												},
											},
										],
										bad: [
											{
												ru: {
													text: `
														<p>Препод показывает все очень быстро и много, слишком большие шаги. Не следит все ли успели повторить за ним.</p>
													`,
													explain:
														`
														<p>Полученные знания смешиваются в кашу. </p>
														<p>Если ученики столкнутся с проблемой, преподу нужно обьяснять каждому решение.</p>
														<p>Стеснительные ученики могут не понять тему, не спросить и в итоге не освоят нужное знание. </p>
														<p>Преподаватель не знает кто справился а кто не понял. </p>
													`,
												}
											}
										],
									},
								}
							},
						]
					},
				}
			},
			practice: {
				text: {
					ru: 'Для практики',
				},
				values: {
					xz: {
						text: {
							ru: "xz",
						},
						map: [
							["simple","theory","xz"],
							["simple","theory","xz"],
						],
						disabled: false,
						variations: [
							{
								description: { 
									ru: `
										xz
									`,
								},
								examples: {
									dop_cgi: {
										good: [
											{
												ru: {
													text: `
														xz
													`,
													explain: `
														xz
													`
												},
											},
										],
										bad: [
											{
												ru: {
													text: `
														xz
													`,
													explain:
														`
														xz
													`,
												}
											}
										],
									},
								}
							},
						]
					},
				}
			},
			engagement: {
				text: {
					ru: 'Для вовлечения',
				},
				values: {
					xz: {
						text: {
							ru: "xz",
						},
						map: [
							["simple","theory","xz"],
							["simple","theory","xz"],
						],
						disabled: false,
						variations: [
							{
								description: { 
									ru: `
										xz
									`,
								},
								examples: {
									dop_cgi: {
										good: [
											{
												ru: {
													text: `
														xz
													`,
													explain: `
														xz
													`
												},
											},
										],
										bad: [
											{
												ru: {
													text: `
														xz
													`,
													explain:
														`
														xz
													`,
												}
											}
										],
									},
								}
							},
						]
					},
				}
			}
		}
	},

	user_simple: {
		values: {
			
		}
	},
	user_complex: {
		values: {

		}
	},
	service: {
		values: {
			skills: {
				text: translate("service_skills_header"),
				disabled: false,
				variations: [
					{
						description: translate("service_skills_description"),
						examples: {
							dop_cgi: {
								good: [
									{
										ru: {
											text: `
												<p>Для курса по Figma:</p>
												<ol>
													<li>
														Создание простых фигур;
													</li>
													<li>
														Добавление текста;
													</li>
													<li>
														Добавление скачанной картинки.
													</li>
												</ol>
											`,
											explain: `
												<p>Указаны только конкретные практические умения, без теории.</p>
												<p>Это позволяет сфокусироваться только на тех знаниях, которые нужны для практики.</p>
												<p>Любая теория должна подаваться только в качестве решения какой-то практической задачи.</p>
											`
										},
									},
								],
								bad: [
									{
										ru: {
											text: `
												<p>Для курса по Figma:</p>
												<ol>
													<li>
														Фрейм и сетка;
													</li>
													<li>
														Пользовательские сценарии и кейсы;
													</li>
													<li>
														Знание основных инструментов.
													</li>
												</ol>
											`,
											explain:
												`
												<p>Что такое «фрейм и сетка», «эскиз сайта» с точки зрения начинающего ученика? Зачем ему это нужно на первом уроке?</p>
												<p>Вы должны погрузить ученика в состояние успеха, а для этого нужно много практики.</p>
												<p>Кроме того, будет сложно достоверно оценить умение «знает основные инструменты».</p>
											`,
										}
									}
								],
							},
						}
					},
				]
			},
			task_concept: {
				text: {
					ru: "Придумать задание",
				},
				disabled: false,
				variations: [
					{
						description: {
							ru: `
								<p>Это задание вы будете делать весь урок, начнёте вместе, а закончит его ученик самостоятельно.</p>
								<p>Оно должно быть:</p>
								<ul class="mb-3">
									<li>Связано с тем, что близко ученику (поп-культура, друзья, родственники, город, район, окружение и т.д.);</li>
									<li>Давать ученику возможность рассказать о себе, выразить себя (любимое, неприятное, желанное и т.д.);</li>
									<li>Иметь практическое применение в реальной жизни, выполненное задание должно приносить пользу ученику.</li>
								</ul>
								<p>На начальном этапе задание нужно делать простым, без лишней теории, чтобы у ученика возникла мысль «я могу, у меня получается».</p>
								<p>Кроме того, подумайте, может, какую-то часть задания можно подготовить заранее? Чтобы не отвлекаться на её реализацию при объяснении темы.</p>
							`,
						},
						examples: {
							dop_cgi: {
								good: [
									{
										ru: {
											text: `
												<p>Сделать постер фестиваля «Comic Con» с лучшими по мнению ученика  супергероями</p>
											`,
											explain: `
												<p>Интересная тема, есть «воздух» для того, чтобы ученик добавил что-то своё.</p>
												<p>Возможность добавить что-то от себя всегда значительно повышает интерес ученика.</p>
											`
										},
									},
								],
								bad: [
									{
										ru: {
											text: `
												<p>Сделать визитку строительной компании</p>
											`,
											explain:
												`
												<p>Ученик не ассоциирует себя с заданием, а значит, и выполнять его будет только потому, что «надо».</p>
												<p>А вы должны стремиться к тому, чтобы ученик сам хотел сделать каждое задание, потому что оно ему интересно.</p>
											`,
										}
									}
								],
							},
						}
					},
				]
			},
			task_together: {
				text: {
					ru: "Придумать совместную практику",
				},
				disabled: false,
				variations: [
					{
						description: {
							ru: `
								<p>Во время совместного пошагового выполнения задания вы объясните всю необходимую теорию на этот урок.<br />На этом уроке ученик не изучает ничего нового самостоятельно, только повторяет.</p>
								<p>Оставьте «воздух», чтобы в конце урока ученик смог по аналогии  самостоятельно закончить задание.</p>
							`,
						},
						examples: {
							dop_cgi: {
								good: [
									{
										ru: {
											text: `
												<p>Вместе мы создадим фон постера. В процессе изучим как добавлять и позиционировать текст и картинки.</p>
											`,
										},
									},
								],
							},
						}
					},
				]
			},
			task_solo: {
				text: {
					ru: "Придумать самостоятельную практику",
				},
				disabled: false,
				variations: [
					{
						description: {
							ru: `
								<p>Не должно быть ничего нового, всё, что делает ученик, вы должны предварительно сделать совместно.</p>
								<p>Все действия ученика должны быть выполнены по аналогии с совместным заданием.</p>
							`,
						},
						examples: {
							dop_cgi: {
								good: [
									{
										ru: {
											text: `
												<p>Ученик самостоятельно добавит картинки лучших по его мнению супергероев и придумает текст.</p>
											`,
										},
									},
								],
							},
						}
					},
				]
			},
			demo: {
				text: {
					ru: "Демонстрация результата",
				},
				disabled: false,
				variations: [
					{
						description: {
							ru: `
							<p>
								В начале урока очень важно показать, чем он закончится.<br />
								Так ученик поймёт, зачем ему нужны новые знания и как он их будет применять.<br />
								Такое понимание сразу меняет отношение к новой информации, она перестаёт быть инородной.
							</p>
							<p>Покажите результат и проанализируйте его, разберите на составные части.<br />Это и будет планом урока, озвучьте его ученику.</p>
							`,
						},
						examples: {
							dop_cgi: {
								good: [
									{
										ru: {
											text: `
												Покажу готовый постер с персонажами Marvel и сделаю разбор нужных действий: поиск картинки, позиционирование, добавление текста, изменение цвета.
											`,
										},
									},
								],
							},
						}
					},
				]
			},
			practice_together: {
				text: {
					ru: "Совместная практика",
				},
				disabled: false,
				variations: [
					{
						description: {
							ru: `
								<p>Для этого сначала полностью выполните задание сами. Даже если вы делали подобное сотню раз, сделайте в сто первый и запишите каждое действие.
								<br />
								Вы увидите, что многое вы сделали не задумываясь, используя свой опыт. Но у ученика этого опыта нет.</p>
								<p class="mb-5">Далее объедините действия в шаги и подайте каждый с помощью наших приёмов.</p>
							`,
						},
					},
				]
			},
			practice_solo: {
				text: {
					ru: "Самостоятельная практика",
				},
				disabled: false,
				variations: [
					{
						description: {
							ru: `
								<p class="mb-0">Напоминаем:</p>
								<p>Не должно быть ничего нового, всё, что делает ученик, вы должны предварительно сделать совместно.</p>
								<p class="mb-5">Все действия ученика должны быть выполнены по аналогии с совместным заданием.</p>
							`,
						},
					},
				]
			},
			finish: {
				text: {
					ru: "Конец урока",
				},
				disabled: false,
				variations: [
					{
						description: {
							ru: `
								<p>Это первый урок, поэтому вам надо заинтересовать ученика дальнейшими уроками, познакомить с дальнейшим курсом.</p>
								<p>Это надо сделать в конце урока, чтобы закрепить состояние успеха после успешного первого урока и транслировать его на весь курс в целом.</p>
								<ol class="mb-5">
									<li>Покажите конечный результат курса. Если возможно, покажите работы других учеников с прошлых курсов;</li>
									<li>Покажите, какое применение в жизни ученика могут найти полученные на курсе знания;</li>
									<li>Чётко проговорите технический формат курса: количество занятий, регламент, правила и т.д.</li>
								</ol>
							`,
						},
					},
				]
			},
		}
	},
})
*/
const messages = {
    en: {
        first: {
            name: 'First lesson',
            html: `
                <p>
                First course lesson. Throughout the lesson you will be doing a single task.<br />
                In the beginning demonstrate how to do a part of the task step by step to your student, explaining theory as you go.<br />
                By the end the student should be able to complete the task on their own by analogy.
                </p>
            `,
            structure: {
                task_development: {
                    title_menu: "Prepare a task",
                    title_page: "Prepare a task for the lesson",
                    title_result: "Prepare for lesson",
                    steps: {
                        first: {
                            name:'First think of the task itself',
                            placeholder_description:'Click to describe the task',
                            name_result:'Task:',
                        },
                        second: {
                            name:'Decide which part you will be doing together with student',
                            placeholder_description:'Click to add description to the joint part',
                            name_result:'Joint:',
                        },
                        third: {
                            name:'Decide what student will do on their own',
                            placeholder_description:'Click to add description of the self-practice part',
                            name_result:'Self-practice:',
                        },
                    }
                },
                show_demo: {
                    title_menu: "Describe the demonstration",
                    title_page: 'Give a detailed outline on how you will show the end of the lesson',
                    title_result: 'Teaching a lesson',
                    steps: {
                        first: {
                            placeholder_description: "Click to describe how you will show result",
                        }
                    }
                },
                together: {
                    title_menu: 'Describe the joint practice',
                    title_page: 'Give a detailed outline of joing practice',
                    title_result: 'Joint practice:',
                },
                solo: {
                    title_menu: 'Describe the self-practice assignment',
                    title_page: 'Give a detailed outline of self-practice',
                    title_result: 'Self-practice assignment:',
                },
                end: {
                    title_menu: 'Think of the ending',
                    title_page: 'Think of the end of the lesson',
                    title_result: 'Finish lesson:',
                },

            }
        },
        test: {
            name: 'Тест',
            html: `
                <p>
                test</p>
		    `,
            structure: {
                test: {
                    title_menu: "test menu",
                    title_page: "test page",
                    title_result: "test result",
                },

            }
        },
        dis1: {
            name: 'Example-based learning with self-practice assignment',
        },
        dis2: {
            name: 'Single task learning with self-practice assignment',
        },
        dis3: {
            name: 'Example-based learning with self-practice assignment',
        },
        dis4: {
            name: 'Learning with revision',
        },
        dis5: {
            name: 'Learning through mistake',
        },
        dis6: {
            name: 'Self-practice problem-solving',
        },
        dis7: {
            name: 'Joint problem-solving',
        },
        dis8: {
            name: 'Group introduction',
        },
        dis9: {
            name: 'One task for the lesson',
        },
        dis10: {
            name: 'A set of tasks for the lesson',
        },
        dis11: {
            name: 'Joint project execution',
        },
        dis12: {
            name: 'Self-practice project execution',
        },
    },
    ru: {
        first: {
            name: 'Первый урок',
            html: `
                <p>
                Первый урок курса. В течение всего урока вы будете делать одно задание.<br />
                В начале пошагово вместе с учеником выполните часть задания, попутно объясняя теорию.<br />
                В конце ученик по аналогии самостоятельно доведёт задание до конца.
                </p>
            `,
            structure: {
                task_development: {
                    title_menu: "Подготовьте задание",
                    title_page: "Подготовьте задание на урок",
                    title_result: "Подготовка к уроку",
                    steps: {
                        first: {
                            name:'Сначала придумайте само задание',
                            placeholder_description:'Нажмите, чтобы описать задание',
                            name_result:'Задание:',
                        },
                        second: {
                            name:'Решите, какую часть вы сделаете вместе с учеником',
                            placeholder_description:'Нажмите, чтобы описать совместную часть',
                            name_result:'Совместно:',
                        },
                        third: {
                            name:'Решите, что ученик сделает самостоятельно',
                            placeholder_description:'Нажмите, чтобы описать самостоятельную часть',
                            name_result:'Самостоятельно:',
                        },
                    }
                },
                show_demo: {
                    title_menu: "Распишите демонстрацию",
                    title_page: 'Распишите, как вы покажете результат урока',
                    title_result: 'Проведение урока',
                    steps: {
                        first: {
                            placeholder_description: "Нажмите, чтобы описать, как вы покажете результат",
                        }
                    }
                },
                together: {
                    title_menu: 'Распишите совместную практику',
                    title_page: 'Распишите шаги совместной практики',
                    title_result: 'Совместная практика:',
                },
                solo: {
                    title_menu: 'Распишите самостоятельную практику',
                    title_page: 'Распишите шаги самостоятельной практики',
                    title_result: 'Самостоятельная практика:',
                },
                end: {
                    title_menu: 'Продумайте завершение',
                    title_page: 'Продумайте конец урока',
                    title_result: 'Закончите урок:',
                },

            }
        },
        test: {
            name: 'Тест',
            html: `
                <p>
                test</p>
		    `,
            structure: {
                test: {
                    title_menu: "test menu",
                    title_page: "test page",
                    title_result: "test result",
                },

            }
        },
        dis1: {
            name: 'Изучение на примерах с самостоятельной',
        },
        dis2: {
            name: 'Изучение на одном задании с самостоятельной',
        },
        dis3: {
            name: 'Изучение на примерах с самостоятельными',
        },
        dis4: {
            name: 'Изучение с повторением',
        },
        dis5: {
            name: 'Изучение с помощью ошибки',
        },
        dis6: {
            name: 'Самостоятельный поиск решения',
        },
        dis7: {
            name: 'Совместный поиск решения',
        },
        dis8: {
            name: 'Знакомство с группой',
        },
        dis9: {
            name: 'Одно задание на урок',
        },
        dis10: {
            name: 'Несколько заданий на урок',
        },
        dis11: {
            name: 'Совместное выполнение проекта',
        },
        dis12: {
            name: 'Самостоятельное выполнение проекта',
        },
    },
}
export default messages
const common = {
    en: {
        c_no: "No",
        c_yes: "Yes",
        c_can: 'Can',
        c_knows: 'Knows',
        c_lets_go: "Let's go!",
        c_go: "Proceed further",
        c_development: "In development",
        c_next: "Next",
        c_back: "Back",
        c_understood: "Got it",
        c_delete: 'Are you sure you want to delete?',
        c_navigation: {
            goal: "Define course goal",
            set_type: "Select field",
            questions: "Answer questions",
            lesson_map: "Lesson map",
            set_audience: "Analyze audience",
            topics: "Create a skill map",
            lessons: "Create lessons",
            path: "..and design the student's path",
            lesson: "Create a lesson plan",
            /*
            set_your_objective: "Укажите вашу цель",
            set_course_objective: "Укажите вашу цель",
            set_skill: "Укажите формируемый навык",
            create: "Создайте модуль",
            choose_or_create: "Выберите или создайте модуль",
            chosen: "Выбран модуль:",
            not_named: "No name",
            choose_template: "Pick a template",
            set_skills: "List skills",
            result: "See the result",
            questions: "Define the format",
            */
        }
    },
    ru: {
        c_no: "Нет",
        c_yes: "Да",
        c_can: 'Умеет',
        c_knows: 'Знает',
        c_lets_go: "Идём дальше!",
        c_go: "Перейти дальше",
        c_development: "В разработке",
        c_next: "Дальше",
        c_back: "Назад",
        c_understood: "Понятно",
        c_delete: 'Вы точно хотите удалить?',
        c_navigation: {
            goal: "Определите цель и формат курса",
            set_type: "Укажите направление",
            questions: "Ответьте на вопросы",
            set_audience: "Проанализируйте аудиторию",
            topics: "Создайте карту умений",
            lessons: "Спланируйте уроки",
            path: "и спроектируйте путь ученика",
            lesson: "Распишите план урока",
            section: "Распишите этап урока",
            export: "Экспортируйте курс",
            /*
            set_your_objective: "Укажите вашу цель",
            set_course_objective: "Укажите вашу цель",
            set_skill: "Укажите формируемый навык",
            create: "Создайте модуль",
            choose_or_create: "Выберите или создайте модуль",
            chosen: "Выбран модуль:",
            not_named: "Без названия",
            choose_template: "Подберите шаблон",
            set_skills: "Выпишите умения",
            result: "Посмотрите результат",
            questions: "Определите формат",
            */
        }
    }
}
export default function(key) {
    return common[key]
}
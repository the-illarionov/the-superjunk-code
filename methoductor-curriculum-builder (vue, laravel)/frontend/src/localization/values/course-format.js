import common from "@/localization/common"

const messages = {
    en: {
        realtime: {
            text: {
                course: "Are the classes in real time?",
                lesson: "Does it take place in real time?",
            },
            html: {
                yes: `
                <ul class='mb-3'>
                    <li>
                        Receive feedback immediately, take urgent action at the first sign of student struggling.
                    </li>
                    <li>
                        Establish emotional contact.
                    </li>
                </ul>
                <p>This is called Synchronous lessons.</p>`,
                no: `
                <ul class='mb-3'>
                    <li>
                        Teach a large amount of students.
                    </li>
                    <li>
                        Have a student learn at their own pace.
                    </li>
                </ul>
                <p>This is called Asynchronous lessons.</p>`,
            }
        },
        interaction: {
            text: {
                course: "Do students interact with each other?",
                lesson: "Do students interact with each other?",
            },
            html: {
                yes: `
                <p>Definitely add group interaction, if you have a chance to do so.</p>
                <p>Because teamwork is the second most important factor that affects student’s engagement.</p>`,
                no: `
                <p>But group interaction requires additional resources:</p> 
                <p>Curator, monitoring the group, as well as resources for synchronous lessons.</p>`,
            }
        },
        homework: {
            text: {
                course: "Is there homework?",
                lesson: "Is there homework?",
            },
        },
        ...common('en')
    },
    ru: {
        realtime: {
            text: {
                course: "Занятия идут в реальном времени?",
                lesson: "Урок идёт в реальном времени?",
            },
            html: {
                yes: `
                <ul class='mb-3'>
                    <li>
                        Быстро получать обратную связь от учеников, сразу реагировать на проблемы.
                    </li>
                    <li>
                        Установить эмоциональный контакт.
                    </li>
                </ul>
                <p>Такие занятия называются синхронными.</p>`,
                no: `
                <ul class='mb-3'>
                    <li>
                        Обучить большое количество учеников.
                    </li>
                    <li>
                        Чтобы ученик мог обучаться в своём темпе.
                    </li>
                </ul>
                <p>Такие занятия называются асинхронными.</p>`,
            }
        },
        interaction: {
            text: {
                course: "Взаимодействуют ли ученики друг с другом?",
                lesson: "Взаимодействуют ли ученики друг с другом?",
            },
            html: {
                yes: `
                <p>Если у вас есть возможность добавить групповое взаимодействие, обязательно сделайте это.</p>
                <p>Потому что командная работа - это второй по важности фактор, влияющий на вовлечение ученика.</p>`,
                no: `
                <p>Но групповое взаимодействие требует дополнительных ресурсов:</p> 
                <p>куратор, ведущий группу, ресурсы на синхронные занятия.</p>`,
            }
        },
        homework: {
            text: {
                course: "Есть ли домашние задания?",
                lesson: "Есть домашнее задание?",
            },
        },
        ...common('ru')
    },
}
export default messages
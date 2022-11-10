import navbar_messages from '@/localization/components/navbar'

const messages = {
    en: {
        ...navbar_messages.en,
        telegram: 'https://t.me/methoductor_en',
        language: 'Language',
        welcome: {
            header: "design a course with high completion and engagement rates",
            about: `<p>We turn your knowledge and expertise into the educational program.</p>
            <p>You won't even need any educational experience. We've taken care of everything.</p>
            `,
            create: "Try a demo"
        },
        dividers: {
            first: {
                header: "Design a course structure — easy",
                text: `Our simple tools let you do anything from setting the course goal to developing the program for each lesson:`
            },
            second: {
                header: "Instructional Designer’s right hand",
                text: `<p>Helps expedite the creation of your course and facilitates working with an expert</p>`
            },
            third: {
                header: "How do we engage the student?",
                text: `<p>When learning happens because "I want" and not because "I need," you do not need to motivate students and control them artificially.</p>
                <p>All you have to do is to guide.</p>
                <p>The perfect, unreachable situation, right?</p>
                <p>Not really, if you turn to emotions and build your educational program around them.</p>
                <p>And we will help you with this. Watch the video; we talked in detail about the importance of emotions in education.</p>`,
                subheader: "Using emotions",
            },
            fourth: {
                header: "Pricing",
            },
        },
        cards: {
            automatic: {
                header: "Topics map",
                text: `<p>Create a list of topics in your course with the help of our interactive mind map.</p>Our step-by-step training will help you organize your expertise.`,
                img: "main_gifs/en/map.png"
            },
            templates: {
                header: "Lessons builder",
                text: `<p>Collect your sub-theme in the classroom. </p><p>We will tell you which topic is best suited for a particular lesson.`,
                img: "main_gifs/en/subtopics_lessons.png"
            },
            devices: {
                header: "Emotional experience designer",
                text: `<p>Immerse the student in different emotional states in each lesson.</p>
                <p>We will offer you the most appropriate state chain, but you can change it as you want.</p>`,
                img: "main_gifs/en/subtopics_path.png"
            },
            skilltree: {
                header: "Lesson curriculum designer",
                text: `
                <p>Work through each lesson in detail, from beginning to end.</p>
		    	<p>We will offer you a suitable lesson template based on the student's emotional state, but you can change it or even create your own.</p>`,
                img: "main_gifs/en/lesson_template.png"
            },
            assistance: {
                header: "Assistance",
                text: `Ask our experts for advice when designing your course`,
                img: "main_gifs/en/assistance.gif"
            },
            tabs: {
                team: {
                    header: "Team",
                    text: `Work on your course together from anywhere, anytime`,
                    img: "main_gifs/en/team.gif"
                },
                builder: {
                    header: "Technique constructor",
                    text: `Create personal techniques, by combining existing ones or coming up with new ideas!`,
                    img: "main_gifs/en/builder.gif"
                },
                templates: {
                    header: "Personal templates",
                    text: `Create your personal tools library: original lesson templates, courses and techniques!`,
                    img: "main_gifs/en/own-templates.gif"
                },
                community: {
                    header: "Community",
                    text: `Engage and assist in the professional community of Instructional Designers!`,
                    img: "main_gifs/en/community.gif"
                },
            }
        },
        table: {
            first: {
                one: 'Price plans',
                two: 'Free',
                three: 'Standard',
                four: 'Enterprise License',
            },
            second: {
                one: 'One course'
            },
            third: {
                one: 'Unlimited courses'
            },
            fourth: {
                one: 'Access to all receptions'
            },
            fifth: {
                one: 'Technical support'
            },
            sixth: {
                one: 'Unlimited guest access'
            },
            seventh: {
                one: 'Consultation on the created programs'
            },
            eighth: {
                one: 'Employee training'
            },
            nineth: {
                one: 'Cost',
                two: 'Free',
                three: '$19/mon',
                four: 'Invididual',
            },
        }
    },
    ru: {
        ...navbar_messages.ru,
        telegram: 'https://t.me/methoductor_ru',
        language: 'Язык',
        welcome: {
            header: "Проектируйте курсы с высоким дохождением и вовлечением",
            about: `<p>Мы превращаем ваши знания и экспертизу в образовательную программу.</p>
            <p>Вам даже не понадобится опыт в образовании, мы обо всём позаботились.</p>
            `,
            create: "Попробовать демо"
        },
        dividers: {
            first: {
                header: "Спроектировать структуру курса — легко",
                text: `Наши простые инструменты позволят сделать всё, от цели курса до плана каждого урока:`
            },
            second: {
                header: "Незаменимый помощник методиста",
                text: `<p>Ускорит процессы при создании курса и позволит вести всю работу на одной платформе</p>`
            },
            third: {
                header: "Как мы создаём вовлечение?",
                text: `<p>
                Когда обучение происходит потому что «хочу», а не потому что «надо», вам не нужно искусственно мотивировать учеников и контролировать их.</p>
                <p>Вам остаётся только направлять.</p>
                <p>Идеальная недостижимая ситуация, да?</p>
                <p>На самом деле нет, если вы обратитесь к эмоциям и построите свою образовательную программу вокруг них.</p>
                <p>И мы поможем вам в этом. Посмотрите видео, мы подробно рассказали о важности эмоций в образовании.</p>`,
                subheader: "С помощью эмоций",
            },
            fourth: {
                header: "Тарифы",
            },
        },
        cards: {
            automatic: {
                header: "Карта тем",
                text: `<p>Составьте список тем вашего курса с помощью нашей интерактивной  ментальной карты.</p>Наше пошаговое обучение поможет вам систематизировать свои знания.`,
                img: "main_gifs/ru/map.png"
            },
            templates: {
                header: "Создание уроков",
                text: `<p>Собирайте ваши подтемы в уроки.</p><p>Мы подскажем, какая тема лучше подойдет для конкретного урока.`,
                img: "main_gifs/ru/subtopics_lessons.png"
            },
            devices: {
                header: "Проектирование эмоционального опыта",
                text: `<p>
                    Погружайте ученика в разные эмоциональные состояния на каждом уроке.</p>
                    <p>Мы предложим вам наиболее подходящую цепочку состояний, но вы сможете изменить её как захотите.</p>`,
                img: "main_gifs/ru/subtopics_path.png"
            },
            skilltree: {
                header: "Планирование каждого урока",
                text: `
                <p>
                    Детально прорабатывайте каждый урок, от начала и до конца.
                </p>
                <p>
                    Мы предложим вам подходящий шаблон урока, исходя из состояния ученика, но вы сможете изменить его или даже создать собственный.
                </p>`,
                img: "main_gifs/ru/lesson_template.png"
            },
            assistance: {
                header: "Консультация",
                text: `При создании курса обращайтесь за помощью к нашим экспертам.`,
                img: "main_gifs/ru/assistance.gif"
            },
            tabs: {
                team: {
                    header: "Команда",
                    text: `Совместно работайте над курсом в любом месте, в любое время.`,
                    img: "main_gifs/ru/team.gif"
                },
                builder: {
                    header: "Конструктор приемов",
                    text: `Создавай собственные приёмы, комбинируя существующие или придумывая новые!`,
                    img: "main_gifs/ru/builder.gif"
                },
                templates: {
                    header: "Собственные шаблоны",
                    text: `Создавай собственную библиотеку инструментов:  свои шаблоны уроков, курсов и приёмов!`,
                    img: "main_gifs/ru/own-templates.gif"
                },
                community: {
                    header: "Сообщество",
                    text: `Общайся и помогай в профессиональном сообществе методистов!`,
                    img: "main_gifs/ru/community.gif"
                },
            }
        },
        table: {
            first: {
                one: 'Тариф',
                two: 'Бесплатно',
                three: 'Стандарт',
                four: 'Корпоративный',
            },
            second: {
                one: 'Один курс'
            },
            third: {
                one: 'Неограниченное количество курсов'
            },
            fourth: {
                one: 'Доступ ко всем приёмам'
            },
            fifth: {
                one: 'Техническая поддержка'
            },
            sixth: {
                one: 'Неограниченный гостевой доступ'
            },
            seventh: {
                one: 'Консультация по созданным программам'
            },
            eighth: {
                one: 'Обучение сотрудников'
            },
            nineth: {
                one: 'Стоимость',
                two: 'Бесплатно',
                three: '$19 в месяц',
                four: 'Индивидуально',
            },
        }
    },
}
export default messages
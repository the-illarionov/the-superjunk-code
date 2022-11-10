const messages = {
    en: {
        theory: {
            text: 'For theory',
            values: {
                repeat: {
                    text:"Mirrorring the teacher",
                    variations: {
                        first: {
                            description: `
                                <p>Do the task step by step, students mirror your actions. Comment on each step. Student doesn’t do anything by himself.</p>
                                <p>At this point, it’s crucial that the student makes it work. He can get distracted at some moment, lose the thread and not let you know. In this case you’ll lose him.</p>
                                <p>In order to avoid that, make a few stops and check in with him, to make sure that he’s all caught up.</p>
                            `,
                            examples: {
                                dop_cgi: {
                                    good: {
                                        first: {
                                            text: `
                                                <p>After each step the teacher waits for the students to catch up with him.</p>
                                            `,
                                            explain: `
                                                <p>Step by step guide is broken down into small steps. Which allows the teacher not to lose slow paced students and to easily present the topic.</p>
                                            `,
                                        }
                                    },
                                    bad: {
                                        first: {
                                            text: `
                                                <p>The teacher’s demonstration is too fast and covers too much, the steps are too wide. Doesn’t check if everyone is caught up with him.</p>
                                            `,
                                            explain:
                                                `
                                                <p>The new information is all over the place.</p>
                                                <p>If students encounter a problem, the teacher has to explain the solution to each student separately.</p>
                                                <p>Students that are shy might not understand the topic, not ask the teacher and as the result they haven’t acquired the needed knowledge.</p>
                                                <p>The teacher doesn’t know who got it and who didn’t understand.</p>
                                            `,
                                        }
                                    }
                                }
                            }
                        }
                    }
                },
                statement: {
                    text:"Statement",
                    variations: {
                        first: {
                            description: `
                                <p>Present the topic by a simple statement. It’s the most boring, yet, at times, necessary technique.</p>
                                <p>You can mix it up by showing real life applications of this topic.</p>
						    `,
                            examples: {
                                dop_cgi: {
                                    good: {
                                        first: {
                                            text: `
                                                <p>2D is a type of computer graphics, where the image is flat. 2D graphics can be seen on posters, logos, in cartoons, infographics, on websites and in apps (show examples)</p>
                                            `,
                                            explain: `
                                                <p>Gives the examples of application. Explains with plain words.</p>
                                            `
                                        }
                                    },
                                    bad: {
                                        first: {
                                            text: `
                                                <p>2D is basically two-dimensional image. Meaning, it’s an image, presented in two dimensions, possessing just 2 parameters, particularly: height and width. This format is also known as flat image.</p>
                                            `,
                                            explain:
                                                `
                                                <p>Doesn’t give the examples of application, uses some terminology.</p>
                                            `,
                                        }
                                    }
                                }
                            }
                        }
                    }
                },
                problem: {
                    text:"Evident problem",
                    variations: {
                        first: {
                            description: `
                                <p>A problem is deliberately introduced to the task, so that students can encounter it.</p>
                                <p>Teacher gives a task and waits until students encounter the problem during the task.</p>
                                <p>Later this problem is resolved.</p>
                            `,
                            examples: {
                                dop_cgi: {
                                    good: {
                                        first: {
                                            text: `
                                                <p>When working on a poster the teacher waits until a student adds image with a non-transparent background. Then he tells the whole group to pay attention to the problem that this student encountered, and shows how to solve it.</p>
                                            `,
                                            explain: `
                                                <p>Students experience the problem first-hand.</p>
                                            `
                                        }
                                    },
                                    bad: {
                                        first: {
                                            text: `
                                                <p>Poster has the font that the program used for the lesson hasn’t got. Teacher shows how to install custom fonts.</p>
                                            `,
                                            explain:
                                                `
                                                <p>The problem isn’t obvious enough. Students can do with the fonts that the program already has installed (around 800)</p>
                                            `,
                                        }
                                    }
                                }
                            }
                        }
                    }
                },
                c_from_problem: {
                    text:"Problem-based task",
                    variations: {
                        first: {
                            description: `
                                <ol class='mb-3'>
                                    <li>Define a problem and make it evident.</li>
                                    <li>Discuss it with your student: what caused this problem, what could be the solutions. Nudge the student towards the correct answer.</li>
                                    <li>Show how to solve the problem using a new topic.</li>
                                </ol>
                                <p>This way the student will get a better grasp of the benefit and practical applications of his new knowledge.</p>
                            `,
                            examples: {
                                dop_cgi: {
                                    good: {
                                        first: {
                                            text: `
                                                <p>To complete the task we need an image with a transparent background. I’ll find a non-transparent image. What’s wrong? Why did it happen? How would we like it to be? I’ll tell them about the alpha channel, PNG format, and show how to google transparent images.</p>
                                            `,
                                            explain: `
                                                <p>The task is designed so that student will definitely encounter this problem. He’ll instantly learn how to solve it through the new topic and the new knowledge will sink in as a result.</p>
                                            `
                                        }
                                    },
                                    bad: {
                                        first: {
                                            text: `
                                                <p>The teacher’s demonstration is too fast and covers too much, the steps are too wide. Doesn’t check if everyone is caught up with him.</p>
                                            `,
                                            explain:
                                                `
                                                <p>The new information is all over the place.</p>
                                                <p>If students encounter a problem, the teacher has to explain the solution to each student separately.</p>
                                                <p>Students that are shy might not understand the topic, not ask the teacher and as the result they haven’t acquired the needed knowledge.</p>
                                                <p>The teacher doesn’t know who got it and who didn’t understand.</p>
                                            `,
                                        }
                                    }
                                }
                            }
                        }
                    }
                },
            }
        },
        practice: {
            text: 'For practice',
            values: {
                finish: {
                    text: "Finish it",
                    variations: {
                        first: {
                            description: `
                                <p>Student should have a partially completed task that he finishes by himself.</p>
                                <p>This allows him to review and enforce things that he learned.</p>
                                <p>Important! Any knowledge and skills that the task requires should be pre-taught during the joint practice with the teacher.</p>
                            `,
                            examples: {
                                dop_cgi: {
                                    good: {
                                        first: {
                                            text: `
                                                <p>Students finish poster for Comic Con. They add images of their favourite characters, they add text and shapes as shown in reference.</p>
                                            `,
                                            explain: `
                                                <p>Because student can add something of his own, something that is close to him specifically, and each student will have his unique poster.</p>
                                            `
                                        }
                                    },
                                    bad: {
                                        first: {
                                            text: `
                                                <p>Finish poster, add images of characters, text and images inside the circle.</p>
                                            `,
                                            explain:
                                                `
                                                <p>It has theory that was not covered with the teacher. Particularly, creating a mask when you create an image inside the circle.</p>
                                            `,
                                        }
                                    }
                                }
                            }
                        }
                    }
                },
            }
        },
        engagement: {
            text: 'For engaging',
        },
        custom: {
            text: 'Custom',
        },
        service: {
            text: 'Служебные',
            values: {
                skills: {
                    text: "Умения",
                    variations: {
                        first: {
                            description: `
                                <p>List only practical skills. This way it’ll be much easier to evaluate the lesson. <br />Use words like “creating”, “execution” (not “understanding”, “knowledge”), ie, what can be said about a completed action.</p>
                                <p>Avoid giving too much material.<br />At the beginning of the course your goal is not to submerge into theory, but to create the sense of achievement within student by simple tasks.</p>
                                <p>Give him a ball and teach him how to kick, you’ll explain the rules later.</p>
                            `,
                            examples: {
                                dop_cgi: {
                                    good: {
                                        first: {
                                            text: `
                                                <p>For the Figma course:</p>
                                                <ol>
                                                    <li>
                                                        Creating simple shapes;
                                                    </li>
                                                    <li>
                                                        Adding text;
                                                    </li>
                                                    <li>
                                                        Adding image.
                                                    </li>
                                                </ol>
                                            `,
                                            explain: `
                                                <p>Only specific practical skills are listed, no theory.</p>
                                                <p>This allows to focus on the practical knowledge.</p>
                                                <p>Any theory should be presented only as a solution to some practical problem.</p>
                                            `
                                        }
                                    },
                                    bad: {
                                        first: {
                                            text: `
                                                <p>For the Figma course:</p>
                                                <ol>
                                                    <li>
                                                        Frame and grid;
                                                    </li>
                                                    <li>
                                                        User scripts and cases;
                                                    </li>
                                                    <li>
                                                        Understanding basic tools.
                                                    </li>
                                                </ol>
                                            `,
                                            explain:
                                                `
                                                <p>What are “frame and net”, “website sample” from the beginner’s point of view? Why does he need to learn it in the first lesson? </p>
                                                <p>Your student should be immersed with the feeling of accomplishment, and that requires a lot of practice.</p>
                                                <p>Besides it would be rather hard to accurately evaluate the “understanding of basic tools” skill.</p>
                                            `,
                                        }
                                    }
                                }
                            }
                        }
                    }
                },
                task_concept: {
                    text: "Придумать задание",
                    variations: {
                        first: {
                            description: `
                                <p>You’ll be doing this task throughout the whole lesson, you will start doing it together, and student will complete it by themself.</p>
                                <p>It should be:</p>
                                <ul class="mb-3">
                                    <li>Be related to something that’s close to student (pop-culture, friends, family, city, region, surroundings etc);</li>
                                    <li>Give student an opportunity to tell about himself, express himself (likes, dislikes, wishes etc);</li>
                                    <li>Have a practical real-life application, the finished task should be of use to student.</li>
                                </ul>
                                <p>At an early stage the task should be simple, unburdened by excessive theory, to make student think “I can do this. This is working”.</p>
                                <p>Aside from that, may be consider preparing some part of task beforehand? So that implementing this part doesn’t distract you, when you’re explaining the topic.</p>
                            `,
                            examples: {
                                dop_cgi: {
                                    good: {
                                        first: {
                                            text: `
                                                <p>Design a «Comic Con» poster with the best superheroes, according to student.</p>
                                            `,
                                            explain: `
                                                <p>The task is interesting, it’s got some “air” so that student can add something of his own.</p>
                                                <p>Any chance to add something of his own always greatly increases student’s interest.</p>
                                            `
                                        }
                                    },
                                    bad: {
                                        first: {
                                            text: `
                                                <p>Design a business card of a building company</p>
                                            `,
                                            explain:
                                                `
                                                <p>Student can’t relate to this task, which means he’s only going to do it because he has to.</p>
                                                <p>Your goal should be to create an environment where student wants to do each task because it’s interesting.</p>
                                            `,
                                        }
                                    }
                                }
                            }
                        }
                    }
                },
                task_together: {
                    text: "Придумать совместную практику",
                    variations: {
                        first: {
                            description: `
                                <p>During joint step by step task you’ll explain all theory necessary for the lesson.<br />Student doesn’t learn anything new by himself in this lesson, he only mirrors what you do.</p>
                                <p>Leave some “air” so that at the end of the lesson student can finish the task on his own by analogy.</p>
                            `,
                            examples: {
                                dop_cgi: {
                                    good: {
                                        first: {
                                            text: `
                                                <p>We’ll create a background for the poster together. And we’ll learn how to add and position text and images in the process.</p>
                                            `,
                                        }
                                    }
                                }
                            }
                        }
                    }
                },
                task_solo: {
                    text: "Придумать самостоятельную практику",
                    variations: {
                        first: {
                            description: `
                                <p>There should be nothing new, everything that student does here, you must have already done together.</p>
                                <p>All student’s steps should be done by analogy with the joint practice.</p>
                            `,
                            examples: {
                                dop_cgi: {
                                    good: {
                                        first: {
                                            text: `
                                                <p>Student will add images of the best, in his opinion, superheroes and come up with text.</p>
                                            `,
                                        }
                                    }
                                }
                            }
                        }
                    }
                },
                demo: {
                    text: "Демонстрация результата",
                    variations: {
                        first: {
                            description: `
                                <p>
                                    At the beginning of a lesson it’s crucial to show how it will end.<br />
                                    This way student understands why he needs this knowledge and how he can apply it.<br />
                                    Such understanding instantly changes his attitude to new information, it stops being abstract.
                                </p>
                                <p>Give student the end result and analyze it, breaking it down to its components.<br />That will be the lesson plan, let it be known to your student.</p>
                            `,
                            examples: {
                                dop_cgi: {
                                    good: {
                                        first: {
                                            text: `
                                                I will show a finished poster with Marvel characters and will break down the necessary steps: searching images, positioning, adding text, changing color.
                                            `,
                                        }
                                    }
                                }
                            }
                        }
                    }
                },
                practice_together: {
                    text: "Совместная практика",
                    variations: {
                        first: {
                            description:  `
                                <p>For this purpose you should first complete the task yourself. Even if you‘ve done similar things 100 times before, do it for the one hundred and first time and write down every step.
                                <br />
                                You’ll see that you’ve done most of those steps without thinking, just using your experience. But student hasno experience.</p>
                                <p class="mb-5">Now combine these steps and present each through our techniques.</p>
                            `,
                        }
                    }
                },
                practice_solo: {
                    text: "Самостоятельная практика",
                    variations: {
                        first: {
                            description:  `
                                <p class="mb-0">Reminder:</p>
                                <p>There should be nothing new, everything that student does here, you must have already done together.</p>
                                <p class="mb-5">All student’s steps should be done by analogy with the joint practice.</p>
                            `,
                        }
                    }
                },
                finish: {
                    text: "Конец урока",
                    variations: {
                        first: {
                            description:  `
                                <p>This is your first lesson, so you need to interest student in the following lessons, familiarize them with the course progression.</p>
                                <p>This needs to be done at the end of the lesson, to reinforce the sense of accomplishment after the successful first lesson and project it onto the whole course in general.</p>
                                <ol class="mb-5">
                                    <li>Show them the end-result of the course. Show them the works of other students from previous courses, if possible;</li>
                                    <li>Show them how the knowledge received in this course can be applied to his life;</li>
                                    <li>Be specific about the course format: the number of classes, duration, rules etc.</li>
                                </ol>
                            `,
                        }
                    }
                },
            }
        },
    },
    ru: {
        theory: {
            text: 'Для теории',
            values: {
                repeat: {
                    text:"Повтор за учителем",
                    variations: {
                        first: {
                            description: `
                                <p>Выполняете задание пошагово, ученики повторяют за вами. Комментируйте каждый шаг. Ученик не делает ничего самостоятельно.</p>
                                <p>В это время очень важно следить за тем, чтобы у ученика всё получилось. Он в какой-то момент может отвлечься, потерять нить и не сообщить об этом. В таком случае вы его потеряете.</p>
                                <p>Поэтому делайте какие-то остановки и проверяйте, что у ученика всё получается.</p>
                            `,
                            examples: {
                                dop_cgi: {
                                    good: {
                                        first: {
                                            text: `
                                                <p>После каждого шага учитель ждет, когда ученики за ним повторят.</p>
                                            `,
                                            explain: `
                                                <p>Пошаговое объяснение разделено на мелкие шаги. Это позволяет учителю не упустить медленных и подать тему просто.</p>
                                            `,
                                        }
                                    },
                                    bad: {
                                        first: {
                                            text: `
                                                <p>Учитель показывает все очень быстро и много, слишком большие шаги. Не следит все ли успели повторить за ним.</p>
                                            `,
                                            explain:
                                                `
                                                <p>Полученные знания смешиваются в кашу. </p>
                                                <p>Если ученики столкнутся с проблемой, учителю нужно обьяснять каждому решение.</p>
                                                <p>Стеснительные ученики могут не понять тему, не спросить и в итоге не освоят нужное знание. </p>
                                                <p>Учитель не знает кто справился а кто не понял. </p>
                                            `,
                                        }
                                    }
                                }
                            }
                        }
                    }
                },
                statement: {
                    text:"Утверждение",
                    variations: {
                        first: {
                            description: `
                                <p>Подайте тему простым утверждением. Это самый скучный, но, иногда, необходимый приём.</p>
                                <p>Его можно раскрасить демонстрацией применения темы в реальной жизни.</p>
						    `,
                            examples: {
                                dop_cgi: {
                                    good: {
                                        first: {
                                            text: `
                                                <p>2D — вид компьютерной графики, где изображение плоское. 2D графику можно увидеть на постерах, логотипах, в мультфильмах, в инфографике, на сайтах и приложениях (показать примеры).</p>
                                            `,
                                            explain: `
                                                <p>Приведены примеры использования. Простыми словами объясняется.</p>
                                            `
                                        }
                                    },
                                    bad: {
                                        first: {
                                            text: `
                                                <p>2D — это, по сути, двухмерная графика. То есть, это изображение, представленное в двух измерениях, обладающее лишь двумя параметрами, а именно: высотой и шириной. Называется этот формат также плоским изображением.</p>
                                            `,
                                            explain:
                                                `
                                                <p>Не приведены примеры использования, используются некоторые термины.</p>
                                            `,
                                        }
                                    }
                                }
                            }
                        }
                    }
                },
                problem: {
                    text:"Нарочная проблема",
                    variations: {
                        first: {
                            description: `
                                <p>В задании специально добавляется какая-либо проблема, с которой ученики должны столкнуться.</p>
                                <p>Учитель дает задание и ждет, когда ученики столкнутся с ней в ходе решения задания.</p>
                                <p>Потом эта проблема разбирается.</p>
                            `,
                            examples: {
                                dop_cgi: {
                                    good: {
                                        first: {
                                            text: `
                                                <p>Во время работы над постером учитель ждет пока какой-нибудь ученик не добавит картинку с непрозрачным фоном. Потом говорит всей группе обратить внимание на проблему, которая возникла у этого ученика. И показывает решение.</p>
                                            `,
                                            explain: `
                                                <p>Ученики на своем опыте сталкиваются с проблемой. </p>
                                            `
                                        }
                                    },
                                    bad: {
                                        first: {
                                            text: `
                                                <p>В постере используется шрифт, которого нет в программе, на которой работают. Учитель показывает как устанавливать сторонние шрифты.</p>
                                            `,
                                            explain:
                                                `
                                                <p>Проблема не очевидная. Ученикам достаточно тех шрифтов, которые уже есь в программе (около 800)</p>
                                            `,
                                        }
                                    }
                                }
                            }
                        }
                    }
                },
                c_from_problem: {
                    text:"От проблемы",
                    variations: {
                        first: {
                            description: `
                                <ol class='mb-3'>
                                    <li>Сформулируйте проблему и наглядно её продемонстрируйте.</li>
                                    <li>Обсудите вместе с учеником проблему: почему она возникла, какие могут быть способы её решения. Подведите ученика к правильному ответу.</li>
                                    <li>Покажите решение проблемы, используя новую тему.</li>
                                </ol>
                                <p>Так ученик лучше поймёт пользу и практическое применение новых знаний.</p>
                            `,
                            examples: {
                                dop_cgi: {
                                    good: {
                                        first: {
                                            text: `
                                                <p>Для выполнения задания нужны картинки с прозрачным фоном. Скачаю непрозрачную картинку и размещу её. Что не так? Почему так произошло? Как бы нам хотелось, чтобы было? Расскажу про альфа-канал и формат PNG, покажу как искать в гугле прозрачные картинки.</p>
                                            `,
                                            explain: `
                                                <p>Задание сделано таким образом, что ученик обязательно столкнётся с такой проблемой. Тут же узнает, как её решить с помощью новой темы и в итоге лучше усвоит знание.</p>
                                            `
                                        }
                                    },
                                    bad: {
                                        first: {
                                            text: `
                                                <p>Учитель показывает все очень быстро и много, слишком большие шаги. Не следит все ли успели повторить за ним.</p>
                                            `,
                                            explain:
                                                `
                                                <p>Полученные знания смешиваются в кашу. </p>
                                                <p>Если ученики столкнутся с проблемой, учителю нужно обьяснять каждому решение.</p>
                                                <p>Стеснительные ученики могут не понять тему, не спросить и в итоге не освоят нужное знание. </p>
                                                <p>Учитель не знает кто справился а кто не понял. </p>
                                            `,
                                        }
                                    }
                                }
                            }
                        }
                    }
                },
            }
        },
        practice: {
            text: 'Для практики',
            values: {
                finish: {
                    text: "Доделай",
                    variations: {
                        first: {
                            description: `
                                <p>У ученика должно быть частично готовое задание, которое он самостоятельно доделывает.</p>
                                <p>Это позволяет ему повторить и закрепить полученные знания.</p>
                                <p>Важно! Все знания и умения, которые нужны ученику, должны быть предварительно выполнены совместно с преподавателем.</p>
                            `,
                            examples: {
                                dop_cgi: {
                                    good: {
                                        first: {
                                            text: `
                                                <p>Доделать постер к событию Comic Con. Добавляют картинки своих любимых персонажей, добавляют дополнительно текст и фигуры как показано на референсе.</p>
                                            `,
                                            explain: `
                                                <p>Потому что ученик может внести что-то от себя, то, что близко конкретно ему и у каждого ученика будет уникальный постер.</p>
                                            `
                                        }
                                    },
                                    bad: {
                                        first: {
                                            text: `
                                                <p>Доделать постер, добавить картинки персонажей, текст и картинки внутри круга.</p>
                                            `,
                                            explain:
                                                `
                                                <p>Есть теория, которую ученики не разбирали с учителем. А именно, создание масок когда делаешь картинку внутри круга.</p>
                                            `,
                                        }
                                    }
                                }
                            }
                        }
                    }
                },
            }
        },
        engagement: {
            text: 'Для вовлечения',
        },
        custom: {
            text: 'Пользовательские',
        },
        service: {
            text: 'Служебные',
            values: {
                skills: {
                    text: "Умения",
                    variations: {
                        first: {
                            description: `
                                <p>Укажите только практические умения. Так оценить урок будет гораздо проще.<br />Поэтому используйте слова «создание», «выполнение» (а не «понимание», «знание»), те, что говорят о  завершённом действии.</p>
                                <p>И не давайте слишком много материала.<br />Ваша цель в начале курса &mdash; не погрузить в теорию, а создать у ученика состояние успеха лёгкостью выполнения заданий.</p>
                                <p>Дайте футбольный мяч и покажите, как пинать — правила объясните потом.</p>
                            `,
                            examples: {
                                dop_cgi: {
                                    good: {
                                        first: {
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
                                        }
                                    },
                                    bad: {
                                        first: {
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
                                }
                            }
                        }
                    }
                },
                task_concept: {
                    text: "Придумать задание",
                    variations: {
                        first: {
                            description: `
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
                            examples: {
                                dop_cgi: {
                                    good: {
                                        first: {
                                            text: `
                                                <p>Сделать постер фестиваля «Comic Con» с лучшими по мнению ученика  супергероями</p>
                                            `,
                                            explain: `
                                                <p>Интересная тема, есть «воздух» для того, чтобы ученик добавил что-то своё.</p>
                                                <p>Возможность добавить что-то от себя всегда значительно повышает интерес ученика.</p>
                                            `
                                        }
                                    },
                                    bad: {
                                        first: {
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
                                }
                            }
                        }
                    }
                },
                task_together: {
                    text: "Придумать совместную практику",
                    variations: {
                        first: {
                            description: `
                                <p>Во время совместного пошагового выполнения задания вы объясните всю необходимую теорию на этот урок.<br />На этом уроке ученик не изучает ничего нового самостоятельно, только повторяет.</p>
                                <p>Оставьте «воздух», чтобы в конце урока ученик смог по аналогии  самостоятельно закончить задание.</p>
                            `,
                            examples: {
                                dop_cgi: {
                                    good: {
                                        first: {
                                            text: `
                                                <p>Вместе мы создадим фон постера. В процессе изучим как добавлять и позиционировать текст и картинки.</p>
                                            `,
                                        }
                                    }
                                }
                            }
                        }
                    }
                },
                task_solo: {
                    text: "Придумать самостоятельную практику",
                    variations: {
                        first: {
                            description: `
                                <p>Не должно быть ничего нового, всё, что делает ученик, вы должны предварительно сделать совместно.</p>
                                <p>Все действия ученика должны быть выполнены по аналогии с совместным заданием.</p>
                            `,
                            examples: {
                                dop_cgi: {
                                    good: {
                                        first: {
                                            text: `
                                                <p>Ученик самостоятельно добавит картинки лучших по его мнению супергероев и придумает текст.</p>
                                            `,
                                        }
                                    }
                                }
                            }
                        }
                    }
                },
                demo: {
                    text: "Демонстрация результата",
                    variations: {
                        first: {
                            description: `
                                <p>
                                    В начале урока очень важно показать, чем он закончится.<br />
                                    Так ученик поймёт, зачем ему нужны новые знания и как он их будет применять.<br />
                                    Такое понимание сразу меняет отношение к новой информации, она перестаёт быть инородной.
                                </p>
                                <p>Покажите результат и проанализируйте его, разберите на составные части.<br />Это и будет планом урока, озвучьте его ученику.</p>
                            `,
                            examples: {
                                dop_cgi: {
                                    good: {
                                        first: {
                                            text: `
                                                Покажу готовый постер с персонажами Marvel и сделаю разбор нужных действий: поиск картинки, позиционирование, добавление текста, изменение цвета.
                                            `,
                                        }
                                    }
                                }
                            }
                        }
                    }
                },
                practice_together: {
                    text: "Совместная практика",
                    variations: {
                        first: {
                            description:  `
                                <p>Для этого сначала полностью выполните задание сами. Даже если вы делали подобное сотню раз, сделайте в сто первый и запишите каждое действие.
                                <br />
                                Вы увидите, что многое вы сделали не задумываясь, используя свой опыт. Но у ученика этого опыта нет.</p>
                                <p class="mb-5">Далее объедините действия в шаги и подайте каждый с помощью наших приёмов.</p>
                            `,
                        }
                    }
                },
                practice_solo: {
                    text: "Самостоятельная практика",
                    variations: {
                        first: {
                            description:  `
                                <p class="mb-0">Напоминаем:</p>
                                <p>Не должно быть ничего нового, всё, что делает ученик, вы должны предварительно сделать совместно.</p>
                                <p class="mb-5">Все действия ученика должны быть выполнены по аналогии с совместным заданием.</p>
                            `,
                        }
                    }
                },
                finish: {
                    text: "Конец урока",
                    variations: {
                        first: {
                            description:  `
                                <p>Это первый урок, поэтому вам надо заинтересовать ученика дальнейшими уроками, познакомить с дальнейшим курсом.</p>
                                <p>Это надо сделать в конце урока, чтобы закрепить состояние успеха после успешного первого урока и транслировать его на весь курс в целом.</p>
                                <ol>
                                    <li>Покажите конечный результат курса. Если возможно, покажите работы других учеников с прошлых курсов;</li>
                                    <li>Покажите, какое применение в жизни ученика могут найти полученные на курсе знания;</li>
                                    <li>Чётко проговорите технический формат курса: количество занятий, регламент, правила и т.д.</li>
                                </ol>
                            `,
                        }
                    }
                },
            }
        },
    },
}
export default messages
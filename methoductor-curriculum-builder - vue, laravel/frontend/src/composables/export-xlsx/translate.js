import common from '@/localization/common'
import localization from '@/composables/localization'

const messages = {
    en: {
        number: '# ',
        lesson_name: 'Lesson name: ',
        no_name: 'No name',
        student_state: 'Student state: ',
        state_not_defined: 'Not defined',
        used_skills: 'Used skills: ',
        ...common('en')
    },
    ru: {
        number: '№',
        lesson_name: 'Название урока: ',
        no_name: 'Без имени',
        student_state: 'Состояние ученика: ',
        state_not_defined: 'Не определено',
        used_skills: 'Использованные навыки: ',
        ...common('ru')
    },
}

const translate = localization(messages)

export default translate
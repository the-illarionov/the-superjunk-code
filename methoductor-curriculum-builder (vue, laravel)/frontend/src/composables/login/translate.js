import common from '@/localization/common'
import localization from '@/composables/localization'

const messages = {
    en: {
        valid: 'The email must be a valid email address',
        unauthorized: 'No such combination of login and password was found',
        mismatch: 'The password confirmation does not match',
        unique: 'The email has already been taken',
        ...common('en')
    },
    ru: {
        valid: 'Введён некорректный email',
        mismatch: 'Пароли не совпадают',
        unauthorized: 'Не найдена такая комбинация логина и пароля',
        unique: 'Аккаунт с такой почтой уже существует',
        ...common('ru')
    },
}

const translate = localization(messages)

export default translate
const messages = {
    en: {
        password: "Password",
        password_confirm: "Password confirmation",
        facebook: {
            unfortunately: `Unfortunately, you can not authorize through Facebook.<br/>
            Please try another option`,
            to_auth: "Go to auth page"
        },
        login: {
            hello: "Hello!",
            enter: "Enter",
            unauthorized: 'No such combination of login and password was found',
            mail_required_login: "The email field is required",
            pass_required_login: "The password field is required",
        },
        signin: {
            welcome: "Welcome to the team!",
            reg: "Sign in",
            mismatch: 'The password confirmation does not match',
            unique: 'The email has already been taken',
            valid: 'The email must be a valid email address',
            mail_required_signup: "The email field is required",
            pass_required_signup: "The password field is required",
            pass_confirm_required_signup: "The password confirmation field is required",
        },
        oauthland: {
            done: "Login: successful!"
        }
    },
    ru: {
        password: "Пароль",
        password_confirm: "Подтверждение пароля",
        facebook: {
            unfortunately: `К сожалению, вы не можете авторизоваться через Facebook. <br/>
            Попробуйте другой способ`,
            to_auth: "Перейти к странице авторизации"
        },
        login: {
            hello: "Привет!",
            enter: "Войти",
            unauthorized: 'Не найдена такая комбинация логина и пароля',
        },
        signin: {
            welcome: "Добро пожаловать в команду",
            reg: "Зарегистрироваться",
            unauthorized: 'Не найдена такая комбинация логина и пароля',
            unique: 'Аккаунт с такой почтой уже существует',
            valid: 'Введён некорректный email',
        },
        oauthland: {
            done: "Вход выполнен!"
        }
    },
}
export default messages
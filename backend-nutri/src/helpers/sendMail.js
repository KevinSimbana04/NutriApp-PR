import sendMail from "../config/nodemailer.js"


const sendMailToRegister = (userMail, token) => {

    return sendMail(
        userMail,
        "Bienvenido a NUTRIAPP - Confirma tu cuenta",
        `
            <p>Hola, haz clic en el siguiente enlace para confirmar tu cuenta:</p>
            <a href="${process.env.URL_BACKEND}confirmar/${token}">
            Confirmar cuenta
            </a>
            <hr>
            <footer>El equipo de NUTRIAPP te da la más cordial bienvenida.</footer>
        `
    )
}


export {
    sendMailToRegister
}
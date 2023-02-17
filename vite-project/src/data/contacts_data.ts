
import Github from "../static/technologies/github.svg"
import Linkedin from "../static/contacts/linkedin.svg"
import Email from "../static/contacts/email.svg"


interface Contact {
    name: string,
    img: string
}


export const contacts: Array<Contact> = [
    {
        name: "Email",
        img: Email
    },
    {
        name: "Github",
        img: Github
    },
    {
        name: "LinkedIn",
        img: Linkedin
    }
]
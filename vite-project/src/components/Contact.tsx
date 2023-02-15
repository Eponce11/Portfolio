


const Contact = () => {

    interface Contact {
        title: string,
        img: string
    }

    const contacts:Array<Contact> = [
        {
            title: "Email",
            img: "img"
        },
        {
            title: "Github",
            img: "img"
        },
        {
            title: "LinkedIn",
            img: "img"
        }
    ]

    return (
        <div className="flex items-center justify-center bg-[green] h-[80px] w-[100%] bottom-0 absolute">
            <ul className="flex justify-between w-[300px]">
                {
                    contacts.map( (contact, idx) => {
                        return (
                            <li className="flex flex-col items-center" key={idx}>
                                <div className="bg-[red] w-[40px] h-[40px]"></div>
                                <p>{contact.title}</p>
                            </li>
                        )
                    })
                }
            </ul>
        </div>
    )
}


export default Contact;
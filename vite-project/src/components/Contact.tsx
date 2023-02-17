
import { contacts } from "../data/contacts_data"


const Contact = () => {


    return (
        <div className="flex items-center justify-center bg-[#484292] h-[50px] w-[100%] bottom-0 absolute">
            <ul className="flex justify-between w-[300px]">
                {
                    contacts.map( (contact, idx) => {
                        return (
                            <li className="flex flex-col items-center" key={idx}>
                                <img className="w-[40px] h-[40px]" src={contact.img} alt={contact.name} />
                            </li>
                        )
                    })
                }
            </ul>
        </div>
    )
}


export default Contact;
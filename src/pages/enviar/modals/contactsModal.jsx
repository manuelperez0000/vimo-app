import useUserStorGlobal from "../../../globals/useUserStoreGlobal"
import useContactsStore from "../useContactsStore"

const ContactsModal = ({ setUrlParam }) => {
    const { user } = useUserStorGlobal()
    const { modalContact, setModalContact } = useContactsStore()

    const goTo = (email) => {
        setModalContact(false)
        setUrlParam(email)
    }

    if (modalContact) return (
        <div className="bg-modal">
            <div className="body-modal m-contacts">
                <div className="contacts-wrapper">

                    {user.contacts.filter((contact, index, self) => index === self.findIndex((t) => (t.email === contact.email))
                    ).map((i, index) => {
                        return <div onClick={() => goTo(i.email)} className="contact" key={index}>
                            <h4>{i.name}</h4>
                            <p>{i.email}</p>
                        </div>
                    })}
                </div>
                <div className="text-end mt-4">
                    <button className="btn btn-secondary" onClick={() => setModalContact(false)}> Cancelar </button>
                </div>
            </div>
        </div>
    )
}

export default ContactsModal
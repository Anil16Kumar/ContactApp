class Contact {
    constructor(cName) {
        this.cName = cName
        this.contactInfos = []
    }
    static newContact(cName) {
        //cName check
        return new Contact(cName)
    }
}
module.exports = Contact
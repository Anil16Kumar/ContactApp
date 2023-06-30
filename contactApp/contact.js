class Contact {
    constructor(cName) {
        this.cName = cName
        this.contactInfos = []
    }
    static newContact(cName) {
        if(typeof cName != "string")
         throw new Error("Enter type of String Only");
         
        return new Contact(cName)
    }
}
module.exports = Contact 

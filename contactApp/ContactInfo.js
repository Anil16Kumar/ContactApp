class ContactInfo {

    constructor(type, value) {
        this.type = type
        this.value = value
    }

    static newContactInfo(type,value){

        if(typeof type != "string")
         throw new Error("Enter type of String Only");

         if(typeof value != "number")
          throw new Error("Enter type of Number Only");
        
        return new ContactInfo(type,value);
    }

}  
module.exports = ContactInfo

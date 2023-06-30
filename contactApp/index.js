//Driver Code


const User = require("./user");

try {
    const admin1 = User.newAdmin("Anil", "ani123")

    
    // CRUD ON ADMIN

    const user1 = admin1.newUser("Sureshk", "sk123")
    const user2 = admin1.newUser("Rakesh", "r123")
    const user3 = admin1.newUser("Dineshk", "dk123")
    


    admin1.updateUser("sk123", "name", "Saurav Kumar")
    admin1.deleteUser("r123")

    // CRUD ON CONTACT
    
     user1.newContact("anurag")
     user1.newContact("bhim")
     user1.newContact("chhotu")
     user1.newContact("doli")
     user1.newContact("eroll")

     user1.updateContact("bhim","kat")
     user1.deleteContact("chhotu")

     // CRUD ON CONTACT INFO

     user1.addContactInfo("anurag","Home",98989)       
     user1.addContactInfo("anurag","Telephone",98989)
     user1.addContactInfo("anurag","Mobile",98989)
     
     user1.updateContactInfo("anurag","Mobile",909090)  
     user1.deleteContactInfo("anurag","Telephone")      
     

     console.log(admin1.getAllUser());           

     console.log(user1);                           
     console.log(user1.contacts[0]);               


    user2.newContact("Anil")
    user2.newContact("bhim")
    user2.newContact("chhavi")
    user2.newContact("sam")
    user2.newContact("nik")

    user2.updateContact("bhim","Arjun")
    user2.deleteContact("chhavi")

     // CRUD ON CONTACT INFO

     user2.addContactInfo("Anil","Home",98989)        
     user2.addContactInfo("Anil","Telephone",98989)
     user2.addContactInfo("kola","Mobile",98989)
     
     user2.updateContactInfo("Anil","Home",101010)  
     user2.deleteContactInfo("Anil","Telephone")      
     

     console.log(admin1.getAllUser());            
     console.log(user2);                           
     console.log(user2.contacts[0]);               





} catch (error) {
    console.log(error.message)
}


//Driver Code


const User = require("./User");

try {
    const admin1 = User.newAdmin("AnilKumar", "ani123")

    const user1=admin1.newUser("Anurag","Anu16")
    const user2=admin1.newUser("Atul","At17")
    const user3=admin1.newUser("bhanu","bh23")
    const user4=admin1.newUser("rahul","rah78")
    
    user1.newContact("wasdd")

     console.log(user1);
     console.log(user1.contacts[0]);


} catch (error) {
    console.log(error.message)
}
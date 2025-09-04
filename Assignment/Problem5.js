//WAP to signup and login multiple users
const users = []
const signUp =(name,email,password,userImage)=>{
    const date = new Date().toLocaleDateString();
    newUser = {
        name,
        password,
        email,
        userImage,
        createdAt:date,
        updatedAt:date,
    }
    users.push(newUser);
    console.log("Sign Up Successfull")
    const {password:_,...data} = newUser;
    return data;
}
console.log(signUp("Bipin","bipinlimbu712@gmail.com",12345678,"bipinprofile.jpg"));
console.log(signUp("Ishan","khatrivai@gmail.com",12345678,"ishanprofile.jpg"));
console.log(signUp("Ruksan","ruksanwaa@gmail.com",12345678,"ruksanprofile.jpg"));

const login =(name,password)=>{
    users.forEach(data => {
        if(data.name == name && data.password == password){
            console.log("Login Successfull");
            console.log(`Welcome ${data.name}! Here are your details:`);
            const {password:_,...disp} = data;
            console.log(disp)
        }
    });
}
login("Bipin",12345678);
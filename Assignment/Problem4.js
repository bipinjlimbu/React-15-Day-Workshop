function signUp(name,email,password,userImage,date){
    User={
        name,
        email,
        password,
        userImage,
        createdAt:date,
        updatedAt:date
    }
    return User;
}
date = new Date().toLocaleDateString();
det = signUp("Bipin","bipinlimbu712@gmail.com",12345678,"profile.jpg",date);
console.log(det);
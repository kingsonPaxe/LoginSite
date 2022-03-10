function main(){
    const loginButton = document.getElementById("loginButton")
    const email = document.getElementById("email")
    const password = document.getElementById("password")


    loginButton.addEventListener('click', ()=>{
        
        let emailValue = email.value
        let passwordValue = password.value
        
        const apiResponse = peformLogin()


        apiResponse.then(data =>{
            const {user} = data
            gerenciadorLogin(user,{
                email: emailValue,
                password: passwordValue
            })
        })
    })
}

async function peformLogin(){

    let result

    return await fetch('../DB.json').then(response => response.json()).then(data =>{
        return data
    })

}

function gerenciadorLogin(apiResponse, userInput){
    const{password, email} = apiResponse
    const userInputPassword = userInput.password
    const userInputEmail = userInput.email

    if(userInputEmail === email && userInputPassword===password){
        window.location.href ='https://github.com/jeovani007'
    }
    else{
        alert("Usuário não existe")
    }
}
window.onload = main
function process_input() {

    let answer = document.getElementById("ans").value.toUpperCase()
    let result = document.getElementById('result')
    if(answer=='IS216'){
        result.style.color = "green"
        result.innerText="Congratulations! You've won the game!"
        alert("You're free to go!")
    }
    else{
        result.style.color = "red"
        result.innerText="Sorry, try again."
        alert("Continue coding CSS and JS in the dark room all night!")
    }
}
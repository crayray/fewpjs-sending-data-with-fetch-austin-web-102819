// import { log } from "util";

// Add your code here
window.addEventListener("DOMContentLoaded", function (){
    function submitData(name, email) {
        fetch("http://localhost:3000/users", {
            method: "POST",
            headers: {
                "Content-Type": "application/json",
                "Accept": "application/json"  
            },
            body: JSON.stringify({
                name,
                email
            
            })
        })
            
        .then(function(response) {
            return response.json()
        })
        .then(function(object){
            console.log(object)
            document.body.innerHTML = object["id"]
        })
        .catch(function (error) {
            document.body.innerHTML= error.message
        })
    }
    submitData("Rachel", "rachfuerst@gmail");
});
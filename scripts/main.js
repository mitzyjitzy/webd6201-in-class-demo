(function () {

function DisplayButton() {
let RandomButton = document.getElementById("RandomButton")
RandomButton.addEventListener("click", function() {
location.href = './projects.html'

})

let mainContent = document.getElementsByTagName("main")[0]

let mainParagraph = document.createElement("p")
mainParagraph.setAttribute("id", "MainParagraph")
mainParagraph.setAttribute("class", "mt-3")
let firstString = "This is a paragraph you are seeing thanks to JavaScript."
mainParagraph.textContent = firstString


mainContent.appendChild(mainParagraph)


console.log(mainContent)

}


function Start() { 
        console.log("App Started!")

       
        switch (document.title) {
            case "Home - WEBD6201 Demo":
                DisplayButton()
                break
            case "Projects - WEBD6201 Demo":
                DisplayButton()
                break
        }

    }   

    window.addEventListener("load", Start)
})()
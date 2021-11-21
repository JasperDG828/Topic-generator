let en = {
    "info1": "What if... you're stuck in a conversation, with family, friends (or even your crush)?",
    "info2": "Don't send things like \"So ehm, what now?\" or \"How's the weather?\" Save this website in your bookmarks and generate a topic to talk about everytime the conversation stalls.",
    "topicBefore": "Click on \"Generate topic\"",
    "foot": "Topic Generator By JasperDG and LiseVM",
    "buttonText": "Generate topic",
    "topics": [
        "What is your favorite food?",
        "What is your (least) favorite subject?"
    ]
}

//-------------------------------------------------------------------------//
let nl = {
        "info1": "Stel: je zit vas in een gesprek met familie, vrienden (of mss zelfs je crush)",
        "info2": "Stuur geen dingen zoals \"Wat nu?\" of \"Hoe is het weer daar?\" Sla deze website op in jouw bladwijzers en genereer een onderwerp iedere keer dat het gesprek stilvalt.",
        "topicBefore": "Klik op \"Genereer onderwerp\"",
        "foot": "Topic Generator Door JasperDG en LiseVM",
        "buttonText": "Genereer onderwerp",
        "topics": [
            "Wat eet je het liefst?",
            "Wat is jouw (minst) favoriete schoolvak?"
        ]
    }
    //-------------------------------------------------------------------------//

let lang = "";
let mainDiv = document.getElementById("mainDiv");
var fr = new FileReader();

document.getElementById("en").addEventListener("click", function() {
    lang = "en";
    generatePage()
});
document.getElementById("nl").addEventListener("click", function() {
    lang = "nl";
    generatePage()
});

function generatePage() {
    mainDiv.innerHTML = "";
    if (lang == "en") { content = en } else if (lang == "nl") { content = nl }
    console.log(content)

    //Info 1
    let info1Element = document.createElement("p");
    info1Element.id = "info1";
    info1Element.className = "info";
    info1Element.innerHTML = content.info1;

    //Info 2
    let info2Element = document.createElement("p");
    info2Element.id = "info2";
    info2Element.className = "info";
    info2Element.innerHTML = content.info2;

    //Topic
    let topicElement = document.createElement("p");
    topicElement.id = "topic"
    topicElement.innerHTML = content.topicBefore

    //Generate topic
    let buttonElement = document.createElement("button");
    buttonElement.id = "generate"
    buttonElement.className = "btn"
    buttonElement.innerHTML = content.buttonText
    buttonElement.addEventListener("click", generateTopic)

    //foot
    let footElement = document.createElement("p");
    footElement.id = "foot"
    footElement.className = "foot";
    footElement.innerHTML = content.foot

    //Append
    mainDiv.appendChild(info1Element);
    mainDiv.appendChild(info2Element);
    mainDiv.appendChild(topicElement)
    mainDiv.appendChild(buttonElement)
    document.getElementById("footDiv").append(footElement)
}

function generateTopic() {
    if (lang == "en") { content = en } else if (lang == "nl") { content = nl }
    document.getElementById("topic").innerHTML = content.topics[Math.floor(Math.random() * content.topics.length)]
}
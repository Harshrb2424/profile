BasicInformation = {
    "home": {
        
    },
    "personalInfo": [
        {"question": "FName", "answer": "Harsh"},
        {"question": "LName", "answer": "R Bagtharia"},
        {"question": "Age", "answer": 18},
        {"question": "PhoneNo", "answer": 7660873570},
        {"question": "City", "answer": "Hyderabad"},
        {"question": "email", "answer": "harshrb2424"},
        {"question": "Languages", "answer": ["English", "Hindi", "Telugu"]}
    ],
    "skills": [
        {"question": "HTML", "answer": 73},
        {"question": "CSS", "answer": 50},
        {"question": "JS", "answer": 80},
        {"question": "Jquery", "answer": 60},
        {"question": "Node", "answer": 80},
        {"question": "React", "answer": 25}
    ]
}

BasicInformation.personalInfo.forEach(element => {
    $(".personal").append("<p>",element.question,"</p><h5>",element.answer,"</h5>");
});
BasicInformation.skills.forEach(element => {
    $(".skill").append("<p>",element.question,"</p><h5>",element.answer,"</h5>");
});



$(".content").click(function (e) {
    $(this).toggleClass("fullscreen");
})  
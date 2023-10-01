Information = {
  home: {
    name: "Harsh RB",
    job: "Web Developer",
    others: "Artiest, Content Creator, Gamer"
  },
  personalInfo: {
    Name: "Harsh R Bagtharia",
    Age: 18,
    PhoneNo: "+917660873570",
    City: "Hyderabad",
    email: "harshrb2424@gmail.com",
    Languages: ["English", "Hindi", "Telugu"]
  },
//   personaInfo: [
//     { question: "FName", answer: "Harsh" },
//     { question: "LName", answer: "R Bagtharia" },
//     { question: "Age", answer: 18 },
//     { question: "PhoneNo", answer: 7660873570 },
//     { question: "City", answer: "Hyderabad" },
//     { question: "email", answer: "harshrb2424" },
//     { question: "Languages", answer: ["English", "Hindi", "Telugu"] },
//   ],
  skills: {
    HTML: 74,
    CSS: 50,
    JS: 80,
    Jquery: 90,
    NodeJS: 80,
    ReactJS: 30
  }
};

// console.log($("span").text());
// $("span").text(eval("BasicInformation.home."+$("span").attr("class")));
// $("span").text(console.log());

Object.entries(Information.home).forEach(([key, value]) => {
$(String(".home."+key)).text(value);
});
Object.entries(Information.personalInfo).forEach(([key, value]) => {
$(".personal").append(
    "<div><p>"+
    key+":"+
    "</p><h5>"+
    value+
    "</h5></div>"
  );
});
Object.entries(Information.skills).forEach(([key, value]) => {
$(".skill").append(
  "<div><p>"+
  key+":"+
  "</p><h5>"+
  value+
  "</h5></div>"
  );
});

// // BasicInformation.home.forEach(element => {
// //     console.log($("span").hasClass(element));

// // });
// // $("span").each(function() {
// //     console.log($(this).attr("class"));

// //     });

// BasicInformation.personalInfo.forEach((element) => {
//   $(".personal")
// });
// BasicInformation.skills.forEach((element) => {
//   $(".skill").append(
//     "<p>",
//     element.question,
//     "</p><h5>",
//     element.answer,
//     "</h5>"
//   );
// });

$(".content").click(function (e) {
  $(this).toggleClass("fullscreen");
});

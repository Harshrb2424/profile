Information = {
  home: {
    name: "Harsh RB",
    job: "Web Developer",
    others: "Artiest, Content Creator, Gamer",
    skills: ["Web Developer", "Artiest", "Content Creator", "Gaming"],
  },
  personalInfo: {
    Name: "Harsh R Bagtharia",
    Age: 18,
    PhoneNo: "+917660873570",
    City: "Hyderabad",
    email: "harshrb2424@gmail.com",
    Languages: ["English", "Hindi", "Telugu"],
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
  skills: [
    "https://upload.wikimedia.org/wikipedia/commons/thumb/4/40/Adobe_Premiere_Pro_CC_icon.svg/2101px-Adobe_Premiere_Pro_CC_icon.svg.png",
    "https://upload.wikimedia.org/wikipedia/commons/thumb/0/0c/Blender_logo_no_text.svg/512px-Blender_logo_no_text.svg.png",
"https://upload.wikimedia.org/wikipedia/commons/thumb/6/61/HTML5_logo_and_wordmark.svg/640px-HTML5_logo_and_wordmark.svg.png",
"https://upload.wikimedia.org/wikipedia/commons/thumb/d/d5/CSS3_logo_and_wordmark.svg/1200px-CSS3_logo_and_wordmark.svg.png",
"https://upload.wikimedia.org/wikipedia/commons/thumb/6/6a/JavaScript-logo.png/640px-JavaScript-logo.png",
],
  education: {
    School: {
      name: "Takshasila Public School",
      link: "https://takshasilapublicschool.com/",
      edu: "NUR to X",
      duration: "2007-2020",
      imglink: "./images/tps.jpeg",
    },
    Inter: {
      name: "Sri Chaitanya Junior College",
      link: "https://srichaitanya.net/",
      edu: "XI & XII",
      duration: "2020-2022",
      imglink:
        "https://play-lh.googleusercontent.com/1DMKiIVH2UpeAgkTFujeBMj0Ujqo9Md8TIeakjWHKqProhFnveXl6YmlIFD1dU4_v7g",
    },
    College: {
      name: "Malla Reddy College of Engineering",
      link: "https://mrce.in/",
      edu: "B.Tech. Computer Science and Engineering (AI & ML)",
      duration: "2022-Present",
      imglink: "https://mrce.in/assets/images/logo.png",
    },
    webDev: {
      name: "The Complete 2023 Web Development Bootcamp, Dr. Angela Yu",
      link: "https://www.udemy.com/course/the-complete-web-development-bootcamp/",
      edu: "Web Development",
      duration: "2022-Present",
      imglink:
        "https://play-lh.googleusercontent.com/dsCkmJE2Fa8IjyXERAcwc5YeQ8_NvbZ4_OI8LgqyjILpXUfS5YhEcnAMajKPrZI-og",
    },
  },
  Experience: [
    {
      name: "Project-UniEvent-Node (Hackathon Class Winners)",
      month: "June 2023",
      skillsDeveloped: "Web Backend development",
      link: "https://github.com/ShaikhAman01/Project-UniEvent-Node",
      src: "https://raw.githubusercontent.com/ShaikhAman01/Project-UniEvent-Node/main/public/Images/HomePage.png"
    },
    {
      name: "Janaki (unreleased Short Film)",
      month: "June 2023",
      skillsDeveloped: "Video and Photo Editing",
      src: "./images/janaki.png"
    },
    {
      name: " Youtube Shorts (Short snippets Youtube Channel)",
      month: "May 2023",
      skillsDeveloped: "Video and Photo Editing",
      link: "https://www.youtube.com/@Short.snippets",
      src: "./images/ss.png"
    },
    {
      name: "Instagram Content Creation (@Harshrd.3d)",
      month: "June-March 2022",
      skillsDeveloped:
        "Content Creation, 3D Modelling, Animation, Rendering & Compositing.",
      link: "https://www.instagram.com/harshrb.3d",
      src: "./images/ig.png"
    },
    {
      name: "Created With Blender Timelapse (Youtube)",
      month: "Feb-March 2022",
      skillsDeveloped: "3D Modelling & Animation",
      link: "https://youtube.com/playlist?list=PL5MuW9KkxcUj7q-tIZmJHpINRqfdh2foV&si=MGPg5ZvtmTED8bTb",
      src: "./images/timelapse.png"
    },
    {
      name: "FMC Weekend 2022 Competition (IIT BHU Varanasi)",
      month: "Feb 2022",
      skillsDeveloped: "3D Modelling & Animation",
      link: "https://www.instagram.com/p/CaAZJ3mlefj/",
      src: "./images/blender.png"
    },
    {
      name: "Streaming Presents (for Shrey_INDIA Youtube)",
      month: "Apr 2021",
      skillsDeveloped: "OBS Setup, Video Editing and Thumbnail Creation",
      link: "https://www.youtube.com/live/QD8hZmt0VPU?si=SEwD-lvisHLJOOdu",
      src: "./images/obs.png"
    },
    {
      name: "Minecraft Videos",
      month: "Sept-Oct 2020",
      skillsDeveloped:
        "Content Creation, OBS Setup, Video Editing and Thumbnail Creation",
      link: "https://youtube.com/playlist?list=PL5MuW9KkxcUg6ps_3uMAfF7r7rN63_Xty&si=pxyA_TnNcsGmJs8P",
      src: "./images/mc.png"
    }
  ],
};

// console.log($("span").text());
// $("span").text(eval("BasicInformation.home."+$("span").attr("class")));
// $("span").text(console.log());

Object.entries(Information.home).forEach(([key, value]) => {
  $(String(".home." + key)).text(value);
});
Object.entries(Information.personalInfo).forEach(([key, value]) => {
  $(".personal").append(
    "<div><p>" + key + ":" + "</p><h5>" + value + "</h5></div>"
  );
});
Information.skills.forEach((e) => {
  $(".skill").append(
    `<div><img src="${e}" alt=""></div>`
  );
});

$(String(".home.switch")).text(Information.home.skills);

Object.entries(Information.education).forEach(([key, value]) => {
  // console.log(key, value);
  // console.log("."+key+" h4 a");
  $("img." + key).attr("src", value.imglink);
  $("." + key + " h4 a").text(value.name);
  $("." + key + " h4 a").attr("href", value.link);
  $("." + key + " .edu").text(value.edu);
  $("." + key + " .duration").text(value.duration);
});

Object.entries(Information.Experience).forEach(([key, value]) => {
  // console.log(key, value);
  // console.log("."+key+" h4 a");
  $("." + key + " img").attr("src", value.imglink);
  $("." + key + " h4 a").text(value.name);
  $("." + key + " h4 a").attr("href", value.link);
  $("." + key + " .edu").text(value.edu);
  $("." + key + " .duration").text(value.duration);
});

function Experi(data) {
  return `<div><a href="${data.link}" target="_blank"><img src="${data.src}" alt=""></a><div class="move"><h4>${data.skillsDeveloped}</h4><h5>${data.name}</h5><h6>${data.month}</h6> <a href="${data.link}" target="_blank">View</a> </div></div>`;
}

Information.Experience.forEach((e) => {
  console.log(e);
  $(".exp").append(Experi(e));
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

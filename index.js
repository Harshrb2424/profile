$(document).ready(function () {
  $.getJSON("data.json", function (data) {
    // Set the navigation name
    $("nav .home").text(data.nav.name);

    // Clear existing links (if any)
    $("nav .nav-links").empty();

    // Populate the navigation links
    data.nav.link.forEach(function (link) {
      $("nav .nav-links").append(
        '<h4 class="' + link.toLowerCase() + '">' + link + "</h4>"
      );
    });

    // Populate the HTML with the data from the JSON
    $("#home .role .underline").text(data.home.role);
    $("#home .title").text(data.home.title);
    $("#home .sub-title").text(data.home["sub-title"]);

    const projects = data.projects.project;
    const projectContainer = $("#projects");

    projects.forEach(function (project, i) {
      const projectHtml = `
          <div class="container ${
            (i%2 == 0) ? "" : "img-left"
          }">
            <div class="info">
              <div>
                <h2>${project.title}</h2>
                <p>${project["time-period"]}</p>
                <p>${project.role}</p>
              </div>
              ${
                project.link
                  ? `<a class="button-secondary" href="${project.link}" target="_blank">View Projects</a>`
                  : ""
              }
            </div>
            <img src="${project.image}" alt="">
          </div>
        `;
      projectContainer.append(projectHtml);
    });

    $("#about h1").text(data["about-me"]["title"]);
    $("#about p").text(data["about-me"]["desc"]);
    // $("#about .sub-title").text(data.about["sub-title"]);


  });
});

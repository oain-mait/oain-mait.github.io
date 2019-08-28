// /*
//
//
//
// 	" Reimplement the wheel to either learn, or make it better. "
//
//     http://www.hayder.design/
//     https://www.youtube.com/watch?v=QOlTGA3RE8I
//
//     Product Name: YouTubeTracker,
// 	Description: Tracking YouTube"s data.
// 	Beneficiary: COSMOS
//
// 	Copyright © 1992 - 2019 HAYDER, All Rights Reserved.
//
//
//
// */
//
//
//
// document.addEventListener("DOMContentLoaded", function() {
//
//     // Header
//
//     class Header {
//
//         constructor() {
//
//             this.header = document.querySelector("header");
//             this.initialize();
//
//         }
//
//         initialize() {
//
//
//
//         }
//
//         addCSSClass(cssClass) {
//
//             this.header.classList.add(cssClass);
//
//         }
//
//         removeCSSClass(cssClass) {
//
//             this.header.classList.remove(cssClass);
//
//         }
//
//     }
//
//
//     // Initialization
//
//     let header = new Header();
//
// });


//
// function edit_title(){
//   var y = prompt("Enter New Title:");
//   document.main.getElementById("title").innerHTML = y;
// }
//
// var jsondata = JSON.stringify("../data/tracker.json");
// var json = JSON.parse(jsondata);
// alert(json);
//
//
//




//JS behaviors


$(document).ready(function() {
  //data loading
  $("#titleIn").prop("value", json.title);
  $("#created").append(json.dates.created);
  $("#modified").append(json.dates.modified);
  $("#crawled").append(json.dates.crawled);
  $("#description").append(json.description);
  $("#statText").append(json.count.statistics);
  $("#chanText").append(json.count.channels);
  $("#commText").append(json.count.comments);
  $(".video").each(function(i) {
    $(this).find("#photo").prop("src", json.videos[i].photo);
    $(this).find("a").append(json.videos[i].title);
    $(this).find("#channel").append(json.videos[i].channel);
    $(this).find("#date").append(json.videos[i].date);
  });
  //edit button code
  $("#edit").click(function() {
    $("input").prop("disabled",false).focus();
    $("input").select();
    $("input").on("focusout",function(){
      $("input").prop("disabled", true);
    })
  });
  $("input").keypress(function(event) {
    if (event.key === "Enter") {
      $("input").prop("disabled",true);
    }
  });
  //top delete button animation code
  $("#delete").click(function() {
    $("body").addClass("animated hinge");
  });
  //individual video delete buttons
  $(".delete").click(function() {
    $(this).closest(".video").remove();
  });
});

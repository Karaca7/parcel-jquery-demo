import "./import-jquery.js";
// import "jquery-ui-dist.js";

// import imageUrls from "./assets/img/*";
import icons from "./assets/img/*.png";
console.log("hiii");

$(() => {
  const file_name = "iron";
  $("#btnn").click(() => {
    $("#resim").remove();
  });

  $("#btn2").click(() => {
    $("body").append(`<img src='${icons[file_name]}' id="resim" />`);
    // $("#resim").attr("src", `${icons[file_name]}`);
  });
});

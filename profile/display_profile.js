"use strict";

$(document).ready(() => {
  // display data from session storage

  const email = getCookieByName("email");
  const phone = getCookieByName("phone");
  const postal = getCookieByName("postal");
  const dob = getCookieByName("dob");

  $("#email").text(email);
  $("#phone").text(phone);
  $("#postal").text(postal);
  $("#dob").text(dob);

  $("#back").click(() => {
    history.back();
  }); // end of click()
}); // end of ready()

const getCookieByName = (name) => {
  //Reference:Chapter14Slides.pptx (Slide 23)
  const cookies = document.cookie;
  let start = cookies.indexOf(name + "=");
  if (start === -1) {
    return "";
  } else {
    start = start + (name.length + 1);
    let end = cookies.indexOf(";", start);
    if (end === -1) {
      end = cookies.length;
    }
    const cookieValue = cookies.substring(start, end);
    return decodeURIComponent(cookieValue);
  }
};

"use strict";

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

const setCookie = (name, value, days) => {
  //Reference:Chapter14Slides.pptx (Slide 22)
  let cookie = name + "=" + encodeURIComponent(value);
  if (days) {
    cookie += "; max-age=" + days * 24 * 60 * 60;
  }
  cookie += "; path=/";
  document.cookie = cookie;
};

const deleteCookie = (name) => {
  //Reference:Chapter14Slides.pptx (Slide 26)
  document.cookie = name + "=''; max-age=0; path=/";
};

const goToPage = (url) => {
  //Reference:Chapter14Slides.pptx (Slide 12)
  location = url;
};

const replaceSvgWithImage = () => {
  const twitterLogo = document.querySelector('[aria-label="Twitter"]');
  const svgElement = twitterLogo?.querySelector("svg");

  if (!svgElement) return;

  const imgElement = document.createElement("img");
  imgElement.style.width = "30px";
  imgElement.src =
    "https://upload.wikimedia.org/wikipedia/commons/thumb/6/6f/Logo_of_Twitter.svg/512px-Logo_of_Twitter.svg.png?20220821125553";
  svgElement.replaceWith(imgElement);
};

const updatePostSpanText = () => {
  const composeTweet = document.querySelector('[href="/compose/tweet"]');
  const spanElements = composeTweet?.querySelectorAll("span");

  if (!spanElements) return;

  for (let span of spanElements) {
    if (span.textContent.trim() === "Post") {
      span.innerText = "Tweet";
      break;
    }
  }
};

const updatePostTextTest = () => {
  // const button = document.getElementsByClassName(
  //   "css-1qaijid r-bcqeeo r-qvutc0 r-poiln3"
  // );

  // console.log(button);

  const span = document.getElementsByClassName(
    "css-1qaijid r-bcqeeo r-qvutc0 r-poiln3"
  ); // Target the span with the class (modify if needed)

  if (span && span.textContent === "Lists") {
    span.innerText = "Tweet"; // Update text content to "Tweet"
  } else {
    console.log("Span not found or text doesn't contain 'Post'");
    console.log(span);
  }
};

const siteIcon = document.querySelector('link[rel="shortcut icon"]');
siteIcon.href =
  "https://abs.twimg.com/responsive-web/client-web/icon-svg.168b89da.svg";

window.onload = () => {
  setTimeout(() => {
    replaceSvgWithImage();
    updatePostSpanText();
    updatePostTextTest();
  }, 500);
};

"Use strict";
// select important elements which would be of use
const activities = document.querySelector(".activities");
const daily = document.querySelector(".daily");
const weekly = document.querySelector(".weekly");
const monthly = document.querySelector(".monthly");

// this function deletes the prototype activity and then creates activities based on daily, weekly, or monthly.
function createActivity(time) {
  // delete the activity created using html
  activities.innerHTML = "";

  //   create the extra information to display based on the time choosen
  let extraInfo;
  if (time === "daily") {
    extraInfo = "Yesterday";
  } else if (time === "weekly") {
    extraInfo = "Last week";
  } else {
    extraInfo = "Last month";
  }

  data.forEach((data) => {
    //for each of the activity :

    // Create the activities by inputing the time choosen(daily, weekly, monthly) using a string literal
    let html = `<div class="work">
          <div class="work-icon ${data.title
            .toLowerCase()
            .replace(" ", "")}-bg">
            <img src="images/icon-${data.title.toLowerCase()}.svg" alt="" />
          </div>
          <div class="work-text">
            <div class="w-d">
              <h3>${data.title}</h3>
              <h3 class="dot">...</h3>
            </div>
            <div class="hr-extra">
              <h1>${data.timeframes[time]["current"]}hrs</h1>
              <h4>${extraInfo} - ${data.timeframes[time].previous}hrs</h4>
            </div>
          </div>
        </div>
      </div>`;

    activities.insertAdjacentHTML("beforeend", html);
  });
}
console.log(document.styleSheets);

// create the default activity display upon login
createActivity("weekly");

daily.addEventListener("click", function () {
  createActivity("daily");
});

weekly.addEventListener("click", function () {
  createActivity("weekly");
});

monthly.addEventListener("click", function () {
  createActivity("monthly");
});

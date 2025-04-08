
var iso = new Isotope(".grid", {
  itemSelector: ".item",
  getSortData: {
    name: ".name",
    date: ".date parseInt",
    reverse: ".date parseInt",
  },
  sortAscending: {
    date: false,
    reverse: true,
  },
  layoutMode: "fitRows",
});


// bind sort button click
var sortByGroup = document.querySelector(".sort-by-button");
sortByGroup.addEventListener("click", function (event) {
  if (!matchesSelector(event.target, ".button")) return;
  var sortValue = event.target.getAttribute("data-sort-value");
  iso.arrange({ sortBy: sortValue });
});

// flatten object by concatting values
function concatValues(obj) {
  var value = "";
  for (var prop in obj) {
    value += obj[prop];
  }
  return value;
}

// store filter for each group
var filters = {};
var filtersElem = document.querySelector(".filters");
filtersElem.addEventListener("click", function (event) {
  var isButton = event.target.classList.contains("button");
  if (!isButton) return;

  var buttonGroup = fizzyUIUtils.getParent(event.target, ".button-group");
  var filterGroup = buttonGroup.getAttribute("data-filter-group");
  // set filter for group
  filters[filterGroup] = event.target.getAttribute("data-filter");
  // combine filters
  var filterValue = concatValues(filters);
  // set filter for Isotope
  iso.arrange({ filter: filterValue });
});

// change is-checked class on buttons
var buttonGroups = document.querySelectorAll(".button-group");
for (var i = 0; i < buttonGroups.length; i++) {
  var buttonGroup = buttonGroups[i];
  var onButtonGroupClick = getOnButtonGroupClick(buttonGroup);
  buttonGroup.addEventListener("click", onButtonGroupClick);
}

function getOnButtonGroupClick(buttonGroup) {
  return function (event) {
    // check for only button clicks
    var isButton = event.target.classList.contains("button");
    if (!isButton) return;
    buttonGroup.querySelector(".is-checked").classList.remove("is-checked");
    event.target.classList.add("is-checked");
  };
}
window.onload=()=>{const e=document.getElementById("bgmbtn"),t=document.getElementById("bg-music");e&&t&&(e.textContent=t.paused?"music is off":"music is on",e.addEventListener("click",()=>{t.paused?(t.play(),e.textContent="music is on"):(t.pause(),e.textContent="music is off")}))};
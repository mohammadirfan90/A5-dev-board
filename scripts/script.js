updateDateTime();
function completedTask(id) {
  alert("Board Updated Successfully");
  // Get task title
  const button = document.getElementById(id);
  button.disabled = true;
  const card = button.closest("div.p-6");
  const taskTitle = card.querySelector("h3").innerText;

  document.getElementById(id).classList.replace("bg-blue-500", "bg-blue-100");
  let taskCount = parseInt(
    document.getElementById("completed-task-count").innerText
  );
  taskCount += 1;
  document.getElementById("completed-task-count").innerText = taskCount;

  let taskAssigned = parseInt(
    document.getElementById("task-assigned-count").innerText
  );
  taskAssigned -= 1;
  if (taskAssigned >= 0) {
    document.getElementById("task-assigned-count").innerText = taskAssigned;
    if (taskAssigned === 0) alert("You have successfully completed all tasks");
  }

  const timeNow = currentTime();
  console.log(timeNow);
  updateLog(timeNow, taskTitle);
}

function currentTime() {
  let timeNow = new Date();
  const time = timeNow.toLocaleTimeString();
  return time;
}
function updateLog(timeNow, taskTitle) {
  let div = document.createElement("div");
  div.classList.add("m-6");
  div.innerHTML = `<p class="font-bold">You have completed "${taskTitle}" at ${timeNow}</p>`;
  document.getElementById("log-container").appendChild(div);
}

function clearLog() {
  document.getElementById("log-container").innerHTML = "";
}

function getRandomLightColor() {
  const r = Math.floor(180 + Math.random() * 75);
  const g = Math.floor(180 + Math.random() * 75);
  const b = Math.floor(180 + Math.random() * 75);
  return `rgb(${r}, ${g}, ${b})`;
}

function setRandomBackground() {
  document.body.style.backgroundColor = getRandomLightColor();
}

function updateDateTime() {
  const now = new Date();

  const days = ["Sun", "Mon", "Tue", "Wed", "Thu", "Fri", "Sat"];
  const day = days[now.getDay()];
  const date = now.getDate();
  const year = now.getFullYear();
  const month = now.toLocaleString("default", { month: "long" });
  const halfMonth = month.slice(0, 3);

  document.getElementById("dynamicDate").innerHTML = `
       <p class="text-xl">${day}</p>
       <p class="text-xl font-bold">${halfMonth} ${date}, ${year}</p>
  `;
}

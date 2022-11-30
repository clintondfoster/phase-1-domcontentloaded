document.addEventListener("DOMContentLoaded", function() {
    newDomLoad;
  });
  
  console.log(
    "This console.log() fires when index.js loads - before DOMContentLoaded is triggered"
  );// Your code goes here
  
  function newDomLoad() {
    document.getElementById("#text").textContent = "This is really cool!"
}

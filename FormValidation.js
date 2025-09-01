document.addEventListener("DOMContentLoaded", () => {
  const form = document.getElementById("regForm");
  const msg = document.getElementById("msg");

  if(form){
    form.addEventListener("submit", e => {
      e.preventDefault();
      msg.textContent = "✅ Registration submitted successfully!";
      msg.style.color = "green";
      form.reset();
    });
  }
});

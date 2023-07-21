const ageInput = document.querySelector(".age-input");
const ageDisplay = document.querySelector(".age-display");

ageInput.addEventListener("change", () => {
  const birthDate = new Date(ageInput.value);
  const currentDate = new Date();
  const newDate = new Date(currentDate - birthDate);

  const years = newDate.getFullYear() - 1970;
  const months = newDate.getMonth();
  const days = newDate.getDate() - 1;

  ageDisplay.textContent = `You are ${years} years, ${months} months, ${days} days old.`;
});

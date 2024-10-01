import data from "../db/db.json";
import Card from "./components/card";

document.getElementById("app").innerHTML = `
  <main class="flex flex-col items-center gap-y-8">
    <button type="button" class="bg-orange-500 px-16 py-8 text-3xl rounded-xl hover:bg-orange-700">Select Student</button>
    
    <section class="grid grid-cols-1 gap-4 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-4">${data.map((d) => Card(d)).join("\n")}</section>
  </main>
`;

const studentSections = document.querySelectorAll("section > section");

document.querySelector("button").addEventListener("click", () => {
  const currentChosen = document.querySelector(".chosen");
  if (currentChosen) currentChosen.classList.remove("chosen");

  const randomIndex = Math.floor(Math.random() * data.length);
  const randomStudentSection = studentSections[randomIndex];

  randomStudentSection.classList.add("chosen");
});

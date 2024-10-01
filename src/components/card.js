export default function Card(person) {
  return `<section class="flex flex-col gap-4 rounded p-4 shadow text-slate-900 bg-slate-200">
      <h2 class="text-xl font-semibold">${person.name}</h2>
      
      <ul class="ml-4 list-disc space-y-1">
        ${person.facts.map((fact) => `<li>${fact}</li>`).join("\n")}
      </ul>
    </section>`;
}

console.log("Created with vibe template: https://github.com/aipx-proto/vibe-template");

async function loadPartial(name) {
  const res = await fetch(`components/${name}.hbs`);
  const templateText = await res.text();
  Handlebars.registerPartial(name, templateText);
}

async function loadTemplate(name, data, targetSelector) {
  const res = await fetch(`components/${name}.hbs`);
  const templateText = await res.text();
  const template = Handlebars.compile(templateText);
  document.querySelector(targetSelector).innerHTML = template(data);
}

(async () => {
  await loadTemplate('app', { title: 'Vibe Template Project', description: 'Open Copilot chat to get started' }, 'body');
})();

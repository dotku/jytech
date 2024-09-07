export const updateTemplate = (template, values) =>
  template.replace(/{{(.*?)}}/g, (_match, key) => values[key.trim()]);

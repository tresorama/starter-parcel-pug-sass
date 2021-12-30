export const appendTextToPage = (text) => {
  const el = document.createElement('h2');
  el.innerHTML = text;
  document.body.append(el);
}
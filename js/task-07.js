const refs = {
  input: document.querySelector("#font-size-control"),
  span: document.querySelector("#text"),
};

refs.input.addEventListener("input", handleInputRange);
refs.span.style.fontSize = refs.input.value + "px";

function handleInputRange() {
  refs.span.style.fontSize = refs.input.value + "px";
}

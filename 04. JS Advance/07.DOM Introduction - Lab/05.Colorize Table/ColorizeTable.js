function colorize() {
  const items = document.querySelectorAll("tr");
  for (let i = 1; i < items.length; i+=2) {
    items[i].style.backgroundColor = 'teal';
  }
}

const cats = ["Milo", "Otis", "Garfield"];
function destructivelyPrependCat(name) {
    cats.unshift(name);
  }
  function destructivelyRemoveFirstCat() {
    cats.shift();
  }
  function destructivelyRemoveLastCat() {
    cats.pop();
  }
  function appendCat(name) {
    const newCats = [...cats, name];
    return newCats;
  }
  function prependCat(name) {
    const newCats = [name, ...cats];
    return newCats;
  }
  function removeLastCat() {
    const newCats = cats.slice(0, -1);
    return newCats;
  }
  function removeFirstCat() {
    const newCats = cats.slice(1);
    return newCats;
  }
  
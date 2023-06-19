function createProcessor() {
  let string = "";

  function append(str) {
    string += str;
  }

  function removeStart(n) {}

  function removeEnd(n) {}

  function print() {
    console.log(string);
  }

  return {
    append,
    removeStart,
    removeEnd,
    print,
  };
}

const myProc = createProcessor();

myProc.append("hello");
myProc.print();

// callback demo
function greet(name, done) {
  done(`Hello ${name}.`);
}

console.log("before greet");
greet("Mario", hi => {
  process.nextTick(() => {
    console.log(hi);
  });
});
console.log("after greet");

// async func demo
function delay(seconds, callback) {
  setTimeout(callback, seconds * 1000);
}

console.log("starting delays");
delay(2, () => {
  console.log("two seconds");
  delay(1, () => {
    console.log("three seconds");
    delay(1, () => {
      console.log("four seconds");
    });
  });
});

async function getName() {
  return Promise.resolve("Tom");
}
getName().then((name) => {
  console.log(name);
});

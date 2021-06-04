const ar = ["title"];
(function () {
  for (let i = 0; i < 100; i++) {
    ar.push(`title ${i}`);
  }
})();

export const dataArray = ar;

const musicCollection = [{
  title: "Моя музыка",
  author: "Артур Новиков",
  year: 2022,
}];

console.log(musicCollection);

musicCollectionIterator = musicCollection[Symbol.iterator] = function () {
  return {
    current: 0,
    to: musicCollection.length,
    next() {
      return this.current < this.to
        ? { value: musicCollection[this.current++], done: false }
        : { done: true };
    },
  };
};

musicCollection.push({
  title: "Калинка",
  author: "Иван Иванов",
  year: 2002,
});
musicCollection.push({
  title: "Малинка",
  author: "Петр Петров",
  year: 2015,
});
musicCollection.push({
  title: "Моя музыка",
  author: "Симон Симонов",
  year: 2018,
});

for (let music of musicCollection) {
  console.log(music);
}



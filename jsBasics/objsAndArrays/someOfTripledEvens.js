function sumOfTripledArrays(array) {
  // subset to evens
  const evens = array.filter((i) => i % 2 === 0);
  // transform og vals to triples
  const triples = evens.map((i) => i * 3);
  // sum triples
  return triples.reduce((acc, nextEl) => acc + nextEl, 0);

  // better way
  //   return array
  //     .filter((i) => i % 2 === 0)
  //     .map((i) => i * 3)
  //     .reduce((acc, nextEl) => acc + nextEl, 0);
}

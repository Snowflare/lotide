const assertEqual = module.require('../assertEqual');
const tail = module.require('../tail');
const assertArraysEqual = module.require('../assertArraysEqual');

const words = ["Yo Yo", "Lighthouse", "Labs"];
tail(words);
assertEqual(words.length, 3);
const result = tail(["Hello", "Lighthouse", "Labs"]);
assertArraysEqual(result, ["Lighthouse", "Labs"]);
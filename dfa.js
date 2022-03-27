var arr = [
  { id: 7, name: "2", url: "url" },
  { id: 1, name: "1", url: "url" },
  { id: 4, name: "2", url: "url" },
  { id: 2, name: "2", url: "url" },
  { id: 3, name: "3", url: "url" },
];


const index = arr.findIndex(n => n.id === 3);

if (index !== -1) {
  arr.splice(index, 1);
}

console.log(arr)



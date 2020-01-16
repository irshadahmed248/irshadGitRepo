setTimeout(() => {
  console.log("2 second timer");
}, 2000);

const names = ["andrew", "jem", "mia"];
const shortName = names.filter(name => {
  return name.length >= 4;
});

const geocode = (address, callback) => {
  setTimeout(() => {
    const data = {
      latitude: 0,
      longitude: 0
    };
    callback(data)
  }, 1000);
};

geocode("philadelphia",(dat1a)=>{
    console.log(dat1a);
    
});

const add = (x, y, callback) => {
  setTimeout(() => {
    callback(x + y);
  }, 2000);
};

add(1, 4, sum => {
  console.log(sum);
});

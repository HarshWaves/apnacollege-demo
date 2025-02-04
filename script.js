const delay = (sec) => {
  return new Promise((resolve) => {
    setTimeout(() => {
      resolve("200");
    }, sec * 1000);
  });
};

async function timer(time) { // time in seconds
    for(let i=0; i<time; i++) {
        await delay(1);
        console.log(i+1);
    }
}


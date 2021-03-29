const counters = document.querySelectorAll(".counter");

// Loop through node list
counters.forEach((counter) => {
  counter.innerText = "0";

  const updateCounter = () => {
    //   Plus sign turns the target into a number
    const target = +counter.getAttribute("data-target");
    const c = +counter.innerText;

    // Divide target by a number and increment with that number
    const increment = target / 500;

    // Make sure c is less than the target
    if (c < target) {
      counter.innerText = `${Math.ceil(c + increment)}`;
      setTimeout(updateCounter, 1);
    } else {
      counter.innerText = target;
    }
  };

  updateCounter();
});

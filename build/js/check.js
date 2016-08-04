function getMessage (a, b) {

  if (a === true) {
    return "Я попал в [b]";
  } else if (a === false) {
    return "Я никуда не попал";
  } else if (typeof a === "number") {
    return "Я прыгнул на [a] * 100 сантиметров";
  } else if (Array.isArray(a) && Array.isArray(b)) {
    return "Я прошёл [distancePath] метров";
  } else if (Array.isArray(a)) {
    return "Я прошёл [numberOfSteps] шагов"
  }

};

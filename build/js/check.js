function getMessage (a, b) {

  if (a === true) {
    return "Я попал в " + b;
  } else if (a === false) {
    return "Я никуда не попал";
  } else if (typeof a === "number") {
    return "Я прыгнул на " + a * 100 + " сантиметров";
  } else if (Array.isArray(a) && Array.isArray(b)) {
    var distancePath = 0;
    for (var i = 0; i < a.length; i++) {
      distancePath += a[i]*b[i];
    }
    return "Я прошёл " + distancePath + " метров";
  } else if (Array.isArray(a)) {
    var numberOfSteps = 0;
    for (var i = 0; i < a.length; i++) {
      numberOfSteps += a[i];
    }
    return "Я прошёл " + numberOfSteps + " шагов";
  }

};

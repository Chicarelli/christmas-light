function TimeController() {
  const timeInput = this.getDocument("time_animation");

  return {
    getDocument: (...args) => {
      return document.getElementById(...args);
    },
  };
}

function LightsController() {
  const getClassElements = (...args) => {
    return document.getElementsByClassName(...args);
  };

  return {
    adjustTime: (newTime) => {
      const lights = getClassElements("circle");

      for (light of lights) {
        light.style.animationDuration = `${newTime}s`;
        console.log(`${newTime}s`);
        console.log({ light: light.style.animationDuration });
      }
    },
  };
}

function handleUpdateTime() {
  const lightsController = new LightsController();
  //   const inputTime = TimeController.timeInput;

  lightsController.adjustTime(document.getElementById("time_animation").value);
}

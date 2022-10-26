function TimeController() {
  const getDocument = (...args) => {
    return document.getElementById(...args);
  };

  return {
    timeInput: () => {
      return getDocument("time_animation");
    },

    setInput: (time) => {
      getDocument("time_animation").value = time;
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
      }
    },
  };
}

function handleUpdateTime() {
  const lightsController = LightsController();
  const timeController = TimeController();

  const inputValue = Number(timeController.timeInput().value);

  if (inputValue < 1) {
    timeController.setInput(1);
  }

  if (inputValue > 4) {
    timeController.setInput(4);
  }

  lightsController.adjustTime(
    inputValue < 1 ? 1 : inputValue > 4 ? 4 : inputValue
  );
}

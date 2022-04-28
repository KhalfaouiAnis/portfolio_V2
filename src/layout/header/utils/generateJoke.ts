const generateJoke = async (): Promise<string> => {
  try {
    const response = await fetch("https://icanhazdadjoke.com", {
      headers: {
        Accept: "application/json",
      },
    });
    const jsonData = await response.json();
    return jsonData.joke;
  } catch (error) {
    return "Oops! an error occured while generating a joke for you";
  }
};

export default generateJoke;

export const showGreeting = () => {
  const time = new Date().getHours();

  let message = "";

  if (time > 5 && time < 12) message = "Good Morning";
  else if (time >= 12 && time < 18) message = "Good afternoon";
  else if (time >= 18) message = "Good evening";

  return message;
};

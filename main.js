let runnerNumber = Math.floor(Math.random()*1000);
const registeredEarly = true;
const runnerAge = 18;

if (runnerAge > 18 && registeredEarly) {
  runnerNumber += 1000;
}

if (runnerAge > 18 && registeredEarly) {
  console.log(`Runner:${runnerNumber}: Your race starts at 9:30.`);
}
  else if (runnerAge > 18 && !registeredEarly) {
    console.log (`Runner:${runnerNumber}: Your race starts at 11:00.`);
}
	else if (runnerAge < 18) {
    console.log (`Runner: ${runnerNumber}: Youth registrants run at 12:30 pm`);
}
	else if (runnerAge == 18) {
    console.log (`Runner: ${runnerNumber}: Please, see the registration desk`);
}
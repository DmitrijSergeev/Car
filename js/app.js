let startButton = document.querySelector('#start_car'),
    statusLabel = document.querySelector('#status'),
    gearBoxValueLabel = document.querySelector('#gear_box_value'),
    gearBoxInterval;
function carStartListener() {
    let randomNumber = Math.random();
    if (randomNumber > 0.5) {
        carStarted();
    } else {
        carCannotBeStarted();
    }
    function showStatus(status) {
        statusLabel.value = status;
    }
    function devLog(message) {
        // console.log(message);
    }
    function carStarted() {
        showStatus('The car have started');
        devLog('The car have started');
        startButton.classList.add('hide');
        gearBoxStarted();
        planedCrashStarted();
        devLog('We wait crash');
    }
    function carCannotBeStarted() {
        devLog('Something wrong');
        showStatus("Car can't be started. Try once again!");
    }
    function gearBoxStarted(){
        let gearBoxValue = '1';
        gearBoxValueLabel.innerHTML = gearBoxValue;

        function incrementGearBoxValue() {
            if (gearBoxValue < 5){
            gearBoxValue++;
            gearBoxValueLabel.innerHTML = gearBoxValue;
            }
        }
        gearBoxInterval = setInterval(incrementGearBoxValue, 1000);
    }
    function planedCrashStarted(){
        function engineCrash() {
            showStatus('Engine crashed. Car stoped.');
            devLog('engine crashed');
            startButton.classList.remove('hide');
            gearBoxValueLabel.innerHTML = "N";
            clearInterval(gearBoxInterval);
        }
        setTimeout(engineCrash, 3000);
    }
}

startButton.addEventListener('click', carStartListener);

let interval;
function setDate(value) {
    
    
    
    const deg = 6;
    const hArm = document.querySelector('#hr');
    const mArm = document.querySelector('#mn');
    const sARM = document.querySelector('#sc');

    document.querySelector('.selectorQ').addEventListener('change', () => {

        var select = document.querySelector('.selectorQ');
        var value = select.options[select.selectedIndex].value;
        clearInterval(interval);

        setDate(value);
    });
    

   


    let tz = value;
    
    
    
    interval = setInterval(() => {
    let currentHours = new Date().toLocaleString("en-GB", { timeZone: tz, hour: '2-digit' })
    let currentMin = new Date().toLocaleString("en-GB", { timeZone: tz, minute: '2-digit' })
    let currentSec = new Date().toLocaleString("en-GB", { timeZone: tz, second: '2-digit' })
    
    let AH = currentHours * 30;
    let AM = currentMin * deg;
    let AS = currentSec * deg;

    hArm.style.transform = `rotateZ(${AH + (AM / 12)}deg)`;
    mArm.style.transform = `rotateZ(${AM}deg)`;
    sARM.style.transform = `rotateZ(${AS}deg)`;

    currentMin = currentMin < 10 ? "0" + currentMin : currentMin;
    currentSec = currentSec < 10 ? "0" + currentSec : currentSec;

    document.querySelector('.digClock').innerHTML = currentHours + " : " + currentMin + " : " + currentSec;

         
});

}  

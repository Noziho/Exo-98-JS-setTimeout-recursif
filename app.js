let a = 1;

document.getElementById("interval-start").addEventListener('click', () => recursive());

function recursive () {
    let timeOutId = setTimeout( () => {
        document.getElementById("interval-div").innerHTML = a + "minute(s)";
        a+=1;
        if (a <= 10) {
            recursive();
        }
    }, 60000)

    document.getElementById("interval-stop").addEventListener('click', () => clearTimeout(timeOutId));
}


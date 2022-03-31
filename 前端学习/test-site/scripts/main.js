let myImage = document.querySelector('img');
myImage.onclick = function () {
    let mySrc = myImage.getAttribute('src');
    if (mySrc === 'images/火狐.jpg') {
        myImage.setAttribute('src', 'images/firefox2.png');
    } else {
        myImage.setAttribute('src', 'images/火狐.jpg');
    }
}

let myButton = document.querySelector('button');
let myHeading = document.querySelector('h1');

function setUserName() {
    console.log("================================================================================")
    let myName = prompt('请输入你的用户名');
    if (!myName || myName === null) {
        setUserName();
    } else {
        console.log("set name to local: ", myName)
        localStorage.setItem('name', myName);
        myHeading.textContent = 'Mozilla 酷毙了，' + myName;
    }
}

let storedName = localStorage.getItem("name")

if (!storedName || storedName == null) {
    setUserName();
} else {
    console.log("storedName: ", storedName)
    myHeading.textContent = 'Mozilla 酷毙了，' + storedName;
}

myButton.onclick = function () {
    setUserName();
}
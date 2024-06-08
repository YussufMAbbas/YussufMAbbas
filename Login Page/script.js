document.getElementById("jsonButton").addEventListener("click", () => {
    const myObj = {
        username: username.value,
        age: age.value,
        city: city.value,
    };
    let myJSON = JSON.stringify(myObj);
    let myNewObj = JSON.parse(myJSON);
    console.log(myNewObj.username);
    console.log(myNewObj.age);
    console.log(myNewObj.city);
    alert(myJSON);
});
username = document.getElementById("name");
age = document.getElementById("age");
city = document.getElementById("city");

(() => {

    function getData() {
        let targetURL = "./includes/connect.php?modelNo=R58";

        fetch(targetURL) //go get the data and bring it back
        .then(res => res.json()) //Turn the result into a plain JS object
        .then(data => {
            console.log(data)
            //Run a function to parse our data
            showCarData(data[0]);
        }) //Lets see what we got
        .catch(function(error) {
            console.log(error); //If anything broke, log it into the console
        });
    }

    function showCarData(data) {
        //parse the DB info and put it where it needs to o
        const {modelName, pricing, modelDetails} = data; //destructuring assignment => MDN JS destructuring

        //grab the elements we need, and populate then with data
        document.querySelector('.modelName').textContent = modelName;
        document.querySelector('.priceInfo').textContent = `$ ${pricing}.00`;
        document.querySelector('.modelDetails').textContent = modelDetails;
    }

    getData(); //Trigger the getData function
})();
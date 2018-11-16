(() => {
    // rework this with a Vue Instance
    const vm = new Vue({
        el : "#app",

        data : {
            modelname : "",
            modelpricing : "",
            modeldetails : "",
        },

        mounted : function() {
            console.log("we mounted lads");

            document.querySelector('#F55').click();
        },

        beforeUpdate : function() {
            console.log('Things are gonna change...');
        },

        updated : function() {
            console.log('Things are different now');
        },

        methods : {
            fetchData(e) {
                // debugger;

                let targetURL = e.currentTarget.id; // Gets the id of the element via the on click event
                console.log(e.currentTarget.id);

                fetch(`./includes/connect.php?modelNo=${targetURL}`) //go get the data and bring it back
                .then(res => res.json()) //Turn the result into a plain JS object
                .then(data => {
                    console.log(data)
                    const {modelName, pricing, modelDetails} = data[0];

                    this.modelname = modelName;
                    this.modeldetails = modelDetails;
                    this.modelpricing = pricing;
                    // showCarData(data[0]);
                }) //Lets see what we got
                .catch(function(error) {
                    console.log(error); //If anything broke, log it into the console
                });
                
            }

        },
    });


    // getData(); //Trigger the getData function
})();
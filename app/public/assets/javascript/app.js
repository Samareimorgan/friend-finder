$(document).ready(function() {
    var match = {};
    var newFan = {};

    $("#submitFan").on("click", function(e){
        e.preventDefault();
        //Validate Form
        function validateForm() {
            var isValid = true;
            $(".form-control").each(function(){
                if($(this).val() === "") {
                    isValid === false;
                }
            });
            return isValid;
        }

        
        if(validateForm()) {
            var newFanData = {

                name: $("#name").val().trim(),
                favColor:$("favColor").val().trim(),
                quote: $("favQuote").val().trim(),
                image: $("fanPicture").val().trim(),
                answers: 
                [
                $("question1").val(),
                $("question2").val(),
                $("question3").val(),
                $("question4").val(),
                $("question5").val(),
                $("question6").val(),
                $("question7").val(),
                $("question8").val(),
                $("question9").val(),
                $("question10").val(),

                ]
            }
        }
    })
    console.log(newFanData);
})
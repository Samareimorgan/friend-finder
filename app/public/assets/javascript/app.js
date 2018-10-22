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

                name: $("#name").val(),
                favColor:$("#favColor").val(),
                quote: $("#favQuote").val(),
                image: $("#fanPicture").val(),
                answers: 
                [
                $("#question1").val(),
                $("#question2").val(),
                $("#question3").val(),
                $("#question4").val(),
                $("#question5").val(),
                $("#question6").val(),
                $("#question7").val(),
                $("#question8").val(),
                $("#question9").val(),
                $("#question10").val(),

                ]
            }
        }
        console.log(newFanData);
        //Hold the current website
        var currentURL = window.location.origin;

        //Post Data to the API website
        $.post(currentURL +"/api/newFan", newFanData, function(data){
            $("#matchName").text(data.name);
            $("#matchPhoto").attr("src", data.image);
            $("#matchModal").modal("toggle");
        
        })
    })
    
})
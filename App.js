$(document).ready(function () {
    $("button").on("click", calculate);
  });
  
  function calculate()
  {
    //Gather all input
    let gender = $("input[name=gender]:checked").data("value")
    let beers = parseFloat($("#beers").val());
    let wine = parseFloat($("#wine").val());
    let shots = parseFloat($("#shots").val());
    let weight = parseFloat($("#weight").val());
    let hours = parseFloat($("#hours").val());
  
    //Math...
    let gramsOfAlcohol = (beers + wine + shots) * 14;
    //weight -> grams----The gender constant is 0.55 for females and 0.68 for males.//
    let weightGrams = (weight * 454) * gender;
    let rawNumber = gramsOfAlcohol / weightGrams ;
    let totleRaw = rawNumber * 100;
    let elapsedTime = hours * 0.015;
    let BAC = totleRaw - elapsedTime;

  
    // OUTPUT!
    
    if (BAC <= 0 ){
        BAC = 0;
    } 
    $("span#bookfee").text(BAC.toFixed(4)+"%"); 
    $(".output").show();

    if (BAC >= 0.08) {
        $("#output2").show();
    } else $("#output2").hide();
  }
  
  
  
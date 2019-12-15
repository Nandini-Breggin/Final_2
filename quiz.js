var q1Array = [
    ["Yes", "Good! Get to a point where you aren’t getting faster. You should focus on consistency."],
    ["No", "Since you aren’t going faster, ask the people who are faster than you for advice on the line around the track. This could be the track record holder, or the people that work at the track and see the lines of the fast people."],
    ["My lap times are fluctuating", "First, work on being consistent with your lap times, with a consistent line on the track. Then, you can focus on becoming faster."]
    
];

var q2Array = [
    ["Yes", "Exercise more to get into driving shape. Don’t forget to eat healthy, but it’s okay to eat comfort foods once a week."],
    ["No", "Good! Keep doing what you are doing, since you aren’t getting worn out after running a lot of laps."]
    
];

var q3Array = [
    ["Yes", "Slow down while going into the corners! It may sound crazy, but you will go faster. Remember, slow in, fast out."],
    ["No", "You can go faster. Push the kart until it the tires starts to screech. You want to be on the ragged edge of almost screeching."]
    
];

var q4Array = [
    ["0-100", "That’s a good start. You want to be familiar with the track and the different corners."],
    ["100-200", "You are doing great. You are getting a feel for the track, so you can start to push the kart to go faster. Talk to the people around you, and see if you can find the general line around the track."],
    ["200-300", "You have enough laps on the track to be very comfortable with the different karts that you use."],
    ["400+", "You should focus on hitting your apexes as close as you can without hitting the barriers (if there are any). Focus on your line and breathing so that you can go faster on the track."]
    
];

var q5Array = [
    ["I don't know", "Focus on your apexes, so that you know how far away from the barrier you are"],
    ["More than 2 feet", "You are gaining time, when you should be losing time. Pay attention to how close you are to your apex. Try to get a consistent line through that corner, so then you can slowly start to change it. "],
    ["3 inches to 2 feet", "You are doing well. It is time to refine your line and become more consistent."],
    ["Less than 2 inches", "You are doing great! Every inch closer to you get to your apex, you are losing 0.004 of a second. If you get closer to the apex, then you will be going your fastest."]
    
];

var q6Array = [
    ["Yes (No Gloves)", "You should get gloves with some grip on them. You are focusing on how to hold the steering wheel, when you should be focusing on your line around the track."],
    ["No (No Gloves)", "You should considering getting some gloves, because most likely, you will have some blisters or calluses on your hands. You don’t want blisters on your hand because it can be painful. You can have calluses on your hand, but it can be painful if it twists the wrong way. Gloves will prevent those from occurring, keeping your hands in good shape."],
    ["Yes (With Gloves)", "You should get different gloves, because they aren’t doing their job. You are focusing on holding the steering wheel, when you should be focusing on your line around the track."],
    ["No (With Gloves)", "These gloves are perfect. Don't forget to replace them when they really start to lose their grip."]
    
];

function fn1(grp)
{

    console.log(grp);

  
    var rd4 = document.getElementById("rd4");

    var qArray = null;


    if(grp == 1)
    {
        qArray = q1Array.slice(0);
        var rd11 = document.getElementById("rd11");
        var rd12 = document.getElementById("rd12");
        var rd13 = document.getElementById("rd13");

        if(rd11.checked == true)
            alert(qArray[0][1]);
        else if(rd12.checked == true)
            alert (qArray[1][1]);
        else if(rd13.checked == true)
            alert (qArray[2][1]);
        else
            alert ("Please select an answer in order to get your feedback.");

    }
    else if(grp ==2)
    {
        console.log ("group 2");
        var rd21 = document.getElementById("rd21");
        var rd22 = document.getElementById("rd22");
        qArray = null;
        qArray = q2Array.slice(0);

        if(rd21.checked == true)
            alert(qArray[0][1]);
        else if(rd22.checked == true)
            alert (qArray[1][1]);
        else
            alert ("Please select an answer in order to get your feedback.");

    }
    else if(grp ==3)
    {
        console.log ("group 3");
        var rd31 = document.getElementById("rd31");
        var rd32 = document.getElementById("rd32");
        qArray = null;
        qArray = q3Array.slice(0);

        if(rd31.checked == true)
            alert(qArray[0][1]);
        else if(rd32.checked == true)
            alert (qArray[1][1]);
        else
            alert ("Please select an answer in order to get your feedback.");

    }
    else if(grp ==4)
    {
        console.log ("group 4");
        var rd41 = document.getElementById("rd41");
        var rd42 = document.getElementById("rd42");
        var rd43 = document.getElementById("rd43");
        var rd44 = document.getElementById("rd44");
        qArray = null;
        qArray = q4Array.slice(0);

        if(rd41.checked == true)
            alert(qArray[0][1]);
        else if(rd42.checked == true)
            alert (qArray[1][1]);
        else if(rd43.checked == true)
            alert(qArray[2][1]);
        else if(rd44.checked == true)
            alert (qArray[3][1]);
        else
            alert ("Please select an answer in order to get your feedback.");

    }
    else if(grp ==5)
    {
        console.log ("group 5");
        var rd51 = document.getElementById("rd51");
        var rd52 = document.getElementById("rd52");
        var rd53 = document.getElementById("rd53");
        var rd54 = document.getElementById("rd54");
        qArray = null;
        qArray = q5Array.slice(0);

        if(rd51.checked == true)
            alert(qArray[0][1]);
        else if(rd52.checked == true)
            alert (qArray[1][1]);
        else if(rd53.checked == true)
            alert(qArray[2][1]);
        else if(rd54.checked == true)
            alert (qArray[3][1]);
        else
            alert ("Please select an answer in order to get your feedback.");

    }
    else if(grp ==6)
    {
        console.log ("group 6");
        var rd61 = document.getElementById("rd61");
        var rd62 = document.getElementById("rd62");
        var rd63 = document.getElementById("rd63");
        var rd64 = document.getElementById("rd64");
        qArray = null;
        qArray = q6Array.slice(0);

        if(rd61.checked == true)
            alert(qArray[0][1]);
        else if(rd62.checked == true)
            alert (qArray[1][1]);
        else if(rd63.checked == true)
            alert(qArray[2][1]);
        else if(rd64.checked == true)
            alert (qArray[3][1]);
        else
            alert ("Please select an answer in order to get your feedback.");

    }
    
}

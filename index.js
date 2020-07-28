var stereotypes =
        [
            "Grown out your hair?",
            "Dyed your hair?",
            "Made a TikTok account?",
            "Posted a TikTok?",
            "Spent several hours at a time on TikTok?",
            "Uninstalled TikTok?",
            "Posted a bingo on your Instagram story?",
            "Made dalgona coffee?",
            "Binge watched a TV show?",
            "Binge watched YouTube?",
            "Tried making bread?",
            "Tried a new video game?",
            "Watched a new movie?",
            "Had a Zoom call with the squad?",
            "Played Minecraft?",
            "Lost track of what day it was?",
            "Tried learning a new skill?",
            "Given up on trying to learn a new skill?",
            "Cried?",
            "Panic bought food?",
            "Panic bought toilet paper?",
            "Checked the Covid-19 counter?",
            "Lost a job/internship opportunity?",
            "Attended a Zoom class/meeting?",
            "Played Animal Crossing?",
            "Took a selfie with your mask on?",
            "Got excited about leaving the house for groceries?",
            "Read a book?",
            "Used Discord?",
            "Watched food/cooking videos on YouTube?",
            "Thought the world was ending this year?",
            "Got day-drunk?",
            "Got day-high?",
            "Social distanced?",
            "Wondered when this was going to end?",
            "Saw a person outside without a mask?",
            "Ordered takeout?",
            "Disinfected your house?",
            "Got tested for COVID-19?",
            "Watched a favorite business close down?",
            "Made a new playlist?"
        ]

function getCheckboxes() {
    var result = "", temp = "", i = 0;
    for(i = 0; i < stereotypes.length; i++) {
        temp =
            "<li>\n"
            + "<label class=\"question\" for=\"question" + (i+1) + "\">"
            + " " + stereotypes[i] + "\n"
            + "<input type=\"checkbox\" class=\"form-checkbox\" id=\"question" + (i+1) + "\" name=\"question\"" + (i+1) + "\" value=\"question" + (i+1) + "\">\n"
            + "<span class=\"checkmark\"></span></label>\n"
            + "</li>\n\n";
        result = result.concat(temp);
    }
    // console.log(result);
    return result;
}

function countCheckboxes() {
    var total = 0, i = 0;
    for(i = 0; i < stereotypes.length; i++) {
        if(document.getElementById("question" + (i+1)).checked) {
            total++;
        }
    }
    // console.log(result);
    sessionStorage.setItem("total", total);
}

function writeTotal() {
    // console.log(sessionStorage.getItem("total"));
    if (typeof(Storage) !== "undefined") {
        document.getElementById("total").innerHTML = sessionStorage.getItem("total");
    }
    else {
        document.getElementById("total").innerHTML = "Sorry, your browser does not support Web Storage...";
    }
}
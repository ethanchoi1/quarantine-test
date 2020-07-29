var stereotypes =
        [
        // General
        "Practiced social distancing?",
        "Lost track of what day it was?",
        "Lost count of how many days you’ve been in quarantine?",
        "Grown out your hair/facial hair?",
        "Cut your own bangs/tried a new hairstyle?",
        "Gave/got a haircut at home?",
        "Regretted a haircut at home?",
        "Dyed your hair a new color?",
        "Celebrated a birthday during quarantine?",
        "Forgot about major world events that happened a few months ago?",
        "Used a lot of hand sanitizer?",
        "Actually washed your hands for the full 20 seconds?",
        "Bought/adopted/already had a pet to keep you company?",

        // Giving Up because same
        "Cried?",
        "Ugly cried?",
        "Messed up your sleep schedule and became nocturnal?",
        "Went several days without changing clothes?",
        "Went several days without showering?",
        "Spent an entire day doing basically nothing/sleeping?",
        "Wondered when this pandemic is going to end?",
        "Got tired of the people you’re quarantined with?",
        "Gained weight (the Quarantine 15)?",
        "Made unnecessary online purchases?",
        "Laughed at ridiculous coronavirus conspiracy theories?",
        "Gave up on trying to guess when the pandemic will end?",

        // Social Media
        "Took a selfie with a face mask on?",
        "Took part in an Instagram story challenge?",
        "Went on a social media cleanse?",
        "Made a TikTok account?",
        "Spent several hours at a time on TikTok?",
        "Filmed a TikTok?",
        "Posted a TikTok?",
        "Uninstalled TikTok?",
        "Ended up just watching TikToks on Instagram anyways?",
        "Tried making dalgona coffee?",

        // Hobbies/Projects
        "Tried making bread?",
        "Worked on improving your cooking skills?",
        "Started a new personal project?",
        "Abandoned a personal project?",
        "Tried learning a new language?",
        "Tried learning a new instrument?",
        "Gave up on trying to learn a new skill?",

        // Watching/Reading
        "Binge watched a TV show?",
        "Binge watched YouTube videos?",
        "Watched food/cooking videos on YouTube?",
        "Watched a new movie?",
        "Watched/rewatched an entire movie series?",
        "Watched the quarantine version of a late-night talk show?",
        "Made a quarantine song playlist?",

        // Workout
        "Went for social distancing walks/hikes?",
        "Went for social distancing bike rides?",
        "Decided to get fit during quarantine?",
        "Purchased workout equipment?",
        "Started a quarantine workout regiment?",
        "Procrastinated on a quarantine workout regiment?",
        "Quit a quarantine workout regiment?",

        // Social
        "Had a Zoom call with friends?",
        "Had a TV/movie watch party online?",
        "Told friends that you missed them?",
        "Reminisced about when you were allowed to spend time with your friends?",
        "Made plans with friends for \"when this is all over?\"",

        // Gaming
        "Played games with friends?",
        "Bought a new gaming console/device?",
        "Tried a new video game?",
        "Played Animal Crossing?",
        "Played Minecraft?",
        "Got lost in a game’s world because it’s better than the real one?",

        // ?
        "Got day-drunk?",
        "Felt quarantine-horny (quarant-horny)?",

        // Zoom
        "Attended a Zoom class/meeting?",
        "Awkwardly waited in a Zoom meeting that you joined too early?",
        "Experienced technical issues with Zoom?",
        "Asked/been asked if the Zoom screen share is working?",
        "Been muted/unmuted in Zoom unintentionally?",
        "Had your camera on/off in Zoom unintentionally?",
        "Spent hours trying to find the perfect Zoom background?",
        "Accidentally messaged the whole Zoom meeting instead of just one person?",
        "Skipped a Zoom session by disabling your mic/camera?",
        "Watched a meeting’s recording later instead of attending live?",
        "Woken up minutes before a scheduled Zoom call?",
        "Remembered nothing from an entire Zoom session?",

        // Food/Shopping
        "Stockpiled food/toilet paper/hand sanitizer?",
        "Got excited about leaving the house for errands?",
        "Ordered takeout/delivery?",
        "Missed actually going out to restaurants?",

        // Life Disruptions
        "Lost a job/internship opportunity?",
        "Watched a favorite business close down?",
        "Had tickets to a concert/game/event that got cancelled?",
        "Had a work/vacation trip cancelled?",
        "Cancelled a lease/tried to sublease?",

        // Coronavirus/COVID/Pandemic
        "Got tested for COVID-19?",
        "Checked the number of Covid-19 cases?",
        "Disinfected your house?",
        "Got worried by someone coughing near you?",
        "Silently judged people for not practicing social distancing?",
        "Saw a person outside without a mask?",
        "Watched a video of a Karen having a public freakout?",
        "Witnessed a Karen’s freakout in person?",
        "Prematurely celebrated the flattening of the curve?",
        "Thought the world was ending this year?"
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
    return result;
}

function countCheckboxes() {
    var total = 0, i = 0;
    for(i = 0; i < stereotypes.length; i++) {
        if(document.getElementById("question" + (i+1)).checked) {
            total++;
        }
    }
    sessionStorage.setItem("total", total);
}

function writeTotal() {
    if (typeof(Storage) !== "undefined") {
        document.getElementById("total").innerHTML = sessionStorage.getItem("total");
        if(sessionStorage.getItem("total") == 69) {
            document.getElementById("nice").innerHTML = "Nice.";
        }
    }
    else {
        document.getElementById("total").innerHTML = "Sorry, your browser does not support Web Storage...";
    }
}
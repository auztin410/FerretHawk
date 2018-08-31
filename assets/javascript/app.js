// Dependencies - 
// refer to ./form_readme.md

 async function setPost(){

    var eventOrganizer = $("#organizer-name-input").val().trim();
    var eventName = $("#event-name-input").val().trim();
    var eventStart = moment($("#event-start-input").val()).utc().format().toString(); // use momentjs to convert to UTC time, or use dropdown calendar
    var eventEnd = moment($("#event-end-input").val()).utc().format().toString(); // use momentjs to convert to UTC time, or use dropdown calendar
    // var eventStartConverted = moment(eventStart).utc().format().toString();
    // var eventEndConverted = moment(eventEnd).utc().format().toString();
    var eventDescription = $("#event-description-input").val().trim().toString();

    var eventInfo = {
        name: eventName,
        start: eventStart,
        end: eventEnd,
        description: eventDescription
    }

    console.log(eventInfo.name);
    console.log(eventInfo.start);
    console.log(eventInfo.end);
    console.log(eventInfo.description);

    const apiSettings = {
        url: 'https://www.eventbriteapi.com/v3/events/?token=TY2AIWUWYJR6JP22POY4',
        data: {
            'event.name.html': eventName, 
            'event.start.utc': eventStart, 
            'event.start.timezone': "America/New_York", 
            'event.end.utc': eventEnd, 
            'event.end.timezone': "America/New_York", 
            'event.currency': "USD",
            'event.capacity': "100",
            'event.description.html': eventDescription
        },
        crossDomain: true,
        method: 'POST'
     }

     const postInfo = await $.ajax(apiSettings);
    
     // Sets event ticket information
     const postSettings = {
        url: 'https://www.eventbriteapi.com/v3/events/' + postInfo.id + '/ticket_classes/?token=TY2AIWUWYJR6JP22POY4',
        data: {
            'ticket_class.name': "General Admission",
            'ticket_class.quantity_total': 100,
            'ticket_class.cost': "USD,0000",
            'ticket_class.donation': false,
            'ticket_class.free': true
        },
        crossDomain: true,
        method: 'POST'
     }

     // Publishes to EventBrite
     const publishPost = await $.ajax(postSettings);

     const publishSettings = {
        url: 'https://www.eventbriteapi.com/v3/events/' + postInfo.id + '/publish/?token=TY2AIWUWYJR6JP22POY4',
        data: {

        },
        crossDomain: true,
        method: 'POST'
     }

    // Post to Slack 
    const postSlack = await $.ajax(publishSettings);

    // Webhook URL that posts to the specific channel
    var url = "https://hooks.slack.com/services/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";

    // Text to be included when posting to slack + the event's URL 
    var text = "Message from: " + eventOrganizer + " - Register for my event! " + postInfo.url;

    // Slack API AJAX call 
    $.ajax({
        data: 'payload=' + JSON.stringify({ "text": text }),
        dataType: 'json',
        processData: false,
        type: 'POST',
        url: url
    });
     
 }

// Calls function above
//  setPost();

// Button on click function to create/publish post
$(document).on('click', "#postEventbrite", function() { 
    setPost();
    $("#organizer-name-input").val("");
    $("#event-name-input").val("");
    $("#event-start-input").val("");
    $("#event-end-input").val("");
    $("#event-description-input").val("");
    
});

 




 
    
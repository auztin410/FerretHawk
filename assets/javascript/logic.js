var config = {
    apiKey: "AIzaSyDLPqXuLM2gzFddeL2spoxaJbxE942oKtw",
    authDomain: "ferrethawk-1530532951082.firebaseapp.com",
    databaseURL: "https://ferrethawk-1530532951082.firebaseio.com",
    projectId: "ferrethawk-1530532951082",
    storageBucket: "",
    messagingSenderId: "1034951454059"
};
firebase.initializeApp(config);

var database = firebase.database();


//   Code to submit homework form to firebase.

$(document).on("click", "#submitHomework", function () {
    event.preventDefault();
    console.log("button working");
    database.ref().on("value", function (snapshot) {

    });


    var homeworkName = $("#homeworkOption").val().trim();
    var url1 = $("#linkOne").val().trim();
    var url2 = $("#linkTwo").val().trim();
    var onTime

    // Homework late or on time assignment.
    if (homeworkName === "Homework 1") {
        var dueDate = "07/02/2018"
        var currentDate = moment().format("MM/DD/YYYY")

        if (dueDate >= currentDate) {
            onTime = "On Time";
            jQuery.noConflict();
            $('#onTimeModal').modal("show");
        }
        else {
            onTime = "Late";
            jQuery.noConflict();
            $('#lateModal').modal("show")
        }
    }
    else if (homeworkName === "Homework 2") {
        var dueDate = "07/10/2018"
        var currentDate = moment().format("MM/DD/YYYY")

        if (dueDate >= currentDate) {
            onTime = "On Time";
            jQuery.noConflict();
            $('#onTimeModal').modal("show");
        }
        else {
            onTime = "Late";
            jQuery.noConflict();
            $('#lateModal').modal("show")
        }
    }
    else if (homeworkName === "Homework 3") {
        var dueDate = "07/06/2018"
        var currentDate = moment().format("MM/DD/YYYY")

        if (dueDate >= currentDate) {
            onTime = "On Time";
            jQuery.noConflict();
            $('#onTimeModal').modal("show");
        }
        else {
            onTime = "Late";
            jQuery.noConflict();
            $('#lateModal').modal("show")
        }
    }
    else if (homeworkName === "Homework 4") {
        var dueDate = "07/20/2018"
        var currentDate = moment().format("MM/DD/YYYY")

        if (dueDate >= currentDate) {
            onTime = "On Time";
            jQuery.noConflict();
            $('#onTimeModal').modal("show");
        }
        else {
            onTime = "Late";
            jQuery.noConflict();
            $('#lateModal').modal("show")
        }
    }
    else if (homeworkName === "Homework 5") {
        var dueDate = "07/15/2018"
        var currentDate = moment().format("MM/DD/YYYY")

        if (dueDate >= currentDate) {
            onTime = "On Time";
            jQuery.noConflict();
            $('#onTimeModal').modal("show");
        }
        else {
            onTime = "Late";
            jQuery.noConflict();
            $('#lateModal').modal("show")
        }
    }
    else if (homeworkName === "Homework 6") {
        var dueDate = "06/14/2018"
        var currentDate = moment().format("MM/DD/YYYY")

        if (dueDate >= currentDate) {
            onTime = "On Time";
            jQuery.noConflict();
            $('#onTimeModal').modal("show");
        }
        else {
            onTime = "Late";
            jQuery.noConflict();
            $('#lateModal').modal("show")
        }
    }
    $("#linkOne").val("");
    $("#linkTwo").val("");
    console.log(onTime);

    var newHomework = {
        homeworkNumber: homeworkName,
        linkOne: url1,
        linkTwo: url2,
        timeSubmitted: onTime
    };

    database.ref().push(newHomework);

    $("#assignment")[0].reset();

});


// Code for button div swaps
$("#profile").on("click", function () {
    $(".main").html("<h2></h2>")
})

$("#home").on("click", function() {
    $(".main").html('<div id="notifications-container" class="main container-fluid"> <div class="row"><div class="col-md-12"><div class="text center col-md-12"><img class="center-block img-fluid"  src="assets/images/comment_notification2.png" alt=""></div></div><div class="col-md-12"><div class="text center col-md-12"><img class="center-block img-fluid"  src="assets/images/homework_notification.png" alt=""></div></div><div class="col-md-12"><div class="text center col-md-12"><img class="center-block img-fluid"  src="assets/images/comment_notification.png" alt=""></div></div></div></div>')
});

$("#homework").on("click", function () {
    $(".main").html('<div id ="homework-container" class="container"><div class="row"><div class="col-md-12"><img src="assets/images/cal_ico_big.png" alt=""><h1>Advanced Javascript Assignment: Constructor Word Guess</h1></div></div><div class="row"><div class="col-md-12"><p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Veniam ex odit deserunt autem illum porro quos dolores? Cupiditate iusto ab architecto harum repellendus illo nobis, voluptatum officia amet sint omnis? Lorem ipsum dolor sit amet consectetur adipisicing elit. Veniam ex odit deserunt autem illum porro quos dolores? Cupiditate iusto ab architecto harum repellendus illo nobis, voluptatum officia amet sint omnis? Lorem ipsum dolor sit amet consectetur adipisicing elit. Veniam ex odit deserunt autem illum porro quos dolores? Cupiditate iusto ab architecto harum repellendus illo nobis, voluptatum officia amet sint omnis?</p></div></div><div class="row"><div class="col-md-12"><form><div class="form-group"><select class="form-control" id="homeworkOption"><option >Homework 1</option><option >Homework 2</option><option >Homework 3</option><option >Homework 4</option><option >Homework 5</option><option >Homework 6</option></select></div><div class="form-group row"><input type="text" class="form-control" id="linkOne" placeholder="github repo link"></div><div class="form-group row"><input type="text" class="form-control" id="linkTwo" placeholder="github pages link"></div><button type="submit" class="btn btn-primary" id="submitHomework" style="float: right; margin-right: 45px;">Submit</button></form></div><p><a class="btn btn-primary" data-toggle="collapse" href="#collapseExample" role="button" aria-expanded="false" aria-controls="collapseExample">Homework Submissions</a></p><div class="collapse" id="collapseExample"><div class="card card-body" id="homeworkSubmissions"></div></div><div id="calendar-items" class="text-center row"><div class="col-md-12"><img class="img-fluid" src="assets/images/calendar_item.png" alt=""></div><div class="col-md-12"><img class="img-fluid" src="assets/images/calendar_item2.png" alt=""></div><div class="col-md-12"><img class="img-fluid" src="assets/images/calendar_item3.png" alt=""></div></div></div></div></div>');

    database.ref().on("child_added", function (childSnapshot) {

        var homeworkName = childSnapshot.val().homeworkNumber;
        var url1 = childSnapshot.val().linkOne;
        var url2 = childSnapshot.val().linkTwo;
        var onTime = childSnapshot.val().timeSubmitted

        $("#homeworkSubmissions").prepend("Assignment: " + homeworkName + "<br> Submitted: " + onTime + "<br><br> <a href='" + url1 + "'>GitHub Link</a> <br> <a href='" + url2 + "'>Web Page Link</a> <br>");
    })
})

$("#docs").on("click", function () {
    $(".main").html('<div class="main container-fluid"><div id="doc-container" class="container"><div class="row"><div class="col-md-12"><h2 class="heartbeat" style="margin-left: 15px">Remember: Documentation is LIFE</h2></div></div><div class="row"><div class="doc-links col-md-4"><a href="https://github.com/"><img src="assets/images/github_link.png" alt="" class="img-fluid"></a></div><div class="doc-links col-md-4"><a href="https://stackoverflow.com/"><img src="assets/images/stackoverflow_link.png" alt="" class="img-fluid"></a></div><div class="doc-links col-md-4"><a href="https://css-tricks.com/"><img src="assets/images/csstricks_link.png" alt="" class="img-fluid"></a></div></div><div class="row"><div class="doc-links col-md-4"><a href="https://fonts.google.com/"><img src="assets/images/gfonts_link.png" alt="" class="img-fluid"></a></div><div class="doc-links col-md-4"><a href="https://getbootstrap.com/"><img src="assets/images/bootstrap_link.png" alt="" class="img-fluid"></a></div><div class="doc-links col-md-4"><a href="https://code.jquery.com/"><img src="assets/images/jquery_link.png" alt="" class="img-fluid"></a></div></div></div></div>')
})

$("#grades").on("click", function () {
    $(".main").html("<h2>Grades</h2><br><h3>Your Current Grade Average:</h3><h4>You Dumb as shit...</h4>")
})

$("#event").on("click", function () {
    $(".main").html('<div id ="event-container" class="container"><div class="row"><div class="col-md-12"><h1><img src="assets/images/calendar-solid.svg" alt=""> Create an Event!</h1></div><div class="col-md-12"><h4>Need help with your homework? Want to get together? Create an event here using Event Brite! It\'ll automatically post an invite link in Slack when you\'re done.</h4></div></div><div class="row"><div class="col-md-12"><form><div class="form-group row"><label for="organizer-name-input">Let people know who you are!</label><input type="text" class="form-control" id="organizer-name-input" placeholder="First and Last name"></div><div class="form-group row"><label for="event-name-input">Post a name for this Event!</label><input type="text" class="form-control" id="event-name-input" placeholder=""></div><div class="form-group row"><label for="event-start-input">Post a start time for this Event, in format MM/DD/YYYY HH:MM AM/PM</label><input type="text" class="form-control" id="event-start-input" placeholder="e.g. 06/28/2018 07:30 AM"></div><div class="form-group row"><label for="event-end-input">Post an end time for this Event, in format MM/DD/YYYY HH:MM AM/PM</label><input type="text" class="form-control" id="event-end-input" placeholder="e.g. 06/28/2018 09:30 AM"></div><div class="form-group row"><label for="event-description-input">Post a description for your event, include a location!</label><input type="text" class="form-control" id="event-description-input" placeholder=""></div></form><button type="submit" class="btn btn-primary" id="postEventbrite" style="float: right;margin-right: 42px;" data-toggle="modal" data-target="#successModal">Create your Event!</button></div></div></div>')
})








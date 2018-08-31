# Form Parameters

# Required Parameters 

Event Name - #event-name-input

Event Start - #event-start-input 
// Needs to be in UTC time, will convert with momentjs or use a dropdown clock. I'll take care of it when I decide. 

Event Start Timezone - #event-start-timezone-input 
// Needs to be in specific 'Olson' format, will probably need a dropdown menu for this item 

Event End - #event-end-input 
// Same as event-start

Event End Timezone - #event-end-timezone-input
// Same as event-end

Event Location - #event-location-input
// Create a form for this, but eventually I will most likely be replacing it with form-field integrated with the Google Maps API

Ticket Name - #ticket-name-input

Ticket Quantity - #ticket-quantity-input

Ticket Cost - #ticket-cost-input 
// Needs to be in specific format unfortunately, i.e. (USD,0000) for some reason, so we'll need to figure out how to convert the user input into that format

Ticket Free - #ticket-free-input
// This will ultimately need to be a radio button, or some other type of button that asks the user whether the event is free or not. If free, then it'll set a boolean within the js to true, if they choose not free, then it'll remain false. 


# Optional Parameters

Event Currency - #event-currency
// This may not be necessary, I may automatically set this to USD automatically 

Event Capacity - #event-capacity-input
// Handles amount of people allowed in the event, I might hardcode this in as well since it doesn't really matter but it's a necessary parameter



// This is all I have for now, ultimately I may add in more but we'll cross that bridge when we get to it. 

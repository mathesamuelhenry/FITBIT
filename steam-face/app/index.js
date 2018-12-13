import document from "document";
import clock from "clock";
import { preferences } from "user-settings";
console.log(preferences.clockDisplay);

let time = document.getElementById("time");
clock.granularity = "minutes";
clock.ontick = (evt) => {
   let hours = evt.date.getHours();

   if (preferences.clockDisplay === "12h" && hours > 12)
   {
       hours = hours - 12;
   }

   time.text = `${hours}:${evt.date.getMinutes()}`;
}
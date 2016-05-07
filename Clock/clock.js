class Clock {

  constructor() {
    this.days = ["Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday", "Sunday"];
    this.months = ["January", "February", "March", "April", "May", "June", "July", "August", "September", "October", "November", "December"];

    this.updateClock = this.updateClock.bind(this);

    this.updateClock();
    setInterval(this.updateClock, 1000);
  }

  updateClock() {

    let now = new Date();
    let day = this.days[now.getDay() - 1];
    let ordinal = this.getOrdinal(now.getDate());
    let month = this.months[now.getDate()];

    let hour = now.getHours() > 12 ? now.getHours() - 12 : now.getHours();
    let minute = now.getMinutes() < 10 ? "0" + now.getMinutes() : now.getMinutes();
    let type = now.getHours() > 12 ? "PM" : "AM";

    document.querySelector("#js-time").innerHTML = `${hour}:${minute}`;
    document.querySelector("#js-type").innerHTML = `${type}`;
    document.querySelector("title").innerHTML = `${hour}:${minute} ${type}`;
    document.querySelector("#js-date").innerHTML =`${day} ${ordinal} ${month}`;

    if(now.getHours() >= 19) {
      document.querySelector(".sun").className = "sun moon";
      document.querySelector(".hills").style.opacity = "0.5";
      document.body.style.background = "#010D63";
      document.querySelector("#shortcut").href = "images/moon.png";
    }

    else {
      document.querySelector(".sun").className = "sun";
      document.querySelector(".hills").style.opacity = "1.0";
      document.body.style.background = "#00b0d7";
      document.querySelector("#shortcut").href = "images/sun.png";
    }


  }

  getOrdinal(n) {
    var s=["th","st","nd","rd"], v=n%100;
    return n+(s[(v-20)%10]||s[v]||s[0]);
  }

}

window.addEventListener('load', () => window.clock = new Clock());
type Meridiem = "AM" | "PM";

class MyTime {
  hours: string;
  minutes: string;
  seconds: string;
  meridiem: string;

  constructor(
    hours: string,
    minutes: string,
    seconds: string,
    meridiem: Meridiem
  ) {
    this.hours = hours;
    this.minutes = minutes;
    this.seconds = seconds;
    this.meridiem = meridiem;
  }

  public convertToMilitary() {
    if (this.meridiem === "PM" && this.hours !== "12") {
      this.hours = (+this.hours + 12).toString();
    } else if (this.meridiem === "AM" && this.hours === "12") {
      this.hours = "0" + (+this.hours - 12).toString();
    }
  }

  public toString() {
    return `${this.hours}:${this.minutes}:${this.seconds}`;
  }
}

function timeConversion(s: string): string {
  // Write your code here
  const splitData = s.split(":");

  const time = new MyTime(
    splitData[0],
    splitData[1],
    splitData[2].substring(0, 2),
    splitData[2].substring(2, 4) as Meridiem
  );

  time.convertToMilitary();
  return time.toString();
}

export default timeConversion;

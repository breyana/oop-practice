class Clock {
  constructor({ template }) {
    this._template = template;
  }

  _render() {
    let date = new Date();

    let hours = date.getHours();
    if (hours < 10) hours = '0' + hours;

    let mins = date.getMinutes();
    if (mins < 10) min = '0' + mins;

    let secs = date.getSeconds();
    if (secs < 10) secs = '0' + secs;

    let output = this._template
      .replace('h', hours)
      .replace('m', mins)
      .replace('s', secs);

    console.log(output);
  }

  stop() {
    clearInterval(this._timer);
  }

  start() {
    this._render();
    this._timer = setInterval(() => this._render(), 1000);
  }
}

class ExtendedClock extends Clock {
  constructor(options) {
    super(options);
    let { precision=1000 } = options;
    this._precision = precision;
  }

  start() {
    this._render();
    this._timer = setInterval(() => this._render(), this._precision);
  }
};

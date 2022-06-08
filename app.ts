class Progress {
  private bar = document.querySelectorAll(
    "#prog-bar > .progress-bar"
  )[0]! as HTMLBodyElement;

  constructor(width: number, color: string) {
    this.update(width, color);
  }

  private update(newWidth: number, color: string) {
    this.bar.style.width = newWidth + "%";
    this.bar.style.backgroundColor = color;
  }
}
var p = new Progress(40, "red");

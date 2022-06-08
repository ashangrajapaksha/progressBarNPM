var Progress = /** @class */ (function () {
    function Progress(width, color) {
        this.bar = document.querySelectorAll("#prog-bar > .progress-bar")[0];
        this.update(width, color);
    }
    Progress.prototype.update = function (newWidth, color) {
        this.bar.style.width = newWidth + "%";
        this.bar.style.backgroundColor = color;
    };
    return Progress;
}());
var p = new Progress(40, "red");

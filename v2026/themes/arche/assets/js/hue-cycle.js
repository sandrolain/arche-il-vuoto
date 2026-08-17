document.addEventListener("DOMContentLoaded", function() {
  var update = function() {
    var deg = (((new Date()).getTime() % (60 * 1000) / (60 * 1000)) * 360) - 90;
    document.body.style.setProperty("--main-color-hue", deg.toFixed(1) + "deg", "important");
    requestAnimationFrame(update);
  };
  requestAnimationFrame(update);
});

export function calc_value(height, width, hfov) {
  if (height == "0" || height == "") {
    alert("'Height value' field is not filled.");
    return;
  }

  if (width == "0" || width == "") {
    alert("'Width value' field is not filled.");
    return;
  }

  if (hfov == "0" || hfov == "") {
    alert("'FOV angle' field is not filled.");
    return;
  }

  // convert to radians
  var hfovRad = de_ra(hfov);

  // calculate vfov
  var vfovRad = 2 * Math.atan(Math.tan(hfovRad / 2) * (height / width));

  // convert back to degrees
  var vfov = ra_de(vfovRad);

  // round up
  vfov = Math.ceil(vfov);

  var fovTop = (vfov * 0.0175).toFixed(2);

  var fovLeft = ((fovTop / height) * width).toFixed(2);

  console.log(fovTop);
  console.log(fovLeft);
}

function ra_de(value) {
  var pi = Math.PI;
  var ra_de = eval(value) * (180 / pi);
  return ra_de;
}

function de_ra(value) {
  var pi = Math.PI;
  var de_ra = eval(value) * (pi / 180);
  return de_ra;
}

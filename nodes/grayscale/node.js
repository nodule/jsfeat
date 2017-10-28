on.input.dest  = function() {
  jsfeat.imgproc.grayscale($.src.data, $.width, $.height, $.dest, $.code)
  
  output( {
    out: $.write('dest', $.dest),
    imageData: $.write('src', $.src)
  });
};

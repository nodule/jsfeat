on.input.dest = function() {
  jsfeat.imgproc.resample($.src, $.dest, $.width, $.height)
  
  output( { out: $.write('dest', $.dest) } );
};

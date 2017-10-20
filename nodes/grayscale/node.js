on.input.dest  = function() {
  jsfeat.imgproc.grayscale($.src, $.width, $.height, $.dest, $.code)
  
  output( { out: $.write('dest', $.dest) } );
};


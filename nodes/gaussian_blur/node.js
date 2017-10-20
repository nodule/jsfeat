on.input.dest = function() {
  jsfeat.imgproc.gaussian_blur($.src, $.dest, $.kernel_size, $.sigma)
  
  output( { out: $.write('dest', $.dest) } );
};

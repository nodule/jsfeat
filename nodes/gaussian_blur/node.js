on.input.dest = function() {
  jsfeat.gaussian_blur($.src, $.dest, $.kernel_size, $.sigma)
  
  output( { out: $.write('dest', $.dest) } );
};

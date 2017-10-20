on.input.dest = function() {
  jsfeat.imgproc.pyrdown($.src, $.dest, $.sx, $.sy)
  
  output( { out: $.write('dest', $.dest) } );
};

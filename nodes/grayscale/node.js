on.input.dest  = function() {
  jsfeat.grayscale($.src, $.width, $.height, $.dest, $.code)
  
  output( { out: $.write('dest', $.dest) } );
};


on.input.descriptors  = function() {
  jsfeat.orb.describe($.src, $.corners, $.count, $.descriptors)
  
  output( { out: $.write('descriptors', $.descriptors) } );
};

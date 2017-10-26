output = function() {
  var type;
  
  switch($.type) {
    case "U8_t | C1_t":
     type = jsfeat.U8_t | jsfeat.C1_t;
      break;
    case "F32C1_":
      type = jsfeat.F32C1_t;
      break;
    case "U8C1_t":
      type =  jsfeat.U8C1_t;
      break;
    default:
      throw Error('Unknown type: ' + $.type)
      break;
  }
  
  var out = new jsfeat.matrix_t($.cols, $.rows, type)
  
  output( { out: $.create(out) } );
  
  done();
};

(function() {

    var numberOfRows = 40; // number of rows in the grid
    var numberOfCols = 40; // number of cols in the grid
    var canvas = $('#canvas'); // my placement area - think of paper in drawing


    makeGrid();
    $('.cell').on('click', changeColor);

    function makeGrid(){
      //let's make some rows and put them in the body
      for(var rowCount = 0; rowCount < numberOfRows; rowCount += 1){
        var row = $('<tr></tr>');
        for(var colCount = 0; colCount < numberOfCols; colCount +=1){
            var column = $('<td></td>');
            column.addClass('cell');
            row.append(column);
        }
        canvas.append(row);
      }
    }

      function changeColor(event){
        // just this cell's background
        $(this).toggleClass('red');
      }



}());

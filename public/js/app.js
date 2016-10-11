(function() {

    // var numberOfRows = 15; // number of rows in the grid
    // var numberOfCols = 15; // number of cols in the grid
    var canvas = $('#canvas'); // my placement area - think of paper in drawing
    var updateGridButton = $('#update-grid-button');
    var numberOfColsInput = $('#number-of-cols');
    var numberOfRowsInput = $('#number-of-rows');

    makeGrid(15, 15);
    $('.cell').on('click', changeColor);
    updateGridButton.on('click', updateGridSize);
    // clearGrid();
    // makeGrid(30, 30);

    function updateGridSize(){
      clearGrid(); // remove the current grid
      //grab tyhe number of columns from the unput for the new grid
      var newColNumber = parseInt(numberOfColsInput.val());
      console.log(newColNumber);
      // grab the number of rows from the input for the new grid
      var newRowNumber = parseInt(numberOfRowsInput.val());
      //make the new grid based on the new rows and columns
      makeGrid(newRowNumber, newColNumber);
      $('.cell').on('click', changeColor);
    }
    function clearGrid(){
      canvas.empty();
    }
    function changeColor(event){
      // just this cell's background
      $(this).toggleClass('red');
    }
    function makeGrid(numberOfRows, numberOfCols){
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

}());

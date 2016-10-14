(function() {

    // var numberOfRows = 15; // number of rows in the grid
    // var numberOfCols = 15; // number of cols in the grid
    var canvas = $('#canvas'); // my placement area - think of paper in drawing
    var colorGrid = $('#color-grid'); // pick your lite-brite color here
    var updateGridButton = $('#update-grid-button');
    var numberOfColsInput = $('#number-of-cols');
    var numberOfRowsInput = $('#number-of-rows');
    var max = 100;

    makeGrid(15, 15);
    $('.cell').on('click', changeColor);
    $('.btn-blue').on('click', makeItBlue);
    $('.btn-green').on('click', makeItGreen);
    $('.btn-yellow').on('click', makeItYellow);
    $('.btn-orange').on('click', makeItOrange);
    $('.btn-erase').on('click', eraser);
    updateGridButton.on('click', updateGridSize);
    $('.navbar-fixed-bottom').hover(function() {
      $(this).animate({ bottom: '700px' }, 'fast');
    },
    function() {
      $(this).animate({ left: '600px' }, 'fast');
    });
    // $('#update-grid-button').on('click', function(){
    //   $('#canvas').addClass('animated hinge');
    // });
    //make the new grid based on the new rows and columns
    // makeGrid(newRowNumber, newColNumber);
    // $('.cell').on('click', changeColor);


    // clearGrid();
    // makeGrid(30, 30);
    // makeColorGrid();
    function updateGridSize(){
      clearGrid(); // remove the current grid
      //grab the number of columns from the unput for the new grid
      var newColNumber = parseInt(numberOfColsInput.val());
      console.log(newColNumber);
      if (newColNumber > max){
        newColNumber.val('');
      }
      // grab the number of rows from the input for the new grid
      var newRowNumber = parseInt(numberOfRowsInput.val());
      if (newRowNumber > max){
        newRowNumber.val('');
      }
      if (newColNumber <= 100 && newRowNumber <= 100) {
            makeGrid(newRowNumber, newColNumber);
            $('.cell').on('click', changeColor);
        }
        else{
          makeGrid(15, 15);
          $('.cell').on('click', changeColor);
        }
    }
    function clearGrid(){
      canvas.empty();
    }
    function changeColor(event){
      // just this cell's background
      $(this).toggleClass('red');
    }
      // colors = true;
      // $().toggleClass('blue')
      // if (!colors = false) {
      //   $('.cell').on('click', makeItBlue);
      // }
    function makeItBlue(event){
      // remove everything
      $('.cell').off('click');
      // change cell background color to blue
      $('.cell').on('click', function(){
        $(this).toggleClass('blue');
      });
    }
    function makeItGreen(event){
      // remove everything
      $('.cell').off('click');
      // change cell background color to green
      $('.cell').on('click', function(){
        $(this).toggleClass('green');
      });
    }
    function makeItYellow(event){
      // remove everything
      $('.cell').off('click');
      // change cell background color to blue
      $('.cell').on('click', function(){
        $(this).toggleClass('yellow');
      });
    }
    function makeItOrange(event){
      // remove everything
      $('.cell').off('click');
      // change cell background color to blue
      $('.cell').on('click', function(){
        $(this).toggleClass('orange');
      });
    }
    function eraser(event){
      // remove everything
      $('.cell').off('click');
      // change cell background color to blue
      $('.cell').on('click', function(){
        $(this).toggleClass('white');
      });
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
      function makeColorGrid(){
        //let's make some rows and put them in the body
        for(var rowCount = 0; rowCount < 5; rowCount +=1){
          var row = $('<tr></tr>');
          for(var colCount = 0; colCount < 5; colCount +=1){
              var column = $('<td></td>');
              column.addClass('color');
              row.append(column);
          }
          colorGrid.append(row);
        }
    }
  }
}());

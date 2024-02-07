$(function () {
  //write your code here

  function checkStorage() {
    const carOneResults = JSON.parse(localStorage.getItem('carOneResults'));
    const carTwoResults = JSON.parse(localStorage.getItem('carTwoResults'));
    if (carOneResults && carTwoResults) {
      $('#savedResults').empty();
      $('#savedResults').html(`
      <h3>Results from the previous time you played this game:</h3>
      <div class="row results-saved">
        <div class="col-md-12">
          <table class="table table-bordered">
            <tr>
              <td>
                <span class="car-1-color">Car1</span> finished in
                <span class="car-1-color">${carOneResults.place}</span> place, with a time of
                <span class="car-1-color">${carOneResults.time}</span> milliseconds!
              </td>
            </tr>
            <tr>
              <td>
                <span class="car-2-color">Car2</span> finished in
                <span class="car-2-color">${carTwoResults.place}</span> place, with a time of
                <span class="car-2-color">${carTwoResults.time}</span> milliseconds!
              </td>
            </tr>
          </table>
        </div>
      </div>
      `);
    }
  }

  checkStorage();

  $('#raceBtn').on('click', function () {
    function carsRacing() {
      const carOne = $('.car-1');
      const carTwo = $('.car-2');
      const carOneTime = Math.floor((Math.random() * 2 + 1) * 1000);
      const carTwoTime = Math.floor((Math.random() * 2 + 1) * 1000);
      const carOnePlace = carOneTime < carTwoTime ? 'first' : 'second';
      const carTwoPlace = carTwoTime < carOneTime ? 'first' : 'second';

      const windowWidth = $(window).width();
      $('.btns-header').animate(
        { disabled: true },
        carOneTime > carTwoTime ? carOneTime : carTwoTime,
        function () {
          $('#startOverBtn').prop('disabled', false);
        }
      );

      carOne.animate({ left: `${windowWidth - carOne.width()}` }, carOneTime, function () {
        $('.flag').css('display', 'block');
        $('#carOneResultTable').append(`
          <tr>
            <td> 
            Finished in: <span class="car-1-color">${carOnePlace}</span> place with a time of : <span class="car-1-color">${carOneTime}</span> milliseconds!
            </td>
          </tr>
        `);
      });

      carTwo.animate({ left: `${windowWidth - carTwo.width()}` }, carTwoTime, function () {
        $('.flag').css('display', 'block');
        $('#carTwoResultTable').append(`
          <tr>
            <td>
              Finished in: <span class="car-2-color">${carTwoPlace}</span> place with a time of : <span class="car-2-color">${carTwoTime}</span> milliseconds!
            </td>
          </tr>
        `);
      });

      const carOneResults = {
        place: carOnePlace,
        time: carOneTime,
      };
      const carTwoResults = {
        place: carTwoPlace,
        time: carTwoTime,
      };

      localStorage.setItem('carOneResults', JSON.stringify(carOneResults));
      localStorage.setItem('carTwoResults', JSON.stringify(carTwoResults));
    }

    let countdownFrom = 3;

    function countdown() {
      const timerContainer = $('.countdown-timer');
      timerContainer.css('display', 'block');
      timerContainer.html(countdownFrom);
      if (countdownFrom === 0) {
        clearInterval(setupInterval);
        timerContainer.css('display', 'none');
        carsRacing();
      }
      countdownFrom--;
    }
    const setupInterval = setInterval(countdown, 1000);
  });

  $('#startOverBtn').on('click', function () {
    $('.car-1').css('left', '0');
    $('.car-2').css('left', '0');
    $('.flag').css('display', 'none');
    $('#raceBtn').prop('disabled', false);
  });
});

$(function () {
  // write your code here
  function drawCards(bike) {
    $('#cardHolder').append(`
			<div class="col-sm-4">
        <div class="panel panel-default">
          <div class="panel-body"><img class="img-responsive" src="img/${bike.image}.png" alt="bike" /></div>
            <div class="panel-footer">
                <h5 class="text-uppercase">${bike.name}</h5>
                <p><span>${bike.price}</span> $</p>
            </div>
        </div>
      </div>
		`);
  }

  function drawFilters(res) {
    $('#showAll').append(`<a href="#" class="list-group-item active">Show all<span class="badge">${res.products.length}</span></a>`);

    const genders = [...new Set(res.products.map((res) => res.gender))];
    genders.forEach((gender) => {
      $('#bikesByGender').append(
        `<a href="#" class="list-group-item text-capitalize">${gender.toLowerCase()}<span class="badge">${res.products.filter((res) => res.gender === gender).length}</span></a>`
      );
    });

    const brands = [...new Set(res.products.map((res) => res.brand))];
    brands.forEach((brand) => {
      $('#bikesBrands').append(`<a href="#" class="list-group-item bike-brand">${brand}<span class="badge">${res.products.filter((res) => res.brand === brand).length}</span></a>`);
    });
  }

  $.get('https://challenges.brainster.tech/ajax_data/data.json')
    .then((res) => {
      res.products.forEach((bike) => drawCards(bike));
      drawFilters(res);

      // ON CLICK

      $('.filter a').on('click', function () {
        $('.filter a').removeClass('active');
        $(this).addClass('active');
      });

      $('#showAll a').on('click', () => {
        $('#cardHolder').empty();
        res.products.forEach((bike) => drawCards(bike));
      });

      $('#bikesByGender a').on('click', (e) => {
        $('#cardHolder').empty();
        const bikesByGender = res.products.filter((bike) => bike.gender === e.target.innerText.split('\n')[0].toUpperCase());
        bikesByGender.forEach((bike) => drawCards(bike));
      });

      $('#bikesBrands a').on('click', (e) => {
        $('#cardHolder').empty();
        const bikesByBrand = res.products.filter((bike) => bike.brand === e.target.innerText.split('\n')[0].toUpperCase());
        bikesByBrand.forEach((bike) => drawCards(bike));
      });
    })
    .catch((err) => console.log('Error:', err));
});

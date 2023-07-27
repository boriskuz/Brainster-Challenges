'use strict';

const votingList = [
  ['Antonio', true, 5],
  ['Marija', false],
  ['Darko', true, 3],
];

const namePrompt = prompt('Please add a name:').toLowerCase();

function didVote(name) {
  const votedArray = votingList.find((item) => item[0].toLowerCase() === name);
  if (votedArray && votedArray.includes(true)) {
    document.querySelector('.table').innerHTML = `<tr>
            <td class="table-data">${votedArray[0]}</td>
            <td class="table-data">Voted!</td>
            <td class="table-data">${votedArray[2]}</td>
          </tr>`;
  } else if (votedArray && votedArray.includes(false)) {
    document.querySelector('.table').innerHTML = `<tr>
    <td class="table-data">${votedArray[0]}</td>
    <td class="table-data">Didn't vote</td>
  </tr>`;
  } else {
    alert(`${name} is not valid name`);
  }
}

didVote(namePrompt);

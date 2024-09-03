const college = {
  name: 'vlc',
  class: ['10', '12'],
  events: ['scrience fair', 'bijoy dibosh', '21 Feb'],
  unique: {
    color: 'blue',
    result: {
      gpa: 5,
      merit: 'top'
    }
  }
}

// college.unique.result.merit = 'top top top'
// console.log(college.unique.result.merit)
college.events[1] = '16 December'
console.log(college.events);

//delete property:
delete college.class
console.log(college)
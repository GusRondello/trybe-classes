const user = {
    name: 'Maria',
    age: 21,
    nationality: 'Brazilian',
  };
  
  const jobInfos = {
    profession: 'Software engineer',
    squad: 'Rocket Landing Logic',
    squadInitials: 'RLL',
  };

  const printMariaJobs = ({ name, age, nationality }, { profession, squad, squadInitials }) => {
    console.log(`Essa é a ${name}, ela é ${nationality} e tem ${age} anos de idade. Ontem ela iniciou sua nova profissão como ${profession} na área de ${squad}, também conhecida como ${squadInitials}, de nossa empressa!`);
  }

  printMariaJobs(user, jobInfos);
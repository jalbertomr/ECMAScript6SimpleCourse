const showInfo = (...data) => {
    console.log(data);
}

const arrData = ['Perenganito',54,'Perenganito@gmail.com',"México"];
showInfo( ...arrData);
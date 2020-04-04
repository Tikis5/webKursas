window.addEventListener('load', function () {
    //console.log(document.getElementById('demo').innerHTML);
    //1
    let vardas = 'Tomas';
    let pavarde = 'Karciauskas';
    let kursas = 'KCS24';
    let kurMokosi = 'Kaunas coding school';
    let pazymiai = [9, 9, 10, 8, 9];
    //2
    document.querySelector('.antra').innerHTML =
        vardas + " " + pavarde + " mokosi " +
        kurMokosi + ", " + kursas +
        " kurse, jo pazymiai: [" + pazymiai +
        "].";
    //3
    document.querySelector('.tipas').innerHTML =
        "vardas yra " + typeof vardas + '<br>' +
        "pavarde yra " + typeof pavarde + '<br>' +
        "kursas yra " + typeof kursas + '<br>' +
        "kurMokosi yra " + typeof kurMokosi + '<br>' +
        "pazymiai yra " + typeof pazymiai;
    //4
    let studentas = {
        firstname: "vardas",
        lastname: "pavarde",
        course: "kursas",
        school: "mokykla",
        grades: [9, 9, 10, 8, 9]
    };
    let studentas2 = {
        firstname: 'Tomas',
        lastname: 'Karciauskas',
        course: 4,
        school: 'Kaunas coding school',
        grades: [5, 9, 10, 8, 9]
    };
    //5
    let studentai = [
        studentas,
        studentas2,
        studentas,
        {
            firstname: "Jonas",
            lastname: "Jonauskas",
            course: "4",
            school: "LSU",
            grades: [9, 9, 10, 8, 9],
        },
    ];
    //6
    console.log(studentai[studentai.length - 1]);

    //7
    function spausdintiStudenta(studentas) {
        console.log(studentas.firstname + " " + studentas.lastname + " mokosi " +
            studentas.school + ", " + studentas.course +
            " kurse, jo pazymiai: [" + studentas.grades +
            "].");
    }

    spausdintiStudenta(studentai[2]);

    function studentoPazymiai(pazymiai) {
        let pasirinktiPazymiai = [pazymiai[0], pazymiai[2], pazymiai[3]];
        //8
        for (let i = 0; i < pazymiai.length; i++) {
            console.log(pazymiai[i]);
        }
        //9 kelimas vienu
        console.log('//9uzduotis');
        let suma = 0;
        for (let i = 0; i < pasirinktiPazymiai.length; i++) {

            if (pasirinktiPazymiai[i] < 10) {
                console.log('pakeltas 1: ' + (pasirinktiPazymiai[i] + 1));
            } else {
                console.log('maksimalus balas ' + pasirinktiPazymiai[i]);
            }
            suma += pasirinktiPazymiai[i];
        }

        //10
        console.log('suma: ' + suma);
        //11
        console.log('sandauga ' + (pazymiai[0] * pazymiai[4]))

    }

    studentoPazymiai(studentas2.grades);

    //12, 13 ir 14
    function kursoTikrinimas(studentai) {
        let tipas = typeof studentai[1].course;
        console.log(tipas);
        if (studentai[1].course === 4){
            console.log('studentas mokosi 4 kurse ' + tipas)
        }
        for (let i = 0; i < studentai.length; i++){
            if (studentai[i].course == 4){
                console.log(studentai[i].firstname + studentai[i].lastname + ' yra abiturientas');
            }else {
                console.log(studentai[i].firstname + ' ' + studentai[i].lastname + ' dar toli iki mokslu baigimo');
            }
        }

    }

    kursoTikrinimas(studentai)


});





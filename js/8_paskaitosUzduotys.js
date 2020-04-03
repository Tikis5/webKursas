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
        course: 'KCS24',
        school: 'Kaunas coding school',
        grades: [9, 9, 10, 8, 9]
    };
    //5
    let studentai = [
        studentas,
        studentas2,
        studentas,
        {
            vardas: "Jonas",
            pavarde: "Jonauskas",
            kursas: "ksc2",
            kurMokosi: "LSU",
            pazymiai: [9, 9, 10, 8, 9],
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

    //8
    function studentoPazymiai(pazymiai) {

        for (let i = 0; i < pazymiai.length; i++) {
            console.log(pazymiai[i]);
        }
    }

    studentoPazymiai(studentas2.grades);

    //9
    // function pazymiuPakelimasVienu(pazymys1, pazymys2, pazymys3) {
    //     if (pazymys1 < 10) {
    //         console.log(pazymys1 + 1)
    //     } else {
    //         console.log(pazymys1 + 1)
    //     }
    //
    // }


});





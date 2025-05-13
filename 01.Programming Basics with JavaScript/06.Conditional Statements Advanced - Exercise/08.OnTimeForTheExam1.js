function onTime(hourExam, minExam, hourArive, minArive) {
    let allMinExam = hourExam * 60 + minExam;
    let allMinArive = hourArive * 60 + minArive;
    let dif = Math.abs(allMinArive - allMinExam);

    if (allMinArive <= allMinExam && allMinArive >= (allMinExam - 30)) {
        console.log(`On time`);
        if (allMinArive != allMinExam && allMinArive > (allMinExam - 60))
            console.log(`${dif} minutes before the start`);
    } else if (allMinArive < (allMinExam - 30)) {
        console.log(`Early`);
        if (allMinArive > (allMinExam - 60))
            console.log(`${dif} minutes before the start`);
        else {
            let hour = Math.floor(dif / 60);
            let min = dif % 60;
            if (min < 10)
                console.log(`${hour}:0${min} hours before the start`);
            else
                console.log(`${hour}:${min} hours before the start`);
        }

    } else if (allMinArive > allMinExam) {
        console.log(`Late`);
        if (allMinArive < (allMinExam + 60))
            console.log(`${dif} minutes after the start`);
        else {
            let hour = Math.floor(dif / 60);
            let min = dif % 60;
            if (min < 10)
                console.log(`${hour}:0${min} hours after the start`);
            else
                console.log(`${hour}:${min} hours after the start`);
        }


    }
}

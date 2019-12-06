$(document).ready(function () {
    $('[data-toggle="tooltip"]').tooltip();

    var birthday = moment([1984, 7, 15]);
    $('#years_old').text(moment().diff(birthday, 'years'));

    var start_work = moment([2002, 6]);
    $('#work_years').text(moment().diff(start_work, 'years'));

    var clockId;
    var myTimeZone = +8.00;
    var d = new Date();
    var tzDifference = myTimeZone * 60 + d.getTimezoneOffset();
    var offset = tzDifference * 60 * 1000;

    function updateClock() {
        var tDate = new Date(new Date().getTime() + offset);
        var in_hours = tDate.getHours();
        var in_minutes = tDate.getMinutes();
        var in_seconds = tDate.getSeconds();

        // if (in_minutes < 10)
        //     in_minutes = '0' + in_minutes;
        // if (in_seconds < 10)
        //     in_seconds = '0' + in_seconds;
        // if (in_hours < 10)
        //     in_hours = '0' + in_hours;

        $('#my-time').text(moment(tDate));
    }

    function startClock() {
        clockId = setInterval(updateClock, 500);
    }

    function killClock() {
        clearInterval(clockId);
    }

    startClock();
});
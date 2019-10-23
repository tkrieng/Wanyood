const holidays =
    [
        "2019-01-01"
        , "2019-02-19"
        , "2019-04-08"
        , "2019-04-15"
        , "2019-04-16"
        , "2019-05-01"
        , "2019-05-06"
        , "2019-05-20"
        , "2019-06-03"
        , "2019-07-16"
        , "2019-07-29"
        , "2019-08-12"
        , "2019-10-14"
        , "2019-10-23"
        , "2019-12-05"
        , "2019-12-10"
        , "2019-12-31"
        , "2020-01-01"
        , "2020-02-10"
        , "2020-04-06"
        , "2020-04-13"
        , "2020-04-14"
        , "2020-04-15"
        , "2020-05-01"
        , "2020-05-04"
        , "2020-05-06"
        , "2020-06-03"
        , "2020-07-06"
        , "2020-07-28"
        , "2020-08-12"
        , "2020-10-13"
        , "2020-10-23"
        , "2020-12-05"
        , "2020-12-10"
        , "2020-12-31"
    ]

export const formattedHolidays = new Set(holidays.map((holiday) => (new Date(Date.parse(holiday))).toDateString()))
export const _isHoliday = (today, formattedHolidays) => {
    return formattedHolidays.has(today.toDateString())
}

export const isHoliday = (today) => _isHoliday(today, formattedHolidays)
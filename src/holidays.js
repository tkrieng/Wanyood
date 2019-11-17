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
const displayDay = ['อาทิตย์', 'จันทร์', 'อังคาร', 'พุธ', 'พฤหัสบดี', 'ศุกร์', 'เสาร์']
const displayMonth = [
    'มกราคม',
    'กุมภาพันธ์',
    'มีนาคม',
    'เมษายน',
    'พฤษภาคม',
    'มิถุนายน',
    'กรกฎาคม',
    'สิงหาคม',
    'กันยายน',
    'ตุลาคม',
    'พฤศจิกายน',
    'ธันวาคม',
]

export const formattedHolidays = new Set(holidays.map((holiday) => (new Date(Date.parse(holiday))).toDateString()))
export const _isHoliday = (today, formattedHolidays) => {
    return formattedHolidays.has(today.toDateString())
}
export const isHoliday = (today) => _isHoliday(today, formattedHolidays)
export const toThaiDate = (date) => {
    const day = date.getDay()
    const dd = date.getDate()
    const month = date.getMonth()
    const year = date.getYear() + 1900
    const time = date.toLocaleTimeString()
    return `วัน${displayDay[day]} ${dd} ${displayMonth[month]} ${year} ${time}`
}
export const _getNextHoliday = (date, holidays) => {
    const nextHolidays = Array.from(holidays).map(d => new Date(Date.parse(d))).filter(h => date < h)
    if(nextHolidays.length == 0) return null
    return nextHolidays[0]
}
export const getNextHoliday = (date) => _getNextHoliday(date, holidays)
export const countDaysUntilDate = (startDay, endDay) => {
    const oneDay = 1000 * 60 * 60 * 24 
    if (startDay.getMonth() == 11 && startDay.getdate() > 25) 
    endDay.setFullYear(endDay.getFullYear() + 1) 
    const Result = Math.round(endDay.getTime() - startDay.getTime()) / (oneDay); 
    return Result.toFixed(0)
}
export const countDaysUntilNextHoliday = (today) => {
    const nextHoliday = getNextHoliday(today)
    return countDaysUntilDate(today, nextHoliday)
}
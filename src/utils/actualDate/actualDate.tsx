import localizedFormat from 'dayjs/plugin/localizedFormat';
import dayjs from 'dayjs';

dayjs.extend(localizedFormat);

<<<<<<< HEAD
const actualDate = (date: string, isScrenshot: boolean) => {
  return dayjs(date).format(isScrenshot ? 'LT' : 'L LT');
=======
const actualDate = (date: string) => {
  return dayjs(date).format('L LT');
>>>>>>> b96a226f29a5dcb97db1f1be35d8497aaec9b936
};

export default actualDate;

import localizedFormat from 'dayjs/plugin/localizedFormat';
import dayjs from 'dayjs';

dayjs.extend(localizedFormat);

const actualDate = (date: string, isScrenshot: boolean) => {
  return dayjs(date).format(isScrenshot ? 'LT' : 'L LT');
};

export default actualDate;

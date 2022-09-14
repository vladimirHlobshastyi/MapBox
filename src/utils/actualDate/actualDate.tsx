import localizedFormat from 'dayjs/plugin/localizedFormat';
import dayjs from 'dayjs';

dayjs.extend(localizedFormat);

const actualDate = (date: string) => {
  return dayjs(date).format('L LT');
};

export default actualDate;

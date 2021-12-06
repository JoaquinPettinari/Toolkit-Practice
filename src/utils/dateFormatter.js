import { DateTime } from 'luxon';

export const formatCurrentDay = (date) => {
    return DateTime.fromISO(date).setLocale('es').toFormat('D');
};
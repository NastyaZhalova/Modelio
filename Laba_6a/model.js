const DAYS_OF_WEEK = ['Понедельник', 'Вторник', 'Среда', 'Четверг', 'Пятница', 'Суббота'];
const IMPORTANCE_LEVELS = [1, 2, 3];

const ObjInf = [
    {
        id: '1',
        description: 'Пара по матанализу, желательно утром',
        dayOfWeek: 'Вторник',
        timeStart: '10:00',
        timeEnd: '11:30',
        importance: 3,
        createdAt: new Date('2026-01-10T09:00:00'),
        author: 'Иванов Иван',
        photoLink: 'http://fpmi.bsu.by/ImgFpmi/Cache/banner_61403.jpg'
    },
    {
        id: '2',
        description: 'Семинар по дискретной математике',
        dayOfWeek: 'Четверг',
        timeStart: '14:00',
        timeEnd: '15:30',
        importance: 2,
        createdAt: new Date('2026-01-11T10:15:00'),
        author: 'Иванов Иван'
    },
    {
        id: '3',
        description: 'Лекция по программированию',
        dayOfWeek: 'Понедельник',
        timeStart: '08:30',
        timeEnd: '10:00',
        importance: 3,
        createdAt: new Date('2026-01-12T08:00:00'),
        author: 'Петров Петр'
    },
    {
        id: '4',
        description: 'Консультация по курсовой',
        dayOfWeek: 'Среда',
        timeStart: '16:00',
        timeEnd: '17:30',
        importance: 1,
        createdAt: new Date('2026-01-13T12:30:00'),
        author: 'Сидоров Сидор'
    },
    {
        id: '5',
        description: 'Лабораторная по физике',
        dayOfWeek: 'Пятница',
        timeStart: '11:00',
        timeEnd: '12:30',
        importance: 2,
        createdAt: new Date('2026-01-14T09:45:00'),
        author: 'Иванов Иван'
    },
    {
        id: '6',
        description: 'Практика по английскому',
        dayOfWeek: 'Суббота',
        timeStart: '10:00',
        timeEnd: '11:30',
        importance: 1,
        createdAt: new Date('2026-01-15T14:00:00'),
        author: 'Петров Петр'
    },
    {
        id: '7',
        description: 'Зачёт по истории',
        dayOfWeek: 'Понедельник',
        timeStart: '13:00',
        timeEnd: '14:30',
        importance: 3,
        createdAt: new Date('2026-01-16T10:00:00'),
        author: 'Сидоров Сидор'
    },
    {
        id: '8',
        description: 'Семинар по экономике',
        dayOfWeek: 'Вторник',
        timeStart: '15:00',
        timeEnd: '16:30',
        importance: 2,
        createdAt: new Date('2026-01-17T11:20:00'),
        author: 'Иванов Иван'
    },
    {
        id: '9',
        description: 'Лекция по базам данных',
        dayOfWeek: 'Среда',
        timeStart: '09:00',
        timeEnd: '10:30',
        importance: 3,
        createdAt: new Date('2026-01-18T08:30:00'),
        author: 'Петров Петр'
    },
    {
        id: '10',
        description: 'Курсовая работа, обсуждение',
        dayOfWeek: 'Четверг',
        timeStart: '12:00',
        timeEnd: '13:30',
        importance: 2,
        createdAt: new Date('2026-01-19T13:00:00'),
        author: 'Сидоров Сидор'
    },
    {
        id: '11',
        description: 'Лабораторная по химии',
        dayOfWeek: 'Пятница',
        timeStart: '14:00',
        timeEnd: '15:30',
        importance: 1,
        createdAt: new Date('2026-01-20T09:15:00'),
        author: 'Иванов Иван'
    },
    {
        id: '12',
        description: 'Практика по математике',
        dayOfWeek: 'Суббота',
        timeStart: '08:30',
        timeEnd: '10:00',
        importance: 3,
        createdAt: new Date('2026-01-21T10:45:00'),
        author: 'Петров Петр'
    },
    {
        id: '13',
        description: 'Лекция по философии',
        dayOfWeek: 'Понедельник',
        timeStart: '16:00',
        timeEnd: '17:30',
        importance: 2,
        createdAt: new Date('2026-01-22T12:00:00'),
        author: 'Сидоров Сидор'
    },
    {
        id: '14',
        description: 'Семинар по политологии',
        dayOfWeek: 'Вторник',
        timeStart: '11:00',
        timeEnd: '12:30',
        importance: 1,
        createdAt: new Date('2026-01-23T14:30:00'),
        author: 'Иванов Иван'
    },
    {
        id: '15',
        description: 'Лабораторная по электротехнике',
        dayOfWeek: 'Среда',
        timeStart: '13:00',
        timeEnd: '14:30',
        importance: 3,
        createdAt: new Date('2026-01-24T08:00:00'),
        author: 'Петров Петр'
    },
    {
        id: '16',
        description: 'Консультация перед экзаменом',
        dayOfWeek: 'Четверг',
        timeStart: '10:00',
        timeEnd: '11:30',
        importance: 2,
        createdAt: new Date('2026-01-25T09:00:00'),
        author: 'Сидоров Сидор'
    },
    {
        id: '17',
        description: 'Практика по информатике',
        dayOfWeek: 'Пятница',
        timeStart: '16:00',
        timeEnd: '17:30',
        importance: 3,
        createdAt: new Date('2026-01-26T11:00:00'),
        author: 'Иванов Иван'
    },
    {
        id: '18',
        description: 'Семинар по психологии',
        dayOfWeek: 'Суббота',
        timeStart: '12:00',
        timeEnd: '13:30',
        importance: 1,
        createdAt: new Date('2026-01-27T13:15:00'),
        author: 'Петров Петр'
    },
    {
        id: '19',
        description: 'Лекция по праву',
        dayOfWeek: 'Понедельник',
        timeStart: '09:00',
        timeEnd: '10:30',
        importance: 2,
        createdAt: new Date('2026-01-28T10:30:00'),
        author: 'Сидоров Сидор'
    },
    {
        id: '20',
        description: 'Лабораторная по сетям',
        dayOfWeek: 'Вторник',
        timeStart: '13:00',
        timeEnd: '14:30',
        importance: 3,
        createdAt: new Date('2026-01-29T08:45:00'),
        author: 'Иванов Иван'
    },
    {
        id: '21',
        description: 'Курсовая по веб-разработке',
        dayOfWeek: 'Среда',
        timeStart: '15:00',
        timeEnd: '16:30',
        importance: 2,
        createdAt: new Date('2026-01-30T09:30:00'),
        author: 'Петров Петр'
    }
];

class PrefCollection {
    #objs = [];

    constructor(objs = []) {
        this.#objs = [...objs];
    }

    #isValidTime(str) {
        return typeof str === 'string' && /^([01]\d|2[0-3]):[0-5]\d$/.test(str);
    }

    #isTimeRangeValid(start, end) {
        if (!this.#isValidTime(start) || !this.#isValidTime(end)) return false;
        return start < end;
    }

    #validateFields(obj, isEdit = false) {
        if (!obj || typeof obj !== 'object') return false;

        const fieldsToCheck = isEdit
            ? Object.keys(obj)
            : ['id', 'description', 'dayOfWeek', 'timeStart', 'timeEnd', 'importance', 'createdAt', 'author'];

        for (const key of fieldsToCheck) {
            const val = obj[key];

            switch (key) {
                case 'id':
                    if (typeof val !== 'string' || val.trim() === '') return false;
                    if (!isEdit && this.#objs.some(o => o.id === val)) return false;
                    break;
                case 'description':
                    if (typeof val !== 'string' || val.trim() === '' || val.length >= 200) return false;
                    break;
                case 'dayOfWeek':
                    if (!DAYS_OF_WEEK.includes(val)) return false;
                    break;
                case 'timeStart':
                case 'timeEnd':
                    if (!this.#isValidTime(val)) return false;
                    break;
                case 'importance':
                    if (!IMPORTANCE_LEVELS.includes(val)) return false;
                    break;
                case 'createdAt':
                    if (!(val instanceof Date) || isNaN(val.getTime())) return false;
                    break;
                case 'author':
                    if (typeof val !== 'string' || val.trim() === '') return false;
                    break;
                case 'photoLink':
                    if (val !== undefined && typeof val !== 'string') return false;
                    break;
                default:
                    return false;
            }
        }

        if (!isEdit) {
            if (!this.#isTimeRangeValid(obj.timeStart, obj.timeEnd)) return false;
        }

        return true;
    }

    #sortByCreatedAt(arr) {
        return [...arr].sort((a, b) => b.createdAt - a.createdAt);
    }

    #applyFilters(arr, filterConfig) {
        if (!filterConfig || typeof filterConfig !== 'object') return arr;

        return arr.filter(obj => {
            for (const [key, value] of Object.entries(filterConfig)) {
                if (value === undefined || value === null || value === '') continue;

                if (key === 'description' || key === 'author') {
                    if (!String(obj[key]).toLowerCase().includes(String(value).toLowerCase())) {
                        return false;
                    }
                }
                else if (key === 'dayOfWeek') {
                    if (obj.dayOfWeek !== value) return false;
                }
                else if (key === 'importance') {
                    if (obj.importance !== Number(value)) return false;
                }
                else if (key === 'createdAtFrom') {
                    if (obj.createdAt < new Date(value)) return false;
                }
                else if (key === 'createdAtTo') {
                    if (obj.createdAt > new Date(value)) return false;
                }
            }
            return true;
        });
    }

    #isIdUnique(id) {
        return !this.#objs.some(o => o.id === id);
    }

    getObjs(skip = 0, top = 10, filterConfig = undefined) {
        if (!Number.isInteger(skip) || skip < 0) {
            console.warn('getObjs: skip должен быть неотрицательным целым, использовано 0');
            skip = 0;
        }
        if (!Number.isInteger(top) || top <= 0) {
            console.warn('getObjs: top должен быть положительным целым, использовано 10');
            top = 10;
        }

        let result = this.#sortByCreatedAt(this.#objs);
        result = this.#applyFilters(result, filterConfig);

        return result.slice(skip, skip + top);
    }

    getObj(id) {
        if (typeof id !== 'string') {
            console.warn('getObj: id должен быть строкой');
            return null;
        }
        const found = this.#objs.find(o => o.id === id);
        return found ? { ...found } : null;
    }

    validateObj(obj) {
        return this.#validateFields(obj, false);
    }

    addObj(obj) {
        if (!this.#validateFields(obj, false)) {
            console.warn('addObj: объект не прошёл валидацию');
            return false;
        }
        if (!this.#isIdUnique(obj.id)) {
            console.warn('addObj: id уже существует');
            return false;
        }
        this.#objs.push({ ...obj });
        return true;
    }

    editObj(id, obj) {
        if (typeof id !== 'string' || !obj || typeof obj !== 'object') {
            console.warn('editObj: неверные параметры');
            return false;
        }

        const forbidden = ['id', 'author', 'createdAt'];
        for (const key of Object.keys(obj)) {
            if (forbidden.includes(key)) {
                console.warn(`editObj: поле "${key}" нельзя изменять`);
                return false;
            }
        }

        const index = this.#objs.findIndex(o => o.id === id);
        if (index === -1) {
            console.warn('editObj: объект с таким id не найден');
            return false;
        }

        if (!this.#validateFields(obj, true)) {
            console.warn('editObj: переданные поля не прошли валидацию');
            return false;
        }

        const merged = { ...this.#objs[index], ...obj };
        if (!this.#isTimeRangeValid(merged.timeStart, merged.timeEnd)) {
            console.warn('editObj: время начала должно быть раньше времени окончания');
            return false;
        }

        this.#objs[index] = merged;
        return true;
    }

    removeObj(id) {
        if (typeof id !== 'string') {
            console.warn('removeObj: id должен быть строкой');
            return false;
        }
        const index = this.#objs.findIndex(o => o.id === id);
        if (index === -1) {
            console.warn('removeObj: объект не найден');
            return false;
        }
        this.#objs.splice(index, 1);
        return true;
    }

    addAll(objs) {
        if (!Array.isArray(objs)) {
            console.warn('addAll: ожидается массив');
            return [];
        }
        const added = [];
        for (const obj of objs) {
            if (this.addObj(obj)) {
                added.push({ ...obj });
            }
        }
        return added;
    }

    clear() {
        this.#objs = [];
    }

    get count() {
        return this.#objs.length;
    }
}

const collection = new PrefCollection(ObjInf);

console.log('=== 1. getObjs(0, 5) — первые 5, новые сверху ===');
console.log(collection.getObjs(0, 5));

console.log('\n=== 2. getObjs(5, 5) — следующие 5 ===');
console.log(collection.getObjs(5, 5));

console.log('\n=== 3. getObjs(0, 10, {author: "Иванов Иван"}) — фильтр по автору ===');
console.log(collection.getObjs(0, 10, { author: 'Иванов Иван' }));

console.log('\n=== 4. getObjs(0, 10, {dayOfWeek: "Вторник", importance: 3}) ===');
console.log(collection.getObjs(0, 10, { dayOfWeek: 'Вторник', importance: 3 }));

console.log('\n=== 5. getObj("1") ===');
console.log(collection.getObj('1'));

console.log('\n=== 6. getObj("999") — несуществующий ===');
console.log(collection.getObj('999'));

console.log('\n=== 7. validateObj — валидный ===');
console.log(collection.validateObj({
    id: '100',
    description: 'Новое пожелание',
    dayOfWeek: 'Понедельник',
    timeStart: '09:00',
    timeEnd: '10:30',
    importance: 2,
    createdAt: new Date(),
    author: 'Тестов Тест'
}));

console.log('\n=== 8. validateObj — невалидный (важность 5) ===');
console.log(collection.validateObj({
    id: '101',
    description: 'Плохое пожелание',
    dayOfWeek: 'Понедельник',
    timeStart: '09:00',
    timeEnd: '10:30',
    importance: 5,
    createdAt: new Date(),
    author: 'Тестов Тест'
}));

console.log('\n=== 9. addObj — успешное добавление ===');
console.log(collection.addObj({
    id: '102',
    description: 'Добавленное пожелание',
    dayOfWeek: 'Среда',
    timeStart: '11:00',
    timeEnd: '12:30',
    importance: 1,
    createdAt: new Date(),
    author: 'Тестов Тест'
}));
console.log('count =', collection.count);

console.log('\n=== 10. addObj — дубликат id ===');
console.log(collection.addObj({
    id: '102',
    description: 'Дубликат',
    dayOfWeek: 'Среда',
    timeStart: '11:00',
    timeEnd: '12:30',
    importance: 1,
    createdAt: new Date(),
    author: 'Тестов Тест'
}));

console.log('\n=== 11. editObj("102", {importance: 3}) — успешно ===');
console.log(collection.editObj('102', { importance: 3 }));
console.log(collection.getObj('102'));

console.log('\n=== 12. editObj("102", {author: "Хакер"}) — запрещено ===');
console.log(collection.editObj('102', { author: 'Хакер' }));

console.log('\n=== 13. editObj("102", {timeStart: "15:00", timeEnd: "14:00"}) — невалидный диапазон ===');
console.log(collection.editObj('102', { timeStart: '15:00', timeEnd: '14:00' }));

console.log('\n=== 14. removeObj("102") ===');
console.log(collection.removeObj('102'));
console.log('count =', collection.count);

console.log('\n=== 15. removeObj("999") — несуществующий ===');
console.log(collection.removeObj('999'));

console.log('\n=== 16. addAll — массив из 3 объектов (2 валидных, 1 невалидный) ===');
const addAllResult = collection.addAll([
    { id: '201', description: 'A', dayOfWeek: 'Пятница', timeStart: '08:00', timeEnd: '09:30', importance: 1, createdAt: new Date(), author: 'Тест' },
    { id: '202', description: 'B', dayOfWeek: 'Суббота', timeStart: '10:00', timeEnd: '11:30', importance: 2, createdAt: new Date(), author: 'Тест' },
    { id: '203', description: '', dayOfWeek: 'Понедельник', timeStart: '10:00', timeEnd: '11:00', importance: 2, createdAt: new Date(), author: 'Тест' }
]);
console.log('Добавлено:', addAllResult.length, 'из 3');
console.log('count =', collection.count);

console.log('\n=== 17. clear() ===');
collection.clear();
console.log('count =', collection.count);
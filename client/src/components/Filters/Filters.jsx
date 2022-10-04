import { useDispatch, useSelector } from 'react-redux';

import {changeNameColumn, changeCondition, changeInput } from '../../redux/filtersSlice';

import styles from './filters.module.sass';

const Filters = () => {

    const {byNameСolumn, byСondition, input} = useSelector(state => state.filters);
    const dispatch = useDispatch();


    const onChangeNameColumn = (e) => {
        if (e.target.value !== 'name' && byСondition === 'contain') {
            alert("Фильтр 'Содержит' может быть только с фильтром 'Название'");
        } else if (e.target.value === 'name' && (byСondition === 'less' || byСondition === 'more')) {
            alert("Фильтр 'Больше' или 'Меньше' не может быть с фильтром 'Название'");
        } else if (e.target.value !== 'name' && isNaN(+input) ) {
            dispatch(changeInput(''));
            alert("Значение поля должно быть цифрой");
        } else {
            dispatch(changeNameColumn(e.target.value));
        }
    };

    const onChangeCondition = (e) => {
        if (byNameСolumn !== 'name' && e.target.value === 'contain') {
            alert("Фильтр 'Содержит' может быть только с фильтром 'Название'");
        } else if (byNameСolumn === 'name' && (e.target.value === 'less' || e.target.value === 'more')) {
            alert("Фильтр 'Больше' или 'Меньше' не может быть с фильтром 'Название'");
        } else {
            dispatch(changeCondition(e.target.value));
        }
    };

    const onChangeInput = (e) => {
        if (byNameСolumn !== 'name' && isNaN(+e.target.value)) {
            dispatch(changeInput(''));
            alert("Значение должно быть цифрой");
        } else {
            dispatch(changeInput(e.target.value)); 
        }
        
    };

    return (
        <form className={styles.filters}>
            <select className={styles.selectFilter} value={byNameСolumn} onChange={onChangeNameColumn}>
                <option value="name">Название</option>
                <option value="quantity">Количество</option>
                <option value="distance">Расстояние</option>
            </select>
            <select className={styles.selectFilter} value={byСondition} onChange={onChangeCondition}>
                <option value="equally">Равно</option>
                <option value="contain">Содержит</option>
                <option value="more">Больше</option>
                <option value="less">Меньше</option>
            </select>
            <input
                className={styles.inputFilterValue}
                type="text"
                value={input}
                placeholder="Введите значение"
                onChange={onChangeInput}
            />
        </form>
    );
};

export default Filters;

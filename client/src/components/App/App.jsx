import { useState } from 'react';
import { useSelector } from 'react-redux';

import { useGetDataQuery } from '../../redux/dataSlice';
import Filters from '../Filters/Filters';

import styles from './app.module.sass';

const App = () => {

    const { byNameСolumn, byСondition, input } = useSelector((state) => state.filters);
    const [limit, setLimit] = useState(5);

    const {
        data = { rows: [] },
        isLoading,
        isError,

    } = useGetDataQuery({
            byNameСolumn,
            byСondition,
            input,
            limit,
        });

    const addLimit = () => {
        if(data.count > limit) {
            setLimit(limit => limit + 5);
        }
    };

    const createList = (dataTable) => {
        return dataTable.map(({ id, date, name, quantity, distance }) => (
            <tr key={id}>
                <td className={styles.tableCell}>{date}</td>
                <td className={styles.tableCell}>{name}</td>
                <td className={styles.tableCell}>{quantity}</td>
                <td className={styles.tableCell}>{distance}</td>
            </tr>
        ));
    };

    const list = createList(data.rows);

    return (
        <div className={styles.container}>
            <Filters />
            {!isError ? (
                <table className={styles.table}>
                    <thead>
                        <tr>
                            <th className={styles.headerCell}>Дата</th>
                            <th className={styles.headerCell}>Название</th>
                            <th className={styles.headerCell}>Количество</th>
                            <th className={styles.headerCell}>Расстояние</th>
                        </tr>
                    </thead>
                    <tbody>{list}</tbody>
                </table>
            ) : (
                <div>ERROR</div>
            )}
            <button 
                className={styles.pagination} 
                disabled={isLoading}
                onClick={addLimit}
                >
                    Загрузить ещё данные
            </button>
        </div>
    );
};

export default App;

import { Data } from '../models/models.js';
import RequestError from '../error/RequestError.js';
import { Op } from 'sequelize';

class DataController {
    async getData(req, res, next) {

        let { sortByColumn, sortByCondition, filteringValue, limit } = req.query;
        let data;

        if (!filteringValue) {
            data = await Data.findAndCountAll({ limit });
        } else if (sortByCondition === 'equally') {
            data = await Data.findAndCountAll({ 
                where: { [sortByColumn]: filteringValue }, 
                limit 
            });
        } else if (sortByCondition === 'contain') {
            data = await Data.findAndCountAll({
                where: { [sortByColumn]: { [Op.substring]: filteringValue } },
                limit,
            });
        } else if (sortByCondition === 'less' && !isNaN(+filteringValue)) {
            data = await Data.findAndCountAll({
                where: { [sortByColumn]: { [Op.lt]: filteringValue } },
                limit,
            });
        } else if (sortByCondition === 'more' && !isNaN(+filteringValue)) {
            data = await Data.findAndCountAll({
                where: { [sortByColumn]: { [Op.gt]: filteringValue } },
                limit,
            });
        } else {
            return next(RequestError.badRequest('Неправильное значение filteringValue'));
        }

        return res.json(data);
    }
}
export default new DataController();

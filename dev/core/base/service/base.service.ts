export interface IBaseService<T> {
    repository;
    getList(conditions?: any);
    get(id: number, conditions?);
    update(id: number, data: T);
    create(data: T);
    delete(id: number);
}

export class BaseService<T> implements IBaseService<T> {
    public repository;
    getList(conditions = {}) {
        return this.repository.query(conditions).$promise
            .then((res) => {
                return res;
            })
    }

    get(id, conditions = {}) {
        return this.repository.get(angular.merge(conditions, { id: id })).$promise
            .then((res) => res);
    }

    update(id, data) {
        return this.repository.put({
            id: id
        }, data).$promise;
    }

    create(data) {
        return this.repository.save({}, data).$promise;
    }

    delete(id) {
        return this.repository.delete({ id: id }).$promise
            .then(res => res);
    }
}
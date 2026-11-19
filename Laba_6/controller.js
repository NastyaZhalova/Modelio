const appCollection = new PrefCollection(ObjInf);
const appView = new View();

const App = {
    render: function() {
        const objs = appCollection.getObjs(0, 100); 
        appView.renderList(objs);
        appView.renderHeader();
    },

    addObj: function(obj) {
        if (appCollection.addObj(obj)) {
            this.render();
            console.log('Объект успешно добавлен');
        } else {
            console.warn('Ошибка добавления объекта');
        }
    },

    editObj: function(id, obj) {
        if (!obj) return; 
        if (appCollection.editObj(id, obj)) {
            this.render();
            console.log('Объект успешно изменен');
        } else {
            console.warn('Ошибка редактирования');
        }
    },

    removeObj: function(id) {
        if (appCollection.removeObj(id)) {
            this.render();
            console.log('Объект удален');
        } else {
            console.warn('Ошибка удаления');
        }
    },

    setUser: function(name) {
        currentUser = name;
        this.render();
        console.log('Текущий пользователь: ' + (name ? name : 'Гость'));
    },

    logout: function() {
        this.setUser(null);
    }
};

App.render();
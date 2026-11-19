var currentUser = 'Иванов Иван'; 

class View {
    #cardsContainer;
    #userProfileContainer;

    constructor() {
        this.#cardsContainer = document.getElementById('cards-container');
        this.#userProfileContainer = document.getElementById('user-profile');
    }

    renderHeader() {
        if (currentUser) {
            this.#userProfileContainer.innerHTML = `
                <span>${currentUser} (Преподаватель)</span>
                <button class="btn-logout" onclick="App.logout()">Выйти</button>
            `;
        } else {
            this.#userProfileContainer.innerHTML = `
                <span style="color: #bdc3c7;">Гость</span>
                <a href="#screen-auth" class="btn-primary" style="text-decoration:none; padding: 8px 15px; border-radius: 4px;">Войти</a>
            `;
        }
    }

    renderCard(obj) {
        const card = document.createElement('div');
        card.className = 'card';
        card.id = `card-${obj.id}`;

        let importanceText = '';
        if (obj.importance === 1) importanceText = 'Низкая (1)';
        else if (obj.importance === 2) importanceText = 'Средняя (2)';
        else if (obj.importance === 3) importanceText = 'Высокая (3)';

        let actionsHtml = '';
        if (currentUser === obj.author) {
            actionsHtml = `
                <div class="card-actions">
                    <button class="btn-edit" onclick="App.editObj('${obj.id}', prompt('Новое описание:', '${obj.description}'))">Редактировать</button>
                    <button class="btn-delete" onclick="App.removeObj('${obj.id}')">Удалить</button>
                </div>
            `;
        }

        card.innerHTML = `
            <h3>${obj.dayOfWeek}</h3>
            <p>Время: ${obj.timeStart} - ${obj.timeEnd}</p>
            <p>Важность: <strong>${importanceText}</strong></p>
            <p style="font-size: 12px; color: #7f8c8d; margin-top: 5px;">${obj.description}</p>
            ${actionsHtml}
        `;

        return card;
    }

    renderList(objs) {
        this.#cardsContainer.innerHTML = ''; 
        
        if (objs.length === 0) {
            this.#cardsContainer.innerHTML = '<p>Пожеланий пока нет.</p>';
            return;
        }

        objs.forEach(obj => {
            const card = this.renderCard(obj);
            this.#cardsContainer.appendChild(card);
        });
    }
}
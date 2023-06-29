import EmployersListItem from '../employers-list-item/employers-list-item';
import './employers-list.css';
const EmployersList = ({data, onDelete}) => { //в компонент приходит пропс Дата это массив имитирующий базу данных

    const elements = data.map( (item, i) => { //перебираем массив
        const {id, ...itemProps} = item; //деструктуризация так называемая по остачному принципу мы достаем из обьекта свойство id а остальные свойства кидаем в itemProps
        return ( //возвращаем из перебора что каждому компоненту EmployersListItem будет подставлено item.name и item.salary
            <EmployersListItem 
            key = {id} 
            {...itemProps}
            onDelete ={() => onDelete(id)}/> // с помощью спреад оператора мы разворачиваем в последующем код и будет автоматически подставляться item.name и item.sala
        )
    });
 
    return (
        <ul className="app-list list-group">
            {elements}

        </ul>
    )
};


export default EmployersList;
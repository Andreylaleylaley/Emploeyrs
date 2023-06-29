import { Component } from 'react'; //первыми строчками идет импорт базовых вещей и компонентов из реакта

//второй частью импортируем различные компоненты приложения
import AppFilter from '../app-filter/app-filter';
import AppInfo from '../app-info/app-info';
import SearchPanel from '../search-panel/search-panel';
import EmployersList from '../employers-list/employers-list';
import EmployersAddForm from '../employers-add-form/emploers-add-form';

//третьей частью импортируем стили картинки и т.д.
import './app.css';


class App extends Component () {
    constructor(props){
        super(props);
        this.state = {
            data : [ //имитируем базу данных
                {name: "John", salary: 1000 , increase: true, id: 1},
                {name: "Andrew", salary: 1500, increase: false, id: 2},
                {name: "Lilli", salary: 800, increase: true , id: 3},
                ]
        }

    }

    deleteItem = (id) => { // этот метод который лежит на самом верхнем уровне передается аж до самого нижнего уровня в emploers-list-item
        this.setState(({data}) => {
            const index = data.findIndex( elem => elem.id === id )//нам нужно найти индекс удаляемого обьекта поэтому пишем метод массива findIndex этот метод принимает в себя колбэк функцию которая запускатся
            // и если эта функция вернет true то из этого метода будет возвращен номер элемента на котором сработала эта функция
            //и так мы тут пишем в колбэке елемент(каждый перебираемый обьект в массиве) сравниваем с id который идет у нас аргументом в методе deleteItem
            // console.log(index)
        })
    }

    render(){
 
        return (
            <div className = "app">
                <AppInfo/>
    
                <div className="search-panel">
                    <SearchPanel/>
                    <AppFilter/>
                </div>
    
                <EmployersList 
                data = {this.state.data}
                onDelete = {this.deleteItem}/>
                <EmployersAddForm/>
            </div>
        );
    }

}


export default App;
import './employers-list-item.css'
import { Component } from 'react';

class EmployersListItem  extends Component {
    constructor(props){
        super(props); //super Нужен если мы наследуемся от какого либо класса
        this.state = {
            increase: false,
            like: false
        }

    }


    onIncrease = () => {
        this.setState(({increase}) => ({ //пишем именно ( ( {increase})) так много скобок потому что внутренние это функция которая возвращает из себя increase определенного значения и пишем так потому что мы зависимы от предыдущего значения
            increase: !increase //внутри обьекта мы устанавливаем новое свойство increase которое будет противоположным предыдущему
        })) // тут мы четко должны отталкиваться от предыдущего результата
    }
//итак что тут происходит вся эта конструкция это колбэк колбэк в себя принимает один аргумент(это стейт) для того чтобы не писать потом state.increase очень часто берут и деструктуризируют
//как тут {increase} прямо в аргументах

 
addNewClass = () => {
    this.setState(({like}) => ({
        like : !like
    }))

    
}











    render(){
        let classNames = "list-group-item d-flex justify-content-between";
        let {name, salary, onDelete} = this.props; //именно this.props 
        let increase = this.state.increase; //определяем increase не через пропсы а через state
        let like = this.state.like; //инициализируем переменную like
        if(increase) { 
         classNames += " increase"; //ставим пробел чтобы классы не сложилист в одну большую строчку
        }
        if(like){//условие для лайк если тру то прибавляем к переменной classNames класс Like
            classNames += " like";
        }
         return (
             <li className= {classNames}>
                 <span className="list-group-item-label " onClick = {this.addNewClass}>{name}</span>
                 <input type="text" className = "list-group-item-input" defaultValue = {salary + '$'} />
                 <div className="d-flex justify-content-center align-items-center">
                     <button type = "button"
                     className = "btn-cookie btn-sm" onClick = {this.onIncrease}>
                         <i className ="fas fa-cookie"></i>
                     </button>
                     <button type = "button"
                        className = "btn-trash btn-sm" 
                         onClick= {onDelete }>
                         <i className ="fas fa-trash"></i>
                     </button>
                     <i className =" fas fa-star"></i>
                 </div>
             </li>
         )
     };
    
    };

export default EmployersListItem;
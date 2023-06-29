import './employers-add-form.css'
import { Component } from 'react';

class EmployersAddForm extends Component  {
constructor(props) {
    super(props);
    this.state = {
        name: '',
        salary: ''
    }
}

onValueChange = (e) => {
    this.setState({ //здесь мы раскрываем обычный обьект потому что мы не привязаны к предыдущему значению
        [e.target.name] : e.target.value //в ES6 синтаксисе когда свойство составное (то есть мы пытаемся достучаться до глубокого свойства) применяется [object.prop.value]
    })
}




render() {
    const {name, salary} = this.state; //деструктурием значения из стэйта 
    return (
        <div className="app-add-form">
        <h3>Добавьте нового сотрудника</h3>
        <form
            className="add-form d-flex">
            <input type="text"
                className="form-control new-post-label"
                placeholder="Как его зовут?"
                name = "name"
                value={name} //атрибут value является обязательным для того чтобы react компонент рендерил форму и контролировал ее поведение в ответ на пользовательский ввод
                 onChange={this.onValueChange}/>
            <input type="number"
                className="form-control new-post-label"
                placeholder="З/П в $?"
                name = "salary" //атрибут value является обязательным для того чтобы react компонент рендерил форму и контролировал ее поведение в ответ на пользовательский ввод
                value={salary}
                onChange={this.onValueChange} />
    
            <button type="submit"
                    className="btn btn-outline-light">Добавить</button>
        </form>
    </div>
    )}

}


export  default EmployersAddForm;
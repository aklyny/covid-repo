import React,{Component} from 'react';
import style from './app.module.css'
import {Cards,Chart,CountryPicker} from './components';
import {fetchData} from './api';

class App extends Component{
    state = {
        data:{},
        country:''
    }
    async componentDidMount(){
    const fetchedData = await fetchData();
    this.setState({
        data:fetchedData
    })
}
handleCountryChange = async (country) => {
    const data = await fetchData(country);

    this.setState({ data, country: country });
  }
    render(){
        const {data,country} = this.state;
        return(
            <div className={style.container}>
               <Cards data = {data}/>
               <CountryPicker handleCountryChange={this.handleCountryChange} />
               <Chart data={data} country={country} />
            </div>
        )
    }
}

export default App;

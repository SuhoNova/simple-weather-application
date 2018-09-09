import * as React from 'react';
import './App.css';
import SearchBar from './components/SearchBar';
import SearchResults from './components/SearchResults';


export default class App extends React.Component<any,any> {
  constructor(props: any){
    super(props);

    this.state = {
      searchLocation: '',
      searchResults: [],
      loader: false
    }
    this.onChangeLocation = this.onChangeLocation.bind(this);
    this.setLoader = this.setLoader.bind(this);
  }

  public render() {
    return (
      <div className="container-fluid">
        <SearchBar onChangeLocation={this.onChangeLocation} setLoader={this.setLoader} />
        <SearchResults searchResults={this.state.searchResults} loader={this.state.loader} />
        
      </div>
    );
  }

  public onChangeLocation (userInputLocation: any){
    this.setState({
      inputLocation: userInputLocation
    });
    const url = "https://api.openweathermap.org/data/2.5/weather?q=" + userInputLocation +"&APPID=e58fc0220c24174198aa0aea7b0de09a"
    // fetch and update results
    fetch(url, {
      method: 'GET'
    })
    .then((response : any) => {
      if (!response.ok) {
        throw new Error(response.status);
      } else {
        return response.json();
      }
    }).then((responseData : any) => {
        // console.log(responseData);
        this.setState({searchResults: responseData});
        this.setLoader(false);
      }
    ).catch(error=>{
      alert("API broke OR Search Input is invalid!");
      this.setLoader(false);
    });
  }

  public setLoader(currentState:any){
    this.setState({loader:currentState});
    // console.log(this.state.loader);
  }
}
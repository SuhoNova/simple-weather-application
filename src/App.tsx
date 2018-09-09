import * as React from 'react';
import './App.css';
import SearchBar from './components/SearchBar';
import SearchResults from './components/SearchResults';

export default class App extends React.Component<any,any> {
  constructor(props: any){
    super(props);

    this.state = {
      searchLocation: '',
      searchResults: []
    }
    this.onChangeLocation = this.onChangeLocation.bind(this);
  }

  public render() {
    return (
      <div className="container-fluid">
        <SearchBar onChangeLocation={this.onChangeLocation} />
        <SearchResults searchResults={this.state.searchResults} />
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
        alert("The API is not working or the searched location is invalid!");
      } else {
        return response.json();
      }
    }).then((responseData : any) => {
        // console.log(responseData);
        this.setState({searchResults: responseData});
      }
    );
  }
}
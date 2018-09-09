import * as React from "react";

export default class SearchBar extends React.Component<any,any> {
    public constructor(props:any){
        super(props);
        this.state = {input: ""};
        this.onChangeLocation = this.onChangeLocation.bind(this);
        this.handleTextInputChange = this.handleTextInputChange.bind(this);
    }

    public onChangeLocation(){
        // console.log("InputValue: " + this.state.input);
        this.props.onChangeLocation(this.state.input);
    }

    public handleTextInputChange(e:any){
        const inputValue = e.target.value;
        // console.log("TextInput Changed: " + inputValue);
        this.setState({input: inputValue});
    }

    public render() {
        return (
            <div className="centreText">
                <label>
                    Search for a city's weather: &nbsp;
                    <input name="inputLocation" placeholder="Search Location" onChange={this.handleTextInputChange}/>
                </label>
                <button onClick={this.onChangeLocation}>Search</button>
            </div>
        );
    }
}
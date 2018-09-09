import * as React from "react";

export default class SearchResults extends React.Component<any, any> {

    public render() {
        const searchResults = this.props.searchResults;
        // console.log("Results: " + searchResults);
        return (
            <div className="centreText">
                {(searchResults!==undefined && searchResults!==null && searchResults.length!==0 ?
                <div>
                    <h2>Location: {searchResults.name}, {searchResults.sys.country}</h2>
                    <h3>Weather: {searchResults.weather[0].main}</h3>
                    <p>Weather Description: {searchResults.weather[0].description}</p>
                </div>
                : <div>
                    <h2>Search Location to get weather</h2>
                </div>)}
            </div>
        );
    }
}
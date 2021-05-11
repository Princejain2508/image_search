import React from 'react';

class SearchBar extends React.Component {

    state = { text: '' };

    componentDidMount = () =>{
        this.props.onSubmit("need for speed");
    }

    onInputChange = (e) => {
        console.log(e.target.value);
        this.setState({ text: e.target.value });
    }

    onSubmitForm = (e) => {
        e.preventDefault();
        //console.log(this.state.text);
        this.props.onSubmit(this.state.text);
    }

    render() {
        return (
            <div className="ui segment">
                <form className="ui form" onSubmit={this.onSubmitForm}>
                    <div className="field">
                        <label>Image Search</label>
                        <input type="text"
                            value={this.state.text}
                            onChange={this.onInputChange}
                        />
                    </div>
                </form>
            </div>
        );
    }
}

export default SearchBar;
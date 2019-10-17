import React from 'react';
interface IGenderLabel{
    male?:  string;
    female?:   string;
}
interface IGenderState{    
    isFemale?: boolean;
}
export class Gender extends React.Component<IGenderLabel> {
    state:IGenderState = { isFemale: true }

    onChange = () => {
        this.setState({ isFemale: !this.state.isFemale });
    }

    render() {
        return (
            <label>
                <input
                    type="checkbox"
                    checked={!this.state.isFemale}
                    onChange={this.onChange}
                />
                {this.state.isFemale ? this.props.female : this.props.male}
            </label>
        );
    }
}
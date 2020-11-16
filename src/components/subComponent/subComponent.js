import React from 'react';
import ReactDOM from 'react-dom';
import {Form, Button, Empty} from 'antd';
import PropTypes from 'prop-types';
import {bindAll, kebabCase} from 'lodash';

class SubComponent extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            user: 'Amonaval'
        }
        bindAll(this, ['fetchInitData']);
    }


    componentDidMount() {
       console.log('Component Did Mount')
    }

    fetchInitData() {
        this.props.fetchInitData({user: this.state.user});
    }

    render() {
        const {initData = {}} = this.props;

        return (
            <div className="container">
                <h2>Fetch Git profile info</h2>
                <input value={this.state.user} onChange={(e) => this.setState({user: e.target.value})}></input>
                <button onClick={this.fetchInitData}>Fetch Data</button>

                {Object.keys(initData).length > 0 && <div>
                    <div>Your git hub name: {initData.name} </div>
                    <div>Your public repos: {initData.public_repos} </div>
                    <div>Your followers: {initData.followers} </div>
                </div>}
            </div>
        );
    }
}

SubComponent.propTypes = {
    fetchInitData:PropTypes.func.isRequired,
    initData: PropTypes.object
};

export default SubComponent;
